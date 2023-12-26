import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./RequestModal.module.css";

export default function RequestCallBack({
  handleRequestModal,
  requestCallModal,
}) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={requestCallModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleRequestModal}
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                className={`sm:w-[80%] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  md:w-[550px] ${styles.form} bg-white pb-20`}
              >
                <form action="">
                  <p className="md:py-8 sm:py-6 text-center sm:text-lg md:text-4xl font-bold text-[#1f3f53]">
                    Talk to Our Career Expert
                  </p>
                  <div className="mx-auto md:text-[16px] sm:text-[14px] flex w-[82%] flex-col gap-y-4">
                    <div className="">
                      <label htmlFor="FirstName">Name</label>
                      <input
                        required
                        type="text"
                        name="FirstName"
                        className="w-full px-2 focus:outline-none border border-black"
                        id="FirstName"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="Mobile Number">Mobile Number</label>
                      <input
                        required
                        type="text"
                        name="Mobile Number"
                        className="w-full px-2 border focus:outline-none border-black"
                        id="Mobile Number"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="Highest Qualification">
                        E-mail
                      </label>
                      <div className="flex items-center justify-between border border-black px-2">
                        <div>
                          <input
                            required
                            type="text"
                            name="Highest Qualification"
                            className="w-full focus:outline-none "
                            id="Highest Qualification"
                          />
                        </div>
                      </div>
                    </div>
                  
                   
                  </div>
                  <div className="mx-auto md:text-[16px] sm:text-[14px] mt-4 flex gap-y-2 flex-col w-[82%]">
                    <p className="font-bold">Receive Updates</p>
                    <div className="flex gap-x-[10px]">
                      <input
                        required
                        type="checkbox"
                        name="Permission For Whatsapp Notifications"
                        id="Permission For Whatsapp Notifications"
                      />
                      <label htmlFor="Permission For Whatsapp Notifications">
                        I want to receive updates directly on Whatsapp
                      </label>
                    </div>
                   
                  </div>
                  <button className="mx-auto md:text-[16px] sm:text-[14px] bg-[#ff8541] block px-5 mt-8 font-bold text-white py-3 rounded-[16px]">
                    Submit
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
