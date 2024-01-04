"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClockIcon, CrossIcon } from "@/shared/svgIcons/classroom";
export default function ProjectModal({ isModal, handleProjectModal }) {
  const cancelButtonRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const uploadedFiles = event.target.files;
    setSelectedFiles(uploadedFiles);
  };
  return (
    <Transition.Root show={isModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleProjectModal}
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
                className={` relative transform flex flex-col gap-[20px] overflow-hidden w-[600px] h-[600px] rounded-lg bg-white text-left transition-all sm:my-8  `}
              >
                <div className="flex justify-between px-[10px] pt-[20px] items-center">
                  <div className="flex gap-[10px]">
                    <ClockIcon />
                    30 mins
                  </div>
                  <div className="font-bold text-[24px]">
                    Build a Survey Form
                  </div>
                  <div className=" cursor-pointer" onClick={handleProjectModal}>
                    <CrossIcon />
                  </div>
                </div>
                {!selectedFiles.length > 0 ? (
                  <div className="flex flex-col gap-[20px]">
                    <div className="px-[46px]">
                      Design and create an HTML survey form for collecting
                      feedback from users. Your survey form should include a
                      variety of question types and utilise HTML form elements,
                      such as text fields, radio buttons, checkboxes, and
                      dropdown menus.{" "}
                    </div>

                    <div className="pr-[46px] pl-[50px]">
                      <p>
                        Requirements: <br />
                        <ol className="list-decimal">
                          <li>
                            Create a webpage with an HTML form that serves as a
                            survey.
                          </li>
                          <li>
                            The survey should consist of at least 5 questions,
                            including a mix of the following types: -
                            Multiple-choice questions (radio buttons) -
                            Checkboxes for selecting multiple options - Dropdown
                            menus for selecting from predefined options - Text
                            input fields for open-ended responses
                          </li>
                          <li>
                            Each question should have an associated label.
                          </li>
                          <li>
                            Use appropriate HTML elements to structure and style
                            your form, including headings and paragraphs where
                            necessary. 5. Implement validation to ensure that
                            users provide responses for all required questions.
                          </li>
                        </ol>
                      </p>
                    </div>
                    <div className="mx-auto">
                      <label className="font-bold rounded-[16px] text-white w-fit py-[16px] bg-[#FF8541] px-[24.5px] cursor-pointer">
                        Upload Files
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileInputChange}
                          multiple
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="pl-[50px]">
                    <ul>
                      {Array.from(selectedFiles).map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
