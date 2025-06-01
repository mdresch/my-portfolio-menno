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
            var connStr = config.GetConnectionString(
                environment == "Production" ? "AzureSqlConnection" : "DefaultConnection"
            );
            if (string.IsNullOrEmpty(connStr))
            {
                throw new InvalidOperationException($"No connection string found for environment '{environment}'.");
            }
            optionsBuilder.UseSqlServer(connStr);
            return new PortfolioContext(optionsBuilder.Options);
        }
    }
}
