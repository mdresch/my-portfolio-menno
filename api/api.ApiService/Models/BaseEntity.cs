using System;
using System.ComponentModel.DataAnnotations;

namespace api.ApiService.Models
{
    /// <summary>
    /// Base entity class with common properties for Azure SQL entities
    /// </summary>
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        
        // Azure Best Practice: Use UTC dates for global applications
        public DateTime Created { get; set; }
        
        // Azure Best Practice: Use nullable for optional update timestamp
        public DateTime? Updated { get; set; }
    }
}