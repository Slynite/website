import { Metadata } from "next";
import { getMainDictionary } from "../dictionaries";
import TextHeader from "@/components/textHeader";
import Project from "@/components/project";

type Props = {
	params: { lang: string };
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const dict = await getMainDictionary(params.lang);
	return {
		title: `Slynite - ${dict.projects.page_title}`,
		description: dict.projects.page_description,
	};
};

export default async function Projects({ params: { lang } }: Props) {
	const dict = await getMainDictionary(lang);

	return (
		<main className="mt-6 md:mt-20">
			<TextHeader
				text={dict.projects.title}
				hightlightText={dict.projects.title_highlighted}
				description={dict.projects.description}
			/>
			<div className="md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0 mt-8">
				<div className="animate-once animate-fade-up animate-ease-out">
					<Project
						name={dict.projects.worktime_tracker.title}
						description={dict.projects.worktime_tracker.description}
						logo="/ressources/worktime-tracker-logo.png"
						link="https://github.com/slynite/worktime-tracker"
						linkName={dict.projects.worktime_tracker.linkText}
						isUpcoming={true}
						dict={dict.projects}
					/>
				</div>
				<div className="animate-once animate-fade-up animate-delay-[200ms] animate-ease-out">
					<Project
						name={dict.projects.activehq.title}
						description={dict.projects.activehq.description}
						logo="/ressources/icons/sparkles.png"
						link="https://activehq.works"
						linkName={dict.projects.activehq.linkText}
						isUpcoming={true}
						dict={dict.projects}
					/>
				</div>
				<div className="animate-once animate-fade-up animate-delay-[400ms] animate-ease-out">
					<Project
						name={dict.projects.travelventures.title}
						description={dict.projects.travelventures.description}
						logo="/ressources/travelventures-logo.png"
						link="https://travelventures.app"
						linkName={dict.projects.travelventures.linkText}
						isUpcoming={true}
						dict={dict.projects}
					/>
				</div>
				<div className="animate-once animate-fade-up animate-delay-[400ms] animate-ease-out">
					<Project
						name={dict.projects.cmp.title}
						description={dict.projects.cmp.description}
						logo="/ressources/coworking-space-management-logo.png"
						dict={dict.projects}
					/>
				</div>
				<div className="animate-once animate-fade-up animate-delay-[600ms] animate-ease-out">
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
