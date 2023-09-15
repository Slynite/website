import { notFound } from "next/navigation"
import { getDictionaryByName } from "@/app/[lang]/dictionaries";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: { lang:string, legal: string } }): Promise<Metadata> => {
    const dict = await getDictionaryByName(params.lang, params.legal);
    return {
        title: `Slynite - ${dict.page_title}`,
        description: dict.page_description
    };
};

export default async function Legal({ params }: { params: { lang:string, legal: string } }) {
    const availblePages = [
        "privacy",
        "licenses",
    ]

    if (availblePages.includes(params.legal)) {
        const dict: any = await getDictionaryByName(params.lang, params.legal);

        return (
            <div className='mt-6 md:mt-20 text-center'>
                <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">
                    Page {dict.title} - 
                    Language {params.lang}
                </h1>
            </div>
        )
    } else {
        return notFound();
    }
}