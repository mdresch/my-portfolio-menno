using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace api_backend.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public ICollection<Skill> Skills { get; set; }
    }
}
