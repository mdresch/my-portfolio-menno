using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PortfolioApi.Models
{
    /// <summary>
    /// Represents a blog post following Azure SQL optimization patterns
    /// </summary>
    public class BlogPost : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = null!;
        
        [Required]
        public string Content { get; set; } = null!;
        
        [Required]
        [MaxLength(100)]
        public string Slug { get; set; } = null!;
        
        // Add properties that are referenced in controllers but missing in model
        [MaxLength(500)]
        public string? Excerpt { get; set; }
        
        [MaxLength(100)]
        public string? Author { get; set; }
        
        public DateTime? Published { get; set; }
        
        [NotMapped]
        public DateTime? LastModified 
        {
            get => Updated;
            // Add a setter that updates the Updated property
            set 
            {
                if (value.HasValue)
                {
                    Updated = value;
                }
            }
        }
        
        // Azure Best Practice: Store categories as JSON for flexible schema
        [Column(TypeName = "nvarchar(MAX)")]
        public string? CategoriesJson { get; set; }
        
        [NotMapped]
        public List<string>? Categories 
        {
            get => CategoriesJson != null ? 
                System.Text.Json.JsonSerializer.Deserialize<List<string>>(CategoriesJson) : null;
            set => CategoriesJson = value != null ? 
                System.Text.Json.JsonSerializer.Serialize(value) : null;
        }
        
        // Azure Best Practice: Store image in Azure Storage with URL reference
        [MaxLength(255)]
        public string? ImageUrl { get; set; }
        
        [MaxLength(200)]
        public string? Summary { get; set; }
        
        public bool IsPublished { get; set; } = false;
        
        // Navigation property for related cross-posts
        public virtual ICollection<CrossPost>? CrossPosts { get; set; }
    }

    public class CrossPost : BaseEntity
    {
        [Required]
        [MaxLength(50)]
        public string Platform { get; set; } = null!;
        
        // Rename properties to match what controllers expect
        [Required]
        [MaxLength(255)]
        public string CrossPostedUrl { get; set; } = null!;
        
        // Rename to match controller expectations
        public DateTime? CrossPostedAt { get; set; }
        
        [MaxLength(50)]
        public string? Status { get; set; } = "Published";
        
        // Foreign key relationship to blog post
        public int BlogPostId { get; set; }
        
        [JsonIgnore]
        public virtual BlogPost? BlogPost { get; set; }
        
        // For backward compatibility
        [NotMapped]
        public string URL 
        {
            get => CrossPostedUrl;
            set => CrossPostedUrl = value;
        }
        
        [NotMapped]
        public DateTime? PublishedAt 
        {
            get => CrossPostedAt;
            set => CrossPostedAt = value;
        }
    }

    /// <summary>
    /// View model for cross-post statistics, mapped to a database view
    /// </summary>
    public class CrossPostStatistics
    {
        // Add ID for entity tracking
        [Key]
        public int Id { get; set; }
        
        public string Platform { get; set; } = null!;
        
        // Rename to match controller expectations
        public int TotalCrossPosts { get; set; }
        
        // Rename to match controller expectations  
        public DateTime? LastCrossPostedAt { get; set; }
        
        // For backward compatibility
        [NotMapped]
        public int Count 
        {
            get => TotalCrossPosts;
            set => TotalCrossPosts = value;
        }
        
        [NotMapped]
        public DateTime? FirstPublishedAt { get; set; }
        
        [NotMapped]
        public DateTime? LastPublishedAt 
        {
            get => LastCrossPostedAt;
            set => LastCrossPostedAt = value;
        }
    }
}