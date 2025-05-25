# Azure SQL Server Setup

This document provides comprehensive instructions for connecting your portfolio application to Azure SQL Server following Azure best practices.

## Pre-requisites

- An Azure account with active subscription
- Azure SQL Server instance created
- Azure SQL Database provisioned
- Client IP added to the Azure SQL Server firewall rules

## Connection Configuration

1. **Update Connection String**

   Use the provided script to generate a secure `appsettings.Production.json` file:

   ```powershell
   cd api/Scripts
   .\Create-Production-Settings.ps1
   ```

   Or manually edit the file with your Azure SQL Server details:

   ```json
   {
     "ConnectionStrings": {
       "AzureSqlConnection": "Server=tcp:YOUR_SERVER_NAME.database.windows.net,1433;Initial Catalog=PortfolioDb;Persist Security Info=False;User ID=YOUR_USERNAME;Password=YOUR_PASSWORD;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
     }
   }
   ```

   Replace:
   - `YOUR_SERVER_NAME` with your Azure SQL Server name
   - `YOUR_USERNAME` with your SQL Server admin username
   - `YOUR_PASSWORD` with your SQL Server admin password

2. **Test Connection**

   Run the test script to verify your connection:

   ```powershell
   cd api/Scripts
   .\Azure-Database-Manager.ps1 -Operation Test
   ```

3. **Deploy Database Schema**

   Run the deployment script to apply your database migrations:

   ```powershell
   cd api/Scripts
   .\Azure-Database-Manager.ps1 -Operation Migrate
   ```

## Using EF Core Migrations to Set Up Azure SQL Database

You can use Entity Framework Core migrations to automatically set up and update your Azure SQL Database schema. This is the recommended approach for .NET applications on Azure.

### How to Apply Migrations

**1. Generate Migrations (if needed):**

```powershell
# From the solution root or api/ directory
cd api
# Create a new migration (if you have model changes)
dotnet ef migrations add InitialCreate
```

**2. Apply Migrations Locally (Development):**

```powershell
# Applies migrations to your local development database
dotnet ef database update
```

**3. Apply Migrations to Azure SQL (Production):**

- Ensure your `appsettings.Production.json` contains the correct Azure SQL connection string.
- Set the environment variable:

```powershell
$env:ASPNETCORE_ENVIRONMENT = "Production"
```

- Run the migration command:

```powershell
# Applies migrations to your Azure SQL Database
dotnet ef database update --context PortfolioContext
```

**4. Apply Migrations in CI/CD (Recommended for Production):**

- Use a CI/CD workflow step (see example in the CI/CD Integration section above):

```yaml
- name: Update Azure SQL Database
  run: dotnet ef database update --context PortfolioContext
  env:
    ASPNETCORE_ENVIRONMENT: Production
    ConnectionStrings__AzureSqlConnection: ${{ secrets.AZURE_SQL_CONNECTION_STRING }}
```

**Tip:** You can also generate a SQL script and deploy it using Azure SQL tools if you prefer manual review or need to coordinate with a DBA.

### Summary

Entity Framework Core migrations provide a robust, automated, and repeatable way to set up and evolve your Azure SQL schema. This approach is suitable for both local development and production deployments on Azure.

## Azure SQL Best Practices

### Security Best Practices

1. **Connection String Security**
   - Never commit connection strings with real credentials to source control
   - Consider using Azure Key Vault for storing connection strings in production
   - Use Managed Identities for Azure resources when possible

2. **Firewall and Network Security**
   - Restrict access to your database by IP address
   - Consider using Private Link or VNet Service Endpoints for enhanced security
   - Regularly audit and update firewall rules

3. **Authentication and Authorization**
   - Create a dedicated database user for the application with least-privilege permissions
   - Avoid using the server admin account for application connections
   - Consider using Azure AD authentication for stronger security

   ```sql
   -- Example: Create restricted application user
   CREATE USER PortfolioAppUser WITH PASSWORD = 'StrongPassword123!';
   GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::dbo TO PortfolioAppUser;
   DENY DROP TABLE TO PortfolioAppUser;
   DENY ALTER ON SCHEMA::dbo TO PortfolioAppUser;
   ```

4. **Data Protection**
   - Enable Transparent Data Encryption (TDE) for data-at-rest encryption
   - Use Always Encrypted for sensitive columns like personal information
   - Implement row-level security where appropriate for multi-tenant data

### Performance Optimization

1. **Query Performance**
   - Create appropriate indexes based on your query patterns
   - Use the included monitoring script to identify slow queries:
     ```powershell
     .\Monitor-Azure-Database.ps1 -MetricType QueryPerformance
     ```
   - Consider using Azure SQL Query Performance Insight for ongoing optimization

2. **Connection Management**
   - Use connection pooling (already enabled in Entity Framework Core)
   - Configure appropriate connection timeouts and retry logic
   - Monitor active connections with:
     ```powershell
     .\Monitor-Azure-Database.ps1 -MetricType ConnectionCount
     ```

3. **Entity Framework Best Practices**
   - Use `.AsNoTracking()` for read-only queries
   - Enable split queries for complex includes:
     ```csharp
     context.BlogPosts
         .Include(p => p.Comments)
         .AsSplitQuery()
         .ToListAsync();
     ```
   - Consider using compiled queries for frequently executed statements

### Monitoring and Maintenance

1. **Regular Monitoring**
   - Use the provided monitoring script for database health checks:
     ```powershell
     .\Monitor-Azure-Database.ps1 -MetricType All -ExportResults
     ```
   - Set up Azure Monitor alerts for DTU/CPU usage and storage space

2. **Index Maintenance**
   - Regularly check for index fragmentation:
     ```powershell
     .\Monitor-Azure-Database.ps1 -MetricType IndexFragmentation
     ```
   - Schedule automated index maintenance during low-usage periods

3. **Query Store**
   - Enable Query Store in Azure Portal for tracking query performance over time
   - Use Query Store to identify regression after application updates

### Backup and Disaster Recovery

1. **Backup Strategy**
   - Azure SQL automatically creates backups (full, differential, and transaction logs)
   - Configure point-in-time restore options in Azure Portal
   - For critical data, consider geo-redundant backups

2. **Testing Restores**
   - Periodically test database restore functionality to verify backup integrity
   - Document the restore process for your specific database

3. **Business Continuity**
   - For production environments, consider using Azure SQL geo-replication
   - Set up failover groups for automatic failover in case of regional outages
   
### Cost Optimization

1. **Appropriate Sizing**
   - Start with a Basic or Standard tier and monitor utilization
   - Scale up only when necessary based on performance metrics
   - Consider serverless compute tier for dev/test environments with intermittent usage

2. **Reserved Capacity**
   - For stable, predictable workloads, consider using reserved capacity
   - Potential savings of up to 40% compared to pay-as-you-go pricing

### CI/CD Integration

1. **Database Migration in CI/CD Pipeline**
   - Create an automated process for applying schema changes to Azure SQL
   - Example GitHub Actions workflow:

   ```yaml
   # .github/workflows/database-deployment.yml
   name: Deploy Database Changes
   
   on:
     push:
       branches: [ main ]
       paths:
         - 'api/Migrations/**'
         - 'api/Models/**'
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       
       steps:
       - uses: actions/checkout@v3
       
       - name: Setup .NET
         uses: actions/setup-dotnet@v3
         with:
           dotnet-version: '7.0.x'
       
       - name: Generate SQL Script
         run: dotnet ef migrations script --idempotent --output ${{ github.workspace }}/migration.sql
         working-directory: ./api
         env:
           ASPNETCORE_ENVIRONMENT: Production
       
       - name: Deploy to Azure SQL
         uses: azure/sql-action@v2
         with:
           connection-string: ${{ secrets.AZURE_SQL_CONNECTION_STRING }}
           path: ${{ github.workspace }}/migration.sql
   ```

2. **Environment-Specific Deployments**
   - Create separate deployment processes for development, staging, and production
   - Use different Azure SQL databases for each environment
   - Consider database snapshots before applying migrations in production

3. **Migration Validation**
   - Include automated tests in your CI/CD pipeline to verify migrations
   - Test the application against a clone of the production database with migrations applied

## Troubleshooting Common Issues

1. **Connection Problems**
   - Verify IP is allowed in firewall rules
   - Check for correct connection string parameters
   - Test connection using SQL Server Management Studio or Azure Data Studio

2. **Migration Failures**
   - Review migration logs for specific errors
   - Use the `--verbose` flag with EF Core commands for detailed output
   - Test migrations locally before deploying

3. **Performance Issues**
   - Use the monitoring script to identify bottlenecks
   - Check for missing indexes or high-cost queries
   - Review Azure Portal metrics for CPU/DTU utilization

## Resources

- [Azure SQL Documentation](https://docs.microsoft.com/en-us/azure/azure-sql/)
- [Entity Framework Core Documentation](https://docs.microsoft.com/en-us/ef/core/)
- [Azure SQL Security Best Practices](https://docs.microsoft.com/en-us/azure/azure-sql/database/security-best-practice)
- [Performance Monitoring for Azure SQL](https://docs.microsoft.com/en-us/azure/azure-sql/database/monitor-tune-overview)

## Conclusion

By following the Azure best practices outlined in this document, you'll have a secure, performant, and cost-effective Azure SQL database for your portfolio application. The included scripts provide powerful tools for monitoring, maintaining, and troubleshooting your database environment.

Remember to regularly review your database setup and performance metrics as your application grows, and scale your Azure SQL resources accordingly to maintain optimal performance while controlling costs.

## Switching Between Environments

The application automatically uses:
- Local database when running in Development environment
- Azure SQL Server when running in Production environment

To set the environment:

```powershell
$env:ASPNETCORE_ENVIRONMENT = "Production"  # For Azure SQL
$env:ASPNETCORE_ENVIRONMENT = "Development" # For local development
```

## Troubleshooting

- Ensure your client IP is added to Azure SQL Server firewall rules
- Verify server name, username and password are correct
- Test connection using SQL Server Management Studio or Azure Data Studio
- Check that the database exists on the server
