using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using PortfolioApi.Models;
using PortfolioApi.Data;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Logging;
using PortfolioApi.Extensions;
using PortfolioApi.Monitoring;
using PortfolioApi.Configuration;

// Azure Best Practice: Keep Program.cs as the only file with top-level statements
var builder = WebApplication.CreateBuilder(args);

// Azure Best Practice: Use organized configuration methods
StartupConfiguration.ConfigureServices(builder);

// Add CORS policy for local development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:3000",
            "https://localhost:3000",
            "https://my-portfolio-menno.vercel.app"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

// Register ConnectionPoolManager for DI
builder.Services.AddSingleton<ConnectionPoolManager>(provider =>
    new ConnectionPoolManager(
        provider.GetRequiredService<ILogger<ConnectionPoolManager>>(),
        builder.Configuration.GetConnectionString(
            builder.Environment.IsProduction() ? "AzureSqlConnection" : "DefaultConnection"
        ) ?? throw new InvalidOperationException("Connection string not found"),
        builder.Environment.IsProduction()
    )
);

// Register DbContext for DI
builder.Services.AddDbContext<PortfolioContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AzureSqlConnection")));

// REMOVE this line to avoid duplicate health check registration
// builder.Services.AddAzureSqlHealthChecks();

var app = builder.Build();

// Register global exception middleware (must be before other middleware)
app.UseMiddleware<PortfolioApi.Middleware.GlobalExceptionMiddleware>();

// Use CORS policy
app.UseCors("AllowLocalFrontend");
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// Azure Best Practice: Configure the pipeline in an organized way
StartupConfiguration.ConfigureApp(app);

// Azure Best Practice: Initialize Azure SQL connection pool on startup
app.Lifetime.ApplicationStarted.Register(async () =>
{
    try
    {
        // Azure Best Practice: Use scoped service resolution
        using var scope = app.Services.CreateScope();
        var connectionManager = scope.ServiceProvider.GetRequiredService<ConnectionPoolManager>();
        if (connectionManager != null)
        {
            await connectionManager.WarmupConnectionPoolAsync();
        }
    }
    catch (Exception ex)
    {
        // Azure Best Practice: Structured logging for Azure Monitor integration
        var logger = app.Services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "Error initializing Azure SQL connection pool");
    }
});

// Azure Best Practice: Seed the database with environment-specific data at startup
using (var scope = app.Services.CreateScope())
{
    var env = app.Environment.EnvironmentName;
    PortfolioApi.Data.DbSeeder.Seed(scope.ServiceProvider, env);
}

app.Run();
