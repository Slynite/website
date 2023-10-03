import { NextRequest, NextResponse } from "next/server";
import getCurrentLanguage, { checkIfPathnameHasLocale } from "../lib/i18nHelper";

export async function middleware(request: NextRequest) {
    const { pathname, hostname } = request.nextUrl;
    const currentLanguage = getCurrentLanguage(pathname);

    if (hostname === "slynite.de" && pathname === "/") {
        request.nextUrl.pathname = `/de/`
    } else if (checkIfPathnameHasLocale(pathname)) {
        request.nextUrl.pathname = `/${pathname}`;
    } else {
        request.nextUrl.pathname = `/${currentLanguage}${pathname}`;
    }

    if (checkIfPathnameHasLocale(pathname) && currentLanguage === request.cookies.get("lang")?.value) {
        return NextResponse.next();
    }

    const response = NextResponse.redirect(request.nextUrl);
    response.cookies.set("lang", currentLanguage);
    return response;
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|ressources|public|favicon.ico).*)',
    ],
}