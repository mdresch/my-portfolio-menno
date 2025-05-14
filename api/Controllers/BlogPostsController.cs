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
    
    // GET: api/BlogPosts
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BlogPostDTO>>> GetBlogPosts()
    {
        _logger.LogInformation("Getting all blog posts");
        
        var blogPosts = await _context.BlogPosts
            .OrderByDescending(b => b.Published)
            .ToListAsync();
            
        return Ok(blogPosts.Select(MapToBlogPostDTO));
    }
    
    // GET: api/BlogPosts/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<BlogPostDTO>> GetBlogPostById(int id)
    {
        _logger.LogInformation("Getting blog post with ID {Id}", id);
        
        var blogPost = await _context.BlogPosts.FindAsync(id);
        
        if (blogPost == null)
        {
            _logger.LogWarning("Blog post with ID {Id} not found", id);
            return NotFound();
        }
        
        return MapToBlogPostDTO(blogPost);
    }
    
    // GET: api/BlogPosts/slug/my-blog-post
    [HttpGet("slug/{slug}")]
    public async Task<ActionResult<BlogPostDTO>> GetBlogPostBySlug(string slug)
    {
        _logger.LogInformation("Getting blog post with slug {Slug}", slug);
        
        var blogPost = await _context.BlogPosts
            .FirstOrDefaultAsync(b => b.Slug == slug);
        
        if (blogPost == null)
        {
            _logger.LogWarning("Blog post with slug {Slug} not found", slug);
            return NotFound();
        }
        
        return MapToBlogPostDTO(blogPost);
    }
    
    // POST: api/BlogPosts
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<BlogPostDTO>> CreateBlogPost(CreateBlogPostDTO blogPostDto)
    {
        _logger.LogInformation("Creating new blog post: {Title}", blogPostDto.Title);
        
        // Check for duplicate slug
        if (await _context.BlogPosts.AnyAsync(b => b.Slug == blogPostDto.Slug))
        {
            _logger.LogWarning("Blog post with slug {Slug} already exists", blogPostDto.Slug);
            return BadRequest(new { error = "A blog post with this slug already exists" });
        }
        
        var blogPost = new BlogPost
        {
            Title = blogPostDto.Title,
            Slug = blogPostDto.Slug,
            Excerpt = blogPostDto.Excerpt,
            Content = blogPostDto.Content,
            Author = blogPostDto.Author,
            Published = DateTime.UtcNow,
            CategoriesJson = JsonSerializer.Serialize(blogPostDto.Categories ?? new List<string>())
        };

        _context.BlogPosts.Add(blogPost);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction(
            nameof(GetBlogPostById), 
            new { id = blogPost.Id }, 
            MapToBlogPostDTO(blogPost));
    }
    
    // PUT: api/BlogPosts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBlogPost(int id, BlogPost blogPost)
    {
        if (id != blogPost.Id)
        {
            return BadRequest();
        }

        // Azure Best Practice: Get existing entity before updating to ensure data consistency
        var existingBlogPost = await _context.BlogPosts
            .FirstOrDefaultAsync(b => b.Id == id);
        
        if (existingBlogPost == null)
        {
            return NotFound();
        }

        // Update the existing blog post properties
        existingBlogPost.Title = blogPost.Title;
        existingBlogPost.Content = blogPost.Content;
        existingBlogPost.Slug = blogPost.Slug;
        existingBlogPost.ImageUrl = blogPost.ImageUrl;
        existingBlogPost.Summary = blogPost.Summary;

        // Azure Best Practice: Handle DateTime? to DateTime conversion safely
        if (existingBlogPost.Published.HasValue)
        {
            existingBlogPost.Published = DateTime.SpecifyKind(existingBlogPost.Published.Value, DateTimeKind.Utc);
            existingBlogPost.IsPublished = true;
        }
        else if (blogPost.IsPublished)
        {
            existingBlogPost.Published = DateTime.UtcNow;
            existingBlogPost.IsPublished = true;
        }
        else
        {
            // If not published, set to DateTime.MinValue or leave as null if allowed
            existingBlogPost.Published = null;
            existingBlogPost.IsPublished = false;
        }

        // Other property assignments...

        // Azure Best Practice: Batch related changes for better Azure SQL performance
        _context.Entry(existingBlogPost).State = EntityState.Modified;

        try
        {
            // Azure Best Practice: Use async methods for better scalability with Azure SQL
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BlogPostExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }
    
    // DELETE: api/BlogPosts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBlogPost(int id)
    {
        _logger.LogInformation("Deleting blog post with ID {Id}", id);
        
        var blogPost = await _context.BlogPosts.FindAsync(id);
        if (blogPost == null)
        {
            _logger.LogWarning("Blog post with ID {Id} not found", id);
            return NotFound();
        }
        
        _context.BlogPosts.Remove(blogPost);
        await _context.SaveChangesAsync();
        
        return NoContent();
    }
    
    private static BlogPostDTO MapToBlogPostDTO(BlogPost blogPost)
    {
        // Azure Best Practice: Handle all nullable to non-nullable conversions explicitly
        return new BlogPostDTO
        {
            Id = blogPost.Id,
            Title = blogPost.Title,
            Slug = blogPost.Slug,
            Excerpt = blogPost.Excerpt,
            Content = blogPost.Content,
            Author = blogPost.Author,
            // Azure Best Practice: Handle nullable DateTime properly when mapping to DTO
            Published = blogPost.Published.HasValue ? blogPost.Published.Value : default,
            LastModified = blogPost.LastModified,
            Categories = blogPost.Categories
        };
    }
    
    private bool BlogPostExists(int id)
    {
        return _context.BlogPosts.Any(b => b.Id == id);
    }

    // Azure Best Practice: Explicitly specify DateTimeKind for Azure SQL
    private DateTime SpecifyDateTimeKind(DateTime? date)
    {
        if (date.HasValue)
        {
            return DateTime.SpecifyKind(date.Value, DateTimeKind.Utc);
        }
        return default;
    }
}
