using System;
using System.ComponentModel.DataAnnotations;

namespace api.ApiService.Models
{
    /// <summary>
    /// Represents a professional skill
    /// </summary>
    public class Skill : BaseEntity
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = null!;
        
        [MaxLength(255)]
        public string? Description { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Category { get; set; } = null!;
        
        [Range(1, 5)]
        public int ProficiencyLevel { get; set; }
        
        public string? IconUrl { get; set; }
        
        public int YearsOfExperience { get; set; }
    }
}