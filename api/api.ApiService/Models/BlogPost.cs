using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PortfolioApi.Models
{
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