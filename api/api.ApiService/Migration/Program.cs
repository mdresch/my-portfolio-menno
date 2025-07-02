using api.ApiService.Migration;
using Microsoft.Extensions.Configuration;

// Migration utility program to transfer data from SQLite to Azure SQL Database
Console.WriteLine("Portfolio Database Migration Tool");
Console.WriteLine("=================================");

if (args.Length == 0)
{
    Console.WriteLine("Usage:");
    Console.WriteLine("  dotnet run migrate [azure-sql-connection-string]");
    Console.WriteLine("  dotnet run validate [azure-sql-connection-string]");
    Console.WriteLine("  dotnet run backup [backup-file-path]");
    Console.WriteLine();
    Console.WriteLine("If no connection string is provided, it will be read from appsettings.json");
    return;
}

// Load configuration
var builder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false)
    .AddJsonFile("appsettings.Development.json", optional: true)
    .AddEnvironmentVariables();

var config = builder.Build();

// Get connection strings
var sqliteConnectionString = config.GetConnectionString("DefaultConnection") 
    ?? throw new InvalidOperationException("SQLite connection string not found in configuration");

var azureSqlConnectionString = args.Length > 1 ? args[1] : 
    config.GetConnectionString("AzureSqlConnection") ??
    throw new InvalidOperationException("Azure SQL connection string not provided and not found in configuration");

var migrationTool = new DataMigrationTool(sqliteConnectionString, azureSqlConnectionString);

try
{
    switch (args[0].ToLower())
    {
        case "migrate":
            // Create backup first
            var backupPath = $"PortfolioDb_backup_{DateTime.Now:yyyyMMdd_HHmmss}.db";
            await migrationTool.CreateBackupAsync(backupPath);
            
            // Perform migration
            await migrationTool.MigrateAllDataAsync();
            
            // Validate migration
            await migrationTool.ValidateMigrationAsync();
            break;

        case "validate":
            await migrationTool.ValidateMigrationAsync();
            break;

        case "backup":
            var customBackupPath = args.Length > 1 ? args[1] : $"PortfolioDb_backup_{DateTime.Now:yyyyMMdd_HHmmss}.db";
            await migrationTool.CreateBackupAsync(customBackupPath);
            break;

        default:
            Console.WriteLine($"Unknown command: {args[0]}");
            Console.WriteLine("Valid commands: migrate, validate, backup");
            return;
    }

    Console.WriteLine("\nOperation completed successfully!");
}
catch (Exception ex)
{
    Console.WriteLine($"\nError: {ex.Message}");
    Console.WriteLine($"Details: {ex}");
    Environment.Exit(1);
}
