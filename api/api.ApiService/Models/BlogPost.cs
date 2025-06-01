using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api.ApiService.Models
{
    public class BlogPost : BaseEntity
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Content { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? Excerpt { get; set; }

        [Required]
        [MaxLength(250)]
        public string Slug { get; set; } = string.Empty;

        public DateTime? PublishedDate { get; set; }

        public bool IsPublished { get; set; } = false;

        [MaxLength(100)]
        public string? Author { get; set; }

        [MaxLength(255)]
        public string? CoverImageUrl { get; set; }

        public string? Categories { get; set; }

        public string? Tags { get; set; }

        public virtual ICollection<CrossPost> CrossPosts { get; set; } = new List<CrossPost>();
    }

    public class CrossPost : BaseEntity
    {
        [Required]
        [MaxLength(50)]
        public string Platform { get; set; } = null!;
        
        [Required]
        [MaxLength(255)]
        public string CrossPostedUrl { get; set; } = null!;
        
        public DateTime? CrossPostedAt { get; set; }
        
        [MaxLength(50)]
        public string? Status { get; set; } = "Published";
        
        public int BlogPostId { get; set; }
        public BlogPost? BlogPost { get; set; }
        
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

    public class CrossPostStatistics
    {
        [Key]
        public int Id { get; set; }
        
        public string Platform { get; set; } = null!;
        
        public int TotalCrossPosts { get; set; }
        
        public DateTime? LastCrossPostedAt { get; set; }
        
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