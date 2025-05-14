# Azure SQL Database Monitoring Tool with Azure Best Practices

[CmdletBinding()]
param (
    [Parameter(Mandatory = $false)]
    [ValidateSet("QueryPerformance", "ConnectionCount", "SpaceUsage", "IndexFragmentation", "BlockingQueries", "DTU", "All")]
    [string]$MetricType = "All",
    
    [Parameter(Mandatory = $false)]
    [int]$Top = 10,
    
    [Parameter(Mandatory = $false)]
    [switch]$ExportResults,
    
    [Parameter(Mandatory = $false)]
    [switch]$UseSavedConnectionString
)

# Verify necessary modules
function Verify-Prerequisites {
    $requiredModules = @("SqlServer")
    
    foreach ($module in $requiredModules) {
        if (-not (Get-Module -ListAvailable -Name $module)) {
            Write-Host "Required module '$module' is not installed. Installing..." -ForegroundColor Yellow
            try {
                Install-Module -Name $module -Scope CurrentUser -Force -AllowClobber
                Import-Module -Name $module
                Write-Host "Module '$module' installed successfully." -ForegroundColor Green
            }
            catch {
                Write-Host "Error installing module '$module': $_" -ForegroundColor Red
                Write-Host "Please install the module manually using: Install-Module -Name $module -Scope CurrentUser" -ForegroundColor Yellow
                return $false
            }
        }
    }
    return $true
}

# Azure Best Practice: Use secure authentication methods with no plain text passwords
function Get-ConnectionString {
    $connectionString = "Server=tcp:cba-portfolio.database.windows.net,1433;Initial Catalog=cba-sql-portfolio;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;Authentication=Active Directory Default;"
    
    if ($UseSavedConnectionString) {
        $settingsPath = Join-Path $PSScriptRoot ".." "appsettings.Production.json"
        if (Test-Path $settingsPath) {
            try {
                $settings = Get-Content $settingsPath | ConvertFrom-Json
                $savedConnection = $settings.ConnectionStrings.AzureSqlConnection
                
                if ($savedConnection) {
                    Write-Host "Using connection string from appsettings.Production.json" -ForegroundColor Green
                    return $savedConnection
                }
            }
            catch {
                Write-Host "Error reading appsettings.Production.json: $_" -ForegroundColor Yellow
            }
        }
    }
    
    return $connectionString
}

# Execute queries with improved error handling and security
function Invoke-SqlQuery {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString,
        
        [Parameter(Mandatory = $true)]
        [string]$Query,
        
        [Parameter(Mandatory = $false)]
        [string]$Title = "Query Results",
        
        [Parameter(Mandatory = $false)]
        [int]$CommandTimeout = 60
    )
    
    try {
        Write-Host "`n📊 Running: $Title" -ForegroundColor Cyan
        
        # Azure Best Practice: Use SqlServer module with proper timeout handling
        $results = Invoke-Sqlcmd -ConnectionString $ConnectionString -Query $Query -QueryTimeout $CommandTimeout -ErrorAction Stop
        
        Write-Host "`n📋 Results for: $Title" -ForegroundColor Green
        $results | Format-Table -AutoSize
        
        return $results
    }
    catch {
        Write-Host "`n❌ Error executing query: $_" -ForegroundColor Red
        
        # Azure Best Practice: Provide specific guidance for Azure SQL errors
        if ($_.Exception.Message -like "*login failed*") {
            Write-Host "Authentication failed. Verify Active Directory credentials or check if MFA is required." -ForegroundColor Yellow
        }
        elseif ($_.Exception.Message -like "*connection timeout*") {
            Write-Host "Connection timeout. Verify Azure SQL firewall rules include your current IP address." -ForegroundColor Yellow
        }
        
        return $null
    }
}

# Azure Best Practice: Use DMVs specific to Azure SQL Database
function Get-QueryPerformance {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString,
        
        [Parameter(Mandatory = $true)]
        [int]$Top
    )
    
    # This query uses Azure SQL-specific DMVs and optimizations
    $query = @"
SELECT TOP $Top
    qs.execution_count AS [Executions],
    CAST((qs.total_elapsed_time / 1000.0) / qs.execution_count AS DECIMAL(10, 2)) AS [Avg_Duration_ms],
    CAST(qs.total_logical_reads / qs.execution_count AS DECIMAL(10, 2)) AS [Avg_Logical_Reads],
    CAST(qs.total_physical_reads / qs.execution_count AS DECIMAL(10, 2)) AS [Avg_Physical_Reads],
    CAST(qs.max_dop AS INT) AS [DOP],
    CAST(qs.last_dop AS INT) AS [Last_DOP],
    qs.last_execution_time AS [Last_Execution],
    SUBSTRING(qt.text, (qs.statement_start_offset/2)+1, 
        ((CASE WHEN qs.statement_end_offset = -1 THEN LEN(CONVERT(nvarchar(max), qt.text)) * 2 
        ELSE qs.statement_end_offset END - qs.statement_start_offset)/2) + 1) AS [Statement],
    DB_NAME(qt.dbid) AS [Database],
    qp.query_plan AS [Plan]
FROM sys.dm_exec_query_stats qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) as qt
CROSS APPLY sys.dm_exec_query_plan(qs.plan_handle) as qp
WHERE qt.text NOT LIKE '%sys.%'
ORDER BY [Avg_Duration_ms] DESC;
"@

    $results = Invoke-SqlQuery -ConnectionString $ConnectionString -Query $query -Title "Query Performance (Top $Top Slowest Queries)"
    
    if ($results -and $ExportResults) {
        Export-Results -Results $results -FileName "QueryPerformance"
    }
}

# Azure Best Practice: Monitor resource utilization
function Get-DatabasePerformanceMetrics {
    param (
        [Parameter(Mandatory = $true)]
        [string]$ConnectionString
    )
    
    # Query resource utilization using Azure SQL-specific metrics
    $query = @"
-- Database size information
SELECT 
    SUM(CAST(FILEPROPERTY(name, 'SpaceUsed') AS bigint) * 8 / 1024) AS [Used_Space_MB],
    SUM(size * 8 / 1024) AS [Allocated_Space_MB],
    SUM(size * 8 / 1024) - SUM(CAST(FILEPROPERTY(name, 'SpaceUsed') AS bigint) * 8 / 1024) AS [Free_Space_MB],
    CAST(100 * (SUM(CAST(FILEPROPERTY(name, 'SpaceUsed') AS bigint) * 8 / 1024.0) / SUM(size * 8 / 1024.0)) AS DECIMAL(5,2)) AS [Percent_Used]
FROM sys.database_files
WHERE type_desc = 'ROWS';

-- Current resource utilization
SELECT 
    @@SERVERNAME AS [Server],
    DB_NAME() AS [Database],
    (SELECT COUNT(*) FROM sys.dm_exec_sessions WHERE is_user_process = 1) AS [User_Connections],
    (SELECT COUNT(*) FROM sys.dm_exec_requests WHERE status = 'running') AS [Active_Requests],
    (SELECT SUM(total_elapsed_time) FROM sys.dm_exec_requests WHERE status = 'running') / 1000 AS [Total_Elapsed_Time_Seconds];

-- Top 5 wait types
SELECT TOP 5
    wait_type AS [Wait_Type],
    wait_time_ms / 1000.0 AS [Wait_Time_Seconds],
    100.0 * wait_time_ms / SUM(wait_time_ms) OVER() AS [Percentage],
    waiting_tasks_count AS [Waiting_Tasks]
FROM sys.dm_os_wait_stats
WHERE wait_type NOT LIKE 'SLEEP%'
AND wait_type NOT LIKE 'XE%'
AND wait_type NOT IN ('BROKER_TASK_STOP','BROKER_TO_FLUSH','SQLTRACE_BUFFER_FLUSH','CLR_AUTO_EVENT','CLR_MANUAL_EVENT')
ORDER BY wait_time_ms DESC;
"@

    Invoke-SqlQuery -ConnectionString $ConnectionString -Query $query -Title "Database Performance Metrics"
}

function Export-Results {
    param (
        [Parameter(Mandatory = $true)]
        [object]$Results,
        
        [Parameter(Mandatory = $true)]
        [string]$FileName
    )
    
    try {
        # Create an exports directory if it doesn't exist
        $exportDir = Join-Path $PSScriptRoot "Monitoring_Exports"
        if (-not (Test-Path $exportDir)) {
            New-Item -ItemType Directory -Path $exportDir | Out-Null
        }
        
        $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
        $filePath = Join-Path $exportDir "${FileName}_${timestamp}.csv"
        
        $Results | Export-Csv -Path $filePath -NoTypeInformation
        
        Write-Host "✅ Results exported to: $filePath" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Error exporting results: $_" -ForegroundColor Red
    }
}

# Main execution
Write-Host "
╔══════════════════════════════════════════════════════╗
║                                                      ║
║  Azure SQL Database Monitoring Tool                  ║
║  Following Azure Best Practices                      ║
║                                                      ║
╚══════════════════════════════════════════════════════╝" -ForegroundColor Cyan

# Check prerequisites
if (-not (Verify-Prerequisites)) {
    Write-Host "Please install required modules and try again." -ForegroundColor Red
    exit 1
}

# Get connection string with Azure Best Practice: Use integrated authentication
$connectionString = Get-ConnectionString

if (-not $connectionString) {
    Write-Host "Missing connection string. Please provide a valid connection string." -ForegroundColor Red
    exit 1
}

Write-Host "`n🔍 Monitoring Azure SQL Database..." -ForegroundColor Cyan
Write-Host "───────────────────────────────────────────────────" -ForegroundColor DarkGray

# Execute requested monitoring functions
switch ($MetricType) {
    "All" { 
        Get-DatabasePerformanceMetrics -ConnectionString $connectionString
        Get-QueryPerformance -ConnectionString $connectionString -Top $Top
        # Add additional functions as needed
    }
    "QueryPerformance" { 
        Get-QueryPerformance -ConnectionString $connectionString -Top $Top 
    }
    "DTU" { 
        Get-DatabasePerformanceMetrics -ConnectionString $connectionString 
    }
    # Add additional metric types as needed
}

# Summary with Azure best practice recommendations
Write-Host "`n🛡️ Security Recommendations:" -ForegroundColor Yellow
Write-Host "  • Verify transparent data encryption (TDE) is enabled for data at rest protection" -ForegroundColor White
Write-Host "  • Consider Azure Defender for SQL for advanced threat protection" -ForegroundColor White
Write-Host "  • Implement Azure Private Link for network isolation" -ForegroundColor White

Write-Host "`n⚡ Performance Recommendations:" -ForegroundColor Yellow
Write-Host "  • Use Azure SQL Elastic Pools for cost-effective scaling of multiple databases" -ForegroundColor White  
Write-Host "  • Enable automatic tuning features in Azure Portal" -ForegroundColor White
Write-Host "  • Consider memory-optimized tables for high-throughput workloads" -ForegroundColor White

Write-Host "`n🔄 Operations Recommendations:" -ForegroundColor Yellow
Write-Host "  • Set up Azure Monitor alerts for proactive notification" -ForegroundColor White
Write-Host "  • Implement Azure SQL Database automatic tuning" -ForegroundColor White
Write-Host "  • Schedule monitoring to run regularly via Azure Automation" -ForegroundColor White