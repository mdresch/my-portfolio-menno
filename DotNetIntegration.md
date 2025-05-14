# .NET Integration Plan for My Portfolio

## 1. Backend API with ASP.NET Core

Create a separate ASP.NET Core API project in the same repository:

```powershell
# Create new API project in a directory called 'api'
dotnet new webapi -n PortfolioApi -o api
cd api

# Add Entity Framework Core for SQL Server
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design

# Add tools for migrations
dotnet tool install --global dotnet-ef
```

### Database Structure
```csharp
// PortfolioContext.cs
using Microsoft.EntityFrameworkCore;

public class PortfolioContext : DbContext
{
    public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }
    
    public DbSet<Project> Projects { get; set; }
    public DbSet<Skill> Skills { get; set; }
    public DbSet<ContactMessage> ContactMessages { get; set; }
}

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
    public string GitHubUrl { get; set; }
    public string LiveUrl { get; set; }
    public DateTime Created { get; set; }
    public List<string> Technologies { get; set; }
}

public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }  // e.g., "Frontend", "Backend", "DevOps"
    public int ProficiencyLevel { get; set; }  // 1-10
}

public class ContactMessage
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Subject { get; set; }
    public string Message { get; set; }
    public DateTime ReceivedAt { get; set; }
    public bool IsRead { get; set; }
}
```

## 2. API Controllers

```csharp
// ProjectsController.cs
[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly PortfolioContext _context;
    
    public ProjectsController(PortfolioContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
    {
        return await _context.Projects.ToListAsync();
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Project>> GetProject(int id)
    {
        var project = await _context.Projects.FindAsync(id);
        
        if (project == null)
        {
            return NotFound();
        }
        
        return project;
    }
    
    // Add POST, PUT, DELETE endpoints with authorization
}

// Similar controllers for Skills and ContactMessage
```

## 3. Authentication with JWT

```csharp
// Add to Startup.cs or Program.cs
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = Configuration["Jwt:Issuer"],
            ValidAudience = Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
        };
    });
```

## 4. Integration with Next.js Frontend

### Option 1: API Routes Proxy

Update your Next.js API routes to proxy requests to the .NET backend:

```typescript
// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.DOTNET_API_URL || 'http://localhost:5000';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${API_URL}/api/projects`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching projects from .NET API:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// Similar implementations for POST, PUT, DELETE
```

### Option 2: Direct API Calls from Client

Update your React components to call the .NET API directly:

```tsx
// src/components/ProjectsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/types/project';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        // Use relative URL if APIs are hosted on same domain
        // Or use full URL if hosted separately
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProjects();
  }, []);
  
  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }
  
  return (
    <section className="projects-section">
      <h2 className="text-2xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
```

## 5. Deployment Options

### Azure App Service

Deploy your .NET API to Azure App Service and your Next.js frontend to Vercel:

```powershell
# Deploy .NET API to Azure
az login
az webapp up --sku F1 --name your-portfolio-api --resource-group your-resource-group

# Continue deploying your Next.js frontend to Vercel as before
```

### Docker Compose for Local Development

```yaml
# docker-compose.yml
version: '3'
services:
  nextjs:
    build:
      context: .
      dockerfile: Dockerfile.nextjs
    ports:
      - "3000:3000"
    environment:
      - DOTNET_API_URL=http://api:5000
    depends_on:
      - api

  api:
    build:
      context: ./api
      dockerfile: Dockerfile
    ports:
      - "5000:80"
    environment:
      - ConnectionStrings__DefaultConnection=Server=db;Database=PortfolioDB;User=sa;Password=YourPassword;
    depends_on:
      - db
      
  db:
    image: mcr.microsoft.com/mssql/server:2019-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=YourPassword
    ports:
      - "1433:1433"
    volumes:
      - portfolio-db:/var/opt/mssql

volumes:
  portfolio-db:
```

## 6. Next Steps

1. Create the ASP.NET Core API project
2. Set up Entity Framework and database models
3. Implement API controllers for projects, skills, and contact form
4. Add JWT authentication for admin access
5. Update Next.js components to integrate with the API
6. Deploy both applications (Next.js to Vercel, .NET to Azure)
