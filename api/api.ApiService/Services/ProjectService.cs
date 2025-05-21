using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.ApiService.Data;
using api.ApiService.Models;
using api.ApiService.DTOs;

namespace api.ApiService.Services
{
    public class ProjectService
    {
        private readonly PortfolioContext _context;

        public ProjectService(PortfolioContext context)
        {
            _context = context;
        }

using api.ApiService.Data;
using api.ApiService.Models;
using api.ApiService.DTOs;
using Microsoft.Extensions.Logging; // Import for logging

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
public async Task<List<ProjectDTO>> GetAllAsync()
        {
            try
            {
                var projects = await _context.Projects.ToListAsync();
                return projects.Select(p => new ProjectDTO
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
            }
            catch (Exception ex)
            {
                // TODO: Implement proper logging
                Console.WriteLine($"Error in GetAllAsync: {ex.Message}");
                throw;
            }
        }

        public async Task<ProjectDTO?> GetByIdAsync(int id)
            return projects.Select(p => new ProjectDTO
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
        }

        public async Task<ProjectDTO?> GetByIdAsync(int id)
        {
public async Task<ProjectDTO?> GetByIdAsync(int id)
        {
            // Using parameterized query to prevent NoSQL injection
            var project = await _context.Projects.FirstOrDefaultAsync(p => p.Id == id);
            if (project == null) return null;

            return new ProjectDTO
            if (project == null) return null;

var project = await _context.Projects.FindAsync(id);
            if (project == null) return null;

            // TODO: Implement mapping using AutoMapper
            return MapProjectToDTO(project);
        }

        public async Task IncrementViewCountAsync(int id)
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
public async Task IncrementViewCountAsync(int id)
        {
            // using System.Data.Entity; // Import EntityFramework for DbSet<T>
            var project = await _context.Projects.FindAsync(id);
            if (project != null)
            {
            if (project != null)
            {
                project.ViewCount++;
                await _context.SaveChangesAsync();
            }
        }
    }
}