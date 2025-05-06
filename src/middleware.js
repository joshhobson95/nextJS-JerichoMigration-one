import { NextResponse } from 'next/server';

const ipRateLimits = new Map();

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // 1. Block known dangerous paths
  const blocked = [
    '/wp-admin',
    '/wp-login',
    '/.env',
    '/admin',
    '/phpmyadmin',
    '/robots.txt',
    '/config.json',
    'updates.php',
    '/wp-admin/repeater.php',
    '/wp-includes/repeater.php',
    '/wp-content/repeater.php',
    '/wsoyanz.php',
    '/cache-compat.php',
    '/yanz.php',
    '/alfanew.php',
    '/xox.php',
    '/lv.php',
    '/wp-includes',
    '/wp-admin/admin.php',
    '/test.php',
    '/system.php',
    '/login',
    '/shell.php',
    '/system.php',
    '/mail.php',
    '/jquery/php',
    '/index.php',
    '/function.php'
  ];

  if (blocked.includes(path)) {
    return new NextResponse('Blocked by middleware', { status: 403 });
  }

  // 2. Skip static/data/asset paths
  const skipPatterns = [
    /^\/_next\/static\//,
    /^\/_next\/data\//,
    /^\/favicon\.ico$/,
    /^\/robots\.txt$/,
    /^\/fonts\//,
  ];

  if (skipPatterns.some((pattern) => pattern.test(path))) {
    return NextResponse.next();
  }

  // 3. Rate limiting
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const now = Date.now();

  const windowMs = 4 * 60 * 1000; // 4 minutes
  const maxRequests = 140;
  

  const entry = ipRateLimits.get(ip) || { count: 0, startTime: now };

  if (now - entry.startTime > windowMs) {
    ipRateLimits.set(ip, { count: 1, startTime: now });
  } else {
    entry.count += 1;
    if (entry.count > maxRequests) {
      return new NextResponse('Rate limit exceeded', { status: 429 });
    }
    ipRateLimits.set(ip, entry);
  }
  console.log(`IP ${ip} has made ${entry.count} requests in the last ${Math.floor((now - entry.startTime) / 1000)} seconds`);

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
