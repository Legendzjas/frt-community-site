import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  const ip = request.ip || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10; // 10 requests per minute

  const userLimit = rateLimitMap.get(ip);
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    if (userLimit.count >= maxRequests) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    userLimit.count++;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};