import { Metadata } from 'next';
import { getMainDictionary } from './dictionaries';
import TextHeader from '@/components/textHeader';
import InfoCard from '@/components/infoCard';
import Image from 'next/image';
import Link from 'next/link';
import LottiePlayer from '@/components/lottiePlayer';

type Props = {
    params: { lang: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const dict = await getMainDictionary(params.lang) 
    return {
      	title: `Slynite - ${dict.page.title}`,
      	description: dict.page.description
    };
};

export default async function Home({params: {lang}}: Props) {
    const dict = await getMainDictionary(lang) 

  	return (
    	<main className='mt-6 md:mt-20'>
        	<TextHeader text={dict.homepage.title} description={dict.homepage.description} />
			<div className='flex justify-center mt-4 mb-10'>
				<Link href={"/" + lang + "/about"}>
					<button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 py-1.5 text-center">{dict?.page?.learn_more}</button>
				</Link>
			</div>
			
			<div className='block md:block'>
				<LottiePlayer src={'banner'} width={1100} />
			</div>

			<div id='our-mission' className='md:grid md:grid-cols-3 mt-20'>
				<div className='md:col-span-2'>
					<h2 className='text-2xl lg:text-4xl font-bold mb-2'>{dict.homepage.covered.title_part1} <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.covered.title_highlighted}</p></h2>
					<p className='text-lg text-gray-300'>
						{dict.homepage.covered.description}
					</p>

					<h2 className='text-2xl lg:text-4xl font-bold mt-10 md:mt-20 mb-2'>{dict.homepage.mission.title_part1} <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.mission.title_highlighted}</p> {dict.homepage.mission.title_part2}</h2>
					<p className='text-lg text-gray-300'>
						{dict.homepage.mission.description_part1}
						<br />
						{dict.homepage.mission.learn_more} <Link href={"/" + lang + "/about"} className='underline'>{dict.homepage.mission.learn_more_link}</Link>.
					</p>
					<div className='md:hidden'>
						<LottiePlayer src={'slynite-mission-vertically'} width={600} />
					</div>
				</div>
				<div className='hidden md:flex justify-center animate-once animate-fade-up animate-delay-[200ms] animate-ease-out'>
					<LottiePlayer src={'slynite-mission'} width={180} />
				</div>
			</div>

			<div id='core-values' className='mt-10'>
				<h2 className='text-2xl lg:text-4xl font-bold'>{dict.homepage.core_values.title_part1} <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.core_values.title_highlighted}</p> {dict.homepage.core_values.title_part2}</h2>
				<div className='grid md:grid-cols-2'>
					<InfoCard 
							title={dict.homepage.core_values.privacy.title}
							description={dict.homepage.core_values.privacy.description} 
							imagePath='/ressources/icons/shield-with-lock-white.png'
						/>
					<InfoCard 
							title={dict.homepage.core_values.transparency.title}
							description={dict.homepage.core_values.transparency.description}
							imagePath='/ressources/icons/codeblock-with-magnifier-white.png'
						/>
					<InfoCard 
							title={dict.homepage.core_values.security.title}
							description={dict.homepage.core_values.security.description}
							imagePath='/ressources/icons/lock-closed-white.png'
						/>
					<InfoCard 
							title={dict.homepage.core_values.tracking.title}
							description={dict.homepage.core_values.tracking.description}
							imagePath='/ressources/icons/signal-slash-white.png'
						/>
				</div>
			</div>

			<div id='open-source'>
				<div className='rounded-3xl m-3 p-10 pb-0 bg-zinc-800 animate-fade-up'>
					<h2 className='text-2xl lg:text-4xl font-bold md:flex text-center justify-center'>{dict.homepage.open_source.title_part1} <p className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.open_source.title_highlighted}</p></h2>
					<h3 className='text-lg lg:text-3xl font-bold text-gray-300 flex justify-center'>{dict.homepage.open_source.subtitle}</h3>
					<div className='md:grid md:grid-cols-3 mt-0 md:mt-6'>
						<p className='md:col-span-2 lg:text-lg mt-3 md:mt-20'>
							{dict.homepage.open_source.description} <br/>
							{dict.homepage.open_source.learn_more} <Link href="https://github.com/Slynite" className='underline'>{dict.homepage.open_source.learn_more_link}</Link>
						</p>
						<div className='flex justify-center'>
						<Image src={'/ressources/slynite-github-profile-iphone12-blue-half.png'} alt={dict.homepage.open_source.title_highlighted} width={300} height={600} /> 
						</div>					
					</div>
				</div>
			</div>
    	</main>
  	)
}