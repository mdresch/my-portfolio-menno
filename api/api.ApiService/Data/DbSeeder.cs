using api.ApiService.Models;
using api.ApiService.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting; // For IWebHostEnvironment
using Microsoft.Extensions.Logging; // For ILogger
using System;
using System.Collections.Generic;
using System.Globalization; // For CultureInfo if doing custom date parsing
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
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
        
        // Handle both string and array formats for categories
        [JsonPropertyName("categories")]
        public JsonElement CategoriesElement { get; set; }
        
        [JsonIgnore]
        public string? Categories 
        { 
            get 
            {
                if (CategoriesElement.ValueKind == JsonValueKind.Array)
                {
                    var categories = CategoriesElement.EnumerateArray()
                        .Select(element => element.GetString())
                        .Where(s => !string.IsNullOrEmpty(s))
                        .ToArray();
                    return string.Join(", ", categories);
                }
                else if (CategoriesElement.ValueKind == JsonValueKind.String)
                {
                    return CategoriesElement.GetString();
                }
                return null;
            }
        }
        
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
    public class ProjectDto
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public string? GitHubUrl { get; set; }
        public string? LiveUrl { get; set; }
        public DateTime? Created { get; set; }
        public List<string>? Technologies { get; set; }
    }

    public static class DbSeeder
    {
        // --- Main Seeding Orchestrator ---
        public static async Task SeedDataAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            logger.LogInformation("Starting data seeding process...");

            await SeedBlogPostsAsync(context, env, logger);
            await SeedSkillsAsync(context, env, logger);
            await SeedProjectsAsync(context, env, logger);
            await SeedBlogRagDocumentsAsync(context, env, logger);
            await SeedRiskRagDocumentsAsync(context, env, logger);
            await SeedProjectRagDocumentsAsync(context, env, logger);

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

                // Look for JSON in workspace-level content folder
                var filePath = Path.Combine(env.ContentRootPath, "..", "..", "content", "blog", "blogposts.json");
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

                var existingSlugs = await context.BlogPosts.Select(b => b.Slug).ToListAsync();
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

                    if (existingSlugs.Contains(slug) || blogPostsToSeed.Any(b => b.Slug == slug))
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
                var existingSkillNames = await context.Skills.Select(s => s.Name.ToLower()).ToListAsync();
                List<Skill> skillsToSeed;
                var skillsFile = Path.Combine(env.ContentRootPath, "skills.json");
                if (File.Exists(skillsFile))
                {
                    logger.LogInformation("Loading skills from skills.json");
                    var jsonData = await File.ReadAllTextAsync(skillsFile);
                    var skillDtos = JsonSerializer.Deserialize<List<SkillDto>>(jsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })
                                     ?? new List<SkillDto>();
                    skillsToSeed = skillDtos
                        .Where(dto => !string.IsNullOrWhiteSpace(dto.Name))
                        .Select(dto => new Skill {
                            Name = dto.Name!,
                            Category = dto.Category ?? string.Empty,
                            ProficiencyLevel = dto.ProficiencyLevel,
                            YearsOfExperience = dto.YearsOfExperience,
                            Description = dto.Description,
                            IconUrl = dto.IconUrl
                        })
                        .ToList();
                }
                else
                {
                    // Fallback: hardcoded skills
                    skillsToSeed = new List<Skill>
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
                }

                // Filter out already existing skills
                var newSkills = skillsToSeed
                    .Where(s => !existingSkillNames.Contains(s.Name.ToLower()))
                    .ToList();

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
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while seeding skills.");
            }
        }

        // --- Project Seeding ---
        private static async Task SeedProjectsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            try
            {
                if (await context.Projects.AnyAsync())
                {
                    logger.LogInformation("Projects already exist. Skipping project seeding.");
                    return;
                }
                var filePath = Path.Combine(env.ContentRootPath, "..", "..", "content", "project", "projects.json");
                if (!File.Exists(filePath))
                {
                    logger.LogWarning("'projects.json' not found at {FilePath}. Skipping project seeding.", filePath);
                    return;
                }
                var jsonData = await File.ReadAllTextAsync(filePath);
                var projectDtos = JsonSerializer.Deserialize<List<ProjectDto>>(jsonData, new JsonSerializerOptions { PropertyNameCaseInsensitive = true })
                                  ?? new List<ProjectDto>();
                if (!projectDtos.Any())
                {
                    logger.LogInformation("No projects found in 'projects.json' or the file is empty.");
                    return;
                }
                var existingTitles = await context.Projects.Select(p => p.Title).ToListAsync();
                var entities = projectDtos.Select(dto => new Project
                {
                    Title = dto.Title ?? string.Empty,
                    Slug = Slugify(dto.Title ?? string.Empty),
                    Description = dto.Description ?? string.Empty,
                    ImageUrl = dto.ImageUrl,
                    GitHubUrl = dto.GitHubUrl,
                    LiveUrl = dto.LiveUrl,
                    Created = dto.Created ?? DateTime.UtcNow,
                    Technologies = dto.Technologies
                }).ToList();
                // Filter new entities by title to avoid duplicates
                var newEntities = entities.Where(e => !existingTitles.Contains(e.Title)).ToList();
                if (!newEntities.Any())
                {
                    logger.LogInformation("No new projects to seed.");
                    return;
                }
                context.ChangeTracker.Clear();
                await context.Projects.AddRangeAsync(newEntities);
                await context.SaveChangesAsync();
                logger.LogInformation("Seeded {Count} projects.", newEntities.Count);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while seeding projects.");
            }
        }


        // --- RAG Document Seeding ---
        private static async Task SeedBlogRagDocumentsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            // Look for JSON in workspace-level data folder
            var filePath = Path.Combine(env.ContentRootPath, "..", "..", "data", "blog-rag-documents.json");
            if (!File.Exists(filePath)) { logger.LogWarning("blog-rag-documents.json not found. Skipping RAG blog seeding."); return; }
            try {
                var json = await File.ReadAllTextAsync(filePath);
                var docs = JsonSerializer.Deserialize<List<RagDocumentDto>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new List<RagDocumentDto>();
                logger.LogInformation("Loaded {Count} RAG blog documents from JSON file.", docs.Count);
                
                // Map RagDocumentDto to your entity, e.g. RagDocument
                var entities = docs.Select(d => new RagDocument {
                    Id = d.Id,
                    Content = d.Content,
                    Source = d.Metadata.Source,
                    Title = d.Metadata.Title,
                    Date = d.Metadata.Date,
                    Tags = string.Join(',', d.Metadata.Tags)
                }).ToList();
                // Deduplicate by Id to avoid duplicate-tracking errors
                entities = entities.GroupBy(e => e.Id).Select(g => g.First()).ToList();
                logger.LogInformation("After deduplication: {Count} unique RAG blog documents.", entities.Count);
                
                // Filter out already existing documents by Id
                // Clear any tracked entities before querying existing IDs
                context.ChangeTracker.Clear();
                var existingIds = await context.RagDocuments.AsNoTracking().Select(r => r.Id).ToListAsync();
                logger.LogInformation("Found {Count} existing RAG documents in database.", existingIds.Count);
                
                var newEntities = entities.Where(e => !existingIds.Contains(e.Id)).ToList();
                logger.LogInformation("After filtering existing IDs: {Count} new RAG blog documents to seed.", newEntities.Count);
                
                if (!newEntities.Any()) {
                    logger.LogInformation("No new RAG blog documents to seed.");
                    return;
                }
                // Detach any tracked entities before adding new ones
                context.ChangeTracker.Clear();
                await context.RagDocuments.AddRangeAsync(newEntities);
                await context.SaveChangesAsync();
                // Detach tracked entities to avoid duplicate tracking in subsequent seeding
                context.ChangeTracker.Clear();
                logger.LogInformation("Seeded {Count} RAG blog documents.", newEntities.Count);
            } catch (Exception ex) {
                logger.LogError(ex, "Error seeding RAG blog documents.");
            }
        }

        private static async Task SeedRiskRagDocumentsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            // Look for JSON in workspace-level data folder
            var filePath = Path.Combine(env.ContentRootPath, "..", "..", "data", "blog-rag-risk-documents.json");
            if (!File.Exists(filePath)) { logger.LogWarning("blog-rag-risk-documents.json not found. Skipping RAG risk seeding."); return; }
            try {
                var json = await File.ReadAllTextAsync(filePath);
                var docs = JsonSerializer.Deserialize<List<RagDocumentDto>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new List<RagDocumentDto>();
                logger.LogInformation("Loaded {Count} RAG risk documents from JSON file.", docs.Count);
                
                var entities = docs.Select(d => new RagDocument {
                    Id = d.Id,
                    Content = d.Content,
                    Source = d.Metadata.Source,
                    Title = d.Metadata.Title,
                    Date = d.Metadata.Date,
                    Tags = string.Join(',', d.Metadata.Tags)
                }).ToList();
                // Deduplicate by Id to avoid duplicate-tracking errors
                entities = entities.GroupBy(e => e.Id).Select(g => g.First()).ToList();
                logger.LogInformation("After deduplication: {Count} unique RAG risk documents.", entities.Count);
                
                // Filter out already existing documents by Id
                // Clear any tracked entities before querying existing IDs
                context.ChangeTracker.Clear();
                var existingIds = await context.RagDocuments.AsNoTracking().Select(r => r.Id).ToListAsync();
                logger.LogInformation("Found {Count} existing RAG documents in database.", existingIds.Count);
                
                var newEntities = entities.Where(e => !existingIds.Contains(e.Id)).ToList();
                logger.LogInformation("After filtering existing IDs: {Count} new RAG risk documents to seed.", newEntities.Count);
                
                if (!newEntities.Any()) {
                    logger.LogInformation("No new RAG risk documents to seed.");
                    return;
                }
                // Detach any tracked entities before adding new ones
                context.ChangeTracker.Clear();
                await context.RagDocuments.AddRangeAsync(newEntities);
                await context.SaveChangesAsync();
                context.ChangeTracker.Clear();
                logger.LogInformation("Seeded {Count} RAG risk documents.", newEntities.Count);
            } catch (Exception ex) {
                logger.LogError(ex, "Error seeding RAG risk documents.");
            }
        }

        private static async Task SeedProjectRagDocumentsAsync(PortfolioContext context, IWebHostEnvironment env, ILogger logger)
        {
            // Look for JSON in workspace-level data folder
            var filePath = Path.Combine(env.ContentRootPath, "..", "..", "data", "project-rag-documents.json");
            if (!File.Exists(filePath)) { logger.LogWarning("project-rag-documents.json not found. Skipping RAG project seeding."); return; }
            try {
                var json = await File.ReadAllTextAsync(filePath);
                var docs = JsonSerializer.Deserialize<List<RagDocumentDto>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new List<RagDocumentDto>();
                logger.LogInformation("Loaded {Count} RAG project documents from JSON file.", docs.Count);
                
                var entities = docs.Select(d => new RagDocument {
                    Id = d.Id,
                    Content = d.Content,
                    Source = d.Metadata.Source,
                    Title = d.Metadata.Title,
                    Date = d.Metadata.Date,
                    Tags = string.Join(',', d.Metadata.Tags)
                }).ToList();
                // Deduplicate by Id to avoid duplicate-tracking errors
                entities = entities.GroupBy(e => e.Id).Select(g => g.First()).ToList();
                logger.LogInformation("After deduplication: {Count} unique RAG project documents.", entities.Count);
                
                // Filter out already existing documents by Id
                // Clear any tracked entities before querying existing IDs
                context.ChangeTracker.Clear();
                var existingIds = await context.RagDocuments.AsNoTracking().Select(r => r.Id).ToListAsync();
                logger.LogInformation("Found {Count} existing RAG documents in database.", existingIds.Count);
                
                var newEntities = entities.Where(e => !existingIds.Contains(e.Id)).ToList();
                logger.LogInformation("After filtering existing IDs: {Count} new RAG project documents to seed.", newEntities.Count);
                
                if (!newEntities.Any()) {
                    logger.LogInformation("No new RAG project documents to seed.");
                    return;
                }
                // Detach any tracked entities before adding new ones
                context.ChangeTracker.Clear();
                await context.RagDocuments.AddRangeAsync(newEntities);
                await context.SaveChangesAsync();
                context.ChangeTracker.Clear();
                logger.LogInformation("Seeded {Count} RAG project documents.", newEntities.Count);
            } catch (Exception ex) {
                logger.LogError(ex, "Error seeding RAG project documents.");
            }
        }


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
            string str = Regex.Replace(phrase, @"[^a-zA-Z0-9\s-]", "", RegexOptions.None, TimeSpan.FromSeconds(1));

            // Convert multiple spaces/hyphens into one hyphen
            str = Regex.Replace(str, @"[\s-]+", "-", RegexOptions.None, TimeSpan.FromSeconds(1)).Trim('-');
            // Convert to lowercase
            str = str.ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(str)) // if phrase consisted only of invalid chars
                return string.Empty;

            return str;
        }
    } // end of DbSeeder class

    // Add Seed entry point for runtime invocation
    public static class DbSeederRunner
    {
        public static void Seed(IServiceProvider services, string environmentName)
        {
            using var scope = services.CreateScope();
            var env = scope.ServiceProvider.GetRequiredService<IWebHostEnvironment>();
            var context = scope.ServiceProvider.GetRequiredService<PortfolioContext>();
            var loggerFactory = scope.ServiceProvider.GetRequiredService<ILoggerFactory>();
            var logger = loggerFactory.CreateLogger("DbSeeder");
            // Run seeding synchronously
            DbSeeder.SeedDataAsync(context, env, logger).GetAwaiter().GetResult();
        }
    }
}
