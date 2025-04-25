import { NextResponse } from 'next/server';

const blockedUserAgents = [
  /AhrefsBot/i,
  /SemrushBot/i,
  /MJ12bot/i,
  /DotBot/i,
  /PetalBot/i,
  /python-requests/i,
  /curl/i,
  /wget/i,
  /node-fetch/i,
  /Java\//i
];

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  for (const botPattern of blockedUserAgents) {
    if (botPattern.test(userAgent)) {
      console.log(`⛔ Blocked bot: ${userAgent}`);
      return new Response('Blocked bot', { status: 403 });
    }
  }

  return NextResponse.next();
}

// Match EVERYTHING including API routes, static files, etc.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};


export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  console.log(`🚨 Incoming UA: ${userAgent}`);

  for (const botPattern of blockedUserAgents) {
    if (botPattern.test(userAgent)) {
      console.log(`⛔ Blocked bot: ${userAgent}`);
      return new Response('Blocked bot', { status: 403 });
    }
  }

  return NextResponse.next();
}
