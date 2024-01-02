import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./FreeLectureModal.module.css";
import Link from "next/link";
import Image from "next/image";
export default function FreeLectureModal({ handleModal, isModalActive }) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isModalActive} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleModal}
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
                className={` relative transform overflow-hidden w-[80%] h-[650px] rounded-lg bg-[#ddf5ff] text-left items-center justify-center transition-all sm:my-8 flex gap-[16px] `}
              >
                <div className="absolute top-[10px] left-[10px] w-[100px] h-[49px]">
                  <Image
                    draggable={false}
                    src="/LandingPageImages/10k_Logo.svg"
                    alt=""
                    fill={true}
                  />
                </div>
                <Link
                  href="/"
                  className="w-[97px] cursor-pointer absolute top-[20px] right-[30px] h-[24px] "
                >
                  <Image
                    draggable={false}
                    src="/LandingPageImages/cancle.png"
                    alt=""
                    fill={true}
                  />
                </Link>
                <div className=" w-[560px] flex flex-col gap-[16px]  overflow-hidden rounded-[12px">
                  <iframe
                    className="rounded-[12px]"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/bu7oR_waNEE?si=VVowSjepKKRaIIGc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p className="text-center leading-[19.2px] text-[16px] font-[400]">
                    We hope you like our free session. To start your training at
                    10000coders, We urge you to take our scholarship assessment.{" "}
                  </p>

                  <Link
                    href="/preAuth/register"
                    className="bg-[#FF8541] text-white text-[16px] py-[8px] px-[30px] rounded-md w-fit mx-auto font-bold text-center"
                  >
                    Register
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
