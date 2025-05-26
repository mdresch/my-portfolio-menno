using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.ApiService.Data;
using api.ApiService.Models;
using api.ApiService.DTOs;
using Microsoft.Extensions.Logging;

namespace api.ApiService.Services
{
    public class ProjectService
    {
        private readonly PortfolioContext _context;
        private readonly ILogger<ProjectService> _logger;

        public ProjectService(PortfolioContext context, ILogger<ProjectService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<List<ProjectDTO>> GetAllAsync()
        {
            _logger.LogInformation("Entering GetAllAsync method");
            try
            {
                var projects = await _context.Projects.ToListAsync();
                var projectDTOs = projects.Select(p => new ProjectDTO
                {
                    Id = p.Id,
                    Title = p.Title,
                    Description = p.Description,
                    ImageUrl = p.ImageUrl,
                    GitHubUrl = p.GitHubUrl,
                    LiveUrl = p.LiveUrl,
                    Created = p.Created,
                    Technologies = p.Technologies,
                    Challenges = p.Challenges ?? new List<string>(),
                    ViewCount = p.ViewCount
                }).ToList();
                _logger.LogInformation($"GetAllAsync method completed. Retrieved {projectDTOs.Count} projects");
                return projectDTOs;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred in GetAllAsync method");
                throw;
            }
        }

        public async Task<ProjectDTO?> GetByIdAsync(int id)
        {
            var project = await _context.Projects.FirstOrDefaultAsync(p => p.Id == id);
            if (project == null) return null;

            return new ProjectDTO
            {
                Id = project.Id,
                Title = project.Title,
                Description = project.Description,
                ImageUrl = project.ImageUrl,
                GitHubUrl = project.GitHubUrl,
                LiveUrl = project.LiveUrl,
                Created = project.Created,
                Technologies = project.Technologies,
                Challenges = project.Challenges ?? new List<string>(),
                ViewCount = project.ViewCount
            };
        }

        public async Task IncrementViewCountAsync(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project != null)
            {
                project.ViewCount++;
                await _context.SaveChangesAsync();
            }
        }

        private ProjectDTO MapProjectToDTO(Project project)
        {
            return new ProjectDTO
            {
                Id = project.Id,
                Title = project.Title,
                Description = project.Description,
                ImageUrl = project.ImageUrl,
                GitHubUrl = project.GitHubUrl,
                LiveUrl = project.LiveUrl,
                Created = project.Created,
                Technologies = project.Technologies,
                Challenges = project.Challenges ?? new List<string>(),
                ViewCount = project.ViewCount
            };
        }
    }
}