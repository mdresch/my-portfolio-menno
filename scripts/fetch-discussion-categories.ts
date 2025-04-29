import fetch from 'node-fetch';

async function fetchDiscussionCategories() {
  const owner = 'mdresch';
  const repo = 'my-portfolio-menno';
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/discussions/categories`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github+json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories = await response.json();
    console.log('Available Discussion Categories:');
    categories.forEach(category => {
      console.log(`- ${category.name} (ID: ${category.id})`);
    });

    // Return the first category ID (assuming you want to use the first one)
    return categories[0]?.id;
  } catch (error) {
    console.error('Error fetching discussion categories:', error);
    throw error;
  }
}

// Run the function
fetchDiscussionCategories();
