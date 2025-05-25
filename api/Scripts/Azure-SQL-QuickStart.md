# Azure SQL Database Integration

This guide will help you quickly get started with your new Azure SQL Server and integrate it with your portfolio application.

## Quick Start

1. **Set up your connection string**

   ```powershell
   cd api/Scripts
   .\Create-Production-Settings.ps1
   ```

   This will guide you through creating an `appsettings.Production.json` file with your Azure SQL connection string.

2. **Test your connection**

   ```powershell
   .\Azure-Database-Manager.ps1 -Operation Test
   ```

3. **Deploy the database schema**

   ```powershell
   .\Azure-Database-Manager.ps1 -Operation Migrate
   ```

4. **Check database status**

   ```powershell
   .\Azure-Database-Manager.ps1 -Operation Status
   ```

## Managing Your Database

The `Azure-Database-Manager.ps1` script provides several operations:

- `Test`: Test the connection to your Azure SQL Database
- `Migrate`: Apply Entity Framework migrations to your database
- `Reset`: Drop and recreate your database (use with caution!)
- `Status`: Check the status of your database and tables

Example usage:
```powershell
.\Azure-Database-Manager.ps1 -Operation Migrate
```

## Connection String Security

Your Azure SQL connection string contains sensitive information. To keep it secure:

1. The connection string is stored in `appsettings.Production.json`
2. This file is excluded from source control via `.gitignore`
3. For CI/CD pipelines, use Azure Key Vault or environment variables

## Common Issues

### Firewall Rules

If you cannot connect, make sure your IP address is added to the Azure SQL Server firewall:

1. Go to Azure Portal > SQL Servers > Your Server > Security > Networking
2. Add a client IP rule for your current IP address

### SSL/TLS Issues

If you encounter SSL/TLS issues, verify in your connection string:
- `Encrypt=True`
- `TrustServerCertificate=False`

### Database Permissions

The user in your connection string must have appropriate permissions:
- For migrations: db_owner role
- For runtime: more restricted permissions based on your application needs

## Switching Between Environments

The application automatically switches between local database and Azure SQL based on the environment. You can manually control this:

```powershell
# Use Azure SQL Database
$env:ASPNETCORE_ENVIRONMENT = "Production"
dotnet run

# Use local development database
$env:ASPNETCORE_ENVIRONMENT = "Development"
dotnet run
```

## Learn More

- [Azure SQL Documentation](https://docs.microsoft.com/en-us/azure/azure-sql/)
- [Entity Framework Core with Azure SQL](https://docs.microsoft.com/en-us/ef/core/providers/sql-server/)
