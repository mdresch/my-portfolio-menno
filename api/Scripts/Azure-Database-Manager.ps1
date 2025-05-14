# Azure-Database-Manager.ps1
# A comprehensive script for managing your Azure SQL Database

param (
    [Parameter(Mandatory = $false)]
    [ValidateSet("Connect", "Test", "Migrate", "Reset", "Backup", "Restore", "Status")]
    [string]$Operation = "Status",
    
    [Parameter(Mandatory = $false)]
    [string]$ConnectionStringName = "AzureSqlConnection",
    
    [Parameter(Mandatory = $false)]
    [switch]$Force
)

# Read appsettings.Production.json to get connection string
function Get-ConnectionString {
    $settingsPath = Join-Path $PSScriptRoot ".." "appsettings.Production.json"
    if (Test-Path $settingsPath) {
        $settings = Get-Content $settingsPath | ConvertFrom-Json
        return $settings.ConnectionStrings.$ConnectionStringName
    }
    else {
        Write-Host "Error: Could not find appsettings.Production.json" -ForegroundColor Red
        return $null
    }
}

# Test database connection
function Test-DatabaseConnection {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString
    )
    
    try {
        Write-Host "Testing connection to Azure SQL Server..." -ForegroundColor Cyan
        
        $connection = New-Object System.Data.SqlClient.SqlConnection
        $connection.ConnectionString = $ConnectionString
        $connection.Open()
        
        $command = $connection.CreateCommand()
        $command.CommandText = "SELECT @@VERSION as Version"
        
        $reader = $command.ExecuteReader()
        while ($reader.Read()) {
            Write-Host "Connection successful!" -ForegroundColor Green
            Write-Host "SQL Server version: " -NoNewline
            Write-Host $reader["Version"] -ForegroundColor Yellow
        }
        
        $reader.Close()
        $connection.Close()
        return $true
    }
    catch {
        Write-Host "Connection failed: $_" -ForegroundColor Red
        return $false
    }
    finally {
        if ($connection -and $connection.State -eq 'Open') {
            $connection.Close()
        }
    }
}

# Run SQL script against the database
function Invoke-SqlScript {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString,
        
        [Parameter(Mandatory = $true)]
        [string]$ScriptPath,

        [Parameter(Mandatory = $false)]
        [switch]$Silent
    )
    
    try {
        if (-not $Silent) {
            Write-Host "Executing SQL script: $ScriptPath" -ForegroundColor Cyan
        }
        
        $connectionStringBuilder = New-Object System.Data.SqlClient.SqlConnectionStringBuilder
        $connectionStringBuilder.ConnectionString = $ConnectionString
        
        # Create SqlCommand with script contents
        $connection = New-Object System.Data.SqlClient.SqlConnection
        $connection.ConnectionString = $ConnectionString
        $connection.Open()

        $scriptContent = Get-Content -Path $ScriptPath -Raw
        $command = $connection.CreateCommand()
        $command.CommandText = $scriptContent
        $command.CommandTimeout = 120 # 2 minutes timeout
        
        # Execute the script
        $result = $command.ExecuteNonQuery()
        
        $connection.Close()
        
        if (-not $Silent) {
            Write-Host "SQL script executed successfully." -ForegroundColor Green
        }
        return $true
    }
    catch {
        if (-not $Silent) {
            Write-Host "Failed to execute SQL script: $_" -ForegroundColor Red
        }
        return $false
    }
    finally {
        if ($connection -and $connection.State -eq 'Open') {
            $connection.Close()
        }
    }
}

# Run Entity Framework Core migrations
function Apply-Migrations {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString
    )
    
    try {
        Write-Host "Applying EF Core migrations to database..." -ForegroundColor Cyan
        
        # Set environment variable for production connection
        $env:ASPNETCORE_ENVIRONMENT = "Production"
        
        # Navigate to API project root
        $apiPath = Join-Path $PSScriptRoot ".."
        Push-Location $apiPath
        
        # Apply migrations
        $result = dotnet ef database update --connection "$ConnectionString"
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Migrations applied successfully." -ForegroundColor Green
            return $true
        }
        else {
            Write-Host "Migration failed. Exit code: $LASTEXITCODE" -ForegroundColor Red
            return $false
        }
    }
    catch {
        Write-Host "Error applying migrations: $_" -ForegroundColor Red
        return $false
    }
    finally {
        Pop-Location
    }
}

# Get database status
function Get-DatabaseStatus {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString
    )
    
    try {
        Write-Host "Retrieving database status..." -ForegroundColor Cyan
        
        # Run verification script
        $scriptPath = Join-Path $PSScriptRoot "VerifyAzureDb.sql"
        
        if (Test-Path $scriptPath) {
            $connection = New-Object System.Data.SqlClient.SqlConnection
            $connection.ConnectionString = $ConnectionString
            $connection.Open()
            
            $command = $connection.CreateCommand()
            $command.CommandText = Get-Content $scriptPath -Raw
            $command.CommandTimeout = 60
            
            $reader = $command.ExecuteReader()
            
            # Process results (simplified output)
            while ($reader.NextResult()) {
                while ($reader.Read()) {
                    # Display each row
                    for ($i = 0; $i -lt $reader.FieldCount; $i++) {
                        $columnName = $reader.GetName($i)
                        $value = $reader[$i]
                        Write-Host "$columnName : $value"
                    }
                }
            }
            
            $reader.Close()
            $connection.Close()
        }
        else {
            Write-Host "Verification script not found: $scriptPath" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "Error getting database status: $_" -ForegroundColor Red
    }
    finally {
        if ($connection -and $connection.State -eq 'Open') {
            $connection.Close()
        }
    }
}

# Reset database (drop and recreate)
function Reset-Database {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString
    )
    
    if (-not $Force) {
        Write-Host "WARNING: This will delete all data in your database!" -ForegroundColor Red
        $confirm = Read-Host "Are you sure you want to continue? (y/n)"
        if ($confirm -ne "y") {
            Write-Host "Operation cancelled." -ForegroundColor Yellow
            return
        }
    }
    
    try {
        Write-Host "Resetting database..." -ForegroundColor Cyan
        
        # Navigate to API project root
        $apiPath = Join-Path $PSScriptRoot ".."
        Push-Location $apiPath
        
        # Set environment variable for production connection
        $env:ASPNETCORE_ENVIRONMENT = "Production"
        
        # Drop the database
        $result = dotnet ef database drop --force --connection "$ConnectionString"
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Failed to drop database. Exit code: $LASTEXITCODE" -ForegroundColor Red
            return $false
        }
        
        # Apply migrations to recreate
        $migrationResult = Apply-Migrations -ConnectionString $ConnectionString
        
        if ($migrationResult) {
            Write-Host "Database reset completed successfully." -ForegroundColor Green
            return $true
        }
        else {
            return $false
        }
    }
    catch {
        Write-Host "Error resetting database: $_" -ForegroundColor Red
        return $false
    }
    finally {
        Pop-Location
    }
}

# Main execution
$connectionString = Get-ConnectionString

if (-not $connectionString) {
    Write-Host "Missing connection string. Please update appsettings.Production.json first." -ForegroundColor Red
    exit 1
}

switch ($Operation) {
    "Connect" {
        Test-DatabaseConnection -ConnectionString $connectionString
    }
    "Test" {
        Test-DatabaseConnection -ConnectionString $connectionString
    }
    "Migrate" {
        Apply-Migrations -ConnectionString $connectionString
    }
    "Reset" {
        Reset-Database -ConnectionString $connectionString
    }
    "Status" {
        Get-DatabaseStatus -ConnectionString $connectionString
    }
    "Backup" {
        Write-Host "Backup feature not implemented yet" -ForegroundColor Yellow
    }
    "Restore" {
        Write-Host "Restore feature not implemented yet" -ForegroundColor Yellow
    }
    default {
        Write-Host "Invalid operation. Use one of: Connect, Test, Migrate, Reset, Backup, Restore, Status" -ForegroundColor Red
    }
}
