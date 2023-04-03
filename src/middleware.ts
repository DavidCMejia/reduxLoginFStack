/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const jwtToken = request.cookies.get('myTokenName');
  if (request.nextUrl.pathname.includes('/dashboard')) {
    if (!jwtToken) {
      return NextResponse.redirect(new URL('/', request.url)); // redireccionar a /login está / porque login es el index
    }
    // console.log('validating dashboard');

    try {
      const { payload } = await jwtVerify(jwtToken, new TextEncoder().encode('secret'));
      // verificar si el token es válido cuando existe
      console.log('🚀 ~ payload:', payload);
      return NextResponse.next();
    } catch (error) {
      console.log('🚀 ~ error:', error);
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  return NextResponse.next();
}
