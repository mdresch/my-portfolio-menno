using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;
using PortfolioApi.DTOs;
using System.Text.Json;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly PortfolioContext _context;
    private readonly ILogger<ContactController> _logger;
    
    public ContactController(PortfolioContext context, ILogger<ContactController> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    // POST: api/Contact
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<ContactMessageDTO>> SubmitContactMessage(CreateContactMessageDTO messageDto)
    {
        _logger.LogInformation("Receiving contact message from {Name}", messageDto.Name);
        
        var message = new ContactMessage
        {
            Name = messageDto.Name,
            Email = messageDto.Email,
            Subject = messageDto.Subject,
            Message = messageDto.Message,
            ReceivedAt = DateTime.UtcNow,
            IsRead = false
        };
        
        _context.ContactMessages.Add(message);
        await _context.SaveChangesAsync();
        
        // Return success but don't expose the ID to the public API
        return new ContactMessageDTO
        {
            Name = message.Name,
            Subject = message.Subject,
            ReceivedAt = message.ReceivedAt
        };
    }
    
    // The following endpoints should be secured with authentication in production
    
    // GET: api/Contact
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactMessageDTO>>> GetContactMessages()
    {
        _logger.LogInformation("Getting all contact messages");
        
        var messages = await _context.ContactMessages
            .OrderByDescending(m => m.ReceivedAt)
            .ToListAsync();
            
        return Ok(messages.Select(m => new ContactMessageDTO
        {
            Id = m.Id,
            Name = m.Name,
            Email = m.Email,
            Subject = m.Subject,
            Message = m.Message,
            ReceivedAt = m.ReceivedAt,
            IsRead = m.IsRead
        }));
    }
    
    // GET: api/Contact/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ContactMessageDTO>> GetContactMessage(int id)
    {
        _logger.LogInformation("Getting contact message with ID {Id}", id);
        
        var message = await _context.ContactMessages.FindAsync(id);
        
        if (message == null)
        {
            _logger.LogWarning("Contact message with ID {Id} not found", id);
            return NotFound();
        }
        
        // Mark as read when viewed
        if (!message.IsRead)
        {
            message.IsRead = true;
            _context.Entry(message).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        
        return new ContactMessageDTO
        {
            Id = message.Id,
            Name = message.Name,
            Email = message.Email,
            Subject = message.Subject,
            Message = message.Message,
            ReceivedAt = message.ReceivedAt,
            IsRead = message.IsRead
        };
    }
    
    // DELETE: api/Contact/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContactMessage(int id)
    {
        _logger.LogInformation("Deleting contact message with ID {Id}", id);
        
        var message = await _context.ContactMessages.FindAsync(id);
        if (message == null)
        {
            _logger.LogWarning("Contact message with ID {Id} not found", id);
            return NotFound();
        }
        
        _context.ContactMessages.Remove(message);
        await _context.SaveChangesAsync();
        
        return NoContent();
    }
}
