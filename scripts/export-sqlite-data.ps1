# SQLite Data Export Script
# This script exports your current SQLite data for migration to Azure SQL

param(
    [Parameter(Mandatory=$false)]
    [string]$SqliteDbPath = "api\api.ApiService\PortfolioDb.db",
    
    [Parameter(Mandatory=$false)]
    [string]$OutputPath = "data-export"
)

Write-Host "Portfolio SQLite Data Export Tool" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green

$ApiPath = "c:\Users\menno\Source\Repos\my-portfolio-menno\api\api.ApiService"
$FullSqlitePath = Join-Path $PSScriptRoot "..\$SqliteDbPath"

if (-not (Test-Path $FullSqlitePath)) {
    Write-Host "SQLite database not found at: $FullSqlitePath" -ForegroundColor Red
    Write-Host "Please run your application first to create the database." -ForegroundColor Yellow
    exit 1
}

Write-Host "Found SQLite database: $FullSqlitePath" -ForegroundColor Green

# Create output directory
$ExportDir = Join-Path $PSScriptRoot "..\$OutputPath"
if (-not (Test-Path $ExportDir)) {
    New-Item -ItemType Directory -Path $ExportDir -Force | Out-Null
}

Write-Host "Exporting data to: $ExportDir" -ForegroundColor Cyan

# Check if sqlite3 is available
$sqlite3Path = Get-Command sqlite3 -ErrorAction SilentlyContinue
if (-not $sqlite3Path) {
    Write-Host "sqlite3 command not found. Installing SQLite..." -ForegroundColor Yellow
    
    # Try to install SQLite using winget
    try {
        winget install SQLite.SQLite
        $sqlite3Path = Get-Command sqlite3 -ErrorAction SilentlyContinue
    } catch {
        Write-Host "Could not install SQLite automatically." -ForegroundColor Red
        Write-Host "Please install SQLite manually or use the VS Code SQLite extension." -ForegroundColor Yellow
        Write-Host "Data location: $FullSqlitePath" -ForegroundColor White
        exit 1
    }
}

if ($sqlite3Path) {
    Write-Host "Using sqlite3: $($sqlite3Path.Source)" -ForegroundColor Green
    
    # Export table schemas
    Write-Host "Exporting table schemas..." -ForegroundColor Yellow
    & sqlite3 $FullSqlitePath ".schema" | Out-File "$ExportDir\schema.sql" -Encoding UTF8
    
    # Export all data
    Write-Host "Exporting all data..." -ForegroundColor Yellow
    & sqlite3 $FullSqlitePath ".dump" | Out-File "$ExportDir\full_export.sql" -Encoding UTF8
    
    # Export each table separately as CSV
    Write-Host "Exporting individual tables..." -ForegroundColor Yellow
    
    $tables = @("Projects", "ContactMessages", "Skills", "BlogPosts", "RagDocuments", "FriendContacts")
    
    foreach ($table in $tables) {
        Write-Host "  Exporting $table..." -ForegroundColor White
        
        # Check if table exists and has data
        $count = & sqlite3 $FullSqlitePath "SELECT COUNT(*) FROM $table;" 2>$null
        
        if ($LASTEXITCODE -eq 0 -and $count -gt 0) {
            # Export as CSV
            & sqlite3 $FullSqlitePath ".mode csv" ".headers on" "SELECT * FROM $table;" | Out-File "$ExportDir\$table.csv" -Encoding UTF8
            Write-Host "    ✓ Exported $count records" -ForegroundColor Green
        } else {
            Write-Host "    - Table $table is empty or doesn't exist" -ForegroundColor Gray
        }
    }
    
    # Create summary report
    Write-Host "Creating summary report..." -ForegroundColor Yellow
    
    $summaryReport = @"
# SQLite Database Export Summary
Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
Database: $FullSqlitePath

## Table Summary
"@
    
    foreach ($table in $tables) {
        $count = & sqlite3 $FullSqlitePath "SELECT COUNT(*) FROM $table;" 2>$null
        if ($LASTEXITCODE -eq 0) {
            $summaryReport += "`n- $table`: $count records"
        } else {
            $summaryReport += "`n- $table`: Not found or error"
        }
    }
    
    $summaryReport += @"


## Files Generated
- schema.sql - Database schema
- full_export.sql - Complete database dump
- [TableName].csv - Individual table exports

## Next Steps
1. Review the exported data
2. Run migration to Azure SQL Database
3. Validate data integrity after migration

## Notes
- CSV files can be imported into Excel for review
- full_export.sql contains all data and schema
- Keep these files as backup during migration
"@
    
    $summaryReport | Out-File "$ExportDir\export_summary.md" -Encoding UTF8
    
    Write-Host ""
    Write-Host "Export completed successfully!" -ForegroundColor Green
    Write-Host "Files exported to: $ExportDir" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Summary:" -ForegroundColor Yellow
    
    foreach ($table in $tables) {
        $count = & sqlite3 $FullSqlitePath "SELECT COUNT(*) FROM $table;" 2>$null
        if ($LASTEXITCODE -eq 0 -and $count -gt 0) {
            Write-Host "  $table`: $count records" -ForegroundColor White
        }
    }
    
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Review exported data in: $ExportDir" -ForegroundColor White
    Write-Host "2. Run: .\scripts\migrate-to-azure-sql.ps1 -Action setup" -ForegroundColor White
    Write-Host "3. Run: .\scripts\migrate-to-azure-sql.ps1 -Action migrate" -ForegroundColor White
    
} else {
    Write-Host "Could not access sqlite3 command." -ForegroundColor Red
    Write-Host "Database location: $FullSqlitePath" -ForegroundColor White
    Write-Host "You can use VS Code SQLite extension to view the data." -ForegroundColor Yellow
}
