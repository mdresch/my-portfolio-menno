using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.ApiService.Models
{
    /// <summary>
    /// Represents a contact form message following Azure best practices
    /// </summary>
    public class ContactMessage : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = null!;
        
        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public string Email { get; set; } = null!;
        
        // Add missing Subject property
        [MaxLength(200)]
        public string? Subject { get; set; }
        
        [Required]
        public string Message { get; set; } = null!;
        
        public bool IsRead { get; set; } = false;
        
        public string? AdminResponse { get; set; }
        
        public DateTime? ResponseDate { get; set; }
        
        // Add missing ReceivedAt property and map to Created
        [NotMapped]
        public DateTime ReceivedAt
        {
            get => Created;
            set => Created = value;
        }
    }
}