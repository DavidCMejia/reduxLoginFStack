/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('myTokenName');
  console.log('🚀 ~ token:', token);
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  console.log(token);
}
export const config = {
  matcher: ['/dashboard/:path*'],
};
