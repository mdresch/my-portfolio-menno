import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { apiKey, action, data } = await request.json();
    
    console.log('Received DEV.to request:', {
      action,
      hasData: !!data,
      dataKeys: data ? Object.keys(data) : 'No data'
    });
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 }
      );
    }

    const headers = {
      'Content-Type': 'application/json',
      'api-key': apiKey
    };

    let url = '';
    let method = 'GET';
    let body = null;

    switch (action) {
      case 'test':
        url = 'https://dev.to/api/articles/me';
        break;
      case 'check':
        url = 'https://dev.to/api/articles';
        method = 'GET';
        const params = new URLSearchParams();
        params.append('canonical_url', data.canonical_url);
        url += `?${params.toString()}`;
        break;
      case 'publish':
        url = 'https://dev.to/api/articles';
        method = 'POST';
        body = JSON.stringify(data);
        console.log('Sending to DEV.to:', {
          url,
          method,
          headers,
          body: body ? JSON.parse(body) : 'No body' // Log the parsed body for debugging
        });
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        error: 'Unknown error',
        status: response.status,
        statusText: response.statusText
      }));
      
      console.error('DEV.to API Error:', {
        status: response.status,
        statusText: response.statusText,
        url,
        method,
        headers,
        body,
        errorData
      });

      // Handle common error cases
      switch (response.status) {
        case 401:
          return NextResponse.json(
            { error: errorData.error || errorData.message || errorData.detail || 'Invalid or expired API key' },
            { status: 401 }
          );
        case 422:
          return NextResponse.json(
            { error: errorData.error || errorData.message || errorData.detail || errorData.errors?.join(', ') || 'Validation failed' },
            { status: 422 }
          );
        default:
          return NextResponse.json(
            { error: errorData.error || errorData.message || errorData.detail || errorData.errors?.join(', ') || `Error ${response.status}: ${response.statusText}` },
            { status: response.status }
          );
      }
    }

    const result = await response.json();
    console.log('DEV.to API Success:', {
      url,
      status: response.status,
      result
    });
    
    // For test action, return a standardized response
    if (action === 'test') {
      return NextResponse.json({
        isValid: true,
        message: 'API key is valid'
      });
    }
    
    // For check action, return whether article exists
    if (action === 'check') {
      return NextResponse.json({
        exists: result.length > 0,
        article: result[0] || null
      });
    }
    
    return NextResponse.json(result);

  } catch (error: any) {
    console.error('Server error:', {
      error: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
