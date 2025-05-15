using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PortfolioApi.Data;
using System;

namespace PortfolioApi.Extensions
{
    // Azure Best Practice: Use static extension methods for service registration
    public static class ServiceCollectionExtensions 
    {
        // Azure Best Practice: Group related services into extension methods
        public static IServiceCollection AddAzureSqlServices(
            this IServiceCollection services, 
            IConfiguration configuration,
            bool isProduction)
        {
            // Azure Best Practice: Get environment-specific connection string
            var connectionStringName = isProduction ? "AzureSqlConnection" : "DefaultConnection";
            var connectionString = configuration.GetConnectionString(connectionStringName)
                ?? throw new InvalidOperationException($"Connection string '{connectionStringName}' not found");
                
            // Azure Best Practice: Register services with proper DI lifetime
            services.AddSingleton<ConnectionPoolManager>(provider => 
                new ConnectionPoolManager(
                    provider.GetRequiredService<ILogger<ConnectionPoolManager>>(),
                    connectionString,
                    isProduction));
                    
            // Azure Best Practice: Return services for method chaining
            return services;
        }
    }
}