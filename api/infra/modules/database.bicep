@description('The location used for all deployed resources')
param location string = resourceGroup().location

@description('Tags that will be applied to all resources')
param tags object = {}

@description('The resource token to make resource names unique')
param resourceToken string

@description('The principal ID that needs access to the database')
param principalId string

@description('Environment name for configuration')
param environmentName string

// Azure SQL Server configuration
resource sqlServer 'Microsoft.Sql/servers@2021-11-01' = {
  name: 'sql-${resourceToken}'
  location: location
  tags: tags
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    // Use Azure AD authentication - no SQL admin needed for better security
    administrators: {
      administratorType: 'ActiveDirectory'
      principalType: 'User'
      login: 'admin@${tenant().displayName}'
      sid: principalId
      tenantId: tenant().tenantId
      azureADOnlyAuthentication: false // Allow both AD and SQL auth for flexibility
    }
    // Security best practices
    minimalTlsVersion: '1.2'
    publicNetworkAccess: 'Enabled' // Required for Container Apps access
    restrictOutboundNetworkAccess: 'Disabled'
  }
}

// Configure firewall rules to allow Azure services
resource allowAzureServices 'Microsoft.Sql/servers/firewallRules@2021-11-01' = {
  parent: sqlServer
  name: 'AllowAllWindowsAzureIps'
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '0.0.0.0'
  }
}

// Azure SQL Database - using Basic tier for minimal cost (near-free option)
// Basic tier: ~$4.90/month - lowest cost production option
// Perfect for portfolio apps with light usage
// Specifications: 5 DTU, 2GB storage, local backup
resource sqlDatabase 'Microsoft.Sql/servers/databases@2021-11-01' = {
  parent: sqlServer
  name: 'portfolio-${environmentName}'
  location: location
  tags: tags
  sku: {
    name: 'Basic'
    tier: 'Basic'
    capacity: 5  // 5 DTUs - lowest cost option
  }
  properties: {
    // Basic tier configuration for minimal cost
    maxSizeBytes: 2147483648  // 2GB maximum storage (Basic tier limit)
    
    // Security and backup configuration
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    catalogCollation: 'SQL_Latin1_General_CP1_CI_AS'
    requestedBackupStorageRedundancy: 'Local'  // Cheapest backup option
    
    // High availability not needed for portfolio
    zoneRedundant: false
    
    // License optimization - Basic tier is already cost-optimized
    licenseType: 'LicenseIncluded'
  }
}

// Outputs for application configuration
output sqlServerName string = sqlServer.name
output sqlServerFqdn string = sqlServer.properties.fullyQualifiedDomainName
output sqlDatabaseName string = sqlDatabase.name
output connectionString string = 'Server=tcp:${sqlServer.properties.fullyQualifiedDomainName},1433;Database=${sqlDatabase.name};Authentication=Active Directory Default;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'
