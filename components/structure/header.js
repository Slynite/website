import Link from "next/link";
import React from "react";
import { Disclosure } from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import Image from "next/image";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Newsroom', href: '/newsroom', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'About', href: '/company/about-us', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-background">
      {({ open }) => (
        <>
          <div className="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/" passHref>
                  <div className="flex-shrink-0 -mt-10 sm:-mt-5 md:-mt-4 items-center">
                    <div className="block h-8 w-auto">
                      <div className="w-[110px] h-[110px] items-start">
                        <Image 
                            src="/company/slynite_logo.svg"
                            layout="responsive"
                            width={75}
                            height={50}
                            alt="Slynite Logo" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm md:text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-1 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}