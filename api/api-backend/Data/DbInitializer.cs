using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using api_backend.Models;

namespace api_backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(PortfolioContext context)
        {
            context.Database.Migrate();

            // Seed Skills
            if (!context.Skills.Any())
            {
                var skill1 = new Skill { Name = "C#" };
                var skill2 = new Skill { Name = "React" };
                var skill3 = new Skill { Name = "Next.js" };
                var skill4 = new Skill { Name = "Entity Framework" };
                context.Skills.AddRange(skill1, skill2, skill3, skill4);
                context.SaveChanges();
            }

            // Seed Projects
            if (!context.Projects.Any())
            {
                var csharp = context.Skills.First(s => s.Name == "C#");
                var react = context.Skills.First(s => s.Name == "React");
                var nextjs = context.Skills.First(s => s.Name == "Next.js");
                var ef = context.Skills.First(s => s.Name == "Entity Framework");
                var project1 = new Project {
                    Title = "Portfolio Website",
                    Description = "A personal portfolio built with Next.js and .NET backend.",
                    Url = "https://example.com",
                    Skills = new List<Skill> { csharp, nextjs, ef }
                };
                var project2 = new Project {
                    Title = "Chatbot Integration",
                    Description = "AI-powered chat using Vertex AI and React.",
                    Url = "https://example.com/chatbot",
                    Skills = new List<Skill> { react, nextjs }
                };
                context.Projects.AddRange(project1, project2);
                context.SaveChanges();
            }

            // Seed BlogPosts
            if (!context.BlogPosts.Any())
            {
                context.BlogPosts.AddRange(
                    new BlogPost {
                        Title = "Building a Full Stack Portfolio",
                        Content = "How I built my portfolio using Next.js and ASP.NET Core.",
                        PublishedAt = DateTime.UtcNow.AddDays(-10)
                    },
                    new BlogPost {
                        Title = "Integrating AI Chat with Vertex AI",
                        Content = "A guide to adding AI chat to your web app.",
                        PublishedAt = DateTime.UtcNow.AddDays(-5)
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
