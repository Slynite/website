import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
  src: string,
  alt: string,
  width: number,
  height: number
}

export default function ImageWithModal({ src, alt, width, height }: Props) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  if (alt == null) {
    alt = "Image without alternate text";
  }

  return (
  <>
      <Image
        src={src}
        width={width}
        height={height}
        layout="responsive"
        alt={alt}
        placeholder="blur"
        onClick={openModal}
        blurDataURL={src}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 max-w-screen max-h-screen" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto md:p-16">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen max-w-5xl max-h-screen transform overflow-hidden align-middle shadow-xl transition-all">
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      layout="responsive"
                      alt={alt}
                      onClick={closeModal}
                      placeholder="blur"
                      blurDataURL={src}
                    />
                    
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}