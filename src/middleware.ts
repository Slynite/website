import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { availableLanguages } from '../lib/i18nHelper'

let locales = availableLanguages();

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
      '/((?!api|static|.*\\..*|_next).*)',
    ],
}