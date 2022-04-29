import { NextSeo } from "next-seo";
import { SITE_NAME } from "../../lib/constrants";
import Footer from "./footer";
import Header from "./header";

export default function Page({ children, description, title }) {
    var pageTitle = `${title} | ${SITE_NAME}`
    return(
        <div>
            <NextSeo
                title={pageTitle}
                description={description}
            />
            <Header />
            <div>
                <div>
                    <main>{children}</main>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}