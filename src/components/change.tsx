import { getMainDictionary } from "@/app/[lang]/dictionaries"

export default async function Changed({ lang, date }: { lang: string, date: string }) {
    const dict = await getMainDictionary(lang)
    return(
        <div>
            <p className="text-lg mb-6 text-gray-400 italic">
                {dict.page.last_changed} {date}
            </p>
        </div>
    )
}