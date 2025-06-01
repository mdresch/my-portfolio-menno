using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using api.ApiService.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace api.ApiService.Monitoring
{
    /// <summary>
    /// Azure Best Practice: Background service for monitoring Azure SQL connection pool health
    /// </summary>
    public class ConnectionPoolMonitoringService : BackgroundService
    {
        private readonly ILogger<ConnectionPoolMonitoringService> _logger;
        private readonly ConnectionPoolManager _poolManager;
        
        public ConnectionPoolMonitoringService(
            ILogger<ConnectionPoolMonitoringService> logger,
            ConnectionPoolManager poolManager)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _poolManager = poolManager ?? throw new ArgumentNullException(nameof(poolManager));
        }
        
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            // Azure Best Practice: Initial delay to let the application start fully
            await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
            
            _logger.LogInformation("Azure SQL connection pool monitoring started");
            
            // Azure Best Practice: Periodic monitoring of connection pool health
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    // Azure Best Practice: Get connection pool statistics
                    var stats = _poolManager.GetPoolStatistics();
                    
                    // Azure Best Practice: Log metrics for Azure Monitor consumption using structured logging
                    _logger.LogInformation(
                        "Azure SQL connection pool stats: Active={Active}, Idle={Idle}, Total={Total}",
                        stats.ActiveConnections,
                        stats.IdleConnections,
                        stats.TotalConnections);
                        
                    // Azure Best Practice: Alert on connection pool issues
                    if (stats.TotalConnections > 90) // approaching max pool size
                    {
                        _logger.LogWarning(
                            "Azure SQL connection pool approaching capacity: {Count}/100 connections",
                            stats.TotalConnections);
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error monitoring Azure SQL connection pool");
                }
                
                // Azure Best Practice: Check at appropriate intervals based on pool usage
                await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
            }
        }
        
        public override Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Azure SQL connection pool monitoring stopped");
            return base.StopAsync(cancellationToken);
        }
    }
}