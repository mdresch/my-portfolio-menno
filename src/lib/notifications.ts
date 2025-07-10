/**
 * Simple notification system for user feedback
 */

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

let notificationContainer: HTMLElement | null = null;

/**
 * Initialize notification container
 */
function initNotificationContainer(): HTMLElement {
  if (notificationContainer) {
    return notificationContainer;
  }

  notificationContainer = document.createElement('div');
  notificationContainer.id = 'notification-container';
  notificationContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    pointer-events: none;
  `;
  document.body.appendChild(notificationContainer);
  return notificationContainer;
}

/**
 * Show a notification
 */
export function showNotification(
  message: string,
  type: Notification['type'] = 'info',
  duration: number = 3000
): void {
  if (typeof window === 'undefined') return;

  const container = initNotificationContainer();
  const notification = document.createElement('div');
  const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  notification.id = id;
  notification.style.cssText = `
    background: ${getNotificationColor(type)};
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    font-family: system-ui, -apple-system, sans-serif;
    max-width: 300px;
    word-wrap: break-word;
    pointer-events: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
  `;
  
  notification.textContent = message;
  container.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.style.transform = 'translateX(0)';
  });

  // Auto remove
  setTimeout(() => {
    removeNotification(id);
  }, duration);

  // Click to dismiss
  notification.addEventListener('click', () => {
    removeNotification(id);
  });
}

/**
 * Remove a notification
 */
function removeNotification(id: string): void {
  const notification = document.getElementById(id);
  if (notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }
}

/**
 * Get notification color based on type
 */
function getNotificationColor(type: Notification['type']): string {
  switch (type) {
    case 'success':
      return '#10b981';
    case 'error':
      return '#ef4444';
    case 'warning':
      return '#f59e0b';
    case 'info':
    default:
      return '#3b82f6';
  }
}

/**
 * Convenience functions
 */
export const notify = {
  success: (message: string, duration?: number) => showNotification(message, 'success', duration),
  error: (message: string, duration?: number) => showNotification(message, 'error', duration),
  warning: (message: string, duration?: number) => showNotification(message, 'warning', duration),
  info: (message: string, duration?: number) => showNotification(message, 'info', duration),
};
