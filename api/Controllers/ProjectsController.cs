using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;
using PortfolioApi.DTOs;
using System.Text.Json;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly PortfolioContext _context;
    private readonly ILogger<ProjectsController> _logger;
    
    public ProjectsController(PortfolioContext context, ILogger<ProjectsController> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    // GET: api/Projects
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectDTO>>> GetProjects()
    {
        _logger.LogInformation("Getting all projects");
        
        var projects = await _context.Projects
            .OrderByDescending(p => p.Created)
            .ToListAsync();
            
        return Ok(projects.Select(p => new ProjectDTO
        {
            Id = p.Id,
            Title = p.Title,
            Description = p.Description,
            ImageUrl = p.ImageUrl,
            GitHubUrl = p.GitHubUrl,
            LiveUrl = p.LiveUrl,
            Created = p.Created,
            Technologies = p.Technologies
        }));
    }
    
    // GET: api/Projects/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ProjectDTO>> GetProject(int id)
    {
        _logger.LogInformation("Getting project with ID {Id}", id);
        
        var project = await _context.Projects.FindAsync(id);
        
        if (project == null)
        {
            _logger.LogWarning("Project with ID {Id} not found", id);
            return NotFound();
        }
        
        return new ProjectDTO
        {
            Id = project.Id,
            Title = project.Title,
            Description = project.Description,
            ImageUrl = project.ImageUrl,
            GitHubUrl = project.GitHubUrl,
            LiveUrl = project.LiveUrl,
            Created = project.Created,
            Technologies = project.Technologies
        };
    }
    
    // POST: api/Projects
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<ProjectDTO>> CreateProject(CreateProjectDTO projectDto)
    {
        _logger.LogInformation("Creating new project: {Title}", projectDto.Title);
        
        var project = new Project
        {
            Title = projectDto.Title,
            Description = projectDto.Description ?? string.Empty,
            ImageUrl = projectDto.ImageUrl ?? string.Empty,
            GitHubUrl = projectDto.GitHubUrl ?? string.Empty,
            LiveUrl = projectDto.LiveUrl ?? string.Empty,
            TechnologiesJson = JsonSerializer.Serialize(projectDto.Technologies)
        };
        
        _context.Projects.Add(project);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction(
            nameof(GetProject), 
            new { id = project.Id }, 
            new ProjectDTO
            {
                Id = project.Id,
                Title = project.Title,
                Description = project.Description,
                ImageUrl = project.ImageUrl,
                GitHubUrl = project.GitHubUrl,
                LiveUrl = project.LiveUrl,
                Created = project.Created,
                Technologies = project.Technologies
            });
    }
    
    // PUT: api/Projects/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProject(int id, UpdateProjectDTO projectDto)
    {
        _logger.LogInformation("Updating project with ID {Id}", id);
        
        var project = await _context.Projects.FindAsync(id);
        if (project == null)
        {
            _logger.LogWarning("Project with ID {Id} not found", id);
            return NotFound();
        }
        
        // Update properties
        project.Title = projectDto.Title ?? project.Title;
        // Azure Best Practice: Use null-coalescing operator for safe assignments
        project.Description = projectDto.Description ?? string.Empty;
        project.ImageUrl = projectDto.ImageUrl ?? project.ImageUrl;
        project.GitHubUrl = projectDto.GitHubUrl ?? project.GitHubUrl;
        project.LiveUrl = projectDto.LiveUrl ?? project.LiveUrl;
        
        // Update technologies if provided
        if (projectDto.Technologies != null)
        {
            project.TechnologiesJson = JsonSerializer.Serialize(projectDto.Technologies);
        }
        
        _context.Entry(project).State = EntityState.Modified;
        
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProjectExists(id))
            {
                _logger.LogWarning("Project with ID {Id} not found during update", id);
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        
        return NoContent();
    }
    
    // DELETE: api/Projects/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        _logger.LogInformation("Deleting project with ID {Id}", id);
        
        var project = await _context.Projects.FindAsync(id);
        if (project == null)
        {
            _logger.LogWarning("Project with ID {Id} not found", id);
            return NotFound();
        }
        
        _context.Projects.Remove(project);
        await _context.SaveChangesAsync();
        
        return NoContent();
    }
    
    private bool ProjectExists(int id)
    {
        return _context.Projects.Any(p => p.Id == id);
    }
}
