using api.ApiService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting; // For IWebHostEnvironment
using Microsoft.Extensions.Logging; // For ILogger
using System;
using System.Collections.Generic;
using System.Globalization; // For CultureInfo if doing custom date parsing
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions; // For Slugify
using System.Threading.Tasks;

namespace api.ApiService.Data
{
    // --- Helper DTOs ---
    // These are typically defined in the namespace, outside the DbSeeder class,
    // especially if they represent the structure of external JSON files.


    public class BlogPostDto
    {
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Excerpt { get; set; }
        public string? Slug { get; set; } // If slug is in JSON, otherwise it's generated
        public string? PublishedDateString { get; set; } // Use a string for flexible date parsing
        public DateTime? PublishedDate { get; set; } // This will be populated after parsing
        public string? Author { get; set; }
        public bool IsPublished { get; set; } = false; // Default to false
        public string? CoverImageUrl { get; set; }
        public string? Categories { get; set; }
        public string? Tags { get; set; }
    }

    public class SkillDto
    {
        public string? Name { get; set; }
        public int ProficiencyLevel { get; set; }
        public int YearsOfExperience { get; set; }
        public string? Category { get; set; }
        public string? Description { get; set; }
        public string? IconUrl { get; set; }
        public int? DisplayOrder { get; set; }
        public bool IsFeatured { get; set; }
    }

    // If you have a projects.json, define its DTO here
    // public class ProjectDto
    // {
    //     public string Name { get; set; }
    //     public string Description { get; set; }
    //     // ... other properties
    // }

    public static class DbSeeder
    {
        // --- Main Seeding Orchestrator ---
        public static async Task SeedDataAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            logger.LogInformation("Starting data seeding process...");

            await SeedBlogPostsAsync(context, env, logger);
            await SeedSkillsAsync(context, env, logger);
            // await SeedProjectsAsync(context, env, logger); // Uncomment when Project entity and seeder are ready

            logger.LogInformation("Data seeding process completed.");
        }

        // --- Blog Post Seeding ---
        private static async Task SeedBlogPostsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            try
            {
                if (await context.BlogPosts.AnyAsync())
                {
                    logger.LogInformation("Blog posts already exist. Skipping blog post seeding.");
                    return;
                }

                var filePath = Path.Combine(env.ContentRootPath, "blogposts.json");
                if (!File.Exists(filePath))
                {
                    logger.LogWarning("'blogposts.json' not found at {FilePath}. Skipping blog post seeding.", filePath);
                    return;
                }

                var jsonData = await File.ReadAllTextAsync(filePath);
                var blogPostDtos = JsonSerializer.Deserialize<List<BlogPostDto>>(jsonData, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (blogPostDtos == null || !blogPostDtos.Any())
                {
                    logger.LogInformation("No blog posts found in 'blogposts.json' or the file is empty.");
                    return;
                }

                var blogPostsToSeed = new List<BlogPost>();
                foreach (var dto in blogPostDtos)
                {
                    // Defensive: handle possible nulls from BlogPostDto
                    string title = dto.Title ?? string.Empty;
                    string slug = string.IsNullOrWhiteSpace(dto.Slug) ? Slugify(title) : Slugify(dto.Slug ?? string.Empty);
                    if (string.IsNullOrWhiteSpace(slug))
                    {
                        logger.LogWarning("Skipping blog post with title '{Title}' due to inability to generate a valid slug.", title);
                        continue;
                    }

                    if (await context.BlogPosts.AnyAsync(b => b.Slug == slug) || blogPostsToSeed.Any(b => b.Slug == slug))
                    {
                        logger.LogWarning("Skipping blog post with title '{Title}' due to duplicate slug: '{Slug}'.", title, slug);
                        continue;
                    }

                    DateTime? publishedDate = ParseDate(dto.PublishedDateString ?? string.Empty, logger);
                    if (!string.IsNullOrWhiteSpace(dto.PublishedDateString) && publishedDate == null)
                    {
                        logger.LogWarning("Could not parse PublishedDateString '{DateString}' for blog post '{Title}'. It will be null.", dto.PublishedDateString, title);
                    }

                    blogPostsToSeed.Add(new BlogPost
                    {
                        Title = title,
                        Content = dto.Content ?? string.Empty,
                        Excerpt = dto.Excerpt ?? string.Empty,
                        Slug = slug,
                        PublishedDate = publishedDate ?? dto.PublishedDate,
                        Author = dto.Author ?? string.Empty,
                        IsPublished = dto.IsPublished,
                        CoverImageUrl = dto.CoverImageUrl,
                        Categories = dto.Categories,
                        Tags = dto.Tags
                    });
                }

                if (blogPostsToSeed.Any())
                {
                    await context.BlogPosts.AddRangeAsync(blogPostsToSeed);
                    await context.SaveChangesAsync();
                    logger.LogInformation("Successfully seeded {Count} blog posts.", blogPostsToSeed.Count);
                }
                else
                {
                    logger.LogInformation("No new blog posts were eligible for seeding.");
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while seeding blog posts.");
            }
        }

        // --- Skill Seeding ---

        private static async Task SeedSkillsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            try
            {
                if (await context.Skills.AnyAsync())
                {
                    logger.LogInformation("Skills already exist. Skipping skill seeding.");
                    return;
                }

                // Option 1: Hardcode skills (update to match Skill model)
                var skillsToSeed = new List<Skill>
                {
                    new Skill { Name = "C#", Category = "Language", ProficiencyLevel = 5, YearsOfExperience = 7, Description = ".NET, LINQ, async/await", IconUrl = "/icons/csharp.svg" },
                    new Skill { Name = ".NET Core", Category = "Backend", ProficiencyLevel = 5, YearsOfExperience = 5, Description = ".NET Core, ASP.NET, Entity Framework", IconUrl = "/icons/dotnet.svg" },
                    new Skill { Name = "ASP.NET Core", Category = "Backend", ProficiencyLevel = 5, YearsOfExperience = 5, Description = "Web APIs, MVC, Razor Pages", IconUrl = "/icons/aspnetcore.svg" },
                    new Skill { Name = "Entity Framework Core", Category = "ORM", ProficiencyLevel = 4, YearsOfExperience = 4, Description = "EF Core, LINQ, Migrations", IconUrl = "/icons/efcore.svg" },
                    new Skill { Name = "JavaScript", Category = "Frontend", ProficiencyLevel = 4, YearsOfExperience = 6, Description = "ES6+, DOM, Fetch API", IconUrl = "/icons/javascript.svg" },
                    new Skill { Name = "React", Category = "Frontend", ProficiencyLevel = 4, YearsOfExperience = 4, Description = "Hooks, Context, Next.js", IconUrl = "/icons/react.svg" },
                    new Skill { Name = "SQL Server", Category = "Database", ProficiencyLevel = 4, YearsOfExperience = 5, Description = "T-SQL, Query Optimization", IconUrl = "/icons/sqlserver.svg" },
                    new Skill { Name = "Git", Category = "Tool", ProficiencyLevel = 4, YearsOfExperience = 7, Description = "GitHub, GitLab, CI/CD", IconUrl = "/icons/git.svg" }
                };

                // Option 2: Load from a skills.json file (Uncomment and adapt if needed)
                // var filePath = Path.Combine(env.ContentRootPath, "skills.json");
                // if (File.Exists(filePath))
                // {
                //     var jsonData = await File.ReadAllTextAsync(filePath);
                //     var skillDtos = JsonSerializer.Deserialize<List<SkillDto>>(jsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                //     if (skillDtos != null && skillDtos.Any())
                //     {
                //         logger.LogInformation("Loading skills from skills.json");
                //         skillsToSeed.Clear();
                //         foreach (var dto in skillDtos)
                //         {
                //             if (!skillsToSeed.Any(s => s.Name != null && s.Name.Equals(dto.Name, StringComparison.OrdinalIgnoreCase)))
                //             {
                //                 skillsToSeed.Add(new Skill {
                //                     Name = dto.Name ?? string.Empty,
                //                     Category = dto.Category ?? string.Empty,
                //                     ProficiencyLevel = dto.ProficiencyLevel,
                //                     YearsOfExperience = dto.YearsOfExperience,
                //                     Description = dto.Description,
                //                     IconUrl = dto.IconUrl
                //                 });
                //             }
                //         }
                //     }
                // }

                if (skillsToSeed.Any())
                {
                    var existingSkillNames = await context.Skills.Select(s => s.Name).ToListAsync();
                    var newSkills = skillsToSeed.Where(s => !existingSkillNames.Contains(s.Name, StringComparer.OrdinalIgnoreCase)).ToList();

                    if (newSkills.Any())
                    {
                        await context.Skills.AddRangeAsync(newSkills);
                        await context.SaveChangesAsync();
                        logger.LogInformation("Successfully seeded {Count} new skills.", newSkills.Count);
                    }
                    else
                    {
                        logger.LogInformation("No new skills to seed (all provided skills might already exist).");
                    }
                }
                else
                {
                    logger.LogInformation("No skills were configured for seeding.");
                }
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while seeding skills.");
            }
        }

        // --- Project Seeding (Placeholder) ---
        // private static async Task SeedProjectsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        // {
        //     try
        //     {
        //         if (await context.Projects.AnyAsync()) // Assuming you have a DbSet<Project> Projects
        //         {
        //             logger.LogInformation("Projects already exist. Skipping project seeding.");
        //             return;
        //         }
        //
        //         // var filePath = Path.Combine(env.ContentRootPath, "projects.json");
        //         // if (!File.Exists(filePath))
        //         // {
        //         //     logger.LogWarning("'projects.json' not found. Skipping project seeding.");
        //         //     return;
        //         // }
        //         //
        //         // var jsonData = await File.ReadAllTextAsync(filePath);
        //         // var projectDtos = JsonSerializer.Deserialize<List<ProjectDto>>(jsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        //         //
        //         // if (projectDtos == null || !projectDtos.Any())
        //         // {
        //         //     logger.LogInformation("No projects found in 'projects.json' or file is empty.");
        //         //     return;
        //         // }
        //         //
        //         // var projectsToSeed = projectDtos.Select(dto => new Project
        //         // {
        //         //     Name = dto.Name,
        //         //     Description = dto.Description,
        //         //     // ... map other properties ...
        //         // }).ToList();
        //         //
        //         // if (projectsToSeed.Any())
        //         // {
        //         //     await context.Projects.AddRangeAsync(projectsToSeed);
        //         //     await context.SaveChangesAsync();
        //         //     logger.LogInformation("Successfully seeded {Count} projects.", projectsToSeed.Count);
        //         // }
        //     }
        //     catch (Exception ex)
        //     {
        //         logger.LogError(ex, "An error occurred while seeding projects.");
        //     }
        // }


        // --- Helper Utilities ---
        private static DateTime? ParseDate(string dateString, ILogger logger)
        {
            if (string.IsNullOrWhiteSpace(dateString))
            {
                return null;
            }

            // Try ISO 8601 format first (recommended)
            if (DateTime.TryParse(dateString, CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal | DateTimeStyles.AssumeUniversal, out DateTime result))
            {
                return result.ToUniversalTime();
            }

            // Add other common formats if necessary
            string[] formats = { "MM/dd/yyyy", "yyyy-MM-dd", "dd-MM-yyyy", "yyyy/MM/dd" }; // Add more as needed
            if (DateTime.TryParseExact(dateString, formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out result))
            {
                return result; // Consider if this should also be ToUniversalTime()
            }

            logger.LogWarning("Could not parse date string: {DateString}", dateString);
            return null;
        }

        private static string Slugify(string phrase)
        {
            if (string.IsNullOrWhiteSpace(phrase))
            {
                return string.Empty;
            }

            // Remove invalid chars
            string str = Regex.Replace(phrase, @"[^a-zA-Z0-9\s-]", "");
            // Convert multiple spaces/hyphens into one hyphen
            str = Regex.Replace(str, @"[\s-]+", "-").Trim('-');
            // Convert to lowercase
            str = str.ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(str)) // if phrase consisted only of invalid chars
                return string.Empty;

            return str;
        }
    }
}
