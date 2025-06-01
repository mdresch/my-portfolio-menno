using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using api.ApiService.Models;
using api.ApiService.Data;

namespace api.ApiService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogCrossPostController : ControllerBase
    {
        private readonly PortfolioContext _context;
        
        public BlogCrossPostController(PortfolioContext context)
        {
            _context = context;
        }
    }
}