import { Metadata } from "next";
import { getMainDictionary } from "../dictionaries";
import TextHeader from "@/components/textHeader";
import Project from "@/components/project";

type Props = {
	params: Promise<{ lang: string }>;
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const { lang } = await params;
	const dict = await getMainDictionary(lang);
	return {
		title: `Slynite - ${dict.projects.page_title}`,
		description: dict.projects.page_description,
	};
};

export default async function Projects({ params }: Props) {
	const { lang } = await params;
	const dict = await getMainDictionary(lang);

	return (
		<main className="mt-6 md:mt-20">
			<TextHeader
				text={dict.projects.title}
				hightlightText={dict.projects.title_highlighted}
				description={dict.projects.description}
			/>
			<div className="md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0 mt-8">
				<div className="animate-once animate-fade-up animate-delay-[100ms] animate-ease-out">
					<Project
						name={dict.projects.mail.title}
						description={dict.projects.mail.description}
						logo="/ressources/icons/sparkles.png"
						link="https://github.com/slynite/mail"
						linkName={dict.projects.mail.linkText}
						isUpcoming={true}
						dict={dict.projects}
					/>
				</div>
				<div className="animate-once animate-fade-up animate-delay-[300ms] animate-ease-out">
					<Project
						name={dict.projects.opensource.title}
						description={dict.projects.opensource.description}
						logo="/ressources/github-mark-white.png"
						link="https://github.com/slynite"
						linkName={dict.projects.opensource.linkText}
						isUpcoming={false}
						dict={dict.projects}
					/>
				</div>
			</div>
		</main>
	);
}
