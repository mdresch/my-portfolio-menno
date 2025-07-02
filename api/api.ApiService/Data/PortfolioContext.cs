using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using api.ApiService.Models;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace api.ApiService.Data
{
    /// <summary>
    /// Database context for portfolio application using Azure SQL
    /// </summary>
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }

        public DbSet<Project> Projects { get; set; } = null!;
        public DbSet<ContactMessage> ContactMessages { get; set; } = null!;
        public DbSet<Skill> Skills { get; set; } = null!;
        public DbSet<BlogPost> BlogPosts { get; set; } = null!;
        public DbSet<RagDocument> RagDocuments { get; set; } = null!;
        public DbSet<FriendContact> FriendContacts { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // BlogPost entity configuration
            modelBuilder.Entity<BlogPost>(entity =>
            {
                entity.HasIndex(e => e.Slug).IsUnique();
                entity.HasMany(b => b.CrossPosts)
                      .WithOne(c => c.BlogPost)
                      .HasForeignKey(c => c.BlogPostId)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // Azure Best Practice: Configure indexes for efficient Azure SQL performance
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.Created)
                .IsDescending();

            // Azure Best Practice: Configure SQL Server specific optimizations
            modelBuilder.Entity<ContactMessage>()
                .HasIndex(c => c.IsRead);

            // Azure Best Practice: Configure temporal tables for auditing if using Azure SQL
            if (Database.IsSqlServer())
            {
                modelBuilder.Entity<Project>()
                    .ToTable(tb => tb.IsTemporal());
            }
                
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.IsFeatured);
                
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.DisplayOrder);
                
            modelBuilder.Entity<Skill>()
                .HasIndex(s => s.Category);
                
            modelBuilder.Entity<ContactMessage>()
                .HasIndex(c => c.IsRead);
                
            // FriendContact entity configuration
            modelBuilder.Entity<FriendContact>(entity =>
            {
                entity.HasKey(e => e.Id);
                
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
                    
                entity.Property(e => e.AlienName)
                    .IsRequired()
                    .HasMaxLength(100);
                    
                // Use database-specific default values for SubmittedAt
                if (Database.IsSqlServer())
                {
                    entity.Property(e => e.SubmittedAt)
                        .HasDefaultValueSql("GETUTCDATE()");
                }
                else
                {
                    // SQLite uses datetime('now') for current timestamp
                    entity.Property(e => e.SubmittedAt)
                        .HasDefaultValueSql("datetime('now')");
                }
                    
                // Add indexes for common queries
                entity.HasIndex(e => e.SubmittedAt);
                entity.HasIndex(e => e.Name);
            });
                
            // Add seed data
            // SeedData(modelBuilder); // Commented out to avoid duplicate/conflicting seeding. Use DbSeeder instead.
        }

        // Azure Best Practice: Override SaveChanges to auto-update timestamps
        public override int SaveChanges()
        {
            UpdateTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateTimestamps();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateTimestamps()
        {
            var now = DateTime.UtcNow;

            foreach (var entry in ChangeTracker.Entries<BaseEntity>())
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Entity.Created = now;
                }
                
                if (entry.State == EntityState.Modified)
                {
                    entry.Entity.Updated = now;
                }
            }
        }

        // [Obsolete] Old seed method, now replaced by DbSeeder. Safe to remove after migration validation.
        // private void SeedData(ModelBuilder modelBuilder)
        // {
        //     // ...existing code for seeding...
        // }
    }

    // Design-time factory for EF Core CLI support in CI/CD and local development
    public class PortfolioContextFactory : IDesignTimeDbContextFactory<PortfolioContext>
    {
        public PortfolioContext CreateDbContext(string[] args)
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development";
            var builder = new ConfigurationBuilder()
                // Use current directory for EF Core CLI compatibility
                .SetBasePath(System.IO.Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false)
                .AddJsonFile($"appsettings.{environment}.json", optional: true)
                .AddEnvironmentVariables();
            var config = builder.Build();
            var optionsBuilder = new DbContextOptionsBuilder<PortfolioContext>();
            
            // Azure SQL for production, SQLite for development
            if (environment == "Production")
            {
                var connStr = config.GetConnectionString("AzureSqlConnection");
                if (string.IsNullOrEmpty(connStr))
                {
                    throw new InvalidOperationException("Azure SQL connection string not found for Production environment.");
                }
                
                // Configure for Azure SQL with best practices
                optionsBuilder.UseSqlServer(connStr, options =>
                {
                    // Enable connection resiliency for Azure SQL
                    options.EnableRetryOnFailure(
                        maxRetryCount: 3,
                        maxRetryDelay: TimeSpan.FromSeconds(5),
                        errorNumbersToAdd: null);
                    
                    // Set command timeout for large operations
                    options.CommandTimeout(60);
                });
                
                // Enable sensitive data logging only in non-production for debugging
                if (environment != "Production")
                {
                    optionsBuilder.EnableSensitiveDataLogging();
                }
            }
            else
            {
                // SQLite for development
                var connStr = config.GetConnectionString("DefaultConnection");
                if (string.IsNullOrEmpty(connStr))
                {
                    throw new InvalidOperationException("SQLite connection string not found for Development environment.");
                }
                
                optionsBuilder.UseSqlite(connStr);
                optionsBuilder.EnableSensitiveDataLogging(); // OK for development
            }
            
            return new PortfolioContext(optionsBuilder.Options);
        }
    }
}
