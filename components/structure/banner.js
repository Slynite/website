import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { IS_BANNER_ACTIVE } from "../../lib/constrants";

//This Component is Hardcoded so that it can directly modified and the style can changes at any time.
export default function Banner() {
    if (IS_BANNER_ACTIVE) {
        return(
            <div className="backgroundPattern outline outline-1 outline-customGray rounded-md mb-8">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-neutral-900 outline outline-1 outline-customGray">
                    <SpeakerphoneIcon className="h-6 w-6 text-gray-300" aria-hidden="true" />
                  </span>
                  <p className="ml-3 font-medium text-gray-300 truncate">
                    <span className="md:hidden">We announced our new website!</span>
                    <span className="hidden md:inline">Big changes! We&apos;re excited to announce our new website.</span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <Link href={'/newsroom/slynite-com-relaunch'} passHref className="text-sm font-mediumtext-white">
                    <div className='cursor-pointer flex items-center justify-center px-4 py-2 border border-1 rounded-md border-customGray shadow-sm bg-neutral-900 hover:bg-gradient-to-r from-gradient-primary to-gradient-secondary'>
                        Learn more
                    </div>
                  </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 h-6 w-6 ">
                </div>
              </div>
            </div>
          </div>
        )
    }

    return null;
}