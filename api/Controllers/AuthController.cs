using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using PortfolioApi.Models;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    
    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    public class LoginRequestDto
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
    
    public class UserDto
    {
        public string Id { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
    }
    
    public class AuthTokenDto
    {
        public string Token { get; set; } = string.Empty;
        public DateTime Expiration { get; set; }
    }
    
    public class AuthResponseDto
    {
        public AuthTokenDto Token { get; set; } = new AuthTokenDto();
        public UserDto User { get; set; } = new UserDto();
    }
    
    // POST: api/auth/login
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequestDto login)
    {
        // For demo purposes, use a hardcoded admin user
        // In production, validate against a real user database
        if (login.Username == "admin" && login.Password == "Portfolio@2025")
        {
            var token = GenerateJwtToken("1", login.Username, "admin@portfolio.com", "Admin");
            
            var response = new AuthResponseDto
            {
                Token = new AuthTokenDto
                {
                    Token = token,
                    Expiration = DateTime.UtcNow.AddHours(2)
                },
                User = new UserDto
                {
                    Id = "1",
                    Username = login.Username,
                    Email = "admin@portfolio.com",
                    Role = "Admin"
                }
            };
            
            return Ok(response);
        }
        
        return Unauthorized("Invalid username or password");
    }
    
    // Helper method to generate JWT token
    private string GenerateJwtToken(string userId, string username, string email, string role)
    {
        var jwtKey = _configuration["Jwt:Key"];
        if (string.IsNullOrEmpty(jwtKey))
        {
            throw new InvalidOperationException("JWT key is not configured");
        }
        
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, userId),
            new Claim(ClaimTypes.Name, username),
            new Claim(ClaimTypes.Email, email),
            new Claim(ClaimTypes.Role, role)
        };
        
        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(2),
            signingCredentials: creds
        );
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
