using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using api.ApiService.Data; // Add this for PortfolioContext
using System;

namespace api.ApiService.Extensions
{
    /// <summary>
    /// Azure Best Practice: Separate service registration extensions for better organization
    /// </summary>
    public static class ServiceExtensions
    {
        /// <summary>
        /// Adds PortfolioContext with Azure SQL best practices for resilient connections
        /// </summary>
        public static IServiceCollection AddAzureSqlDatabase(this IServiceCollection services, IConfiguration configuration, bool isProduction)
        {
            // Azure Best Practice: Validate connection string inputs
            string connectionStringName = isProduction ? "AzureSqlConnection" : "DefaultConnection";
            string connectionString = configuration.GetConnectionString(connectionStringName)
                ?? throw new InvalidOperationException(
                    $"Azure SQL connection string '{connectionStringName}' not found. " +
                    "Please check your configuration files and Azure Key Vault settings.");
            
            // Azure Best Practice: Integrate Application Insights for query tracking
            services.AddApplicationInsightsTelemetry();
            
            services.AddDbContext<PortfolioContext>(options =>
            {
                options.UseSqlServer(connectionString, sqlOptions =>
                {
                    // Azure Best Practice: Configure resilient connection with exponential backoff
                    sqlOptions.EnableRetryOnFailure(
                        maxRetryCount: 5,
                        maxRetryDelay: TimeSpan.FromSeconds(30),
                        errorNumbersToAdd: new[] { 
                            // Include common Azure SQL transient error codes
                            4060, // Cannot open database
                            40197, // The service has encountered an error processing your request
                            40501, // The service is currently busy
                            40613, // Database unavailable
                            49918, // Cannot process request
                            1205   // Deadlock victim
                        });
                        
                    // Azure Best Practice: Set appropriate command timeout
                    sqlOptions.CommandTimeout(30);
                    
                    // Azure Best Practice: Enable connection resiliency
                    sqlOptions.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                });
                
                // FIXED: Moved these methods to the correct DbContextOptionsBuilder object
                // Azure Best Practice: Only enable diagnostic features in non-production environments
                if (!isProduction)
                {
                    // Azure Best Practice: Enable detailed error information for development
                    options.EnableDetailedErrors();
                    
                    // Azure Best Practice: Enable parameter logging for troubleshooting
                    options.EnableSensitiveDataLogging();
                }
            });
            
            return services;
        }

        /// <summary>
        /// Configure SQL Server following Azure best practices for resilient connections
        /// </summary>
        public static void ConfigureSqlContext(this IServiceCollection services, IConfiguration configuration)
        {
            // Azure Best Practice: Get connection string based on environment
            string connectionStringName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production"
                ? "AzureSqlConnection"
                : "DefaultConnection";

            var connectionString = configuration.GetConnectionString(connectionStringName)
                ?? throw new InvalidOperationException(
                    $"Database connection string '{connectionStringName}' not found. " +
                    "Please check your configuration files and Azure Key Vault settings.");

            services.AddDbContext<PortfolioContext>(options => 
            {
                // Azure Best Practice: Configure Azure SQL with resilient connection
                options.UseSqlServer(connectionString, sqlOptions => 
                {
                    // Azure Best Practice: Configure retry policy for transient failures
                    sqlOptions.EnableRetryOnFailure(
                        maxRetryCount: 5,
                        maxRetryDelay: TimeSpan.FromSeconds(30),
                        errorNumbersToAdd: null);
                        
                    // Azure Best Practice: Set command timeout for long-running operations
                    sqlOptions.CommandTimeout(60);
                    
                    // Azure Best Practice: Configure split queries for better performance
                    sqlOptions.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                });
                
                // Azure Best Practice: Only enable detailed error information in development
                if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development")
                {
                    // Azure Best Practice: Provide detailed error information for troubleshooting
                    options.EnableDetailedErrors();
                    
                    // Azure Best Practice: Log sensitive data only in development
                    options.EnableSensitiveDataLogging();
                }
            });
        }

        /// <summary>
        /// Azure Best Practice: Add Azure SQL monitoring capabilities
        /// </summary>
    }
}