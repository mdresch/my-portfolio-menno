using Microsoft.Extensions.DependencyInjection;
using PortfolioApi.Data;
using PortfolioApi.Models;
using System;
using System.IO;
using System.Text.Json;

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
            // Automated migration from JSON file
            var jsonPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "content", "project", "projects.json");
            if (File.Exists(jsonPath))
            {
                var json = File.ReadAllText(jsonPath);
                var projects = JsonSerializer.Deserialize<List<ProjectJson>>(json);
                if (projects != null)
                {
                    foreach (var proj in projects)
                    {
                        if (proj?.Title == null) continue;
                        if (!context.Projects.Any(p => p.Title == proj.Title))
                        {
                            context.Projects.Add(new Project
                            {
                                Title = proj.Title ?? string.Empty,
                                Description = proj.Description ?? string.Empty,
                                ImageUrl = proj.ImageUrl ?? string.Empty,
                                GitHubUrl = proj.GitHubUrl ?? string.Empty,
                                LiveUrl = proj.LiveUrl ?? string.Empty,
                                Created = proj.Created ?? DateTime.UtcNow,
                                TechnologiesJson = JsonSerializer.Serialize(proj.Technologies ?? new List<string>())
                            });
                        }
                    }
                }
            }

            // Example: Add mock/test data for development
            if (!context.Projects.Any(p => p.Title == "Dev Only Project"))
            {
                context.Projects.Add(new Project
                {
                    // Id is omitted to let SQL Server auto-generate it
                    Title = "Dev Only Project",
                    Description = "This project only exists in the development environment.",
                    ImageUrl = "/images/projects/dev-only.jpg",
                    GitHubUrl = "https://github.com/yourusername/dev-only-project",
                    LiveUrl = "https://dev-only-project.com",
                    Created = DateTime.UtcNow,
                    TechnologiesJson = "[\".NET\", \"EF Core\"]"
                });
            }
            // Example: Add another project
            if (!context.Projects.Any(p => p.Title == "Portfolio Website"))
            {
                context.Projects.Add(new Project
                {
                    Title = "Portfolio Website",
                    Description = "A personal portfolio website built with Next.js and .NET API backend, deployed on Azure.",
                    ImageUrl = "/images/projects/portfolio.jpg",
                    GitHubUrl = "https://github.com/yourusername/portfolio-website",
                    LiveUrl = "https://your-portfolio.com",
                    Created = DateTime.UtcNow,
                    TechnologiesJson = "[\"Next.js\", \".NET\", \"Azure SQL\", \"EF Core\"]"
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
                    // Id is omitted to let SQL Server auto-generate it
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

        private class ProjectJson
        {
            public string? Title { get; set; }
            public string? Description { get; set; }
            public string? ImageUrl { get; set; }
            public string? GitHubUrl { get; set; }
            public string? LiveUrl { get; set; }
            public DateTime? Created { get; set; }
            public List<string>? Technologies { get; set; }
        }
    }
}
