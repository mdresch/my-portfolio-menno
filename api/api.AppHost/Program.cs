var builder = DistributedApplication.CreateBuilder(args);

// Add the API service with HTTP endpoint
var apiService = builder.AddProject("apiservice", "../api.ApiService/api.ApiService.csproj")
    .WithExternalHttpEndpoints();

// Add the web frontend with reference to the API service
var webFrontend = builder.AddProject("webfrontend", "../api.Web/api.Web.csproj")
    .WithExternalHttpEndpoints()
    .WithReference(apiService);

builder.Build().Run();
