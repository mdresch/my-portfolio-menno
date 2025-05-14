using Microsoft.Data.SqlClient;
using System;
using System.Threading.Tasks;

namespace PortfolioApi.Data
{
    public static class DatabaseHelper
    {
        /// <summary>
        /// Creates a connection to Azure SQL Database using the most appropriate
        /// authentication method based on the environment
        /// </summary>
        public static async Task<SqlConnection> CreateSecureConnectionAsync(string connectionString)
        {
            SqlConnection connection = new SqlConnection(connectionString);
            
            try
            {
                // Azure Best Practice: Test connection before returning
                await connection.OpenAsync();
                return connection;
            }
            catch (SqlException ex)
            {
                // Azure Best Practice: Handle specific Azure SQL connection errors
                switch (ex.Number)
                {
                    case 18456: // Login failed
                        throw new InvalidOperationException("Authentication failed. Verify credentials or Azure AD configuration.", ex);
                    case 40615: // Database unavailable or does not exist
                        throw new InvalidOperationException("Database unavailable. Verify database name and server status.", ex);
                    case 10928: // Resource limit reached
                        throw new InvalidOperationException("Azure SQL resource limit reached. Consider scaling up the database.", ex);
                    case 40613: // Database busy
                        throw new InvalidOperationException("Database is currently unavailable. Please try again later.", ex);
                    default:
                        throw new InvalidOperationException($"Failed to connect to database: {ex.Message}", ex);
                }
            }
        }
        
        /// <summary>
        /// Validates a connection string without exposing credentials in logs
        /// </summary>
        public static bool ValidateConnectionString(string connectionString)
        {
            try
            {
                // Azure Best Practice: Parse but don't open connection to validate format
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(connectionString);
                
                // Azure Best Practice: Verify TLS encryption is enabled
                if (!builder.Encrypt)
                {
                    throw new ArgumentException("Connection string must have Encrypt=True for Azure SQL connections");
                }
                
                return !string.IsNullOrEmpty(builder.DataSource) && 
                       !string.IsNullOrEmpty(builder.InitialCatalog);
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}