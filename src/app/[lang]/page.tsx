import { Metadata } from 'next';
import { getDictionary } from './dictionaries';
import TextHeader from '@/components/textHeader';

type Props = {
    params: { lang: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const dict = await getDictionary(params.lang) 
    return {
      title: `Slynite - ${dict.page.title}`,
      description: dict.page.description
    };
};

export default async function Home({params: {lang}}: Props) {
    const dict = await getDictionary(lang) 

  	return (
    	<main>
        	<TextHeader text={dict.homepage.title} description={dict.homepage.description} />
      	    <p>{dict.test.helloworld}</p>
    	</main>
  	)
}