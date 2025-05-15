using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;
using PortfolioApi.DTOs;
using System.Text.Json;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogPostsController : ControllerBase
{
    private readonly PortfolioContext _context;
    private readonly ILogger<BlogPostsController> _logger;
    
    public BlogPostsController(PortfolioContext context, ILogger<BlogPostsController> logger)
    {
        _context = context;
        _logger = logger;
    }
}
