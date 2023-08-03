import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'de']

export function middleware(request: NextRequest) {
    let locale = "en"

    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (request.nextUrl.hostname === "slynite.de" && pathnameIsMissingLocale) {
        locale = "de"
    }

    if (pathnameIsMissingLocale){
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
}

export const config = {
    matcher: [
      // Skip all internal paths (_next)
      '/((?!_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }