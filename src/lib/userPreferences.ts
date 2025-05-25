/**
 * This module handles storing and retrieving user preferences and reading history
 * to enable AI-powered content recommendations.
 */

export interface ReadingHistory {
  postId: string;
  timestamp: number;
  readingTime: number; // in seconds
  completionPercentage: number; // 0-100
}

export interface UserPreferences {
  readingHistory: ReadingHistory[];
  categoryPreferences: Record<string, number>; // category -> interest score
  lastVisit: number;
}

const USER_PREFS_KEY = 'user_blog_preferences';

/**
 * Initialize user preferences if they don't exist
 */
export function initializeUserPreferences(): UserPreferences {
  // Only run on client side
  if (typeof window === 'undefined') {
    return getDefaultPreferences();
  }
  
  const existing = localStorage.getItem(USER_PREFS_KEY);
  if (!existing) {
    const defaults = getDefaultPreferences();
    localStorage.setItem(USER_PREFS_KEY, JSON.stringify(defaults));
    return defaults;
  }
  
  try {
    return JSON.parse(existing) as UserPreferences;
  } catch (error) {
    // In case of corrupted data, reset to defaults
    console.error('Error parsing user preferences:', error);
    const defaults = getDefaultPreferences();
    localStorage.setItem(USER_PREFS_KEY, JSON.stringify(defaults));
    return defaults;
  }
}

/**
 * Get default preferences structure
 */
function getDefaultPreferences(): UserPreferences {
  return {
    readingHistory: [],
    categoryPreferences: {},
    lastVisit: Date.now(),
  };
}

/**
 * Save updated user preferences
 */
export function saveUserPreferences(prefs: UserPreferences): void {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(USER_PREFS_KEY, JSON.stringify(prefs));
}

/**
 * Record a post view or read action
 */
export function recordPostRead(
  postId: string,
  categories: string[],
  readingTime: number = 0,
  completionPercentage: number = 0
): void {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  const prefs = initializeUserPreferences();
  
  // Update reading history
  const existingEntryIndex = prefs.readingHistory.findIndex(entry => entry.postId === postId);
  
  if (existingEntryIndex >= 0) {
    // Update existing entry
    prefs.readingHistory[existingEntryIndex] = {
      postId,
      timestamp: Date.now(),
      readingTime: Math.max(prefs.readingHistory[existingEntryIndex].readingTime, readingTime),
      completionPercentage: Math.max(prefs.readingHistory[existingEntryIndex].completionPercentage, completionPercentage)
    };
  } else {
    // Add new entry
    prefs.readingHistory.push({
      postId,
      timestamp: Date.now(),
      readingTime,
      completionPercentage
    });
    
    // Trim history if too large
    if (prefs.readingHistory.length > 20) {
      prefs.readingHistory.sort((a, b) => b.timestamp - a.timestamp);
      prefs.readingHistory = prefs.readingHistory.slice(0, 20);
    }
  }
  
  // Update category preferences
  categories.forEach(category => {
    prefs.categoryPreferences[category] = (prefs.categoryPreferences[category] || 0) + 1;
  });
  
  // Update last visit
  prefs.lastVisit = Date.now();
  
  // Save updated preferences
  saveUserPreferences(prefs);
}
