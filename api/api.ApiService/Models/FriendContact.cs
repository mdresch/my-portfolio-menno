using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.ApiService.Models
{
    [Table("FriendContacts")]
    public class FriendContact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string AlienName { get; set; } = string.Empty;

        [Required]
        [Range(18, 150, ErrorMessage = "Age must be between 18 and 150")]
        public int Age { get; set; }

        [Required]
        public DateTime Birthday { get; set; }

        [Required]
        [MaxLength(200)]
        public string CurrentResidence { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string BirthPlace { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string FavoriteColor { get; set; } = string.Empty;

        // Optional fields
        [MaxLength(500)]
        public string? SpaceFood { get; set; }

        [MaxLength(500)]
        public string? SpaceGear { get; set; }

        [MaxLength(500)]
        public string? HeroReason { get; set; }

        [MaxLength(500)]
        public string? AlienHobbies { get; set; }

        [MaxLength(200)]
        public string? DanceBattleSong { get; set; }

        [MaxLength(200)]
        public string? FavoriteDisneyFilm { get; set; }

        [MaxLength(1000)]
        public string? SpaceMessage { get; set; }

        // Consent tracking
        [Required]
        public bool AgeVerification { get; set; }

        [Required]
        public bool ConsentGiven { get; set; }

        [Required]
        public bool DutchConsent { get; set; }

        // Audit fields
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
        
        [MaxLength(50)]
        public string? IpAddress { get; set; }

        [MaxLength(500)]
        public string? UserAgent { get; set; }
    }
}
