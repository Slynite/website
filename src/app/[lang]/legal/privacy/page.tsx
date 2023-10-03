import { Metadata } from "next";
import { getDictionaryByName } from "../../dictionaries";
import Link from "next/link";
import Changed from "@/components/change";

export const generateMetadata = async ({ params }: { params: { lang: string }}): Promise<Metadata> => {
    const dict = await getDictionaryByName(params.lang, "privacy");
    return {
      	title: `Slynite - ${dict.page.page_title}`,
      	description: dict.page.page_description
    };
};

export default async function Privacy({ params }: { params: { lang:string } }) {
    const dict = await getDictionaryByName(params.lang, "privacy");
    return (
        <div className='mt-6 md:mt-20'>
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center">
                {dict.page.title}
            </h1>

            <Changed lang={params.lang} date={dict.updated} />

            <div className="text-lg text-gray-300 whitespace-pre-line">
                <p>{dict.page.premble}</p>

                <h2 className="text-2xl mt-8">{dict.page.consent.title}</h2>
                <p>{dict.page.consent.text}</p>

                <h2 className="text-2xl mt-8">{dict.page.collection.title}</h2>
                <p>{dict.page.collection.text}</p>

                <h2 className="text-2xl mt-8">{dict.page.usage.title}</h2>
                <p>{dict.page.usage.text}</p>
                <ul className="list-disc">
                    {dict.page.usage.listing.map((item: any) => (
                        <li key={item} className="mt-1 italic">
                            {item}
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl mt-8">{dict.page.logfiles.title}</h2>
                <p>{dict.page.logfiles.text}</p>

                <h2 className="text-2xl mt-8">{dict.page.advertiser.title}</h2>
                <p>{dict.page.advertiser.text}</p>

                <h2 className="text-2xl mt-8">{dict.page.ccpa.title}</h2>
                <p>{dict.page.ccpa.text}</p>

                <h2 className="text-2xl mt-8">{dict.page.gdpr.title}</h2>
                <p>{dict.page.gdpr.text}</p>

                <h2 className="text-2xl mt-8">{dict.page.children.title}</h2>
                <p>{dict.page.children.text}</p>
            </div>
        </div>
    )
}