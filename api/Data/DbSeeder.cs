using Microsoft.Extensions.DependencyInjection;
using PortfolioApi.Data;
using PortfolioApi.Models;
using System;

namespace PortfolioApi.Data
{
    public static class DbSeeder
    {
        public static void Seed(IServiceProvider serviceProvider, string environment)
        {
            using var scope = serviceProvider.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<PortfolioContext>();

            if (environment == "Development")
            {
                SeedDevData(context);
            }
            else if (environment == "Staging")
            {
                SeedStagingData(context);
            }
            else if (environment == "Production")
            {
                SeedProductionData(context);
            }

            context.SaveChanges();
        }

        private static void SeedDevData(PortfolioContext context)
        {
            // Example: Add mock/test data for development
            if (!context.Projects.Any(p => p.Title == "Dev Only Project"))
            {
                context.Projects.Add(new Project
                {
                    Id = 1001,
                    Title = "Dev Only Project",
                    Description = "This project only exists in the development environment.",
                    ImageUrl = "/images/projects/dev-only.jpg",
                    GitHubUrl = "https://github.com/yourusername/dev-only-project",
                    LiveUrl = "https://dev-only-project.com",
                    Created = DateTime.UtcNow,
                    TechnologiesJson = "[\".NET\", \"EF Core\"]"
                });
            }
        }

        private static void SeedStagingData(PortfolioContext context)
        {
            // Example: Add near-production data for staging
            if (!context.Projects.Any(p => p.Title == "Staging Demo Project"))
            {
                context.Projects.Add(new Project
                {
                    Id = 2001,
                    Title = "Staging Demo Project",
                    Description = "This project is seeded in staging for demo purposes.",
                    ImageUrl = "/images/projects/staging-demo.jpg",
                    GitHubUrl = "https://github.com/yourusername/staging-demo-project",
                    LiveUrl = "https://staging-demo-project.com",
                    Created = DateTime.UtcNow,
                    TechnologiesJson = "[\".NET\", \"Azure SQL\"]"
                });
            }
        }

        private static void SeedProductionData(PortfolioContext context)
        {
            // Example: Only seed minimal or real data for production
            // (No-op or add only essential records)
        }
    }
}
