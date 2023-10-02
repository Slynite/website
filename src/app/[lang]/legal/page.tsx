import { Metadata } from "next";
import { getDictionaryByName } from "../dictionaries";
import Link from "next/link";
import Changed from "@/components/change";

export const generateMetadata = async ({ params }: { params: { lang: string }}): Promise<Metadata> => {
    const dict = await getDictionaryByName(params.lang, "legal");
    return {
      	title: `Slynite - ${dict.page.page_title}`,
      	description: dict.page.page_description
    };
};

export default async function Legal({ params }: { params: { lang:string } }) {
    const dict = await getDictionaryByName(params.lang, "legal");
    return (
        <div className='mt-6 md:mt-20'>
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center">
                {dict.page.title}
            </h1>

            <Changed lang={params.lang} date={dict.updated} />

            <div className="text-lg text-gray-300 whitespace-pre-line">
                <p className="mb-2">{dict.page.description}</p>
                <p>{dict.page.address}</p>

                <p className="mt-4">{dict.page.email}: <Link href={`mailto:${dict.page.email_address}`}>{dict.page.email_address}</Link></p> 

                <h2 className="mt-4 text-2xl">{dict.page.mediacredits.title}</h2>
                <p>{dict.page.mediacredits.text_1} <Link href={`/${dict.lang}/legal/licenses`}>{dict.page.mediacredits.link}</Link> {dict.page.mediacredits.text_2}</p>
            </div>
        </div>
    )
}