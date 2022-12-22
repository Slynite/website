import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";
import { Seo, ContentTypes } from "../../interfaces/interfaces";

export default function PageSeo({ data }: { data: Seo }) {
	const openGraph: OpenGraph = getOpenGraph({ data })

	return <NextSeo
		title= { data.title }
		description= { data.description }
		noindex={data.allowIndexing}
		additionalMetaTags={[{
			property: 'dc:creator',
			content: 'Slynite Team and Contributors'
		}, {
			name: 'application-name',
			content: 'Slynite'
		}, {
			httpEquiv: 'x-ua-compatible',
			content: 'IE=edge; chrome=1'
		}]}
		additionalLinkTags={[
			{
			rel: 'icon',
			href: '/favicon/favicon.ico',
			},
			{
			rel: 'apple-touch-icon',
			href: '/favicon/apple-touch-icon.png',
			sizes: '76x76'
			},
			{
			rel: 'manifest',
			href: '/favicon/manifest.json'
			}
		]}
		openGraph={ openGraph }
	/>
};

function getOpenGraph({ data }: { data: Seo }): OpenGraph {

	if (data.type === ContentTypes.Post || data.type === ContentTypes.KnowledgeBaseEntry) {
		return {
			title: data.title,
			description: data.description,
			url: data.url,
			type: 'article',
			article: {
			publishedTime: data.article?.publishedTime,
			modifiedTime: data.article?.updatedTime ? data.article?.updatedTime : data.article?.publishedTime,
			authors: [
				data.article?.author as string
			],
			tags: data.article?.tags,
			},
			locale: 'en_US',
			images: [
				{
					url: data.image,
					width: 800,
					height: 600,
				},
			],
			site_name: 'Slynite',
		}
	} else if (data.type === ContentTypes.TeamMember) {
		const name: string[] = data.teamMember?.name.split(" ") as string[];
		return {
			title: data.title,
			description: data.description,
			url: data.url,
			type: 'profile',
			profile: {
			firstName: name[0],
			lastName: name[name.length - 1],
			username: data.teamMember?.name,
			},
			locale: 'en_US',
			images: [
				{
					url: data.image,
					width: 800,
					height: 600,
				},
			],
			site_name: 'Slynite',
		}
	} else {
		return {
			url: data.url,
			title: data.title,
			description: data.description,
			locale: 'en_US',
			images: [
				{
					url: data.image,
					width: 800,
					height: 600,
				},
			],
			site_name: 'Slynite',
		}
	}
}