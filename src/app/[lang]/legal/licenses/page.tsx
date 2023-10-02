import { Metadata } from "next";
import { getDictionaryByName } from "../../dictionaries";
import Link from "next/link";
import Changed from "@/components/change";

export const generateMetadata = async ({ params }: { params: { lang: string }}): Promise<Metadata> => {
    const dict = await getDictionaryByName(params.lang, "licenses");
    return {
      	title: `Slynite - ${dict.page.page_title}`,
      	description: dict.page.page_description
    };
};

export default async function Legal({ params }: { params: { lang:string } }) {
    const dict = await getDictionaryByName(params.lang, "licenses");
    console.log(dict)
    return (
        <div className='mt-6 md:mt-20'>
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center">
                {dict.page.title}
            </h1>

            <Changed lang={params.lang} date={dict.updated} />

            <div className="text-lg text-gray-300 whitespace-pre-line">
                <h2 className="text-2xl">{dict.page.thanks}</h2>
                <p>{dict.page.thanks_text}</p>

                <h2 className="text-2xl mt-8">{dict.page.opensource.title}</h2>
                <ul>
                    {dict.page.opensource.licenses.map((license: any, index: number) => (
                        <li key={license.name} className="flex mt-2">
                            <Link href={license.url}>{license.name}</Link>
                            <p className="ml-2 italic text-gray-400">{license.description}</p>
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl mt-8">{dict.page.media_credits.title}</h2>
                <p>{dict.page.media_credits.text_1}</p>
                <p className="mt-2">{dict.page.media_credits.text_2} <Link href={"https://danny.schapeit.com"} target="_blank">{dict.page.media_credits.photographer}</Link>.</p>
                <p className="mt-2">{dict.page.media_credits.restriction}</p>
            </div>
        </div>
    )
}