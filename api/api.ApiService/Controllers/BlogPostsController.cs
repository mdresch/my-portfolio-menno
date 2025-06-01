using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.ApiService.Models;
using api.ApiService.DTOs;
using System.Text.Json;
using api.ApiService.Data;

namespace api.ApiService.Controllers;

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
