import { Metadata } from 'next';
import { getMainDictionary } from '../dictionaries';
import TextHeader from '@/components/textHeader';
import ContactForm from '@/components/contactForm';

type Props = {
    params: { lang: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const dict = await getMainDictionary(params.lang) 
    return {
      	title: `Slynite - ${dict.contact.page_title}`,
      	description: dict.contact.page_description
    };
};

export default async function Contact({params: {lang}}: Props) {
    const dict = await getMainDictionary(lang);

  	return (
    	<main className='mt-6 md:mt-20'>
        	<TextHeader text={dict.contact.title} hightlightText={dict.contact.title_highlighted} description={dict.contact.description} />
            <ContactForm dict={dict} lang={lang} />
    	</main>
  	)
}