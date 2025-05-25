using System.ComponentModel.DataAnnotations;

namespace api_backend.Models
{
    public class ContactMessage
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Message { get; set; }
        public DateTime SentAt { get; set; }
    }
}
