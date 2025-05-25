using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PortfolioApi.Data;
using System;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using HealthChecks.UI.Client;
using api.ApiService.Data;

namespace PortfolioApi.Configuration
{
    /// <summary>
    /// Azure Best Practice: Organize configuration code into classes
    /// </summary>
    public static class StartupConfiguration
    {
        /// <summary>
        /// Azure Best Practice: Configure services with extension methods
        /// </summary>
        public static void ConfigureServices(WebApplicationBuilder builder)
        {
            // Your existing services configuration
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            
            // Azure Best Practice: Use environment-specific configuration
            string connectionStringName = builder.Environment.IsProduction() 
                ? "AzureSqlConnection" 
                : "DefaultConnection";
                
            var connectionString = builder.Configuration.GetConnectionString(connectionStringName);
            
            // Register Azure SQL health checks
            builder.Services.AddAzureSqlHealthChecks();
        }
        
        /// <summary>
        /// Azure Best Practice: Configure request pipeline with named method
        /// </summary>
        public static void ConfigureApp(WebApplication app)
        {
            // Your existing app configuration
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            // In app configuration:
            app.MapHealthChecks("/health/database", new HealthCheckOptions
            {
                Predicate = check => check.Tags.Contains("ready"),
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });

            // Use Azure SQL health checks
            app.UseAzureSqlHealthChecks();
        }
    }

    /// <summary>
    /// Azure Best Practice: Configure Azure SQL connection resilience and monitoring
    /// </summary>
    public static class AzureConnectionResilience
    {
        /// <summary>
        /// Azure Best Practice: Register health checks for Azure SQL Database connection monitoring
        /// </summary>
        public static IServiceCollection AddAzureSqlHealthChecks(this IServiceCollection services)
        {
            // Azure Best Practice: Configure health checks for database connectivity
            services.AddHealthChecks()
                .AddDbContextCheck<PortfolioContext>("database", 
                    tags: new[] { "ready", "sql" },
                    customTestQuery: async (context, cancellationToken) =>
                    {
                        // Azure Best Practice: Use a lightweight query to test connection
                        var canConnect = await context.Database.CanConnectAsync(cancellationToken);
                        return canConnect;
                    });

            // Azure Best Practice: Return services for method chaining
            return services;
        }

        /// <summary>
        /// Azure Best Practice: Configure health check endpoints for Azure monitoring integration
        /// </summary>
        public static IApplicationBuilder UseAzureSqlHealthChecks(this IApplicationBuilder app)
        {
            // Azure Best Practice: Configure health check endpoints with appropriate response format
            app.UseHealthChecks("/health", new HealthCheckOptions
            {
                // Azure Best Practice: Simple endpoint for basic liveness checks
                Predicate = _ => true,
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });

            // Azure Best Practice: SQL-specific health check endpoint for detailed monitoring
            app.UseHealthChecks("/health/database", new HealthCheckOptions
            {
                // Azure Best Practice: Filter checks by tag for specific resource monitoring
                Predicate = check => check.Tags.Contains("sql"),
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });

            // Azure Best Practice: Return app for method chaining
            return app;
        }
    }
}