using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace PortfolioApi.Models
{
    /// <summary>
    /// Represents a portfolio project with Azure best practices
    /// </summary>
    public class Project : BaseEntity
    {
        // Rename to match controller expectations
        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = null!;
        
        [Required]
        public string Description { get; set; } = null!;
        
        // Azure Best Practice: Store as JSON for flexible schema and easy querying
        [Column(TypeName = "nvarchar(MAX)")]
        public string? TechnologiesJson { get; set; }
        
        [NotMapped]
        public List<string>? Technologies 
        {
            get => TechnologiesJson != null ? 
                JsonSerializer.Deserialize<List<string>>(TechnologiesJson) : null;
            set => TechnologiesJson = value != null ? 
                JsonSerializer.Serialize(value) : null;
        }
        
        // Rename to match controller expectations
        public string? GitHubUrl { get; set; }
        
        // Rename to match controller expectations
        public string? LiveUrl { get; set; }
        
        public string? ImageUrl { get; set; }
        
        // Azure Best Practice: Add fields for sorting and filtering
        public bool IsFeatured { get; set; } = false;
        
        public int DisplayOrder { get; set; } = 0;
        
        // For backward compatibility
        [NotMapped]
        public string? Name
        {
            get => Title;
            set => Title = value ?? string.Empty;
        }
        
        [NotMapped]
        public string? ProjectUrl
        {
            get => LiveUrl;
            set => LiveUrl = value;
        }
        
        [NotMapped]
        public string? GithubUrl
        {
            get => GitHubUrl;
            set => GitHubUrl = value;
        }
    }
}