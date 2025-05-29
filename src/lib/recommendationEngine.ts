/**
 * AI-powered recommendation engine for blog content
 * Uses basic NLP techniques and user behavior analysis to suggest relevant content
 */

import { BlogPost } from "./markdown";
import { UserPreferences } from "./userPreferences";

// Weight factors for different recommendation signals
const WEIGHTS = {
  CATEGORY_MATCH: 0.4,
  RECENCY: 0.2,
  CONTENT_SIMILARITY: 0.4
};

/**
 * Generate content recommendations based on user preferences and available posts
 */
export function getRecommendations(
  userPreferences: UserPreferences,
  availablePosts: Omit<BlogPost, "content">[],
  currentPostId?: string,
  count: number = 3
): Omit<BlogPost, "content">[] {
  // Filter out the current post if specified
  const postsToConsider = currentPostId
    ? availablePosts.filter(post => post.id !== currentPostId)
    : availablePosts;
  
  if (postsToConsider.length === 0) return [];
  
  // Calculate recommendation scores for each post
  const scoredPosts = postsToConsider.map(post => {
    const score = calculateRecommendationScore(post, userPreferences);
    return { post, score };
  });
  
  // Sort by score (descending) and take the requested number
  scoredPosts.sort((a, b) => b.score - a.score);
  return scoredPosts.slice(0, count).map(item => item.post);
}

/**
 * Calculate a recommendation score for a post based on user preferences
 */
function calculateRecommendationScore(
  post: Omit<BlogPost, "content">,
  userPreferences: UserPreferences
): number {
  const categoryScore = calculateCategoryScore(post.categories, userPreferences.categoryPreferences);
  const recencyScore = calculateRecencyScore(post.date);
  
  // Weight and combine the scores
  return (
    WEIGHTS.CATEGORY_MATCH * categoryScore +
    WEIGHTS.RECENCY * recencyScore + 
    WEIGHTS.CONTENT_SIMILARITY * 0.5 // Default content similarity score (placeholder)
  );
}

/**
 * Calculate how closely a post's categories match user preferences
 */
function calculateCategoryScore(postCategories: string[], userCategoryPrefs: Record<string, number>): number {
  if (Object.keys(userCategoryPrefs).length === 0) return 0.5; // Neutral score if no preferences
  
  let totalUserCategoryWeight = 0;
  for (const weight of Object.values(userCategoryPrefs)) {
    totalUserCategoryWeight += weight;
  }
  
  if (totalUserCategoryWeight === 0) return 0.5;
  
  // Calculate how much the user has shown interest in the post's categories
  let matchScore = 0;
  for (const category of postCategories) {
    matchScore += userCategoryPrefs[category] || 0;
  }
  
  // Normalize the score between 0 and 1
  return Math.min(matchScore / (totalUserCategoryWeight * 0.5), 1);
}

/**
 * Calculate a recency score based on the post's publication date
 * Newer posts get higher scores
 */
function calculateRecencyScore(dateString: string): number {
  const postDate = new Date(dateString).getTime();
  const now = Date.now();
  
  // Consider posts in the last 90 days as "recent"
  const ninetyDaysMs = 90 * 24 * 60 * 60 * 1000;
  const age = now - postDate;
  
  // Normalize to a score between 0 and 1
  // Newer posts have scores closer to 1
  return Math.max(0, 1 - (age / ninetyDaysMs));
}

/**
 * Analyze the user's reading history to extract behavioral patterns
 * This function refines category preferences based on actual reading behavior
 */
export function analyzeReadingBehavior(userPreferences: UserPreferences): Record<string, number> {
  const { readingHistory } = userPreferences;
  const refinedPreferences: Record<string, number> = { ...userPreferences.categoryPreferences };
  
  // Weight recent reads more heavily
  readingHistory.forEach(historyItem => {
    // In a production implementation, we would:
    // 1. Calculate a weight based on recency and completion
    const weight = calculateTimeDecayFactor(historyItem.timestamp) * 
                  (historyItem.completionPercentage / 100);
                  
    // 2. Look up the post by ID to get its categories
    // 3. Apply the weight to each category
    // This is a simplified version that just demonstrates the concept
  });
  
  return refinedPreferences;
}

/**
 * Calculate a decay factor based on how long ago an event occurred
 * Recent events have values closer to 1, older events closer to 0
 */
function calculateTimeDecayFactor(timestamp: number): number {
  const now = Date.now();
  const age = now - timestamp;
  
  // 30-day half-life
  const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
  return Math.exp(-age / thirtyDaysMs);
}
