namespace PortfolioApi.DTOs;

// Project DTOs
public class ProjectDTO
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public DateTime Created { get; set; }
    public List<string>? Technologies { get; set; }
    public List<string>? Challenges { get; set; }
}

public class CreateProjectDTO
{
    public required string Title { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public List<string>? Technologies { get; set; }
    public List<string>? Challenges { get; set; }
}

public class UpdateProjectDTO
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public List<string>? Technologies { get; set; }
    public List<string>? Challenges { get; set; }
}

// Contact Message DTOs
public class ContactMessageDTO
{
    public int? Id { get; set; } // Optional as it may not be returned to public API
    public string Name { get; set; } = null!;
    public string? Email { get; set; } // Optional as it might be hidden in public responses
    public string? Subject { get; set; }
    public string? Message { get; set; }
    public DateTime ReceivedAt { get; set; }
    public bool? IsRead { get; set; }
}

public class CreateContactMessageDTO
{
    public required string Name { get; set; }
    public required string Email { get; set; }
    public string? Subject { get; set; }
    public required string Message { get; set; }
}

// Skill DTOs
public class SkillDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string? Category { get; set; }
    public int ProficiencyLevel { get; set; }
    public string? IconUrl { get; set; }
}

public class CreateSkillDTO
{
    public required string Name { get; set; }
    public string? Category { get; set; }
    public int ProficiencyLevel { get; set; }
    public string? IconUrl { get; set; }
}

public class UpdateSkillDTO
{
    public string? Name { get; set; }
    public string? Category { get; set; }
    public int? ProficiencyLevel { get; set; }
    public string? IconUrl { get; set; }
}
