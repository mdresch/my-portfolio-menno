using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using PortfolioApi.Models;
using PortfolioApi.Data;

namespace PortfolioApi.Controllers
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