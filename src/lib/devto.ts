export function validateApiKey(apiKey: string): boolean {
  // DEV.to API keys are typically 40 characters long and start with "v1_"
  // But let's be more lenient in validation since the actual API will reject invalid keys
  if (!apiKey) return false;
  
  // DEV.to API keys are usually 40 characters long
  if (apiKey.length < 3) return false;
  
  // DEV.to API keys usually start with "v1_" but let's not enforce this strictly
  // as the actual API will handle validation
  return true;
}

export function formatDevToArticle(post: any): any {
  // Get current timestamp in the correct format for DEV.to
  const now = new Date();
  // Add 1 minute to ensure it's in the future
  now.setMinutes(now.getMinutes() + 1);
  // Format timestamp according to DEV.to's requirements
  const futureTimestamp = now.toISOString().replace('T', ' ').replace('Z', '');
  
  // Format tags according to DEV.to requirements
  const formatTag = (tag: string): string => {
    // Convert to lowercase
    let formatted = tag.toLowerCase();
    // Replace spaces with hyphens
    formatted = formatted.replace(/\s+/g, '-');
    // Remove any non-alphanumeric characters except hyphens
    formatted = formatted.replace(/[^a-z0-9-]/g, '');
    // Remove consecutive hyphens
    formatted = formatted.replace(/-{2,}/g, '-');
    // Remove leading/trailing hyphens
    formatted = formatted.replace(/^-|-$/g, '');
    
    // Special handling for known tags
    const tagMap: { [key: string]: string } = {
      'tutorial': 'tutorial',
      'next.js': 'nextjs',
      'react': 'react'
    };
    
    // Use mapped tag if available, otherwise use formatted tag
    return tagMap[formatted] || formatted || 'webdevelopment';
  };

  // Get and format the tags
  const categories = post.categories || [];
  const formattedTags = categories.map(tag => formatTag(tag));

  // Add default tags if none are valid
  const validTags = formattedTags.filter(tag => tag.length > 0);
  if (validTags.length === 0) {
    validTags.push('webdevelopment');
  }

  // Ensure tags are unique
  const uniqueTags = [...new Set(validTags)];

  const article = {
    title: post.title,
    body_markdown: post.content,
    published: true,
    tags: uniqueTags,
    canonical_url: post.canonical_url || '',
    description: post.excerpt || post.title,
    main_image: post.image || '',
    series: '',
    published_at: futureTimestamp,
    organization_id: null
  };

  // Clean up any undefined values
  Object.keys(article).forEach(key => {
    if (article[key] === undefined || article[key] === null) {
      article[key] = '';
    }
  });

  return { article };
}
