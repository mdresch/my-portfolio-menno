using System;
using System.ComponentModel.DataAnnotations;

namespace api.ApiService.Models
{
    /// <summary>
    /// Represents a RAG-generated document for retrieval augmentation.
    /// </summary>
    public class RagDocument
    {
        [Key]
        public string Id { get; set; } = string.Empty;

        [Required]
        public string Content { get; set; } = string.Empty;

        [Required]
        public string Source { get; set; } = string.Empty;

        public string? Title { get; set; }

        public string? Date { get; set; }

        public string? Tags { get; set; }
    }
}
