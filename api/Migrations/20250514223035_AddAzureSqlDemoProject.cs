using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioApi.Migrations
{
    /// <inheritdoc />
    public partial class AddAzureSqlDemoProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Created", "Description", "DisplayOrder", "GitHubUrl", "ImageUrl", "IsFeatured", "LiveUrl", "TechnologiesJson", "Title", "Updated" },
                values: new object[] { 4, new DateTime(2025, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "A sample project demonstrating best practices for integrating ASP.NET Core with Azure SQL Database, including migrations, health checks, and CI/CD.", 0, "https://github.com/yourusername/azure-sql-integration-demo", "/images/projects/azure-sql-demo.jpg", false, "https://azure-sql-demo.com", "[\"ASP.NET Core\", \"Azure SQL\", \"Entity Framework Core\", \"GitHub Actions\"]", "Azure SQL Integration Demo", null });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
