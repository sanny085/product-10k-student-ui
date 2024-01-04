import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./ThankYouModal.module.css";
import { GreenTick, HomeIcon } from "@/shared/svgIcons/homeScreen";
import Link from "next/link";
export default function ThankYouModal({ handleThankYouModal, isTQModal }) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isTQModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleThankYouModal}
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
                className={`sm:w-[575px] sm:h-[322px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-[550px] ${styles.parent} flex flex-col gap-[16px] py-[24px] pb-20`}
              >
                <div className="text-[#289C26] text-[16px] items-center font-bold leading-[normal] mx-auto w-fit gap-[10px] flex">
                  <GreenTick /> Request submitted
                </div>
                <div
                  className={`text-[64px] font-[700] ${styles.heading} leading-[normal] text-center`}
                >
                  <p className={`${styles.text_linear_gradient}`}>Thank you</p>
                  <p>for reaching out</p>
                </div>
                <p className="text-[13px] text-center leading-[normal]  ">
                  Our career expert will get in touch with you at the provided
                  number shortly.
                </p>
                <Link href="/">
                  <button
                    onClick={() => {
                      handleThankYouModal();
                    }}
                    className="bg-black text-[12px] flex items-center gap-[10px] px-[10px] py-[8px] text-white font-bold leading-[normal] mx-auto rounded-[8px] w-fit"
                  >
                    <HomeIcon /> <span>Go to Home</span>
                  </button>
                </Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
