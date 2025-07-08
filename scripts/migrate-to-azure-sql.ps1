# Azure SQL Database Migration and Setup Script for Portfolio Application
# This script helps migrate from SQLite to Azure SQL Database for production

param(
    [Parameter(Mandatory=$false)]
    [string]$AzureSqlConnectionString,
    
    [Parameter(Mandatory=$false)]
    [ValidateSet("setup", "migrate", "validate", "deploy")]
    [string]$Action = "setup"
)

Write-Host "Portfolio Database Migration Tool" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

$ApiPath = "c:\Users\menno\Source\Repos\my-portfolio-menno\api\api.ApiService"
$InfraPath = "c:\Users\menno\Source\Repos\my-portfolio-menno\api\infra"

function Show-Usage {
    Write-Host "Usage:" -ForegroundColor Yellow
    Write-Host "  .\migrate-to-azure-sql.ps1 -Action setup      # Set up Azure infrastructure"
    Write-Host "  .\migrate-to-azure-sql.ps1 -Action migrate    # Migrate data from SQLite"
    Write-Host "  .\migrate-to-azure-sql.ps1 -Action validate   # Validate migration"
    Write-Host "  .\migrate-to-azure-sql.ps1 -Action deploy     # Deploy to Azure"
    Write-Host ""
}

function Setup-AzureInfrastructure {
    Write-Host "Setting up Azure Infrastructure..." -ForegroundColor Cyan
    
    # Check if azd is installed
    if (-not (Get-Command azd -ErrorAction SilentlyContinue)) {
        Write-Host "Azure Developer CLI (azd) is required. Please install it first:" -ForegroundColor Red
        Write-Host "https://docs.microsoft.com/en-us/azure/developer/azure-developer-cli/install-azd" -ForegroundColor Yellow
        return $false
    }
    
    Set-Location $InfraPath
    
    Write-Host "Initializing Azure Developer CLI..." -ForegroundColor Yellow
    azd init --template minimal
    
    Write-Host "Provisioning Azure resources..." -ForegroundColor Yellow
    Write-Host "This will create:" -ForegroundColor White
    Write-Host "  - Azure SQL Server with Basic tier database (~$5/month)" -ForegroundColor White
    Write-Host "  - Azure Container Apps for hosting" -ForegroundColor White
    Write-Host "  - Azure Container Registry" -ForegroundColor White
    Write-Host "  - Application Insights for monitoring" -ForegroundColor White
    Write-Host ""
    Write-Host "💰 Cost Estimate: ~$5-15/month total" -ForegroundColor Green
    Write-Host "💳 Tip: Use Azure free credits to run this for months at no cost!" -ForegroundColor Cyan
    
    $provision = Read-Host "Continue with provisioning? (y/N)"
    if ($provision -eq 'y' -or $provision -eq 'Y') {
        azd provision --preview
        
        $deploy = Read-Host "Looks good? Proceed with actual provisioning? (y/N)"
        if ($deploy -eq 'y' -or $deploy -eq 'Y') {
            azd provision
            
            Write-Host "Azure infrastructure has been created!" -ForegroundColor Green
            Write-Host "Next steps:" -ForegroundColor Yellow
            Write-Host "1. Run: .\migrate-to-azure-sql.ps1 -Action migrate" -ForegroundColor White
            Write-Host "2. Run: .\migrate-to-azure-sql.ps1 -Action deploy" -ForegroundColor White
            return $true
        }
    }
    
    return $false
}

function Migrate-Data {
    Write-Host "Migrating data from SQLite to Azure SQL..." -ForegroundColor Cyan
    
    # Get Azure SQL connection string from azd environment
    Set-Location $InfraPath
    $azdOutput = azd env get-values --output json | ConvertFrom-Json
    
    if (-not $azdOutput.AZURE_SQL_CONNECTION_STRING) {
        Write-Host "Azure SQL connection string not found. Run setup first." -ForegroundColor Red
        return $false
    }
    
    $azureSqlConn = $azdOutput.AZURE_SQL_CONNECTION_STRING
    
    Set-Location $ApiPath
    
    Write-Host "Creating backup of SQLite database..." -ForegroundColor Yellow
    $backupFile = "PortfolioDb_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss').db"
    if (Test-Path "PortfolioDb.db") {
        Copy-Item "PortfolioDb.db" $backupFile
        Write-Host "Backup created: $backupFile" -ForegroundColor Green
    }
    
    Write-Host "Updating Entity Framework to use SQL Server for production..." -ForegroundColor Yellow
    
    # Update appsettings.json with Azure SQL connection
    $appsettings = Get-Content "appsettings.json" | ConvertFrom-Json
    $appsettings.ConnectionStrings.AzureSqlConnection = $azureSqlConn
    $appsettings | ConvertTo-Json -Depth 10 | Set-Content "appsettings.json"
    
    Write-Host "Creating SQL Server migrations..." -ForegroundColor Yellow
    $env:ASPNETCORE_ENVIRONMENT = "Production"
    
    # Create SQL Server-specific migrations
    dotnet ef migrations add AzureSQLProduction --context PortfolioContext --output-dir Migrations/AzureSQL
    
    Write-Host "Applying migrations to Azure SQL Database..." -ForegroundColor Yellow
    dotnet ef database update --context PortfolioContext
    
    # Reset environment
    $env:ASPNETCORE_ENVIRONMENT = "Development"
    
    Write-Host "Data migration setup completed!" -ForegroundColor Green
    Write-Host "The database schema has been created in Azure SQL." -ForegroundColor White
    Write-Host "Note: Actual data will be migrated during deployment." -ForegroundColor Yellow
    
    return $true
}

function Validate-Migration {
    Write-Host "Validating Azure SQL Database setup..." -ForegroundColor Cyan
    
    Set-Location $ApiPath
    
    # Test connection to Azure SQL
    $env:ASPNETCORE_ENVIRONMENT = "Production"
    
    Write-Host "Testing Azure SQL Database connection..." -ForegroundColor Yellow
    dotnet ef dbcontext info --context PortfolioContext
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Azure SQL Database connection successful!" -ForegroundColor Green
        
        # List tables
        Write-Host "Database tables:" -ForegroundColor Yellow
        dotnet ef dbcontext script --context PortfolioContext
        
        $env:ASPNETCORE_ENVIRONMENT = "Development"
        return $true
    } else {
        Write-Host "✗ Azure SQL Database connection failed!" -ForegroundColor Red
        $env:ASPNETCORE_ENVIRONMENT = "Development"
        return $false
    }
}

function Deploy-Application {
    Write-Host "Deploying application to Azure..." -ForegroundColor Cyan
    
    Set-Location $InfraPath
    
    Write-Host "Building and deploying to Azure Container Apps..." -ForegroundColor Yellow
    azd deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Application deployed successfully!" -ForegroundColor Green
        
        # Get application URL
        $azdOutput = azd env get-values --output json | ConvertFrom-Json
        if ($azdOutput.AZURE_CONTAINER_APP_URL) {
            Write-Host "Application URL: $($azdOutput.AZURE_CONTAINER_APP_URL)" -ForegroundColor Cyan
        }
        
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Test the application endpoints" -ForegroundColor White
        Write-Host "2. Verify data was migrated correctly" -ForegroundColor White
        Write-Host "3. Update your frontend to use the new API URL" -ForegroundColor White
        
        return $true
    } else {
        Write-Host "✗ Deployment failed!" -ForegroundColor Red
        return $false
    }
}

# Main execution
switch ($Action) {
    "setup" {
        if (Setup-AzureInfrastructure) {
            Write-Host "Setup completed successfully!" -ForegroundColor Green
        }
    }
    "migrate" {
        if (Migrate-Data) {
            Write-Host "Migration completed successfully!" -ForegroundColor Green
        }
    }
    "validate" {
        if (Validate-Migration) {
            Write-Host "Validation completed successfully!" -ForegroundColor Green
        }
    }
    "deploy" {
        if (Deploy-Application) {
            Write-Host "Deployment completed successfully!" -ForegroundColor Green
        }
    }
    default {
        Show-Usage
    }
}

Write-Host ""
Write-Host "Migration Tool Complete" -ForegroundColor Green
