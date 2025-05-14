using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using PortfolioApi.Data;
using PortfolioApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioApi.Services
{
    /// <summary>
    /// Provides extension methods optimizing Entity Framework Core queries for Azure SQL
    /// </summary>
    public static class QueryOptimizer
    {
        /// <summary>
        /// Optimizes a blog posts query with proper includes and tracking settings
        /// </summary>
        public static IQueryable<BlogPost> OptimizeBlogPostsQuery(this IQueryable<BlogPost> query, bool includeCrossPosts = true)
        {
            // Apply NoTracking for read-only scenarios
            query = query.AsNoTracking();
            
            // Use split query for better performance with complex includes
            if (includeCrossPosts)
            {
                query = query.Include(b => b.CrossPosts)
                             .AsSplitQuery();
            }
            
            return query;
        }
        
        /// <summary>
        /// Gets projects with appropriate caching based on Azure SQL best practices
        /// </summary>
        public static async Task<IEnumerable<Project>> GetCachedProjectsAsync(
            this PortfolioContext context,
            IMemoryCache memoryCache)
        {
            const string cacheKey = "AllProjects";
            
            // Try to get from cache first
            if (!memoryCache.TryGetValue(cacheKey, out List<Project>? projects))
            {
                // If not in cache, query with optimizations
                projects = await context.Projects
                    .AsNoTracking()
                    .OrderByDescending(p => p.Created)
                    .ToListAsync();
                
                // Cache with appropriate duration - Azure Best Practice: Use sliding expiration
                var cacheOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromMinutes(10))
                    .SetAbsoluteExpiration(TimeSpan.FromHours(1));
                
                memoryCache.Set(cacheKey, projects, cacheOptions);
            }
            
            return projects ?? new List<Project>();
        }
        
        /// <summary>
        /// Executes a query with retry logic for transient Azure SQL errors
        /// </summary>
        public static async Task<T> ExecuteWithRetryAsync<T>(Func<Task<T>> operation)
        {
            int retryCount = 0;
            int maxRetries = 3;
            TimeSpan delay = TimeSpan.FromSeconds(1);
            
            while (true)
            {
                try
                {
                    return await operation();
                }
                catch (Exception ex) when (
                    (ex is Microsoft.Data.SqlClient.SqlException sqlEx && 
                     // Azure Best Practice: Handle specific Azure SQL transient error codes
                     (sqlEx.Number == 1205 || // Deadlock victim
                      sqlEx.Number == 40613 || // Database unavailable
                      sqlEx.Number == 40501 || // Service busy
                      sqlEx.Number == 49918 || // Not enough resources
                      sqlEx.Number == 40143 || // Connection could not be initialized
                      sqlEx.Number == 233 || // Connection doesn't exist
                      sqlEx.Number == 4060 || // Cannot open database
                      sqlEx.Number == 10928 || // Resource limit
                      sqlEx.Number == 10929 || // Resource governor
                      sqlEx.Number == 40540 || // Service in paused state
                      sqlEx.Number == 40197)) // Error connecting
                    && retryCount < maxRetries)
                {
                    retryCount++;
                    await Task.Delay(delay);
                    // Azure Best Practice: Use exponential backoff with jitter for retries
                    delay = TimeSpan.FromSeconds(Math.Min(30, Math.Pow(2, retryCount) + new Random().NextDouble())); 
                }
            }
        }
    }
}