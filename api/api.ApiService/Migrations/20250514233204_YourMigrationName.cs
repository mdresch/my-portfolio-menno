using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PortfolioApi.Migrations
{
    /// <inheritdoc />
    public partial class YourMigrationName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "CrossPosts",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "CrossPosts",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 1);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "BlogPosts",
                columns: new[] { "Id", "Author", "CategoriesJson", "Content", "Created", "Excerpt", "ImageUrl", "IsPublished", "Published", "Slug", "Summary", "Title", "Updated" },
                values: new object[,]
                {
                    { 1, "Menno", "[\"Web Development\", \"Next.js\", \"ASP.NET Core\"]", "# Building a Full-Stack Portfolio\n\nIn this article, I'll walk through the process of building a modern portfolio website using Next.js and ASP.NET Core...", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Learn how to create a modern portfolio website using Next.js for the frontend and ASP.NET Core for the backend API.", null, false, new DateTime(2025, 4, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "building-full-stack-portfolio-nextjs-aspnet-core", null, "Building a Full-Stack Portfolio with Next.js and ASP.NET Core", new DateTime(2025, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, "Menno", "[\"Security\", \"ASP.NET Core\", \"API Development\"]", "# JWT Authentication in ASP.NET Core\n\nJSON Web Tokens (JWT) provide a compact and self-contained way to securely transmit information between parties...", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "A comprehensive guide to implementing JWT authentication in your ASP.NET Core API.", null, false, new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "getting-started-jwt-authentication-aspnet-core", null, "Getting Started with JWT Authentication in ASP.NET Core", new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Created", "Description", "DisplayOrder", "GitHubUrl", "ImageUrl", "IsFeatured", "LiveUrl", "TechnologiesJson", "Title", "Updated" },
                values: new object[,]
                {
                    { 1, new DateTime(2025, 2, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "My personal portfolio website built with Next.js and ASP.NET Core", 0, "https://github.com/yourusername/my-portfolio-menno", "/images/showcase-dataviz.jpg", false, "https://your-portfolio-url.com", "[\"Next.js\", \"React\", \"TypeScript\", \"ASP.NET Core\", \"Entity Framework Core\", \"SQL Server\"]", "Portfolio Website", null },
                    { 2, new DateTime(2025, 1, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Interactive dashboard for visualizing complex datasets with customizable charts and filters", 0, "https://github.com/yourusername/data-viz-dashboard", "/images/projects/data-dashboard.jpg", false, "https://data-dashboard-demo.com", "[\"D3.js\", \"React\", \"TypeScript\", \"Node.js\", \"Express\", \"MongoDB\"]", "Data Visualization Dashboard", null },
                    { 3, new DateTime(2024, 11, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "A tool that uses AI to generate blog content, social media posts, and marketing copy", 0, "https://github.com/yourusername/ai-content-gen", "/images/projects/ai-generator.jpg", false, "https://ai-content-generator.com", "[\"Python\", \"Flask\", \"TensorFlow\", \"React\", \"OpenAI API\", \"PostgreSQL\"]", "AI Content Generator", null },
                    { 4, new DateTime(2025, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "A sample project demonstrating best practices for integrating ASP.NET Core with Azure SQL Database, including migrations, health checks, and CI/CD.", 0, "https://github.com/yourusername/azure-sql-integration-demo", "/images/projects/azure-sql-demo.jpg", false, "https://azure-sql-demo.com", "[\"ASP.NET Core\", \"Azure SQL\", \"Entity Framework Core\", \"GitHub Actions\"]", "Azure SQL Integration Demo", null }
                });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "Category", "Created", "Description", "IconUrl", "Name", "ProficiencyLevel", "Updated", "YearsOfExperience" },
                values: new object[,]
                {
                    { 1, "Frontend", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "/icons/react.svg", "React", 5, null, 0 },
                    { 2, "Backend", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "/icons/dotnet.svg", "ASP.NET Core", 5, null, 0 },
                    { 3, "Languages", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "/icons/typescript.svg", "TypeScript", 4, null, 0 },
                    { 4, "Databases", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "/icons/sql-server.svg", "SQL Server", 4, null, 0 }
                });

            migrationBuilder.InsertData(
                table: "CrossPosts",
                columns: new[] { "Id", "BlogPostId", "Created", "CrossPostedAt", "CrossPostedUrl", "Platform", "PublishedAt", "Status", "Updated" },
                values: new object[,]
                {
                    { 1, 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "https://medium.com/@yourusername/building-full-stack-portfolio-nextjs-aspnet-core", "Medium", new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Published", null },
                    { 2, 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "https://dev.to/yourusername/building-full-stack-portfolio-nextjs-aspnet-core", "Dev.to", new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Published", null }
                });
        }
    }
}
