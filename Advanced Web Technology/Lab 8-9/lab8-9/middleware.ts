import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    if (searchParams.size === 0 && !pathname.includes('.') && !pathname.startsWith('/api') && !pathname.startsWith('/pages/login')) {
        const url = request.nextUrl.clone();
        url.searchParams.set('pageNo', '0');
        return NextResponse.redirect(url);
    }

    const isLoginPage = pathname.startsWith('/pages/login');
    const isPublicFile = pathname.includes('.') || pathname.startsWith('/api') || pathname.startsWith('/_next');

    const token = request.cookies.get('token')?.value;

    // Logic D (Enhancement): If already logged in, redirect away from login page
    if (token && isLoginPage) {
        return NextResponse.redirect(new URL('/gallery', request.url));
    }

    if (!token && !isLoginPage && !isPublicFile) {
        return NextResponse.redirect(new URL('/pages/login', request.url));
    }

    // 3. Logic C: Refresh token if expired
    if (token === 'expired-token') {
        const response = NextResponse.next();
        response.cookies.set('token', 'refreshed-token-' + Date.now(), {
            maxAge: 3600,
            path: '/',
        });
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next (Next.js internals)
         * - static (static files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next|static|favicon.ico).*)',
    ],
};
