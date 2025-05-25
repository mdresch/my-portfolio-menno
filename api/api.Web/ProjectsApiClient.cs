using System.Net.Http.Json;
using PortfolioApi.DTOs;

namespace api.Web;

public class ProjectsApiClient(HttpClient httpClient)
{
    public async Task<List<ProjectDTO>> GetProjectsAsync()
    {
        var projects = await httpClient.GetFromJsonAsync<List<ProjectDTO>>("/api/projects");
        return projects ?? new List<ProjectDTO>();
    }
}
