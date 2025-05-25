-- Script to create a least-privilege application user
-- Run this on your Azure SQL Database

-- Create application user
CREATE USER PortfolioAppUser WITH PASSWORD = 'UseSecureRandomPassword123!';

-- Grant schema permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA::dbo TO PortfolioAppUser;

-- Grant execute permission on specific stored procedures if needed
-- GRANT EXECUTE ON [dbo].[uspGetBlogPosts] TO PortfolioAppUser;

-- Deny dangerous permissions
DENY DROP TABLE TO PortfolioAppUser;
DENY ALTER ON SCHEMA::dbo TO PortfolioAppUser;
DENY CONTROL TO PortfolioAppUser;

-- View and verify permissions
SELECT 
    dp.name AS [User],
    CASE dp.type 
        WHEN 'U' THEN 'Windows Authentication User'
        WHEN 'S' THEN 'SQL Authentication User'
        WHEN 'R' THEN 'Role'
        ELSE dp.type_desc
    END AS [Account Type],
    perm.state_desc AS [Permission State],
    perm.permission_name AS [Permission],
    CASE WHEN obj.name IS NOT NULL THEN obj.name ELSE SCHEMA_NAME(obj.schema_id) END AS [Object]
FROM sys.database_principals dp
LEFT JOIN sys.database_permissions perm ON perm.grantee_principal_id = dp.principal_id
LEFT JOIN sys.objects obj ON obj.object_id = perm.major_id
WHERE dp.name = 'PortfolioAppUser'
ORDER BY [Permission State], [Permission], [Object];