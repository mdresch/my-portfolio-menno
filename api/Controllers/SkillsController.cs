using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;
using Microsoft.Extensions.Caching.Memory;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SkillsController : ControllerBase
{
    private readonly PortfolioContext _context;
    private readonly IMemoryCache _memoryCache;
    private static readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(10);

    public SkillsController(PortfolioContext context, IMemoryCache memoryCache)
    {
        _context = context;
        _memoryCache = memoryCache;
    }

    // GET: api/skills
    [HttpGet]
    [ResponseCache(Duration = 600)]    public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
    {
        const string cacheKey = "AllSkills";
        // Check if skills are in the cache
        if (_memoryCache.TryGetValue(cacheKey, out List<Skill>? cachedSkills))
        {
            return cachedSkills ?? new List<Skill>();
        }
        
        // If not in cache, fetch from database
        var skills = await _context.Skills
            .OrderBy(s => s.Category ?? string.Empty)  // Handle null Category by using empty string for ordering
            .ThenByDescending(s => s.ProficiencyLevel)
            .ToListAsync();

        _memoryCache.Set(cacheKey, skills, _cacheDuration);
        return skills;
    }

    // GET: api/skills/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Skill>> GetSkill(int id)
    {
        var skill = await _context.Skills.FindAsync(id);

        if (skill == null)
        {
            return NotFound();
        }

        return skill;
    }

    // GET: api/skills/categories
    [HttpGet("categories")]
    [ResponseCache(Duration = 600)]    public async Task<ActionResult<IEnumerable<string>>> GetSkillCategories()
    {
        const string cacheKey = "SkillCategories";
        // Check if categories are in the cache
        if (_memoryCache.TryGetValue(cacheKey, out List<string>? cachedCategories))
        {
            return cachedCategories ?? new List<string>();
        }
        
        // If not in cache, fetch from database
        // Use Select and Where to convert from string? to string by filtering out nulls
        var categories = await _context.Skills
            .Select(s => s.Category)
            .Where(c => c != null)  // Filter out nulls before working with the values
            .Distinct()
            .OrderBy(c => c)
            .Select(c => c!) // Non-null assertion after filtering out nulls
            .ToListAsync();

        _memoryCache.Set(cacheKey, categories, _cacheDuration);
        return categories;
    }// GET: api/skills/category/{category}
    [HttpGet("category/{category}")]
    public async Task<ActionResult<IEnumerable<Skill>>> GetSkillsByCategory(string category)
    {
        var skills = await _context.Skills
            // Handle null values in Category property when comparing with the parameter
            .Where(s => s.Category != null && s.Category == category)
            .OrderByDescending(s => s.ProficiencyLevel)
            .ToListAsync();

        if (skills == null || !skills.Any())
        {
            return NotFound();
        }

        return skills;
    }
}
