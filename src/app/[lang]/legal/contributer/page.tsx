import { Metadata } from "next";
import { getDictionaryByName } from "../../dictionaries";
import Link from "next/link";
import Changed from "@/components/change";

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string };
}): Promise<Metadata> => {
	const dict = await getDictionaryByName(params.lang, "contributer");
	return {
		title: `Slynite - ${dict.page.page_title}`,
		description: dict.page.page_description,
	};
};

export default async function Licenses({
	params,
}: {
	params: { lang: string };
}) {
	const dict = await getDictionaryByName(params.lang, "contributer");
	return (
		<div className="mt-6 md:mt-20">
			<h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center">
				{dict.page.title}
			</h1>

			<Changed lang={params.lang} date={dict.updated} />

			<div className="text-lg text-gray-300 whitespace-pre-line">
				<p className="mb-2">{dict.page.description}</p>
				<div className="mt-6">
					<p className="mb-2 text-2xl">{dict.page.website.title}</p>
					<div className="mt-3">
						<p className="text-xl">
							{dict.page.website.development.title}
						</p>
						<div className="space-x-1 flex">
							<p>
								{
									dict.page.website.development
										.description_part1
								}
								<Link
									href={
										"https://github.com/Slynite/website/graphs/contributors"
									}
									target="_blank"
									className="font-bold underline mx-1"
								>
									{
										dict.page.website.development
											.description_link
									}
								</Link>
								{
									dict.page.website.development
										.description_part2
								}
							</p>
						</div>
					</div>
					<div className="mt-3">
						<p className="text-xl">
							{dict.page.website.content.title}
						</p>
						<div className="space-x-1">
							<p>
								{dict.page.website.content.description_part1}
								<Link
									href={
										"https://www.linkedin.com/in/tristan-b-12792b238/"
									}
									target="_blank"
									className="font-bold underline mx-1"
								>
									{
										dict.page.website.content
											.external_contributer1
									}
								</Link>
								{dict.page.website.content.description_part2}
								<Link
									href={
										"https://www.linkedin.com/in/verbecker/"
									}
									target="_blank"
									className="font-bold underline mx-1"
								>
									{
										dict.page.website.content
											.external_contributer2
									}
								</Link>
								{dict.page.website.content.description_part3}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
