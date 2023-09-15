import Link from 'next/link'
import { getMainDictionary } from './[lang]/dictionaries';
import getCurrentLanguage from '../../lib/i18nHelper';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const dict = await getMainDictionary(getCurrentLanguage()) 
  return {
      title: `Slynite - ${dict.not_found.page_title}`,
      description: dict.not_found.page_description
  };
};
 
export default async function NotFound() {
  const dict = await getMainDictionary(getCurrentLanguage());
  return (
    <div className='mt-6 md:mt-20 text-center'>
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">
					{dict.not_found.title}.
      </h1>
      <Link href={"/" + getCurrentLanguage()} className='md:text-xl hover:underline'>{dict.not_found.link}.</Link>
    </div>
  )
}