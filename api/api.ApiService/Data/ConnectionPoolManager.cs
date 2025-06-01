using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace api.ApiService.Data
{
    /// <summary>
    /// Azure Best Practice: Manages connection pooling for optimal Azure SQL Database performance
    /// </summary>
    public class ConnectionPoolManager
    {
        private readonly ILogger<ConnectionPoolManager> _logger;
        private readonly string _connectionString;
        private static int _currentConnections = 0;
        private readonly bool _isProduction;
        
        /// <summary>
        /// Azure Best Practice: Configure connection manager with properly optimized settings
        /// </summary>
        public ConnectionPoolManager(ILogger<ConnectionPoolManager> logger, string connectionString, bool isProduction = false)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _isProduction = isProduction;
            
            // Azure Best Practice: Use SqlConnectionStringBuilder for secure connection string management
            var builder = new SqlConnectionStringBuilder(connectionString)
            {
                // Azure Best Practice: Configure optimal pool sizes based on environment
                // Small pool for dev, larger for production
                MinPoolSize = isProduction ? 10 : 5,
                MaxPoolSize = isProduction ? 100 : 50,
                
                // Azure Best Practice: Configure connection resilience
                ConnectRetryCount = 3,
                ConnectRetryInterval = 10,
                ConnectTimeout = 30,
                
                // Azure Best Practice: Set application name for easier identification in Azure monitoring
                ApplicationName = "PortfolioAPI",
                
                // Azure Best Practice: Configure optimal performance settings
                MultipleActiveResultSets = true, // Enable MARS for concurrent operations
                
                // Azure Best Practice: Security configuration
                PersistSecurityInfo = false, // Don't persist sensitive connection info
                Encrypt = true              // Always encrypt Azure SQL connections
            };
            
            _connectionString = builder.ConnectionString;
            
            _logger.LogInformation(
                "Azure SQL connection pool configured with MinPoolSize={MinSize}, MaxPoolSize={MaxSize}",
                builder.MinPoolSize, 
                builder.MaxPoolSize);
        }
        
        /// <summary>
        /// Azure Best Practice: Pre-warm connection pool for better initial performance
        /// </summary>
        public async Task WarmupConnectionPoolAsync(int connectionCount = 5)
        {
            // Azure Best Practice: Adjust connection count based on environment
            int warmupCount = _isProduction ? Math.Max(5, connectionCount) : connectionCount;
            
            _logger.LogInformation("Warming up Azure SQL connection pool with {Count} connections", warmupCount);
            
            var tasks = new List<Task>(warmupCount);
            for (int i = 0; i < warmupCount; i++)
            {
                tasks.Add(OpenAndCloseConnectionAsync());
            }
            
            await Task.WhenAll(tasks);
            _logger.LogInformation("Azure SQL connection pool warmup completed successfully");
        }
        
        /// <summary>
        /// Azure Best Practice: Properly handle connection lifecycle
        /// </summary>
        private async Task OpenAndCloseConnectionAsync()
        {
            Interlocked.Increment(ref _currentConnections);
            try
            {
                // Azure Best Practice: Use using statements for proper resource disposal
                using (var connection = new SqlConnection(_connectionString))
                {
                    // Azure Best Practice: Use async methods for better scalability
                    await connection.OpenAsync();
                    
                    // Azure Best Practice: Execute a simple command to validate the connection
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "SELECT 1";
                        await command.ExecuteScalarAsync();
                    }
                    
                    // Brief delay to ensure the connection is properly initialized in the pool
                    await Task.Delay(100);
                }
            }
            catch (SqlException ex)
            {
                // Azure Best Practice: Use structured logging for Azure Monitor integration
                _logger.LogError(ex, 
                    "Azure SQL connection error {ErrorCode}: {ErrorMessage}", 
                    ex.Number, 
                    ex.Message);
                
                // Azure Best Practice: Handle Azure SQL specific error codes
                if (IsTransientSqlError(ex.Number))
                {
                    _logger.LogWarning("Transient Azure SQL error detected: {ErrorCode}", ex.Number);
                }
                else if (IsCriticalSqlError(ex.Number))
                {
                    _logger.LogCritical("Critical Azure SQL connection failure: {Error}", ex.Message);
                }
                
                throw;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error establishing Azure SQL connection: {Message}", ex.Message);
                throw;
            }
            finally
            {
                Interlocked.Decrement(ref _currentConnections);
            }
        }
        
        /// <summary>
        /// Azure Best Practice: Identify transient SQL errors for retry policies
        /// </summary>
        private bool IsTransientSqlError(int errorCode)
        {
            // Azure Best Practice: List of common Azure SQL transient error codes
            int[] transientErrors = new[] {
                4060,  // Cannot open database
                40197, // The service has encountered an error processing your request
                40501, // The service is busy
                40613, // Database unavailable
                49918, // Cannot process request
                1205,  // Deadlock victim
                40143, // Connection couldn't be initialized
                233,   // Connection doesn't exist
                10928, // Resource limit
                10929, // Resource governor
                10053, // Transport-level error
                10054, // Connection reset by peer
                10060  // Connection timeout
            };
            
            return Array.IndexOf(transientErrors, errorCode) >= 0;
        }
        
        /// <summary>
        /// Azure Best Practice: Identify critical SQL errors that require immediate attention
        /// </summary>
        private bool IsCriticalSqlError(int errorCode)
        {
            return errorCode == 40613 // Database unavailable
                || errorCode == 40501 // Service busy
                || errorCode == 40544 // Database at capacity limit
                || errorCode == 40549 // Session terminated due to excessive memory usage
                || errorCode == 10928 // Resource ID limit reached
                || errorCode == 4060;  // Cannot open database
        }
        
        /// <summary>
        /// Azure Best Practice: Get pool statistics for monitoring
        /// </summary>
        public (int ActiveConnections, int IdleConnections, int TotalConnections) GetPoolStatistics()
        {
            // In a production Azure implementation, you'd use SqlConnection.GetOpenConnections()
            // and other metrics from SQL DMVs
            return (_currentConnections, 0, _currentConnections);
        }
    }
}