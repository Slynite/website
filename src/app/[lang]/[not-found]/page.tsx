import Link from 'next/link'
import { getMainDictionary } from '../dictionaries';
import { Metadata } from 'next';

type Props = {
    params: { lang: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const dict = await getMainDictionary("en");
  return {
      title: `Slynite - ${dict.not_found.page_title}`,
      description: dict.not_found.page_description
  };
};
 
export default async function NotFound({params: {lang}}: Props) {
	const dict = await getMainDictionary(lang);
    return (
        <div className='mt-6 md:mt-20 text-center'>
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">
                        {dict.not_found.title}.
        </h1>
        <Link href={"/" + lang} className='md:text-xl hover:underline'>{dict.not_found.link}.</Link>
        </div>
    )
}