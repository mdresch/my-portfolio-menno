using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using api.ApiService.Data;
using api.ApiService.Models;
using System;
using System.Threading.Tasks;

namespace api.ApiService.Data
{
    /// <summary>
    /// Helper for resilient Azure SQL Database operations
    /// </summary>
    public class AzureSqlResilienceHelper
    {
        private readonly ILogger<AzureSqlResilienceHelper> _logger;
        private readonly PortfolioContext _context;

        public AzureSqlResilienceHelper(ILogger<AzureSqlResilienceHelper> logger, PortfolioContext context)
        {
            _logger = logger;
            _context = context;
        }

        /// <summary>
        /// Execute a database operation with retry policy for Azure SQL
        /// </summary>
        public async Task<T> ExecuteWithResilienceAsync<T>(Func<Task<T>> operation, string operationName)
        {
            try
            {
                // Azure Best Practice: Let EF Core's built-in retry policy handle retries
                return await operation();
            }
            catch (SqlException ex) when (IsTransientError(ex))
            {
                _logger.LogWarning(ex, "Transient SQL error occurred during {OperationName}. Error code: {ErrorCode}", 
                    operationName, ex.Number);
                
                // Azure Best Practice: Additional handling for specific Azure SQL errors
                switch (ex.Number)
                {
                    case 1205: // Deadlock victim
                        _logger.LogWarning("Transaction was deadlocked. Will retry operation.");
                        break;
                    case 40613: // Database unavailable
                        _logger.LogWarning("Azure SQL Database unavailable. Waiting before retry.");
                        await Task.Delay(TimeSpan.FromSeconds(5)); // Wait before retry
                        break;
                    case 10928: // Resource limit
                        _logger.LogWarning("Resource limit reached on Azure SQL. Consider scaling up your database tier.");
                        break;
                }
                
                // Azure Best Practice: Final retry attempt
                return await operation();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error executing {OperationName}", operationName);
                throw;
            }
        }

        /// <summary>
        /// Checks if an SQL exception is transient according to Azure best practices
        /// </summary>
        private bool IsTransientError(SqlException ex)
        {
            // Azure Best Practice: Identify common transient error codes for Azure SQL
            int[] transientErrorCodes = new[]
            {
                4060, // Cannot open database
                40197, // The service has encountered an error processing your request
                40501, // The service is currently busy
                40613, // Database unavailable
                49918, // Cannot process request
                1205,  // Deadlock victim
                40143, // Connection couldn't be initialized
                233,   // Connection doesn't exist
                10928, // Resource limit
                10929, // Resource governor
                40540  // Service in paused state
            };
            
            return Array.IndexOf(transientErrorCodes, ex.Number) >= 0;
        }
    }
}