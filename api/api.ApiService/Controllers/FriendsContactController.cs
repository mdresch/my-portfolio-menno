using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.ApiService.Data;
using api.ApiService.Models;
using api.ApiService.DTOs;

namespace api.ApiService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FriendsContactController : ControllerBase
    {
        private readonly PortfolioContext _context;
        private readonly ILogger<FriendsContactController> _logger;

        public FriendsContactController(PortfolioContext context, ILogger<FriendsContactController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<FriendContactCreateResponse>> CreateFriendContact([FromBody] FriendContactDto dto)
        {
            try
            {
                // Validate age
                if (!int.TryParse(dto.Age, out int age) || age < 18)
                {
                    return BadRequest(new FriendContactCreateResponse
                    {
                        Success = false,
                        Message = "You must be 18 or older to submit this form"
                    });
                }

                // Validate birthday
                if (!DateTime.TryParse(dto.Birthday, out DateTime birthday))
                {
                    return BadRequest(new FriendContactCreateResponse
                    {
                        Success = false,
                        Message = "Invalid birthday format"
                    });
                }

                // Validate consent
                if (!dto.AgeVerification || !dto.ConsentGiven || !dto.DutchConsent)
                {
                    return BadRequest(new FriendContactCreateResponse
                    {
                        Success = false,
                        Message = "All consent requirements must be accepted"
                    });
                }

                // Create entity
                var friendContact = new FriendContact
                {
                    Name = dto.Name.Trim(),
                    AlienName = dto.AlienName.Trim(),
                    Age = age,
                    Birthday = birthday,
                    CurrentResidence = dto.CurrentResidence.Trim(),
                    BirthPlace = dto.BirthPlace.Trim(),
                    FavoriteColor = dto.FavoriteColor.Trim(),
                    SpaceFood = dto.SpaceFood?.Trim(),
                    SpaceGear = dto.SpaceGear?.Trim(),
                    HeroReason = dto.HeroReason?.Trim(),
                    AlienHobbies = dto.AlienHobbies?.Trim(),
                    DanceBattleSong = dto.DanceBattleSong?.Trim(),
                    FavoriteDisneyFilm = dto.FavoriteDisneyFilm?.Trim(),
                    SpaceMessage = dto.SpaceMessage?.Trim(),
                    AgeVerification = dto.AgeVerification,
                    ConsentGiven = dto.ConsentGiven,
                    DutchConsent = dto.DutchConsent,
                    SubmittedAt = DateTime.UtcNow,
                    IpAddress = GetClientIpAddress(),
                    UserAgent = Request.Headers.UserAgent.ToString()
                };

                _context.FriendContacts.Add(friendContact);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Friend contact created with ID: {Id} for {Name}", 
                    friendContact.Id, friendContact.Name);

                return Ok(new FriendContactCreateResponse
                {
                    Success = true,
                    Message = "Thank you for sharing your cosmic details! Your intergalactic friend profile has been received.",
                    Id = friendContact.Id
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating friend contact");
                return StatusCode(500, new FriendContactCreateResponse
                {
                    Success = false,
                    Message = "An error occurred while processing your submission. Please try again."
                });
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetFriendContacts()
        {
            try
            {
                var contacts = await _context.FriendContacts
                    .AsNoTracking()
                    .OrderByDescending(f => f.SubmittedAt)
                    .Select(f => new
                    {
                        f.Id,
                        f.Name,
                        f.AlienName,
                        f.SubmittedAt
                    })
                    .ToListAsync();

                return Ok(contacts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving friend contacts");
                return StatusCode(500, "Error retrieving friend contacts");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FriendContact>> GetFriendContact(int id)
        {
            try
            {
                var contact = await _context.FriendContacts
                    .AsNoTracking()
                    .FirstOrDefaultAsync(f => f.Id == id);

                if (contact == null)
                {
                    return NotFound();
                }

                return Ok(contact);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving friend contact {Id}", id);
                return StatusCode(500, "Error retrieving friend contact");
            }
        }

        private string? GetClientIpAddress()
        {
            var ipAddress = Request.Headers["X-Forwarded-For"].FirstOrDefault();
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.Headers["X-Real-IP"].FirstOrDefault();
            }
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = HttpContext.Connection.RemoteIpAddress?.ToString();
            }
            return ipAddress;
        }
    }
}
