"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CrossIcon } from "@/shared/svgIcons/classroom";
export default function SessionModal({
  handleSessionModal,
  isSessionModal,
  type,
}) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isSessionModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleSessionModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform overflow-hidden w-fit h-fit rounded-lg transition-all`}
              >
                {type === "watch" ? (
                  <iframe
                    width={700}
                    height={400}
                    src="https://www.youtube.com/embed/bu7oR_waNEE?si=qEnHXDopsZ6lANJp"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                ) : type === "document" ? (
                  <div>
                    <div className="bg-white">
                      <p className="text-[32px] font-bold">Selector Tags</p>
                      <div
                        className=" absolute top-2 right-2 cursor-pointer"
                        onClick={handleSessionModal}
                      >
                        <CrossIcon />
                      </div>
                    </div>
                    <Image
                      src="/classroom_Images/doc1.png"
                      width={700}
                      height={400}
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
