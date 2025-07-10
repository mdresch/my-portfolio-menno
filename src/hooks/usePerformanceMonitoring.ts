"use client";

import { useEffect, useRef } from "react";

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  mountTime: number;
}

export function usePerformanceMonitoring(componentName: string) {
  const mountTimeRef = useRef<number>(0);
  const renderStartRef = useRef<number>(0);

  // Track component mount time
  useEffect(() => {
    mountTimeRef.current = performance.now();
    
    return () => {
      const unmountTime = performance.now();
      const totalMountTime = unmountTime - mountTimeRef.current;
      
      // Log performance metrics
      if (totalMountTime > 100) { // Only log if mount time is significant
        console.log(`[Performance] ${componentName} was mounted for ${totalMountTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);

  // Track render performance
  const trackRender = () => {
    renderStartRef.current = performance.now();
  };

  const endRenderTracking = () => {
    if (renderStartRef.current > 0) {
      const renderTime = performance.now() - renderStartRef.current;
      
      if (renderTime > 16) { // Log renders that take longer than 16ms (60fps threshold)
        console.warn(`[Performance] ${componentName} render took ${renderTime.toFixed(2)}ms`);
        
        // Report to analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'slow_render', {
            component_name: componentName,
            render_time: renderTime,
          });
        }
      }
      
      renderStartRef.current = 0;
    }
  };

  return { trackRender, endRenderTracking };
}

// Hook for tracking API call performance
export function useApiPerformanceMonitoring() {
  const trackApiCall = async <T>(
    apiName: string,
    apiCall: () => Promise<T>
  ): Promise<T> => {
    const startTime = performance.now();
    
    try {
      const result = await apiCall();
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Log slow API calls
      if (duration > 1000) {
        console.warn(`[API Performance] ${apiName} took ${duration.toFixed(2)}ms`);
      }
      
      // Report to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'api_call', {
          api_name: apiName,
          duration: duration,
          status: 'success',
        });
      }
      
      return result;
    } catch (error) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Report failed API calls
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'api_call', {
          api_name: apiName,
          duration: duration,
          status: 'error',
        });
      }
      
      throw error;
    }
  };

  return { trackApiCall };
}

// Hook for tracking user interactions
export function useInteractionTracking() {
  const trackInteraction = (
    interactionType: string,
    elementName: string,
    additionalData?: Record<string, any>
  ) => {
    // Track with analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_interaction', {
        interaction_type: interactionType,
        element_name: elementName,
        ...additionalData,
      });
    }
    
    // Log for debugging
    console.log(`[Interaction] ${interactionType} on ${elementName}`, additionalData);
  };

  return { trackInteraction };
}

// Web Vitals tracking
export function useWebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track Core Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);
}
