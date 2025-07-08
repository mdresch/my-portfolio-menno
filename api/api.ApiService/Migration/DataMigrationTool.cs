using Microsoft.EntityFrameworkCore;
using api.ApiService.Data;
using api.ApiService.Models;
using System.Text.Json;

namespace api.ApiService.Migration
{
    /// <summary>
    /// Data migration utility to transfer data from SQLite to Azure SQL Database
    /// This tool helps migrate existing data when switching database providers
    /// </summary>
    public class DataMigrationTool
    {
        private readonly string _sqliteConnectionString;
        private readonly string _azureSqlConnectionString;

        public DataMigrationTool(string sqliteConnectionString, string azureSqlConnectionString)
        {
            _sqliteConnectionString = sqliteConnectionString;
            _azureSqlConnectionString = azureSqlConnectionString;
        }

        /// <summary>
        /// Migrate all data from SQLite to Azure SQL Database
        /// </summary>
        public async Task MigrateAllDataAsync()
        {
            Console.WriteLine("Starting data migration from SQLite to Azure SQL Database...");

            // Create contexts for both databases
            var sqliteOptions = new DbContextOptionsBuilder<PortfolioContext>()
                .UseSqlite(_sqliteConnectionString)
                .Options;

            var azureSqlOptions = new DbContextOptionsBuilder<PortfolioContext>()
                .UseSqlServer(_azureSqlConnectionString)
                .Options;

            using var sqliteContext = new PortfolioContext(sqliteOptions);
            using var azureSqlContext = new PortfolioContext(azureSqlOptions);

            // Ensure Azure SQL database is created and up to date
            Console.WriteLine("Ensuring Azure SQL Database schema is up to date...");
            await azureSqlContext.Database.MigrateAsync();

            // Migrate data table by table
            await MigrateProjectsAsync(sqliteContext, azureSqlContext);
            await MigrateContactMessagesAsync(sqliteContext, azureSqlContext);
            await MigrateSkillsAsync(sqliteContext, azureSqlContext);
            await MigrateBlogPostsAsync(sqliteContext, azureSqlContext);
            await MigrateRagDocumentsAsync(sqliteContext, azureSqlContext);
            await MigrateFriendContactsAsync(sqliteContext, azureSqlContext);

            Console.WriteLine("Data migration completed successfully!");
        }

        private async Task MigrateProjectsAsync(PortfolioContext sourceContext, PortfolioContext targetContext)
        {
            Console.WriteLine("Migrating Projects...");
            
            var projects = await sourceContext.Projects.ToListAsync();
            if (projects.Any())
            {
                // Clear existing data in target
                targetContext.Projects.RemoveRange(await targetContext.Projects.ToListAsync());
                
                // Add migrated data
                await targetContext.Projects.AddRangeAsync(projects);
                await targetContext.SaveChangesAsync();
                
                Console.WriteLine($"Migrated {projects.Count} projects");
            }
            else
            {
                Console.WriteLine("No projects to migrate");
            }
        }

        private async Task MigrateContactMessagesAsync(PortfolioContext sourceContext, PortfolioContext targetContext)
        {
            Console.WriteLine("Migrating Contact Messages...");
            
            var contactMessages = await sourceContext.ContactMessages.ToListAsync();
            if (contactMessages.Any())
            {
                targetContext.ContactMessages.RemoveRange(await targetContext.ContactMessages.ToListAsync());
                await targetContext.ContactMessages.AddRangeAsync(contactMessages);
                await targetContext.SaveChangesAsync();
                
                Console.WriteLine($"Migrated {contactMessages.Count} contact messages");
            }
            else
            {
                Console.WriteLine("No contact messages to migrate");
            }
        }

        private async Task MigrateSkillsAsync(PortfolioContext sourceContext, PortfolioContext targetContext)
        {
            Console.WriteLine("Migrating Skills...");
            
            var skills = await sourceContext.Skills.ToListAsync();
            if (skills.Any())
            {
                targetContext.Skills.RemoveRange(await targetContext.Skills.ToListAsync());
                await targetContext.Skills.AddRangeAsync(skills);
                await targetContext.SaveChangesAsync();
                
                Console.WriteLine($"Migrated {skills.Count} skills");
            }
            else
            {
                Console.WriteLine("No skills to migrate");
            }
        }

        private async Task MigrateBlogPostsAsync(PortfolioContext sourceContext, PortfolioContext targetContext)
        {
            Console.WriteLine("Migrating Blog Posts...");
            
            var blogPosts = await sourceContext.BlogPosts
                .Include(b => b.CrossPosts)
                .ToListAsync();
                
            if (blogPosts.Any())
            {
                // Remove existing blog posts and cross posts
                targetContext.BlogPosts.RemoveRange(await targetContext.BlogPosts.Include(b => b.CrossPosts).ToListAsync());
                
                // Add migrated data
                await targetContext.BlogPosts.AddRangeAsync(blogPosts);
                await targetContext.SaveChangesAsync();
                
                Console.WriteLine($"Migrated {blogPosts.Count} blog posts");
            }
            else
            {
                Console.WriteLine("No blog posts to migrate");
            }
        }

        private async Task MigrateRagDocumentsAsync(PortfolioContext sourceContext, PortfolioContext targetContext)
        {
            Console.WriteLine("Migrating RAG Documents...");
            
            var ragDocuments = await sourceContext.RagDocuments.ToListAsync();
            if (ragDocuments.Any())
            {
                targetContext.RagDocuments.RemoveRange(await targetContext.RagDocuments.ToListAsync());
                await targetContext.RagDocuments.AddRangeAsync(ragDocuments);
                await targetContext.SaveChangesAsync();
                
                Console.WriteLine($"Migrated {ragDocuments.Count} RAG documents");
            }
            else
            {
                Console.WriteLine("No RAG documents to migrate");
            }
        }

        private async Task MigrateFriendContactsAsync(PortfolioContext sourceContext, PortfolioContext targetContext)
        {
            Console.WriteLine("Migrating Friend Contacts...");
            
            var friendContacts = await sourceContext.FriendContacts.ToListAsync();
            if (friendContacts.Any())
            {
                targetContext.FriendContacts.RemoveRange(await targetContext.FriendContacts.ToListAsync());
                await targetContext.FriendContacts.AddRangeAsync(friendContacts);
                await targetContext.SaveChangesAsync();
                
                Console.WriteLine($"Migrated {friendContacts.Count} friend contacts");
            }
            else
            {
                Console.WriteLine("No friend contacts to migrate");
            }
        }

        /// <summary>
        /// Validate that the migration was successful by comparing record counts
        /// </summary>
        public async Task ValidateMigrationAsync()
        {
            Console.WriteLine("Validating migration...");

            var sqliteOptions = new DbContextOptionsBuilder<PortfolioContext>()
                .UseSqlite(_sqliteConnectionString)
                .Options;

            var azureSqlOptions = new DbContextOptionsBuilder<PortfolioContext>()
                .UseSqlServer(_azureSqlConnectionString)
                .Options;

            using var sqliteContext = new PortfolioContext(sqliteOptions);
            using var azureSqlContext = new PortfolioContext(azureSqlOptions);

            // Compare record counts
            var validationResults = new List<(string Table, int SQLiteCount, int AzureSQLCount, bool Match)>();

            validationResults.Add(("Projects", 
                await sqliteContext.Projects.CountAsync(), 
                await azureSqlContext.Projects.CountAsync(), 
                true));

            validationResults.Add(("ContactMessages", 
                await sqliteContext.ContactMessages.CountAsync(), 
                await azureSqlContext.ContactMessages.CountAsync(), 
                true));

            validationResults.Add(("Skills", 
                await sqliteContext.Skills.CountAsync(), 
                await azureSqlContext.Skills.CountAsync(), 
                true));

            validationResults.Add(("BlogPosts", 
                await sqliteContext.BlogPosts.CountAsync(), 
                await azureSqlContext.BlogPosts.CountAsync(), 
                true));

            validationResults.Add(("RagDocuments", 
                await sqliteContext.RagDocuments.CountAsync(), 
                await azureSqlContext.RagDocuments.CountAsync(), 
                true));

            validationResults.Add(("FriendContacts", 
                await sqliteContext.FriendContacts.CountAsync(), 
                await azureSqlContext.FriendContacts.CountAsync(), 
                true));

            // Update match status
            for (int i = 0; i < validationResults.Count; i++)
            {
                var result = validationResults[i];
                validationResults[i] = (result.Table, result.SQLiteCount, result.AzureSQLCount, 
                    result.SQLiteCount == result.AzureSQLCount);
            }

            // Display results
            Console.WriteLine("\nMigration Validation Results:");
            Console.WriteLine("================================");
            foreach (var result in validationResults)
            {
                var status = result.Match ? "✓ PASS" : "✗ FAIL";
                Console.WriteLine($"{result.Table}: SQLite={result.SQLiteCount}, AzureSQL={result.AzureSQLCount} {status}");
            }

            var allMatch = validationResults.All(r => r.Match);
            Console.WriteLine($"\nOverall Migration Status: {(allMatch ? "✓ SUCCESS" : "✗ FAILED")}");

            if (!allMatch)
            {
                throw new InvalidOperationException("Migration validation failed - record counts do not match!");
            }
        }

        /// <summary>
        /// Create a backup of the SQLite database before migration
        /// </summary>
        public async Task CreateBackupAsync(string backupPath)
        {
            Console.WriteLine($"Creating backup of SQLite database to {backupPath}...");
            
            var sqliteDbPath = _sqliteConnectionString.Replace("Data Source=", "");
            if (File.Exists(sqliteDbPath))
            {
                File.Copy(sqliteDbPath, backupPath, true);
                Console.WriteLine("Backup created successfully");
            }
            else
            {
                Console.WriteLine("Warning: SQLite database file not found for backup");
            }
        }
    }
}
