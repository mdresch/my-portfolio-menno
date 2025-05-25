# Create-Production-Settings.ps1
# This script helps create a production settings file with Azure SQL connection string

param (
    [Parameter(Mandatory = $false)]
    [string]$ServerName,
    
    [Parameter(Mandatory = $false)]
    [string]$DatabaseName = "PortfolioDb",
    
    [Parameter(Mandatory = $false)]
    [string]$Username,
    
    [Parameter(Mandatory = $false)]
    [string]$Password
)

$settingsPath = Join-Path $PSScriptRoot ".." "appsettings.Production.json"

# If all parameters provided, create the file
if ($ServerName -and $DatabaseName -and $Username -and $Password) {
    # Create connection string
    $connectionString = "Server=tcp:$ServerName.database.windows.net,1433;Initial Catalog=$DatabaseName;Persist Security Info=False;User ID=$Username;Password=$Password;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    
    # Create JSON object
    $settings = @{
        "Logging" = @{
            "LogLevel" = @{
                "Default" = "Information"
                "Microsoft.AspNetCore" = "Warning"
            }
        }
        "ConnectionStrings" = @{
            "AzureSqlConnection" = $connectionString
        }
    }
    
    # Convert to JSON and save
    $settingsJson = $settings | ConvertTo-Json -Depth 4
    $settingsJson | Out-File -FilePath $settingsPath -Encoding UTF8
    
    Write-Host "Production settings file created successfully at: $settingsPath" -ForegroundColor Green
    Write-Host "IMPORTANT: This file contains sensitive information and should not be committed to source control." -ForegroundColor Yellow
}
else {
    # Interactive mode
    Write-Host "Creating production settings file with Azure SQL connection..." -ForegroundColor Cyan
    
    if (-not $ServerName) {
        $ServerName = Read-Host "Enter your Azure SQL Server name (without .database.windows.net)"
    }
    
    if (-not $DatabaseName) {
        $DatabaseName = Read-Host "Enter database name [PortfolioDb]"
        if (-not $DatabaseName) { $DatabaseName = "PortfolioDb" }
    }
    
    if (-not $Username) {
        $Username = Read-Host "Enter database username"
    }
    
    if (-not $Password) {
        $Password = Read-Host "Enter database password" -AsSecureString
        $BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($Password)
        $Password = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)
    }
    
    # Create the connection string
    $connectionString = "Server=tcp:$ServerName.database.windows.net,1433;Initial Catalog=$DatabaseName;Persist Security Info=False;User ID=$Username;Password=$Password;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
    
    # Create JSON object
    $settings = @{
        "Logging" = @{
            "LogLevel" = @{
                "Default" = "Information"
                "Microsoft.AspNetCore" = "Warning"
            }
        }
        "ConnectionStrings" = @{
            "AzureSqlConnection" = $connectionString
        }
    }
    
    # Convert to JSON and save
    $settingsJson = $settings | ConvertTo-Json -Depth 4
    $settingsJson | Out-File -FilePath $settingsPath -Encoding UTF8
    
    Write-Host "Production settings file created successfully at: $settingsPath" -ForegroundColor Green
    Write-Host "IMPORTANT: This file contains sensitive information and should not be committed to source control." -ForegroundColor Yellow
}
