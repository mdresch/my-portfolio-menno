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

        public async Task<List<ProjectDTO>> GetAllAsync()
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

        public async Task<ProjectDTO?> GetByIdAsync(int id)
        {
            var project = await _context.Projects.FindAsync(id);
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
    }
}