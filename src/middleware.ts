import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {  
  const isAuthenticated = request.cookies.has('user');
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/admin' || path === '/login' || path === '/signup' || path === '/';

  if (!isPublicPath && path.startsWith('/admin')) {
    if (!isAuthenticated){
        return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin', '/login', '/signup', '/'],
};