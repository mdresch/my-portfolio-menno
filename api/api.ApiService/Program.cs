// filepath: c:\Users\menno\Source\Repos\my-portfolio-menno\api\api.ApiService\Program.cs
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using api.ApiService.Models;
using api.ApiService.Data;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Logging;
using api.ApiService.Monitoring;

// Azure Best Practice: Keep Program.cs as the only file with top-level statements
var builder = WebApplication.CreateBuilder(args);

// Add service defaults for Azure best practices
builder.AddServiceDefaults();

// Add Authorization services
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

// Add controllers with views
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

// Register DbContext for DI with improved resiliency
builder.Services.AddDbContext<PortfolioContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString(
        builder.Environment.IsProduction() ? "AzureSqlConnection" : "DefaultConnection"
    ) ?? throw new InvalidOperationException("Connection string not found");
    
    if (builder.Environment.IsProduction())
    {
        // Use SQL Server for production with Azure SQL best practices
        options.UseSqlServer(connectionString, sqlServerOptions =>
        {
            // Enable connection resiliency for Azure SQL
            sqlServerOptions.EnableRetryOnFailure(
                maxRetryCount: 3,
                maxRetryDelay: TimeSpan.FromSeconds(5),
                errorNumbersToAdd: null);
                
            // Set command timeout for Azure SQL
            sqlServerOptions.CommandTimeout(60);
        });
        
        // Don't log sensitive data in production
        if (!builder.Environment.IsProduction())
        {
            options.EnableSensitiveDataLogging();
        }
    }
    else
    {
        // Use SQLite for development
        options.UseSqlite(connectionString);
        options.EnableSensitiveDataLogging(); // OK for development
    }
});

var app = builder.Build();

using (var migrationScope = app.Services.CreateScope())
{
    var migrationContext = migrationScope.ServiceProvider.GetRequiredService<PortfolioContext>();
    // Only reset DB when using localdev connection (avoid dropping remote Azure SQL)
    // Get connection string (default to empty to avoid null)
    var connStr = builder.Configuration.GetConnectionString(
        builder.Environment.IsProduction() ? "AzureSqlConnection" : "DefaultConnection")
        ?? string.Empty;
    if (app.Environment.IsDevelopment() && connStr.Contains("localhost", StringComparison.OrdinalIgnoreCase))
    {
        migrationContext.Database.EnsureDeleted();
    }
    migrationContext.Database.EnsureCreated();
}

// Register global exception middleware (must be before other middleware)
app.UseMiddleware<PortfolioApi.Middleware.GlobalExceptionMiddleware>();

// Use CORS policy
app.UseCors("AllowLocalFrontend");
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

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
            await connectionManager.WarmupConnectionPoolAsync(5);
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
    if (app.Environment.IsDevelopment())
    {
        // In development, make the database seeding optional - don't crash if DB isn't available
        try
        {
            using (var scope = app.Services.CreateScope())
            {
                var logger = app.Services.GetRequiredService<ILogger<Program>>();
                logger.LogInformation("Attempting to seed development database");
                
                // Get the context directly from the service provider
                var context = scope.ServiceProvider.GetRequiredService<PortfolioContext>();
                
                // Try to connect with a short timeout
                context.Database.SetCommandTimeout(TimeSpan.FromSeconds(10));
                
                if (await context.Database.CanConnectAsync())
                {
                    logger.LogInformation("Connected to development database, seeding data");
                    // Use fully qualified type name to avoid ambiguity
                    // Dynamically load and call the async method
                    var dbSeederType = Type.GetType("api.ApiService.Data.DbSeederRunner, api.ApiService");
                    var seedMethod = dbSeederType?.GetMethod("SeedAsync");
                    var task = seedMethod?.Invoke(null, new object[] { scope.ServiceProvider, "Development" }) as Task;
                    if (task != null)
                    {
                        await task;
                    }
                }
                else
                {
                    logger.LogWarning("Cannot connect to development database. Proceeding without seeding.");
                }
            }
        }
        catch (Exception ex)
        {
            // Log but don't rethrow in development
            var logger = app.Services.GetRequiredService<ILogger<Program>>();
            logger.LogWarning(ex, "Error seeding development database. Proceeding anyway.");
        }
    }
    else
    {
        // In production, the database must be available
        using (var scope = app.Services.CreateScope())
        {
            var env = app.Environment.EnvironmentName;
            var logger = app.Services.GetRequiredService<ILogger<Program>>();
            logger.LogInformation("Seeding database in {Environment} environment", env);
            
            // Get the context directly from the service provider
            var context = scope.ServiceProvider.GetRequiredService<PortfolioContext>();
            
            // In production, use a regular timeout but with retry policy (already configured)
            // Dynamically load and call the async method
            var dbSeederType = Type.GetType("api.ApiService.Data.DbSeederRunner, api.ApiService");
            var seedMethod = dbSeederType?.GetMethod("SeedAsync");
            var task = seedMethod?.Invoke(null, new object[] { scope.ServiceProvider, env }) as Task;
            if (task != null)
            {
                await task;
            }
        }
    }
}
catch (Exception ex)
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while seeding the database. Application will continue without seeding.");
}

app.Run();
