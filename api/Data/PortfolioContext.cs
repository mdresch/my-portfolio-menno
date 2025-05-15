using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using PortfolioApi.Models;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace PortfolioApi.Data
{
    /// <summary>
    /// Database context for portfolio application using Azure SQL
    /// </summary>
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }

        public DbSet<BlogPost> BlogPosts { get; set; } = null!;
        public DbSet<CrossPost> CrossPosts { get; set; } = null!;
        public DbSet<Project> Projects { get; set; } = null!;
        public DbSet<CrossPostStatistics> CrossPostStatistics { get; set; } = null!;
        public DbSet<ContactMessage> ContactMessages { get; set; } = null!;
        public DbSet<Skill> Skills { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure BlogPost entity
            modelBuilder.Entity<BlogPost>()
                .HasIndex(b => b.Slug)
                .IsUnique();

            // Configure CrossPost entity
            modelBuilder.Entity<CrossPost>()
                .HasOne(c => c.BlogPost)
                .WithMany(b => b.CrossPosts)
                .HasForeignKey(c => c.BlogPostId);

            // Configure Statistics
            modelBuilder.Entity<CrossPostStatistics>()
                .HasIndex(s => s.Platform)
                .IsUnique();

            // Azure Best Practice: Add appropriate indexes for Azure SQL performance
            modelBuilder.Entity<CrossPost>()
                .HasIndex(c => new { c.Platform, c.PublishedAt });

            // Azure Best Practice: Configure table options for Azure SQL
            modelBuilder.Entity<BlogPost>()
                .ToTable("BlogPosts", tb => tb.IsTemporal()); // Use SQL Server 2022 temporal tables feature

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
                modelBuilder.Entity<BlogPost>()
                    .ToTable(tb => tb.IsTemporal());
                    
                modelBuilder.Entity<Project>()
                    .ToTable(tb => tb.IsTemporal());
            }

            // Azure Best Practice: Configure relationships for optimal performance
            modelBuilder.Entity<CrossPost>()
                .HasOne(cp => cp.BlogPost)
                .WithMany(bp => bp.CrossPosts)
                .HasForeignKey(cp => cp.BlogPostId)
                .OnDelete(DeleteBehavior.Cascade); // Automatically delete cross posts when blog post is deleted
                
            // Azure Best Practice: Add indexes for frequently queried columns
            modelBuilder.Entity<BlogPost>()
                .HasIndex(b => b.Slug)
                .IsUnique();
                
            modelBuilder.Entity<BlogPost>()
                .HasIndex(b => b.IsPublished);
                
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.IsFeatured);
                
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.DisplayOrder);
                
            modelBuilder.Entity<Skill>()
                .HasIndex(s => s.Category);
                
            modelBuilder.Entity<ContactMessage>()
                .HasIndex(c => c.IsRead);
                
            // Azure Best Practice: Configure query filters
            modelBuilder.Entity<BlogPost>()
                .HasQueryFilter(b => b.IsPublished);
                
            // Azure Best Practice: Configure statistics as a read-only view
            modelBuilder.Entity<CrossPostStatistics>()
                .ToView("vw_CrossPostStatistics")
                .HasNoKey();

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
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false)
                .AddJsonFile($"appsettings.{environment}.json", optional: true)
                .AddEnvironmentVariables();
            var config = builder.Build();
            var optionsBuilder = new DbContextOptionsBuilder<PortfolioContext>();
            var connStr = config.GetConnectionString("AzureSqlConnection");
            if (string.IsNullOrEmpty(connStr))
            {
                throw new InvalidOperationException("No AzureSqlConnection string found for EF Core CLI.");
            }
            optionsBuilder.UseSqlServer(connStr);
            return new PortfolioContext(optionsBuilder.Options);
        }
    }
}
