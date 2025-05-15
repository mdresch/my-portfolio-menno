using Microsoft.Extensions.Logging;
using PortfolioApi.Data;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace PortfolioApi.Monitoring
{
    /// <summary>
    /// Azure Best Practice: Monitor database performance with structured logging
    /// </summary>
    public class AzurePerformanceMonitor
    {
        private readonly ILogger<AzurePerformanceMonitor> _logger;
        
        public AzurePerformanceMonitor(ILogger<AzurePerformanceMonitor> logger)
        {
            _logger = logger;
        }
        
        /// <summary>
        /// Azure Best Practice: Measure execution time of database operations
        /// </summary>
        public async Task<T> MeasureExecutionAsync<T>(Func<Task<T>> databaseOperation, string operationName)
        {
            // Azure Best Practice: Use high-precision timing for Azure SQL metrics
            var stopwatch = Stopwatch.StartNew();
            try
            {
                // Azure Best Practice: Execute the operation within the measurement
                return await databaseOperation();
            }
            finally
            {
                stopwatch.Stop();
                
                // Azure Best Practice: Only log slow queries to avoid excessive logging volume
                if (stopwatch.ElapsedMilliseconds > 100)
                {
                    // Azure Best Practice: Use structured logging for Azure Monitor integration
                    _logger.LogWarning("Slow database operation: {Operation} took {Duration}ms", 
                        operationName, stopwatch.ElapsedMilliseconds);
                }
            }
        }
        
        /// <summary>
        /// Azure Best Practice: Track long-running transactions for Azure SQL optimization
        /// </summary>
        public void TrackLongRunningTransaction(string operationType, int affectedRows, long durationMs)
        {
            // Azure Best Practice: Log telemetry data with operation context
            _logger.LogInformation(
                "Database operation {OperationType} affected {RowCount} rows in {Duration}ms",
                operationType,
                affectedRows,
                durationMs);
        }
    }
}