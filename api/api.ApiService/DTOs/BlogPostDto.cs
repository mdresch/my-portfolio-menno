using System;
namespace api.ApiService.DTOs
{
    public class BlogPostDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime? PublishedDate { get; set; }
        public string? Excerpt { get; set; }
        // Add other properties as needed
    }
}
