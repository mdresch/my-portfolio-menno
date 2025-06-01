using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;
using api.ApiService.Models;

namespace api.ApiService.Data
{
    public static class DatabaseInitializer
    {
        /// <summary>
        /// Initialize database with proper error handling following Azure Best Practices
        /// </summary>
        public static async Task InitializeDatabaseAsync(IHost app)
        {
            using var scope = app.Services.CreateScope();
            var services = scope.ServiceProvider;
            var logger = services.GetRequiredService<ILogger<Program>>();
            
            try
            {
                var context = services.GetRequiredService<PortfolioContext>();
                
                // Azure Best Practice: Check if database exists before migrations
                bool canConnect = await context.Database.CanConnectAsync();
                
                if (!canConnect)
                {
                    logger.LogWarning("Cannot connect to database. Check connection string and firewall rules.");
                    return;
                }
                
                // Azure Best Practice: Apply pending migrations safely
                if ((await context.Database.GetPendingMigrationsAsync()).Any())
                {
                    logger.LogInformation("Applying database migrations...");
                    await context.Database.MigrateAsync();
                    logger.LogInformation("Database migrations applied successfully.");
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while initializing the database");
                
                // Azure Best Practice: Provide additional context for Azure SQL errors
                if (ex.InnerException != null && ex.InnerException.Message.Contains("firewall"))
                {
                    logger.LogError("This appears to be a firewall issue. Ensure your IP is allowed in Azure SQL firewall settings.");
                }
            }
        }
    }
}