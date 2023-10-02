import Link from 'next/link'
import { getMainDictionary } from './[lang]/dictionaries';
import { getLangFromCookie } from '../../lib/i18nHelper';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const generateMetadata = async (): Promise<Metadata> => {
  const cookieList = cookies();
	const dict = await getMainDictionary(getLangFromCookie(cookieList.get("lang")));
  return {
      title: `Slynite - ${dict.not_found.page_title}`,
      description: dict.not_found.page_description
  };
};
 
export default async function NotFound() {
  const cookieList = cookies();
  const lang = getLangFromCookie(cookieList.get("lang"));
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