using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PortfolioApi.Migrations
{
    /// <inheritdoc />
    public partial class AddMoreSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "BlogPosts",
                columns: new[] { "Id", "Author", "CategoriesJson", "Content", "Excerpt", "LastModified", "Published", "Slug", "Title" },
                values: new object[,]
                {
                    { 1, "Menno", "[\"Web Development\", \"Next.js\", \"ASP.NET Core\"]", "# Building a Full-Stack Portfolio\n\nIn this article, I'll walk through the process of building a modern portfolio website using Next.js and ASP.NET Core...", "Learn how to create a modern portfolio website using Next.js for the frontend and ASP.NET Core for the backend API.", new DateTime(2025, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2025, 4, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "building-full-stack-portfolio-nextjs-aspnet-core", "Building a Full-Stack Portfolio with Next.js and ASP.NET Core" },
                    { 2, "Menno", "[\"Security\", \"ASP.NET Core\", \"API Development\"]", "# JWT Authentication in ASP.NET Core\n\nJSON Web Tokens (JWT) provide a compact and self-contained way to securely transmit information between parties...", "A comprehensive guide to implementing JWT authentication in your ASP.NET Core API.", new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2025, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "getting-started-jwt-authentication-aspnet-core", "Getting Started with JWT Authentication in ASP.NET Core" }
                });

            migrationBuilder.InsertData(
                table: "CrossPostStatistics",
                columns: new[] { "Id", "LastCrossPostedAt", "Platform", "TotalCrossPosts" },
                values: new object[,]
                {
                    { 1, new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Medium", 1 },
                    { 2, new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Dev.to", 1 }
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Created", "Description", "GitHubUrl", "ImageUrl", "LiveUrl", "TechnologiesJson", "Title" },
                values: new object[,]
                {
                    { 2, new DateTime(2025, 1, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Interactive dashboard for visualizing complex datasets with customizable charts and filters", "https://github.com/yourusername/data-viz-dashboard", "/images/projects/data-dashboard.jpg", "https://data-dashboard-demo.com", "[\"D3.js\", \"React\", \"TypeScript\", \"Node.js\", \"Express\", \"MongoDB\"]", "Data Visualization Dashboard" },
                    { 3, new DateTime(2024, 11, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "A tool that uses AI to generate blog content, social media posts, and marketing copy", "https://github.com/yourusername/ai-content-gen", "/images/projects/ai-generator.jpg", "https://ai-content-generator.com", "[\"Python\", \"Flask\", \"TensorFlow\", \"React\", \"OpenAI API\", \"PostgreSQL\"]", "AI Content Generator" }
                });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "Category", "IconUrl", "Name", "ProficiencyLevel" },
                values: new object[,]
                {
                    { 1, "Frontend", "/icons/react.svg", "React", 5 },
                    { 2, "Backend", "/icons/dotnet.svg", "ASP.NET Core", 5 },
                    { 3, "Languages", "/icons/typescript.svg", "TypeScript", 4 },
                    { 4, "Databases", "/icons/sql-server.svg", "SQL Server", 4 }
                });

            migrationBuilder.InsertData(
                table: "CrossPosts",
                columns: new[] { "Id", "BlogPostId", "CrossPostedAt", "CrossPostedUrl", "Platform", "Status" },
                values: new object[,]
                {
                    { 1, 1, new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "https://medium.com/@yourusername/building-full-stack-portfolio-nextjs-aspnet-core", "Medium", "Published" },
                    { 2, 1, new DateTime(2025, 4, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "https://dev.to/yourusername/building-full-stack-portfolio-nextjs-aspnet-core", "Dev.to", "Published" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "BlogPosts",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "CrossPostStatistics",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "CrossPostStatistics",
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
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3);

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
    }
}
