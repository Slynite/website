import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import { ScrollToTop } from "./backToTop";
import PageSeo from "../utils/pageSeo";
import { ContentTypes, Seo } from "../../interfaces/interfaces";
import { useRouter } from "next/router";

type PageContent = {
    children: React.ReactNode
    contentType: ContentTypes
    title: string
    overrideTitle?: boolean
    description: string
    ogImage?: string
	allowIndexing?: boolean
    article?: {
      publishedTime: string
      author: string
      category: string
      tags: string[]
	}
	teamMember?: {
		name: string
	}
}

export default function Page({ children, contentType, title, overrideTitle = false, description, ogImage = '/company/slynite-banner-v2.png', allowIndexing = true, article, teamMember }: PageContent) {
    const router = useRouter();

    if (!overrideTitle) {
      title = title + ` | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }

    const seo: Seo = {
      title: title,
      description: description,
      url: process.env.NEXT_PUBLIC_SITE_URL + router.asPath,
      type: contentType,
      image: process.env.NEXT_PUBLIC_SITE_URL + ogImage,
	  allowIndexing: allowIndexing,
      article: article,
      teamMember: teamMember
    }
    return(
        <div className="bg-primary text-secondary justify-between flex flex-col min-h-screen">
            <PageSeo data={ seo } />
            <div className="p-5 pt-0 space-y-2">
                <Header />
                <main className="flex-grow sm:mx-14 md:mx-16 lg:mx-24 xl:mx-40 justify-center">
                    <div className="max-w-screen-3xl mx-auto mt-10">
                        <Banner />
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    )
}