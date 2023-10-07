
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
export const locales = ["en", "de"];
export const defaultLocale = "en";

export default function getCurrentLanguage(path: string): string {
	for (const locale of locales) {
		if (path.includes(`/${locale}/`)) {
		  return locale;
		}
	  }
	  return defaultLocale;
}

export function checkIfPathnameHasLocale(pathname: string): boolean {
	const pathnameHasLocale = locales.some(
		(locale) =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	return pathnameHasLocale
}

export function getLangFromCookie(cookie: RequestCookie | undefined): string {
    return cookie?.value ?? defaultLocale
}