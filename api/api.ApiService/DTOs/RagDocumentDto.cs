using System.Collections.Generic;

namespace api.ApiService.DTOs
{
    public class RagDocumentDto
    {
        public string Id { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public RagMetadataDto Metadata { get; set; } = new RagMetadataDto();
    }

    public class RagMetadataDto
    {
        public string Source { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public List<string> Tags { get; set; } = new List<string>();
    }
}
