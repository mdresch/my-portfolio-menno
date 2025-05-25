using Microsoft.Extensions.Logging;
using PortfolioApi.Data;
using System;
using System.Threading.Tasks;

namespace PortfolioApi.Data
{
    /// <summary>
    /// Azure Best Practice: Monitor SQL connection health for Azure SQL
    /// </summary>
    public class SqlConnectionMonitor
    {
        private readonly PortfolioContext _context;
        private readonly ILogger<SqlConnectionMonitor> _logger;
        
        public SqlConnectionMonitor(PortfolioContext context, ILogger<SqlConnectionMonitor> logger)
        {
            _context = context;
            _logger = logger;
        }
        
        /// <summary>
        /// Azure Best Practice: Test database connection and log performance
        /// </summary>
        public async Task<bool> CheckConnectionAsync()
        {
            try
            {
                // Azure Best Practice: Use async operations for Azure SQL
                var canConnect = await _context.Database.CanConnectAsync();
                
                if (!canConnect)
                {
                    _logger.LogWarning("Cannot connect to Azure SQL Database");
                }
                
                return canConnect;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error connecting to Azure SQL Database");
                return false;
            }
        }
    }
}