import { NextRequest, NextResponse } from "next/server";

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  version: string;
  environment: string;
  services: {
    backend: {
      status: 'available' | 'unavailable';
      url?: string;
      responseTime?: number;
      lastChecked: string;
    };
    database: {
      status: 'connected' | 'disconnected' | 'unknown';
      lastChecked: string;
    };
    chat: {
      status: 'available' | 'fallback' | 'unavailable';
      mode: 'ai' | 'fallback';
      lastChecked: string;
    };
  };
  features: {
    chatWidget: boolean;
    backendIntegration: boolean;
    persistence: boolean;
    notifications: boolean;
  };
}

/**
 * Check backend API health
 */
async function checkBackendHealth(): Promise<{ status: 'available' | 'unavailable'; responseTime?: number }> {
  const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  if (!backendUrl) {
    return { status: 'unavailable' };
  }

  try {
    const startTime = Date.now();
    const response = await fetch(`${backendUrl}/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });
    const responseTime = Date.now() - startTime;

    if (response.ok) {
      return { status: 'available', responseTime };
    } else {
      return { status: 'unavailable' };
    }
  } catch (error) {
    console.warn('Backend health check failed:', error);
    return { status: 'unavailable' };
  }
}

/**
 * Check database connectivity through backend
 */
async function checkDatabaseHealth(): Promise<{ status: 'connected' | 'disconnected' | 'unknown' }> {
  const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  if (!backendUrl) {
    return { status: 'unknown' };
  }

  try {
    // Try to fetch a simple endpoint that requires database access
    const response = await fetch(`${backendUrl}/projects`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
    });

    if (response.ok) {
      return { status: 'connected' };
    } else {
      return { status: 'disconnected' };
    }
  } catch (error) {
    return { status: 'disconnected' };
  }
}

/**
 * Check chat functionality
 */
async function checkChatHealth(): Promise<{ status: 'available' | 'fallback' | 'unavailable'; mode: 'ai' | 'fallback' }> {
  try {
    // Test the chat API endpoint
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'health check' }]
      }),
      signal: AbortSignal.timeout(5000),
    });

    if (response.ok) {
      const data = await response.json();
      
      // Check if it's using AI or fallback
      if (data.message && data.message.includes('AI service is currently unavailable')) {
        return { status: 'fallback', mode: 'fallback' };
      } else {
        return { status: 'available', mode: 'ai' };
      }
    } else {
      return { status: 'unavailable', mode: 'fallback' };
    }
  } catch (error) {
    return { status: 'unavailable', mode: 'fallback' };
  }
}

/**
 * Determine overall health status
 */
function determineOverallStatus(
  backendStatus: string,
  databaseStatus: string,
  chatStatus: string
): 'healthy' | 'degraded' | 'unhealthy' {
  // If backend and database are working, we're healthy
  if (backendStatus === 'available' && databaseStatus === 'connected') {
    return 'healthy';
  }
  
  // If chat is working (even in fallback mode), we're at least degraded
  if (chatStatus !== 'unavailable') {
    return 'degraded';
  }
  
  // Otherwise, we're unhealthy
  return 'unhealthy';
}

/**
 * GET /api/health - Health check endpoint
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const timestamp = new Date().toISOString();
    
    // Run health checks in parallel
    const [backendHealth, databaseHealth, chatHealth] = await Promise.all([
      checkBackendHealth(),
      checkDatabaseHealth(),
      checkChatHealth(),
    ]);

    // Determine overall status
    const overallStatus = determineOverallStatus(
      backendHealth.status,
      databaseHealth.status,
      chatHealth.status
    );

    const healthStatus: HealthStatus = {
      status: overallStatus,
      timestamp,
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        backend: {
          status: backendHealth.status,
          url: process.env.NEXT_PUBLIC_API_BASE_URL,
          responseTime: backendHealth.responseTime,
          lastChecked: timestamp,
        },
        database: {
          status: databaseHealth.status,
          lastChecked: timestamp,
        },
        chat: {
          status: chatHealth.status,
          mode: chatHealth.mode,
          lastChecked: timestamp,
        },
      },
      features: {
        chatWidget: true, // Always available with fallback
        backendIntegration: backendHealth.status === 'available',
        persistence: true, // localStorage always available
        notifications: true, // Browser notifications available
      },
    };

    // Set appropriate HTTP status code
    const httpStatus = overallStatus === 'healthy' ? 200 : 
                      overallStatus === 'degraded' ? 200 : 503;

    return NextResponse.json(healthStatus, { status: httpStatus });

  } catch (error) {
    console.error('Health check error:', error);
    
    const errorResponse: HealthStatus = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        backend: {
          status: 'unavailable',
          lastChecked: new Date().toISOString(),
        },
        database: {
          status: 'unknown',
          lastChecked: new Date().toISOString(),
        },
        chat: {
          status: 'unavailable',
          mode: 'fallback',
          lastChecked: new Date().toISOString(),
        },
      },
      features: {
        chatWidget: true,
        backendIntegration: false,
        persistence: true,
        notifications: true,
      },
    };

    return NextResponse.json(errorResponse, { status: 503 });
  }
}

/**
 * HEAD /api/health - Simple health check for monitoring
 */
export async function HEAD(request: NextRequest): Promise<NextResponse> {
  try {
    // Quick backend check
    const backendHealth = await checkBackendHealth();
    
    if (backendHealth.status === 'available') {
      return new NextResponse(null, { status: 200 });
    } else {
      return new NextResponse(null, { status: 503 });
    }
  } catch (error) {
    return new NextResponse(null, { status: 503 });
  }
}
