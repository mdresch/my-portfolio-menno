-- Test connection to Azure SQL Database
-- Run this script with: sqlcmd -i test_connection.sql

PRINT 'Testing connection to Azure SQL Database...';
GO

SELECT @@VERSION;
GO
