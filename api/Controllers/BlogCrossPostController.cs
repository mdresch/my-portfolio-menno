using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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
        public async Task<ActionResult<CrossPostResult>> CrossPost([FromBody] CrossPostRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            // Create a record of this cross-post
            var crossPost = new CrossPost
            {
                SourceSlug = request.SourceSlug,
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
            
            return Ok(new CrossPostResult
            {
                Success = true,
                Message = $"Successfully cross-posted to {request.Platform}",
                CrossPostId = crossPost.Id
            });
        }
        
        // GET: api/BlogCrossPost/{sourceSlug}
        // Get cross-post history for a specific blog post
        [HttpGet("{sourceSlug}")]
        public async Task<ActionResult<IEnumerable<CrossPost>>> GetCrossPostsBySource(string sourceSlug)
        {
            var crossPosts = await _context.CrossPosts
                .Where(cp => cp.SourceSlug == sourceSlug)
                .OrderByDescending(cp => cp.CrossPostedAt)
                .ToListAsync();
                
            if (!crossPosts.Any())
            {
                return NotFound($"No cross-posts found for article with slug: {sourceSlug}");
            }
            
            return Ok(crossPosts);
        }
        
        // GET: api/BlogCrossPost/analytics
        // Get analytics for cross-posting
        [HttpGet("analytics")]
        public async Task<ActionResult<CrossPostAnalytics>> GetCrossPostAnalytics()
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
                .Select(g => new PlatformDistribution
                {
                    Platform = g.Key,
                    Count = g.Count()
                })
                .ToListAsync();
                
            return Ok(new CrossPostAnalytics
            {
                TotalCrossPosts = totalCrossPosts,
                PlatformStatistics = platformStats,
                PlatformDistribution = platformDistribution,
                RecentCrossPosts = recentCrossPosts
            });
        }
    }
    
    // Models
    public class CrossPostRequest
    {
        public string SourceSlug { get; set; }
        public string Platform { get; set; }
        public string CrossPostedUrl { get; set; }
    }
    
    public class CrossPostResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public int CrossPostId { get; set; }
    }
    
    public class CrossPost
    {
        public int Id { get; set; }
        public string SourceSlug { get; set; }
        public string Platform { get; set; }
        public string CrossPostedUrl { get; set; }
        public DateTime CrossPostedAt { get; set; }
        public string Status { get; set; }
    }
    
    public class CrossPostStatistics
    {
        public int Id { get; set; }
        public string Platform { get; set; }
        public int TotalCrossPosts { get; set; }
        public DateTime LastCrossPostedAt { get; set; }
    }
    
    public class CrossPostAnalytics
    {
        public int TotalCrossPosts { get; set; }
        public List<CrossPostStatistics> PlatformStatistics { get; set; }
        public List<PlatformDistribution> PlatformDistribution { get; set; }
        public List<CrossPost> RecentCrossPosts { get; set; }
    }
    
    public class PlatformDistribution
    {
        public string Platform { get; set; }
        public int Count { get; set; }
    }
}
