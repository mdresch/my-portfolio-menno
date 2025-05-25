using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace api_backend.Models
{
    public class Skill
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}
