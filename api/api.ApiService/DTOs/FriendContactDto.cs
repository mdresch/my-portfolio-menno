namespace api.ApiService.DTOs
{
    public class FriendContactDto
    {
        public string Name { get; set; } = string.Empty;
        public string AlienName { get; set; } = string.Empty;
        public string Age { get; set; } = string.Empty; // String for validation
        public string Birthday { get; set; } = string.Empty;
        public string CurrentResidence { get; set; } = string.Empty;
        public string BirthPlace { get; set; } = string.Empty;
        public string FavoriteColor { get; set; } = string.Empty;
        public string? SpaceFood { get; set; }
        public string? SpaceGear { get; set; }
        public string? HeroReason { get; set; }
        public string? AlienHobbies { get; set; }
        public string? DanceBattleSong { get; set; }
        public string? FavoriteDisneyFilm { get; set; }
        public string? SpaceMessage { get; set; }
        public bool AgeVerification { get; set; }
        public bool ConsentGiven { get; set; }
        public bool DutchConsent { get; set; }
    }

    public class FriendContactCreateResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public int? Id { get; set; }
    }
}
