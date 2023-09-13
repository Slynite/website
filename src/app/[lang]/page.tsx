import { Metadata } from 'next';
import { getDictionary } from './dictionaries';
import TextHeader from '@/components/textHeader';
import InfoCard from '@/components/infoCard';
import Image from 'next/image';
import Link from 'next/link';

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
    	<main className='mt-6 md:mt-20'>
        	<TextHeader text={dict.homepage.title} description={dict.homepage.description} />
			<div className='flex justify-center mt-2 mb-10'>
				<Link href={"/about"}>
					<button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 py-1.5 text-center">{dict?.page?.learn_more}</button>
				</Link>
			</div>
			
			<Image src={'/placeholder-800x400.svg'} alt={dict.homepage.title} width={2200} height={600} />

			<div id='our-mission' className='md:grid md:grid-cols-3 mt-20'>
				<div className='md:col-span-2'>
					<h2 className='text-2xl lg:text-4xl font-bold'>{dict.homepage.mission.title_part1} <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.mission.title_highlighted}</p> {dict.homepage.mission.title_part2}.</h2>
					<p className='text-lg text-gray-300'>
						{dict.homepage.mission.description_part1}
						<br /><br />
						{dict.homepage.mission.description_part2} <br />
						{dict.homepage.mission.learn_more} <Link href="/about" className='underline'>{dict.homepage.mission.learn_more_link}</Link>.
					</p>
					<Image className='md:hidden' src={'/slynite-mission-vertically.png'} alt={dict.homepage.mission.title_highlighted} width={600} height={180} />
				</div>
				<div className='hidden md:flex justify-center animate-once animate-fade-up animate-delay-[200ms] animate-ease-out'>
					<Image src={'/slynite-mission.png'} alt={dict.homepage.mission.title_highlighted} width={180} height={600} />
				</div>
			</div>

			<div id='core-values' className='mt-10'>
				<h2 className='text-2xl lg:text-4xl font-bold'>{dict.homepage.core_values.title_part1} <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.core_values.title_highlighted}</p>.</h2>
				<div className='mb-8'>
					<p className='text-lg text-gray-300'>
						{dict.homepage.core_values.description}
					</p>
				</div>
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
			</div>

			<div id='open-source'>
				<div className='rounded-3xl m-3 p-10 pb-0 bg-zinc-800 animate-fade-up'>
					<h2 className='text-2xl lg:text-4xl font-bold md:flex text-center justify-center'>{dict.homepage.open_source.title_part1} <p className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.homepage.open_source.title_highlighted}</p>.</h2>
					<h3 className='text-lg lg:text-3xl font-bold text-gray-300 flex justify-center'>{dict.homepage.open_source.subtitle}</h3>
					<div className='md:grid md:grid-cols-3 mt-0 md:mt-6'>
						<p className='md:col-span-2 lg:text-lg mt-3 md:mt-20'>
							{dict.homepage.open_source.description} <br/>
							{dict.homepage.open_source.learn_more} <Link href="https://github.com/Slynite" className='underline'>{dict.homepage.open_source.learn_more_link}</Link>
						</p>
						<div className='flex justify-center'>
						<Image src={'/slynite-github-profile-iphone12-blue-half.png'} alt={dict.homepage.open_source.title_highlighted} width={300} height={600} /> 
						</div>					
					</div>
				</div>
			</div>
    	</main>
  	)
}