using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using PortfolioApi.Models;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogCrossPostController : ControllerBase
    {
        private readonly PortfolioContext _context;
        
        public BlogCrossPostController(PortfolioContext context)
        {
            _context = context;
        }
        
        // GET: api/BlogCrossPost
        // Get all cross-posted article statistics
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CrossPostStatistics>>> GetCrossPostStatistics()
        {
            var statistics = await _context.CrossPostStatistics.ToListAsync();
            return Ok(statistics);
        }
        
        // POST: api/BlogCrossPost
        // Record a new cross-post
        [HttpPost]
        public async Task<ActionResult<CrossPostResultDto>> CrossPost([FromBody] CrossPostRequestDto request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Find the blog post by slug
            var blogPost = await _context.BlogPosts
                .FirstOrDefaultAsync(bp => bp.Slug == request.BlogPostSlug);

            if (blogPost == null)
            {
                return NotFound($"Blog post with slug '{request.BlogPostSlug}' not found.");
            }
            
            // Create a record of this cross-post
            var crossPost = new CrossPost
            {
                BlogPostId = blogPost.Id,
                Platform = request.Platform,
                CrossPostedUrl = request.CrossPostedUrl,
                CrossPostedAt = DateTime.UtcNow,
                Status = "Success"
            };
            
            _context.CrossPosts.Add(crossPost);
            await _context.SaveChangesAsync();
            
            // Update statistics
            var stats = await _context.CrossPostStatistics
                .FirstOrDefaultAsync(s => s.Platform == request.Platform);
                
            if (stats == null)
            {
                stats = new CrossPostStatistics
                {
                    Platform = request.Platform,
                    TotalCrossPosts = 1,
                    LastCrossPostedAt = DateTime.UtcNow
                };
                _context.CrossPostStatistics.Add(stats);
            }
            else
            {
                stats.TotalCrossPosts++;
                stats.LastCrossPostedAt = DateTime.UtcNow;
                _context.CrossPostStatistics.Update(stats);
            }
            
            await _context.SaveChangesAsync();
            
            return Ok(new CrossPostResultDto
            {
                Success = true,
                Message = $"Successfully cross-posted to {request.Platform}",
                CrossPostId = crossPost.Id
            });
        }
        
        // GET: api/BlogCrossPost/{slug}
        // Get cross-post history for a specific blog post
        [HttpGet("{slug}")]
        public async Task<ActionResult<IEnumerable<CrossPost>>> GetCrossPostsBySource(string slug)
        {
            var blogPost = await _context.BlogPosts
                .FirstOrDefaultAsync(bp => bp.Slug == slug);

            if (blogPost == null)
            {
                return NotFound($"Blog post with slug '{slug}' not found.");
            }

            var crossPosts = await _context.CrossPosts
                .Where(cp => cp.BlogPostId == blogPost.Id)
                .OrderByDescending(cp => cp.CrossPostedAt)
                .ToListAsync();
                  if (!crossPosts.Any())
            {
                return NotFound($"No cross-posts found for article with slug: {slug}");
            }
            
            return Ok(crossPosts);
        }
        
        // GET: api/BlogCrossPost/analytics
        // Get analytics for cross-posting
        [HttpGet("analytics")]
        public async Task<ActionResult<CrossPostAnalyticsDto>> GetCrossPostAnalytics()
        {
            var totalCrossPosts = await _context.CrossPosts.CountAsync();
            var platformStats = await _context.CrossPostStatistics.ToListAsync();
            var recentCrossPosts = await _context.CrossPosts
                .OrderByDescending(cp => cp.CrossPostedAt)
                .Take(10)
                .ToListAsync();
                
            // Calculate platform distribution
            var platformDistribution = await _context.CrossPosts
                .GroupBy(cp => cp.Platform)
                .Select(g => new PlatformDistributionDto
                {
                    Platform = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();
                
            return Ok(new CrossPostAnalyticsDto
            {
                TotalCrossPosts = totalCrossPosts,
                PlatformStatistics = platformStats,
                PlatformDistribution = platformDistribution,
                RecentCrossPosts = recentCrossPosts
            });
        }
    }
    
    // DTOs
    public class CrossPostRequestDto
    {
        public required string BlogPostSlug { get; set; }
        public required string Platform { get; set; }
        public required string CrossPostedUrl { get; set; }
    }
    
    public class CrossPostResultDto
    {
        public bool Success { get; set; }
        public required string Message { get; set; }
        public int CrossPostId { get; set; }
    }
    
    public class PlatformDistributionDto
    {
        public required string Platform { get; set; }
        public int Count { get; set; }
    }
    
    public class CrossPostAnalyticsDto
    {
        public int TotalCrossPosts { get; set; }
        public required List<CrossPostStatistics> PlatformStatistics { get; set; }
        public required List<PlatformDistributionDto> PlatformDistribution { get; set; }
        public required List<CrossPost> RecentCrossPosts { get; set; }
    }
}