import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Redirect unauthenticated users trying to access protected routes
    if (!req.nextauth.token && req.nextUrl.pathname.startsWith('/documents')) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

export const config = {
  matcher: [
    '/documents/:path*',
    '/upload/:path*'
  ]
};