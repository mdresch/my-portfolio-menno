# Portfolio API Backend

This is an ASP.NET Core Web API project for serving portfolio data (projects, blog posts, skills, contact messages).

## Features
- RESTful endpoints for portfolio entities
- Entity Framework Core for data access
- SQL Server as the database provider

## Getting Started

1. Install the .NET 8 SDK (https://dotnet.microsoft.com/download)
2. Navigate to this directory:
   ```bash
   cd /workspaces/my-portfolio-menno/api/api-backend
   ```
3. Run the API:
   ```bash
   dotnet run
   ```
4. The API will be available at http://localhost:5000 (or the port shown in the console)

## Next Steps
- Add models and controllers for Projects, BlogPosts, Skills, and ContactMessages
- Configure Entity Framework Core and database connection
- Add authentication if needed
