using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;
using Microsoft.Extensions.Caching.Memory;
using PortfolioApi.Data;
using PortfolioApi.DTOs;

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
    }

    // GET: api/skills/category/{category}
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

    // POST: api/skills
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<SkillDTO>> CreateSkill([FromBody] CreateSkillDTO skillDto)
    {
        var skill = new Skill
        {
            Name = skillDto.Name,
            Category = skillDto.Category ?? string.Empty,
            ProficiencyLevel = skillDto.ProficiencyLevel,
            IconUrl = skillDto.IconUrl,
            // Optionally set YearsOfExperience if included in DTO
        };
        _context.Skills.Add(skill);
        await _context.SaveChangesAsync();
        // Invalidate cache
        _memoryCache.Remove("AllSkills");
        _memoryCache.Remove("SkillCategories");
        return CreatedAtAction(nameof(GetSkill), new { id = skill.Id }, new SkillDTO
        {
            Id = skill.Id,
            Name = skill.Name,
            Category = skill.Category,
            ProficiencyLevel = skill.ProficiencyLevel,
            IconUrl = skill.IconUrl
        });
    }

    // PUT: api/skills/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateSkill(int id, [FromBody] UpdateSkillDTO skillDto)
    {
        var skill = await _context.Skills.FindAsync(id);
        if (skill == null)
        {
            return NotFound();
        }
        if (skillDto.Name != null) skill.Name = skillDto.Name;
        if (skillDto.Category != null) skill.Category = skillDto.Category;
        if (skillDto.ProficiencyLevel.HasValue) skill.ProficiencyLevel = skillDto.ProficiencyLevel.Value;
        if (skillDto.IconUrl != null) skill.IconUrl = skillDto.IconUrl;
        // Optionally update YearsOfExperience if included in DTO
        _context.Entry(skill).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SkillExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        // Invalidate cache
        _memoryCache.Remove("AllSkills");
        _memoryCache.Remove("SkillCategories");
        return NoContent();
    }

    // DELETE: api/skills/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSkill(int id)
    {
        var skill = await _context.Skills.FindAsync(id);
        if (skill == null)
        {
            return NotFound();
        }
        _context.Skills.Remove(skill);
        await _context.SaveChangesAsync();
        // Invalidate cache
        _memoryCache.Remove("AllSkills");
        _memoryCache.Remove("SkillCategories");
        return NoContent();
    }

    private bool SkillExists(int id)
    {
        return _context.Skills.Any(s => s.Id == id);
    }
}
