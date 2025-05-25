using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace PortfolioApi.Middleware
{
    /// <summary>
    /// Middleware for monitoring SQL performance in Azure
    /// </summary>
    public class SqlMonitoringMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<SqlMonitoringMiddleware> _logger;

        public SqlMonitoringMiddleware(RequestDelegate next, ILogger<SqlMonitoringMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Azure Best Practice: Track SQL operation performance
            var watch = Stopwatch.StartNew();
            
            // Set a correlation ID for tracking operations across services
            var correlationId = context.Request.Headers["x-correlation-id"].ToString() 
                ?? Guid.NewGuid().ToString();
                
            context.Response.Headers["x-correlation-id"] = correlationId;
            
            try
            {
                await _next(context);
            }
            finally
            {
                watch.Stop();
                
                // Azure Best Practice: Log performance metrics in structured format for Azure Monitor
                if (watch.ElapsedMilliseconds > 500) // Log slow requests
                {
                    _logger.LogWarning("Slow request: {Path} took {ElapsedMilliseconds}ms (Correlation ID: {CorrelationId})",
                        context.Request.Path, 
                        watch.ElapsedMilliseconds,
                        correlationId);
                }
            }
        }
    }
}