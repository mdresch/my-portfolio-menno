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
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using PortfolioApi.Extensions;
using PortfolioApi.Monitoring;
using PortfolioApi.Configuration;

// Azure Best Practice: Keep Program.cs as the only file with top-level statements
var builder = WebApplication.CreateBuilder(args);

// Add service defaults for Azure best practices
builder.AddServiceDefaults();

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
    options.UseSqlServer(
        builder.Configuration.GetConnectionString(
            builder.Environment.IsProduction() ? "AzureSqlConnection" : "DefaultConnection"
        ) ?? throw new InvalidOperationException("Connection string not found")
    )
);

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
try
{
    using (var scope = app.Services.CreateScope())
    {
        var env = app.Environment.EnvironmentName;
        var logger = app.Services.GetRequiredService<ILogger<Program>>();
        logger.LogInformation("Seeding database in {Environment} environment", env);
        
        // Get the context directly from the service provider
        var context = scope.ServiceProvider.GetRequiredService<PortfolioContext>();
        
        // Dynamically load and call the async method
        var dbSeederType = Type.GetType("api.ApiService.Data.DbSeederRunner, api.ApiService");
        var seedMethod = dbSeederType?.GetMethod("SeedAsync");
        var task = seedMethod?.Invoke(null, new object[] { scope.ServiceProvider, env }) as Task;
        if (task != null)
        {
            await task;
        }
        else
        {
            logger.LogWarning("DbSeederRunner.SeedAsync method not found. Skipping database seeding.");
        }
    }
}
catch (Exception ex)
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while seeding the database. Application will continue without seeding.");
}

app.Run();
