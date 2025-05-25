# Test-AzureConnection.ps1
# This script tests the connection to your Azure SQL Database

param (
    [Parameter(Mandatory = $false)]
    [string]$ConnectionStringName = "AzureSqlConnection",
    
    [Parameter(Mandatory = $false)]
    [switch]$Detailed
)

function Get-ConnectionString {
    # Try to read from appsettings.Production.json first
    $settingsPath = Join-Path $PSScriptRoot ".." "appsettings.Production.json"
    if (Test-Path $settingsPath) {
        $settings = Get-Content $settingsPath | ConvertFrom-Json
        if ($settings.ConnectionStrings.$ConnectionStringName) {
            return $settings.ConnectionStrings.$ConnectionStringName
        }
    }
    
    # Fall back to appsettings.json
    $settingsPath = Join-Path $PSScriptRoot ".." "appsettings.json"
    if (Test-Path $settingsPath) {
        $settings = Get-Content $settingsPath | ConvertFrom-Json
        if ($settings.ConnectionStrings.$ConnectionStringName) {
            return $settings.ConnectionStrings.$ConnectionStringName
        }
    }
    
    return $null
}

function Test-DatabaseConnection {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString,
        
        [Parameter(Mandatory = $false)]
        [switch]$Detailed
    )
    
    $connection = $null
    
    try {
        Write-Host "Testing connection to Azure SQL Database..." -ForegroundColor Cyan
        
        # Parse the connection string to extract server, database, and credentials
        $connectionStringParts = $ConnectionString -split ";"
        $server = ($connectionStringParts | Where-Object { $_ -match "Server=" -or $_ -match "Data Source=" }) -replace "Server=|Data Source=", ""
        $database = ($connectionStringParts | Where-Object { $_ -match "Initial Catalog=" -or $_ -match "Database=" }) -replace "Initial Catalog=|Database=", ""
        $userId = ($connectionStringParts | Where-Object { $_ -match "User ID=" }) -replace "User ID=", ""
        
        Write-Host "Server: $server" -ForegroundColor Yellow
        Write-Host "Database: $database" -ForegroundColor Yellow
        Write-Host "User: $userId" -ForegroundColor Yellow
        
        # Create SQL connection
        $connection = New-Object System.Data.SqlClient.SqlConnection
        $connection.ConnectionString = $ConnectionString
        
        # Start timing
        $stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
        
        # Try to open connection
        $connection.Open()
        
        # Stop timing
        $stopwatch.Stop()
        $connectionTime = $stopwatch.ElapsedMilliseconds
        
        # If we got here, connection succeeded
        Write-Host "✅ Connection successful! (${connectionTime}ms)" -ForegroundColor Green
        
        # Run some basic validation queries
        $command = $connection.CreateCommand()
        $command.CommandText = "SELECT @@VERSION as Version"
        $reader = $command.ExecuteReader()
        while ($reader.Read()) {
            Write-Host "SQL Server version: " -NoNewline 
            Write-Host $reader["Version"] -ForegroundColor Yellow
        }
        $reader.Close()
        
        # Get database size
        $command.CommandText = "SELECT CONVERT(DECIMAL(10,2), SUM(size * 8) / 1024.0) AS SizeInMB FROM sys.database_files WHERE type_desc = 'ROWS'"
        $reader = $command.ExecuteReader()
        while ($reader.Read()) {
            Write-Host "Database size: " -NoNewline
            Write-Host "$($reader["SizeInMB"]) MB" -ForegroundColor Yellow
        }
        $reader.Close()
        
        # Check if EF Migrations table exists
        $command.CommandText = "SELECT OBJECT_ID('__EFMigrationsHistory') as MigrationTableExists"
        $reader = $command.ExecuteReader()
        while ($reader.Read()) {
            if ($reader["MigrationTableExists"]) {
                Write-Host "EF Migrations table: " -NoNewline
                Write-Host "Exists" -ForegroundColor Green
                
                # If migrations table exists, check migrations
                if ($Detailed) {
                    $reader.Close()
                    $command.CommandText = "SELECT TOP 5 MigrationId, ProductVersion FROM __EFMigrationsHistory ORDER BY MigrationId DESC"
                    $reader = $command.ExecuteReader()
                    Write-Host "`nRecent migrations:" -ForegroundColor Cyan
                    while ($reader.Read()) {
                        Write-Host "  - $($reader["MigrationId"]) (EF Core $($reader["ProductVersion"]))"
                    }
                }
            } else {
                Write-Host "EF Migrations table: " -NoNewline
                Write-Host "Does not exist (database schema may need to be deployed)" -ForegroundColor Yellow
            }
        }
        $reader.Close()
        
        # If detailed mode, show more information
        if ($Detailed) {
            # Get table list
            Write-Host "`nDatabase tables:" -ForegroundColor Cyan
            $command.CommandText = "SELECT TABLE_SCHEMA, TABLE_NAME, (SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = t.TABLE_SCHEMA AND TABLE_NAME = t.TABLE_NAME) AS ColumnCount FROM INFORMATION_SCHEMA.TABLES t WHERE TABLE_TYPE = 'BASE TABLE' ORDER BY TABLE_SCHEMA, TABLE_NAME"
            $reader = $command.ExecuteReader()
            
            if ($reader.HasRows) {
                while ($reader.Read()) {
                    Write-Host "  - $($reader["TABLE_SCHEMA"]).$($reader["TABLE_NAME"]) ($($reader["ColumnCount"]) columns)"
                }
            } else {
                Write-Host "  No tables found. Database schema may need to be deployed."
            }
            $reader.Close()
        }
        
        return $true
    }
    catch {
        Write-Host "❌ Connection failed: $_" -ForegroundColor Red
        
        # Provide some common troubleshooting advice
        if ($_.Exception.Message -match "A network-related or instance-specific error") {
            Write-Host "`nPossible causes:" -ForegroundColor Yellow
            Write-Host "  - Server name is incorrect" -ForegroundColor Yellow
            Write-Host "  - Firewall is blocking the connection" -ForegroundColor Yellow
            Write-Host "  - Azure SQL Server is not running" -ForegroundColor Yellow
            Write-Host "`nTroubleshooting steps:" -ForegroundColor Cyan
            Write-Host "  1. Verify server name in connection string" -ForegroundColor White
            Write-Host "  2. Check firewall rules in Azure Portal > SQL Server > Networking" -ForegroundColor White
            Write-Host "  3. Add your client IP to the allowed list" -ForegroundColor White
        }
        elseif ($_.Exception.Message -match "Login failed") {
            Write-Host "`nPossible causes:" -ForegroundColor Yellow
            Write-Host "  - Username or password is incorrect" -ForegroundColor Yellow
            Write-Host "  - User does not have access to the database" -ForegroundColor Yellow
            Write-Host "`nTroubleshooting steps:" -ForegroundColor Cyan
            Write-Host "  1. Verify username and password in connection string" -ForegroundColor White
            Write-Host "  2. Check if the user has been created in the target database" -ForegroundColor White
            Write-Host "  3. Try connecting with SQL Server Management Studio to verify credentials" -ForegroundColor White
        }
        
        return $false
    }
    finally {
        if ($connection -and $connection.State -eq 'Open') {
            $connection.Close()
        }
    }
}
