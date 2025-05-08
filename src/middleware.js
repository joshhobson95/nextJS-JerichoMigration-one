import { NextResponse } from 'next/server';

// In-memory IP tracking (limited in serverless environments)
const ipRateLimits = new Map();

const blockedPatterns = [
  /wp-admin/i,
  /wp-login/i,
  /\.env/i,
  /phpmyadmin/i,
  /robots\.txt$/i,
  /repeater\.php/i,
  /[a-zA-Z0-9_-]*\.php$/i, // blocks anything ending with .php
  /config\.json/i,
  /yanz\.php/i,
  /shell\.php/i,
  /system\.php/i,
  /mail\.php/i,
  /jquery\/php/i,
  /index\.php/i,
  /function\.php/i,
];

const botUserAgents = [
  /curl/i,
  /wget/i,
  /python/i,
  /scrapy/i,
  /node-fetch/i,
  /Go-http-client/i,
  /Java\/\d/i,
  /libwww-perl/i,
];

// Good bots to allow
const allowedBots = [
  /Googlebot/i,
  /Bingbot/i,
  /Slurp/i,          // Yahoo
  /DuckDuckBot/i,
];

const skipPatterns = [
  /^\/_next\/static\//,
  /^\/_next\/data\//,
  /^\/favicon\.ico$/,
  /^\/fonts\//,
];

// Main middleware
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  const now = Date.now();

  // Skip known safe asset paths
  if (skipPatterns.some((pattern) => pattern.test(path))) {
    return NextResponse.next();
  }

  // ✅ Allow good bots (bypass rate limiting and blocking)
  if (allowedBots.some((pattern) => pattern.test(userAgent))) {
    return NextResponse.next();
  }

  // Block suspicious paths
  if (blockedPatterns.some((pattern) => pattern.test(path))) {
    console.warn(`⛔ Blocked path: ${path} from IP: ${ip}`);
    return new NextResponse('Blocked by middleware', { status: 403 });
  }

  // Block known scraping bots
  if (botUserAgents.some((pattern) => pattern.test(userAgent))) {
    console.warn(`🤖 Blocked bot: ${userAgent} from IP: ${ip}`);
    return new NextResponse('Bot blocked', { status: 403 });
  }

  // Rate limiting (basic)
  const windowMs = 4 * 60 * 1000; // 4 minutes
  const maxRequests = 140;
  const entry = ipRateLimits.get(ip) || { count: 0, startTime: now };

  if (now - entry.startTime > windowMs) {
    ipRateLimits.set(ip, { count: 1, startTime: now });
  } else {
    entry.count += 1;
    if (entry.count > maxRequests) {
      console.warn(`🚫 Rate limit exceeded for IP: ${ip}`);
      return new NextResponse('Rate limit exceeded', { status: 429 });
    }
    ipRateLimits.set(ip, entry);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
