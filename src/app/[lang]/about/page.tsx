import { getMainDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import InfoCard from "@/components/infoCard";
import TextHeader from "@/components/textHeader";
import { Metadata } from "next";
import TimelineItem from "@/components/timelineItem";
import Link from "next/link";

type Props = {
	params: { lang: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const dict = await getMainDictionary(params.lang) 
    return {
      	title: `Slynite - ${dict.about.page_title}`,
      	description: dict.about.page_description
    };
};

export default async function About({ params: { lang } }: Props) {
	const dict = await getMainDictionary(lang);
	return (
		<main className='mt-6 md:mt-20'>
			<div className="text-center">
				<TextHeader text={dict.about.title} hightlightText={dict.about.title_highlighted} description={dict.about.description} />
			</div>

			<div className="grid md:grid-cols-3 mt-20">
				<div className="md:col-span-2">
					<h2 className='text-2xl lg:text-4xl font-bold'>{dict.about.who_we_are.title}</h2>
					<div className='mb-8'>
						<p className='text-lg text-gray-300 col-span-2'>{dict.about.who_we_are.description}</p>
					</div>
				</div>
				<Image className="place-self-center" src={'/ressources/slynite-logo-gradient.svg'} alt="Slynite Logo" width={220} height={220} />
			</div>

			<div className="mt-10">
				<h2 className='text-2xl lg:text-4xl font-bold'>{dict.about.our_history.title_part1} <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">{dict.about.our_history.title_highlighted}</p> {dict.about.our_history.title_part2}</h2>
				<div className="md:grid md:grid-cols-2">
					<ol className="relative border-l-2 border-gray-200 mt-3 md:mt-5">                  
						<TimelineItem 
							title={dict.about.our_history.timeline[0].title}
							time={dict.about.our_history.timeline[0].time}
							description={dict.about.our_history.timeline[0].description}
						/>
						<TimelineItem 
							title={dict.about.our_history.timeline[1].title}
							time={dict.about.our_history.timeline[1].time}
							description={dict.about.our_history.timeline[1].description}
						/>
						<TimelineItem 
							title={dict.about.our_history.timeline[2].title}
							time={dict.about.our_history.timeline[2].time}
							description={dict.about.our_history.timeline[2].description}
						/>
						<TimelineItem 
							title={dict.about.our_history.timeline[3].title}
							time={dict.about.our_history.timeline[3].time}
							description={dict.about.our_history.timeline[3].description}
						/>
						<TimelineItem 
							title={dict.about.our_history.timeline[4].title}
							time={dict.about.our_history.timeline[4].time}
							description={dict.about.our_history.timeline[4].description}
						/>
					</ol>
				</div>
			</div>

			<div className="flex flex-col items-center text-center md:mx-24 md:mt-14">
				<Image src={'/ressources/icons/quote.png'} alt="Quote" width={80} height={80} />
				<p className="text-lg md:text-xl">&quot;{dict.about.quote.text}&quot;</p>
				<div className="flex mt-4 text-lg items-center space-x-2">
					<Image src={'/ressources/danny-schapeit.png'} alt={dict.about.quote.author.name} width={40} height={40} className="rounded-full" />
					<div className="text-left md:flex md:items-center md:space-x-2">
						<p>{dict.about.quote.author.name}</p>
						<p className="text-sm font-light">{dict.about.quote.author.company}</p>
					</div>
				</div>
			</div>

			<div className="mt-10 md:mt-14">
				<div className="grid md:grid-cols-2">
					<InfoCard
						imagePath="/ressources/icons/user-group.png"
						title={dict.about.values.team.title}
						description={dict.about.values.team.description}
					/>
					<InfoCard
						imagePath="/ressources/icons/osi-logo-outlined-white.png"
						title={dict.about.values.open_source.title}
						description={dict.about.values.open_source.description}
					/>
				</div>
			</div>

			<div className="mt-10">
				<h2 className='text-2xl lg:text-4xl font-bold'>{dict.about.get_in_touch.title}</h2>
				<p className='text-lg text-gray-300'>{dict.about.get_in_touch.description}</p>
				<div className='flex justify-center mt-2 mb-10'>
				<Link href={"/" + lang + "/contact"}>
					<button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 py-1.5 text-center">{dict.about.get_in_touch.button}</button>
				</Link>
			</div>
			</div>
		</main>
	);
}