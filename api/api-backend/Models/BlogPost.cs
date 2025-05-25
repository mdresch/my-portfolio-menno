using System.ComponentModel.DataAnnotations;

namespace api_backend.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime PublishedAt { get; set; }
    }
}
