import { Metadata } from 'next';
import { getDictionary } from './dictionaries';
import TextHeader from '@/components/textHeader';
import InfoCard from '@/components/infoCard';

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
			<div className='grid md:grid-cols-2'>
			
				<div className='animate-once animate-fade-up animate-ease-out'>
					<InfoCard 
						title={dict.homepage.core_values.privacy.title}
						description={dict.homepage.core_values.privacy.description} 
						imagePath='/icons/shield-with-lock-white.png'
					/>
				</div>
				<div className='animate-once animate-fade-up animate-delay-[200ms] animate-ease-out'>
					<InfoCard 
						title={dict.homepage.core_values.transparency.title}
						description={dict.homepage.core_values.transparency.description}
						imagePath='/icons/codeblock-with-magnifier-white.png'
					/>
				</div>
				<div className='animate-once animate-fade-up animate-delay-[400ms] animate-ease-out'>
					<InfoCard 
						title={dict.homepage.core_values.security.title}
						description={dict.homepage.core_values.security.description}
						imagePath='/icons/lock-closed-white.png'
					/>
				</div>
				<div className='animate-once animate-fade-up animate-delay-[600ms] animate-ease-out'>
					<InfoCard 
						title={dict.homepage.core_values.tracking.title}
						description={dict.homepage.core_values.tracking.description}
						imagePath='/icons/signal-slash-white.png'
					/>
				</div>
			</div>
    	</main>
  	)
}