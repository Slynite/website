import Page from "../components/structure/page"
import Link from "next/link"
import TextHeader from "../components/utils/text-header"
import { ContentTypes } from "../interfaces/interfaces"

export default function Custom404 () {
    return (
        <Page contentType={ContentTypes.Other} title={"404 Page not found"} description={"404 Not found"} allowIndexing={false}>
          <div className="min-h-screen 3xl:grid content-center 3xl:-mt-36">
            <div className="flex justify-center">
                <div className="md:grid md:grid-cols-3 justify-items-center space-x-4">
                  <div className="md:border-r-2 text-center md:text-right xl:text-left md:pr-4 w-full col-span-1">
                    <TextHeader text={"404"} size={"text-7xl xl:text-8xl"} />
                  </div>
                  <div className="text-center md:text-left text-gray-300 col-span-2">
                    <p className="md:text-3xl xl:text-5xl font-bold">Page not found</p>
                    <p>The page you trying to access is not available.</p>
                  </div>
                </div>
            </div>
            <div className="flex md:ml-24 mt-6 justify-center space-x-4">
              <div className='cursor-pointer flex items-center justify-center px-4 py-2 border border-1 rounded-md border-customGray shadow-sm bg-gradient-to-r from-gradient-primary to-gradient-secondary'>
                <Link href={'/'} passHref className="text-sm font-mediumtext-white">
                  Back Home
                </Link>
              </div>
              <div className='cursor-pointer flex items-center justify-center px-4 py-2 border border-1 rounded-md border-customGray shadow-sm bg-neutral-850 hover:bg-gradient-to-r from-gradient-primary to-gradient-secondary'>
                <Link href={'https://status.slynite.com'} passHref className="text-sm font-mediumtext-white">
                  Status page
                </Link>
              </div>
            </div>
          </div>
        </Page>
      )
}