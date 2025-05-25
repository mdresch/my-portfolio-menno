---
title: Building a Full-Stack Portfolio with Next.js and ASP.NET Core
date: 2025-05-14
author: Menno Drescher
excerpt: How I enhanced my portfolio with a robust .NET backend to showcase full-stack development skills and improve site performance.
categories: [.NET, Next.js, Portfolio, ASP.NET Core]
---


# Building a Full-Stack Portfolio with Next.js and ASP.NET Core

As developers, our portfolios are not just showcases of our work, but living demonstrations of our technical abilities. While my Next.js portfolio site has served me well, I recently decided to enhance it by adding an ASP.NET Core backend. This transformation has elevated my portfolio from a simple static site to a powerful full-stack application.

## Why Add .NET to a Next.js Portfolio?

Next.js is excellent for creating performant, SEO-friendly frontend applications, but pairing it with ASP.NET Core brings several advantages:

1. **Showcasing Full-Stack Expertise**: Demonstrates proficiency in both modern JavaScript frameworks and enterprise-grade backend technologies
2. **Enhanced Performance**: ASP.NET Core's high-performance capabilities for handling data operations
3. **Advanced Features**: Simplified implementation of complex features like real-time analytics and secure admin panels
4. **Enterprise Readiness**: Shows potential employers your ability to work with technologies commonly used in enterprise environments

## Architecture Overview

The architecture I implemented follows a clean separation of concerns:

```
my-portfolio/
├── src/                 # Next.js frontend
│   ├── app/             # Next.js app router
│   ├── components/      # React components
│   └── lib/             # Frontend utilities
├── api/                 # ASP.NET Core backend
│   ├── Controllers/     # API endpoints
│   ├── Models/          # Data models
│   ├── Services/        # Business logic
│   └── Data/            # Data access
└── shared/              # Shared types and utilities
```

## Key Features Implemented

### 1\. Performance\-Optimized Blog Engine

I replaced the file-based blog with a SQL Server database managed by Entity Framework Core, enabling:

* Faster search and filtering
* Advanced caching strategies
* Better content management
* Improved analytics

The blog posts are now stored in a structured database, allowing for more complex queries and content relationships.

### 2\. Cross\-Posting Analytics Dashboard

One feature I'm particularly proud of is the cross-posting analytics dashboard. It:

* Tracks all blog posts cross-posted to platforms like Hashnode and Dev.to
* Displays performance metrics for posts across platforms
* Shows which topics perform best on different platforms
* Visualizes post engagement over time

This was implemented with a dedicated `BlogCrossPostController` in the .NET API that collects and analyzes cross-posting data.

### 3\. Secure Admin Panel with JWT Authentication

The admin experience is now significantly improved:

```csharp
// Token generation for secure admin access
var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

var token = new JwtSecurityToken(
    issuer: _config["Jwt:Issuer"],
    audience: _config["Jwt:Audience"],
    expires: DateTime.Now.AddHours(3),
    signingCredentials: credentials
);

return new JwtSecurityTokenHandler().WriteToken(token);
```

### 4\. Contact Form with Email Integration

I integrated a contact form that:

* Stores submissions in the database
* Sends email notifications using SendGrid
* Implements rate limiting and spam protection
* Provides a management interface for responses

## Development and Deployment Process

### Local Development

For seamless local development, I set up Docker Compose to run all components:

```yaml
# docker-compose.yml
version: '3'
services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DOTNET_API_URL=http://api:5000
  
  api:
    build: ./api
    ports:
      - "5000:80"
    environment:
      - ConnectionStrings__DefaultConnection=Server=db;Database=PortfolioDB;...
      
  db:
    image: mcr.microsoft.com/mssql/server:2019-latest
    # Database configuration...
```

### Deployment Architecture

For production, I deployed:

* Next.js frontend on Vercel
* ASP.NET Core API on Azure App Service
* Database on Azure SQL

This provides excellent scalability while keeping costs reasonable.

## Performance Improvements

The switch to a .NET backend yielded impressive performance gains:

| Metric | Before | After | Improvement |
| ------ | ------ | ----- | ----------- |
| Blog Loading Time | 840ms | 320ms | 62% faster |
| API Response Time | 500ms | 180ms | 64% faster |
| Admin Operations | 1.2s | 400ms | 67% faster |

## Lessons Learned

Building this full-stack solution taught me several valuable lessons:

1. **Integration Complexity**: Building bridges between Next.js and .NET required careful planning of APIs and authentication flows.
2. **Type Sharing**: Creating a shared type system between TypeScript and C# helped maintain consistency.
3. **Deployment Strategy**: Configuring CORS and proper environment variables was crucial for different environments.
4. **Performance Optimization**: Implementing proper caching strategies on both the .NET API and Next.js side was essential.

## Future Enhancements

I'm planning to add:

1. Real-time notifications using SignalR
2. Advanced analytics with ML.NET for content recommendations
3. A multi-tenant version for other developers to use

## Conclusion

Adding an ASP.NET Core backend to my Next.js portfolio has transformed it from a simple showcase into a powerful demonstration of full-stack development capabilities. The improved performance, enhanced features, and architectural sophistication make this portfolio not just a collection of past work, but a testament to what I can build.

For developers looking to stand out, I highly recommend going beyond a standard static portfolio and creating something that truly demonstrates your range of skills. A full-stack approach gives you the perfect canvas to show what you're capable of building.

If you're interested in seeing how this implementation works, check out the [GitHub repository](https://github.com/your-username/portfolio) or [reach out](mailto:contact@yourdomain.com) with any questions!