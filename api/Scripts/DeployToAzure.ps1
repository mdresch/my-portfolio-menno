## DeployToAzure.ps1
## This script deploys the database schema to Azure SQL Server

# Set connection string with your Azure SQL Server details
$azureConnectionString = "Server=tcp:YOUR_SERVER_NAME.database.windows.net,1433;Initial Catalog=PortfolioDb;Persist Security Info=False;User ID=YOUR_USERNAME;Password=YOUR_PASSWORD;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"

# Set environment variable to use Azure connection string
$env:ASPNETCORE_ENVIRONMENT = "Production"

# Navigate to the API project directory
$apiPath = Join-Path $PSScriptRoot ".."
Push-Location $apiPath

try {
    Write-Host "Starting deployment to Azure SQL Server..." -ForegroundColor Cyan

    # Apply migrations to Azure SQL Server
    Write-Host "Applying database migrations..." -ForegroundColor Yellow
    dotnet ef database update --connection $azureConnectionString

    Write-Host "Deployment completed successfully!" -ForegroundColor Green
}
catch {
    Write-Host "Error during deployment: $_" -ForegroundColor Red
}
finally {
    # Return to original directory
    Pop-Location
}
