import { NextRequest, NextResponse } from "next/server";
import getCurrentLanguage, {
	checkIfPathnameHasLocale,
} from "../lib/i18nHelper";

export async function proxy(request: NextRequest) {
	const { pathname, hostname } = request.nextUrl;
	const currentLanguage = getCurrentLanguage(pathname);

	if (hostname === "slynite.de" && pathname === "/") {
		request.nextUrl.pathname = `de/`;
	} else if (checkIfPathnameHasLocale(pathname)) {
		return NextResponse.next();
	} else {
		request.nextUrl.pathname = `${currentLanguage}${pathname}`;
	}

	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|ressources|public|favicon.ico).*)",
	],
};
