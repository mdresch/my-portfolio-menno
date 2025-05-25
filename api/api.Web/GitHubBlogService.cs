using System.Net.Http.Headers;
using System.Text.Json;

namespace api.Web;

public class GitHubBlogService(HttpClient httpClient)
{
    private const string RepoOwner = "mdresch"; // TODO: Set your GitHub username
    private const string RepoName = "my-portfolio-menno"; // TODO: Set your repo name
    private const string BlogFolder = "content/blog";
    private const string ApiBase = "https://api.github.com";

    public async Task<List<BlogPostMeta>> GetBlogPostsAsync()
    {
        var request = new HttpRequestMessage(HttpMethod.Get, $"{ApiBase}/repos/{RepoOwner}/{RepoName}/contents/{BlogFolder}");
        request.Headers.UserAgent.Add(new ProductInfoHeaderValue("MyPortfolioApp", "1.0"));
        var response = await httpClient.SendAsync(request);
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        var files = JsonSerializer.Deserialize<List<GitHubContent>>(json);
        var posts = new List<BlogPostMeta>();
        if (files != null)
        {
            foreach (var file in files.Where(f => f.name.EndsWith(".md")))
            {
                posts.Add(new BlogPostMeta
                {
                    Title = file.name.Replace(".md", ""),
                    Url = file.download_url,
                    // Optionally fetch and parse markdown for summary/date
                });
            }
        }
        return posts;
    }

    private record GitHubContent(string name, string download_url);

    public class BlogPostMeta
    {
        public string Title { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        // Add Summary, PublishedAt, etc. if you parse markdown frontmatter
    }
}
