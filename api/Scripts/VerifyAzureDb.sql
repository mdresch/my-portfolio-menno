-- Initialize and verify Azure SQL Database
-- This script will help verify and set up the Azure database

-- Display SQL Server version
PRINT 'SQL Server Version:';
SELECT @@VERSION;
GO

-- Display current database name
PRINT 'Current Database:';
SELECT DB_NAME() AS CurrentDatabase;
GO

-- Check if tables exist
PRINT 'Checking for existing tables:';
SELECT 
    TABLE_SCHEMA,
    TABLE_NAME,
    (SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS 
     WHERE TABLE_SCHEMA = t.TABLE_SCHEMA AND TABLE_NAME = t.TABLE_NAME) AS ColumnCount
FROM 
    INFORMATION_SCHEMA.TABLES t
WHERE 
    TABLE_TYPE = 'BASE TABLE'
ORDER BY 
    TABLE_SCHEMA, TABLE_NAME;
GO

-- Check for EF Core migration history
PRINT 'Checking EF Core migration history:';
IF OBJECT_ID('__EFMigrationsHistory') IS NOT NULL
BEGIN
    SELECT MigrationId, ProductVersion FROM __EFMigrationsHistory ORDER BY MigrationId;
END
ELSE
BEGIN
    PRINT 'Migration history table does not exist yet';
END
GO

-- Check database size
PRINT 'Database size information:';
SELECT 
    DB_NAME() AS DatabaseName,
    CONVERT(DECIMAL(10,2), SUM(size * 8) / 1024.0) AS SizeInMB
FROM 
    sys.database_files
WHERE 
    type_desc = 'ROWS';
GO

-- Check database configuration
PRINT 'Database configuration:';
SELECT
    compatibility_level,
    collation_name,
    recovery_model_desc,
    snapshot_isolation_state_desc,
    is_read_committed_snapshot_on
FROM
    sys.databases
WHERE
    name = DB_NAME();
GO
