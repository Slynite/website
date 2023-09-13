import { getDictionary } from "../dictionaries";
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
    const dict = await getDictionary(params.lang) 
    return {
      	title: `Slynite - ${dict.page.title}`,
      	description: dict.page.description
    };
};

export default async function About({ params: { lang } }: Props) {
	const dict = await getDictionary(lang);
	return (
		<main className='mt-6 md:mt-20'>
			<div className="text-center">
				<TextHeader text="Our mission is simple" hightlightText="Privacy at the core" description="We want to change whats wrong with many products, so we take user data seriously and protect them" />
			</div>

			<div className="grid md:grid-cols-3 mt-20">
				<div className="md:col-span-2">
					<h2 className='text-2xl lg:text-4xl font-bold'>Who we are</h2>
					<div className='mb-8'>
						<p className='text-lg text-gray-300 col-span-2'>One of our biggest issues in today&apos;s world is the integrity of personalized data. To achieve this aim we are optimizing data architectures and data models to deliver next level solutions requiring only the most necessary data for operations. With our transperency and strict data limitation it is possible to thrive on powerful applications with a minimal amount of data collections.</p>
					</div>
				</div>
				<Image className="place-self-center" src={'/slynite-logo-gradient.svg'} alt="Slynite Logo" width={220} height={220} />
			</div>

			<div className="mt-10">
				<h2 className='text-2xl lg:text-4xl font-bold'>Our <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">history</p> so far</h2>
				<div className="md:grid md:grid-cols-2">
					<ol className="relative border-l-2 border-gray-200 mt-3 md:mt-5">                  
						<TimelineItem 
							title="Foundation of Slynite"
							time="February 2019"
							description="Our founder Danny starts developing projects under the name Slynite."
						/>
						<TimelineItem 
							title="Title"
							time="Month, Year"
							description="Description"
						/>
						<TimelineItem 
							title="Title"
							time="Month, Year"
							description="Description"
						/>
						<TimelineItem 
							title="Title"
							time="Month, Year"
							description="Description"
						/>
					</ol>
				</div>
			</div>

			<div className="flex flex-col items-center text-center md:mx-24 md:mt-14">
				<Image src={'/icons/quote.png'} alt="Quote" width={80} height={80} />
				<p className="text-lg md:text-xl">&quot;I am proud to have a team of highly competent, exciting and helpful professionals who are passionate about our vision. Together, we set standards and create innovations that delight our customers.&quot;</p>
				<div className="flex mt-4 text-lg items-center space-x-2">
					<Image src={'/danny-schapeit.png'} alt="Danny Schapeit" width={40} height={40} className="rounded-full" />
					<div className="text-left md:flex md:items-center md:space-x-2">
						<p>Danny Schapeit</p>
						<p className="text-sm font-light">CEO & Founder of Slynite</p>
					</div>
				</div>
			</div>

			<div className="mt-10 md:mt-14">
				<div className="grid md:grid-cols-2">
					<InfoCard
						imagePath="/icons/shield-with-lock-white.png"
						title="A Team of awesomeness"
						description="Our team forms Slynite. Why not get to know the developers, thinkers, designers & philosophers to understand why you are at Slynite. Meet the Team"
					/>
					<InfoCard
						imagePath="/icons/shield-with-lock-white.png"
						title="We are Open Source"
						description="We develop many of our projects and tools open source. With the help of the thousands of open-source developers active on the Internet, we can provide great programs to improve people's everyday lives."
					/>
				</div>
			</div>

			<div className="mt-10">
				<h2 className='text-2xl lg:text-4xl font-bold'>Get in touch</h2>
				<p className='text-lg text-gray-300'>You have questions about us or our projects? Don&apos;t hesitate to contact us via our contact form. We will be happy to get in touch with you.</p>
				<div className='flex justify-center mt-2 mb-10'>
				<Link href={"/contact"}>
					<button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 py-1.5 text-center">Contact</button>
				</Link>
			</div>
			</div>
		</main>
	);
}