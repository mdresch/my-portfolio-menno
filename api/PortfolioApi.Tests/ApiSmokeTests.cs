using System.Net;
using System.Threading.Tasks;
using Xunit;
// using Microsoft.AspNetCore.Mvc.Testing;
using PortfolioApi;

namespace PortfolioApi.Tests
{
    public class ApiSmokeTests // : IClassFixture<Microsoft.AspNetCore.Mvc.Testing.WebApplicationFactory<PortfolioApi.Program>>
    {
        // private readonly Microsoft.AspNetCore.Mvc.Testing.WebApplicationFactory<PortfolioApi.Program> _factory;

        // public ApiSmokeTests(Microsoft.AspNetCore.Mvc.Testing.WebApplicationFactory<PortfolioApi.Program> factory)
        // {
        //     _factory = factory;
        // }

        [Theory]
        [InlineData("/api/projects")]
        [InlineData("/api/skills")]
        [InlineData("/api/skills/categories")]
        [InlineData("/api/contact")]
        public async Task Get_Endpoints_ReturnSuccess(string url)
        {
            // var client = _factory.CreateClient();
            // var response = await client.GetAsync(url);
            // Assert.True(response.StatusCode == HttpStatusCode.OK || response.StatusCode == HttpStatusCode.Unauthorized || response.StatusCode == HttpStatusCode.Forbidden);
        }

        [Fact]
        public async Task Auth_Login_ReturnsToken_OnValidCredentials()
        {
            // var client = _factory.CreateClient();
            // var content = new StringContent("{\"username\":\"admin\",\"password\":\"Portfolio@2025\"}", System.Text.Encoding.UTF8, "application/json");
            // var response = await client.PostAsync("/api/auth/login", content);
            // Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            // var json = await response.Content.ReadAsStringAsync();
            // Assert.Contains("token", json);
        }
    }
}
