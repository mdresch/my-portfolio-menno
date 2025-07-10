/**
 * Chat storage utility for persisting chat messages and settings
 */

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  id: string;
  status?: 'sending' | 'sent' | 'error';
}

export interface ChatSettings {
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  lastClearTime: number;
}

export interface ChatData {
  messages: ChatMessage[];
  settings: ChatSettings;
  lastActivity: number;
}

const CHAT_STORAGE_KEY = "portfolio_chat_data";
const MAX_STORED_MESSAGES = 100; // Limit stored messages for performance
const MESSAGE_RETENTION_DAYS = 7; // Auto-cleanup old messages

/**
 * Get default chat data structure
 */
function getDefaultChatData(): ChatData {
  return {
    messages: [],
    settings: {
      soundEnabled: false,
      notificationsEnabled: true,
      lastClearTime: Date.now(),
    },
    lastActivity: Date.now(),
  };
}

/**
 * Initialize chat data from localStorage
 */
export function initializeChatData(): ChatData {
  // Only run on client side
  if (typeof window === "undefined") {
    return getDefaultChatData();
  }
  
  const existing = localStorage.getItem(CHAT_STORAGE_KEY);
  if (!existing) {
    const defaults = getDefaultChatData();
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  }
  
  try {
    const data = JSON.parse(existing) as ChatData;
    
    // Clean up old messages
    const cutoffTime = Date.now() - (MESSAGE_RETENTION_DAYS * 24 * 60 * 60 * 1000);
    const filteredMessages = data.messages
      .filter(msg => msg.timestamp > cutoffTime)
      .slice(-MAX_STORED_MESSAGES); // Keep only recent messages
    
    const cleanedData = {
      ...data,
      messages: filteredMessages,
      lastActivity: Date.now(),
    };
    
    // Save cleaned data back
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(cleanedData));
    return cleanedData;
  } catch (error) {
    // In case of corrupted data, reset to defaults
    console.error("Error parsing chat data:", error);
    const defaults = getDefaultChatData();
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  }
}

/**
 * Save chat data to localStorage
 */
export function saveChatData(data: ChatData): void {
  // Only run on client side
  if (typeof window === "undefined") return;
  
  const dataToSave = {
    ...data,
    lastActivity: Date.now(),
  };
  
  localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(dataToSave));
}

/**
 * Add a new message to chat data
 */
export function addMessage(message: ChatMessage): ChatData {
  const currentData = initializeChatData();
  const updatedMessages = [...currentData.messages, message];
  
  // Keep only the most recent messages
  const trimmedMessages = updatedMessages.slice(-MAX_STORED_MESSAGES);
  
  const updatedData = {
    ...currentData,
    messages: trimmedMessages,
  };
  
  saveChatData(updatedData);
  return updatedData;
}

/**
 * Update a specific message (useful for status updates)
 */
export function updateMessage(messageId: string, updates: Partial<ChatMessage>): ChatData {
  const currentData = initializeChatData();
  const updatedMessages = currentData.messages.map(msg =>
    msg.id === messageId ? { ...msg, ...updates } : msg
  );
  
  const updatedData = {
    ...currentData,
    messages: updatedMessages,
  };
  
  saveChatData(updatedData);
  return updatedData;
}

/**
 * Clear all chat messages
 */
export function clearChatHistory(): ChatData {
  const currentData = initializeChatData();
  const clearedData = {
    ...currentData,
    messages: [],
    settings: {
      ...currentData.settings,
      lastClearTime: Date.now(),
    },
  };
  
  saveChatData(clearedData);
  return clearedData;
}

/**
 * Update chat settings
 */
export function updateChatSettings(settings: Partial<ChatSettings>): ChatData {
  const currentData = initializeChatData();
  const updatedData = {
    ...currentData,
    settings: {
      ...currentData.settings,
      ...settings,
    },
  };
  
  saveChatData(updatedData);
  return updatedData;
}

/**
 * Generate a unique message ID
 */
export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format timestamp for display
 */
export function formatMessageTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  // Less than 1 minute
  if (diff < 60000) {
    return 'Just now';
  }
  
  // Less than 1 hour
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes}m ago`;
  }
  
  // Less than 24 hours
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours}h ago`;
  }
  
  // More than 24 hours - show date
  return new Date(timestamp).toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Play notification sound (if enabled)
 */
export function playNotificationSound(settings: ChatSettings): void {
  if (!settings.soundEnabled || typeof window === "undefined") return;
  
  try {
    // Create a simple notification sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  } catch (error) {
    console.warn('Could not play notification sound:', error);
  }
}
