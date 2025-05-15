using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace PortfolioApi.Data
{
    /// <summary>
    /// Helper for Azure SQL Database connections following Azure best practices
    /// </summary>
    public class AzureSqlConnectionHelper
    {
        private readonly ILogger<AzureSqlConnectionHelper> _logger;

        public AzureSqlConnectionHelper(ILogger<AzureSqlConnectionHelper> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Creates a resilient connection to Azure SQL Database
        /// </summary>
        public async Task<SqlConnection> CreateConnectionAsync(string connectionString)
        {
            ValidateConnectionString(connectionString);

            var connection = new SqlConnection(connectionString);
            
            try
            {
                // Azure Best Practice: Use async operations for database connections
                await connection.OpenAsync();
                return connection;
            }
            catch (SqlException ex)
            {
                // Azure Best Practice: Log specific error information for common SQL errors
                string errorMessage = GetFriendlyErrorMessage(ex);
                _logger.LogError(ex, "Azure SQL connection error: {ErrorMessage}", errorMessage);
                
                throw new InvalidOperationException($"Failed to connect to Azure SQL Database: {errorMessage}", ex);
            }
        }

        /// <summary>
        /// Validates Azure SQL connection string format and security settings
        /// </summary>
        private void ValidateConnectionString(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                throw new ArgumentNullException(nameof(connectionString), "Connection string cannot be null or empty");
            }

            try
            {
                var builder = new SqlConnectionStringBuilder(connectionString);
                
                // Azure Best Practice: Ensure encryption is enabled for Azure SQL
                if (!builder.Encrypt)
                {
                    _logger.LogWarning("Azure SQL connection string should have Encrypt=True for security");
                }

                // Azure Best Practice: Check for secure authentication method
                if (builder.Authentication == SqlAuthenticationMethod.NotSpecified &&
                    !string.IsNullOrEmpty(builder.Password))
                {
                    _logger.LogWarning("Consider using Azure AD authentication instead of SQL authentication");
                }

                // Azure Best Practice: Don't allow trust server certificate in production
                if (builder.TrustServerCertificate)
                {
                    _logger.LogWarning("TrustServerCertificate=True should not be used in production");
                }
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Invalid connection string format", nameof(connectionString), ex);
            }
        }

        /// <summary>
        /// Get user-friendly error message based on SQL error code
        /// </summary>
        private string GetFriendlyErrorMessage(SqlException ex)
        {
            return ex.Number switch
            {
                // Common Azure SQL error codes with descriptive messages
                18456 => "Login failed. Please check your credentials.",
                4060 => "Cannot open the specified database. Verify it exists.",
                40197 => "The service has encountered an error processing your request. Please retry.",
                40501 => "The service is currently busy. Please retry after 10 seconds.",
                40613 => "Database is currently unavailable. Check Azure SQL status.",
                49918 => "Not enough resources to process request. Scale up your database or try later.",
                10928 => "Resource limit reached. You may need to scale up your Azure SQL tier.",
                10929 => "Resource governor has detected a violation. Check DTU/CPU usage.",
                233 => "Connection doesn't exist or was dropped.",
                40143 => "Connection couldn't be initialized.",
                40615 => "Database server is not valid or accessible.",
                40614 => "IP address is not authorized.",
                _ => ex.Message
            };
        }
    }
}