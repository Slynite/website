import { getDictionary } from "../dictionaries";
import { I18N } from "@/types/i18n-types";
import Image from "next/image";
import SlyniteLogo from "/public/icons/slynite-logo-gradiant.svg";
import InfoCard from "@/components/infoCard";
import TimeLine from "@/components/timeLine/timeLine";

type Props = {
	params: { lang: string };
};

export default async function About({ params: { lang } }: Props) {
	const dict = (await getDictionary(lang)) as I18N;
	const timeLine = [
		{
			id: 1,
			title: dict.aboutPage?.history?.history1?.title!,
			date: dict.aboutPage?.history?.history1?.date!,
			description: dict.aboutPage?.history?.history1?.description!,
		},
		{
			id: 2,
			title: dict.aboutPage?.history?.history2?.title!,
			date: dict.aboutPage?.history?.history2?.date!,
			description: dict.aboutPage?.history?.history2?.description!,
		},
		{
			id: 3,
			title: dict.aboutPage?.history?.history3?.title!,
			date: dict.aboutPage?.history?.history3?.date!,
			description: dict.aboutPage?.history?.history3?.description!,
		},
	];
	return (
		<main>
			<div className="text-center">
				<h1 className="text-2xl lg:text-4xl font-bold">
					<span>{dict.aboutPage?.header?.title}</span> <br />
					<b className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green inline-block">
						{dict.aboutPage?.header?.highlitedTitle}
					</b>
					.
				</h1>
				<h2 className="text-base lg:text-lg">
					{dict.aboutPage?.header?.content1}
					<br />
					{dict.aboutPage?.header?.content2}
				</h2>
			</div>
			<div className="pt-20 md:pt-30">
				<div className="grid md:grid-cols-4">
					<div className="md:col-start-1 md:col-end-4">
						<h3 className="text-2xl lg:text-4xl font-bold">{dict.aboutPage?.whoWeAre?.title}</h3>
						<p className="text-base lg:text-lg pt-3">{dict.aboutPage?.whoWeAre?.content}</p>
					</div>
					<div className="md:col-auto">
						<div>
							<Image className="m-auto pt-2 md:pt-0 md:float-right" src={SlyniteLogo} alt="Slynite Logo" width={200} height={200} />
						</div>
					</div>
				</div>
			</div>
			<div className="pt-10 md:pt-20 float-none">
				<div className="md:col-start-1 md:col-end-4">
					<h3 className="text-2xl lg:text-4xl font-bold">{dict.aboutPage?.history?.title}</h3>
				</div>
				<TimeLine timeLine={timeLine}></TimeLine>
			</div>
			<div className="grid md:grid-cols-2 pt-10 md:pt-20 clear-both">
				<InfoCard
					imagePath="/icons/shield-with-lock-white.png"
					title={dict.aboutPage?.card1?.title!}
					description={dict.aboutPage?.card1?.description!}
				></InfoCard>
				<InfoCard
					imagePath="/icons/shield-with-lock-white.png"
					title={dict.aboutPage?.card2?.title!}
					description={dict.aboutPage?.card2?.description!}
				></InfoCard>
			</div>
		</main>
	);
}
