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
}

public class CreateProjectDTO
{
    public required string Title { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public List<string>? Technologies { get; set; }
}

public class UpdateProjectDTO
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public List<string>? Technologies { get; set; }
}

// Blog Post DTOs
public class BlogPostDTO
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public string? Excerpt { get; set; }
    public string Content { get; set; } = null!;
    public string? Author { get; set; }
    public DateTime Published { get; set; }
    public DateTime? LastModified { get; set; }
    public List<string>? Categories { get; set; }
}

public class CreateBlogPostDTO
{
    public required string Title { get; set; }
    public required string Slug { get; set; }
    public string? Excerpt { get; set; }
    public required string Content { get; set; }
    public string? Author { get; set; }
    public List<string>? Categories { get; set; }
}

public class UpdateBlogPostDTO
{
    public string? Title { get; set; }
    public string? Slug { get; set; }
    public string? Excerpt { get; set; }
    public string? Content { get; set; }
    public string? Author { get; set; }
    public List<string>? Categories { get; set; }
}

// Cross Post DTOs
public class CrossPostDTO
{
    public int Id { get; set; }
    public int BlogPostId { get; set; }
    public string Platform { get; set; } = null!;
    public string? CrossPostedUrl { get; set; }
    public DateTime CrossPostedAt { get; set; }
    public string Status { get; set; } = null!;
}

public class CreateCrossPostDTO
{
    public required int BlogPostId { get; set; }
    public required string Platform { get; set; }
    public string? CrossPostedUrl { get; set; }
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
