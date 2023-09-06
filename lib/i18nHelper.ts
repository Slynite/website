import { headers } from 'next/headers'

export default function getCurrentLanguage() {
    const headersList = headers();
    const currentPath = headersList.get("referer");
    const currentLang = currentPath?.split("/")[3] as string;
    if (availableLanguages().includes(currentLang)) {
        return currentLang;
    }
    return "en";
}

export function availableLanguages(): string[] {
    return ["en", "de"];
}