---
description: .Net Integration for My Portfolio Website
---

# DotNetIntegration

## .NET Integration for My Portfolio Website

### Implementation Status

This document outlines the implementation of the ASP.NET Core backend API for the Next.js portfolio website. The integration has been successfully completed and includes the following features:

1. ✅ ASP.NET Core API with Entity Framework Core
2. ✅ SQL Server database integration
3. ✅ JWT authentication for admin features
4. ✅ RESTful APIs for projects, blog posts, skills, etc.
5. ✅ Next.js frontend integration using custom hooks and services
6. ✅ Response caching for improved performance

### 1. Backend API with ASP.NET Core

The API has been implemented with the following structure:

```bash
api/
├── Controllers/      # API controllers for each entity
├── Models/          # Entity models
├── Data/            # Database context
├── DTOs/            # Data transfer objects
└── Migrations/      # EF Core migrations
```

The following packages have been installed:

```powershell
# Core packages
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Swashbuckle.AspNetCore
```

#### Database Structure

The database has been implemented with proper entity relationships and JSON serialization for arrays:

```csharp
// PortfolioContext.cs
public class PortfolioContext : DbContext
{
    public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }
    
    public DbSet<Project> Projects { get; set; } = null!;
    public DbSet<BlogPost> BlogPosts { get; set; } = null!;
    public DbSet<CrossPost> CrossPosts { get; set; } = null!;
    public DbSet<CrossPostStatistics> CrossPostStatistics { get; set; } = null!;
    public DbSet<ContactMessage> ContactMessages { get; set; } = null!;
    public DbSet<Skill> Skills { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure BlogPost entity
        modelBuilder.Entity<BlogPost>()
            .HasIndex(b => b.Slug)
            .IsUnique();

        // Configure CrossPost entity
        modelBuilder.Entity<CrossPost>()
            .HasOne(c => c.BlogPost)
            .WithMany(b => b.CrossPosts)
            .HasForeignKey(c => c.BlogPostId);

        // Configure Statistics
        modelBuilder.Entity<CrossPostStatistics>()
            .HasIndex(s => s.Platform)
            .IsUnique();

        // Add seed data
        SeedData(modelBuilder);
    }
}
```

Entity models have been implemented with proper properties:

```csharp
public class Project
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public DateTime Created { get; set; }
    public string? TechnologiesJson { get; set; }
    
    // Non-mapped property for JSON serialization
    [NotMapped]
    public List<string> Technologies => 
        string.IsNullOrEmpty(TechnologiesJson) 
            ? new List<string>() 
            : JsonSerializer.Deserialize<List<string>>(TechnologiesJson) ?? new List<string>();
}
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

### 2. API Controllers

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

### 3. Authentication with JWT

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

### 4. Integration with Next.js Frontend

#### Option 1: API Routes Proxy

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

### 5. Frontend Integration with Next.js

The frontend has been updated to communicate directly with the ASP.NET Core API. A service layer and custom React hooks have been implemented for easier consumption:

#### API Services

```typescript
// src/lib/api-services.ts
import { Project, BlogPost, Skill, ContactMessage } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5154/api';

// Helper function to get auth header
function getAuthHeader(): HeadersInit {
  const token = localStorage.getItem('portfolio_auth_token');
  if (!token) return {};
  
  try {
    const parsedToken = JSON.parse(token);
    return { 'Authorization': `Bearer ${parsedToken.token}` };
  } catch {
    return {};
  }
}

// Helper function for HTTP requests
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers = {
    'Content-Type': 'application/json',
    ...getAuthHeader(),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || response.statusText || 'API request failed');
  }

  return response.json() as Promise<T>;
}

// API Services
export const ProjectService = {
  async getAll(): Promise<Project[]> {
    return fetchAPI<Project[]>('/projects');
  },
  
  // Additional methods...
}
```

#### Custom Hooks

```tsx
// src/hooks/useProjects.ts
import { useState, useEffect } from 'react';
import { ProjectService } from '@/lib/api-services';
import { Project } from '@/types/api';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setIsLoading(true);
        const data = await ProjectService.getAll();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load projects'));
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, isLoading, error };
}
```

### 5. Deployment Options

#### Azure App Service

Deploy your .NET API to Azure App Service and your Next.js frontend to Vercel:

```powershell
# Deploy .NET API to Azure
az login
az webapp up --sku F1 --name your-portfolio-api --resource-group your-resource-group

# Continue deploying your Next.js frontend to Vercel as before
```

#### Docker Compose for Local Development

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

### 6. Authentication and Protected Routes

JWT authentication has been implemented for admin features:

#### Backend Authentication

```csharp
// AuthController.cs
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    
    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequestDto login)
    {
        // For demo purposes, use a hardcoded admin user
        // In production, validate against a real user database
        if (login.Username == "admin" && login.Password == "Portfolio@2025")
        {
            var token = GenerateJwtToken("1", login.Username, "admin@portfolio.com", "Admin");
            
            var response = new AuthResponseDto
            {
                Token = new AuthTokenDto
                {
                    Token = token,
                    Expiration = DateTime.UtcNow.AddHours(2)
                },
                User = new UserDto
                {
                    Id = "1",
                    Username = login.Username,
                    Email = "admin@portfolio.com",
                    Role = "Admin"
                }
            };
            
            return Ok(response);
        }
        
        return Unauthorized("Invalid username or password");
    }
}
```

#### Frontend Authentication

```tsx
// src/lib/auth.tsx
import { useState, useEffect, createContext, useContext } from 'react';
import { User, AuthToken, LoginRequest } from '@/types/api';

// Define the auth context interface
interface AuthContextType {
  user: User | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// Create the context with a default empty implementation
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
  isLoading: true,
  isAuthenticated: false,
});

// Authentication provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('portfolio_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        localStorage.removeItem('portfolio_user');
      }
    }
    setIsLoading(false);
  }, []);
  
  // Additional authentication methods...
}
```

#### Protected Admin Routes

```tsx
// src/app/admin/layout.tsx
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/LoginForm';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // If not authenticated and not loading, redirect to admin login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/admin/login');
    }
  }, [isLoading, isAuthenticated, router]);

  // More authentication logic...
}
```

### 7. Integration Status and Next Steps

✅ Completed:

* ASP.NET Core API project setup
* Entity Framework Core and SQL Server integration
* API controllers for all portfolio entities
* JWT authentication
* React hooks for API data fetching
* Admin components for protected routes

🔜 Next Steps:

1. Enhance error handling and API resilience
2. Add automated testing for API endpoints
3. Implement DevOps pipeline for the .NET backend
4. Set up production deployment for SQL Server database
5. Add JWT authentication for admin access
6. Update Next.js components to integrate with the API
7. Deploy both applications (Next.js to Vercel, .NET to Azure)
