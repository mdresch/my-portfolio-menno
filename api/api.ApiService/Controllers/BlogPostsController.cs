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

    // GET: api/blogposts
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BlogPostDto>>> GetBlogPosts()
    {
        try
        {
            var posts = await _context.BlogPosts
                .OrderByDescending(b => b.PublishedDate)
                .Select(b => new BlogPostDto
                {
                    Id = b.Id,
                    Title = b.Title,
                    Content = b.Content,
                    PublishedDate = b.PublishedDate
                    // Add other properties as needed
                })
                .ToListAsync();
            return posts;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while fetching blog posts");
#if DEBUG
            return StatusCode(500, $"An error occurred: {ex.Message}");
#else
            return StatusCode(500, "An error occurred while processing your request");
#endif
        }
    }
}
