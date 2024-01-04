"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClockIcon, CrossIcon, LeftArrow } from "@/shared/svgIcons/classroom";
export default function ProjectModal({ isModal, handleProjectModal }) {
  const cancelButtonRef = useRef(null);
  const [allowUpload, setAllowUpload] = useState(false);
  const [hostedLink, setHostedLink] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");

  const handleAllowUpload = () => setAllowUpload(!allowUpload);

  const handleClear = (field) => {
    if (field === "hosted") {
      setHostedLink("");
    } else if (field === "repository") {
      setRepositoryLink("");
    }
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
                <div className="flex justify-between px-[15px] mt-[20px] items-center">
                  {!allowUpload ? (
                    <div className="flex gap-[10px]">
                      <ClockIcon /> 30 min
                    </div>
                  ) : (
                    <div onClick={handleAllowUpload} className="flex items-center cursor-pointer gap-[10px]">
                      <LeftArrow fill="black" />
                      <p className="font-[700] text-[16px]">Go back</p>
                    </div>
                  )}
                  <div className="font-bold text-[24px]">
                    Build a Survey Form
                  </div>
                  <div className=" cursor-pointer" onClick={handleProjectModal}>
                    <CrossIcon />
                  </div>
                </div>
                {!allowUpload ? (
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
                    <button
                      onClick={handleAllowUpload}
                      className="font-bold focus:outline-none rounded-[16px] mx-auto text-white w-fit py-[16px] bg-[#FF8541] px-[24.5px] cursor-pointer"
                    >
                      Upload Files
                    </button>
                  </div>
                ) : (
                  <div className="pl-[50px] mt-[20px] flex flex-col gap-[16px]">
                    <label className="flex flex-col gap-[8px]">
                      Upload Hosted Link:
                      <div className="px-[10px] py-[5px] flex focus-within:border-[#FF8541] rounded-[8px] border border-[#B6B6B6] w-[367px] overflow-hidden focus-within:border">
                        <input
                          type="text"
                          className="focus:outline-none w-[350px]"
                          value={hostedLink}
                          onChange={(e) => setHostedLink(e.target.value)}
                        />
                        {hostedLink && (
                          <span
                            onClick={() => handleClear("hosted")}
                            className="cross-icon cursor-pointer"
                          >
                            &#10006;
                          </span>
                        )}
                      </div>
                    </label>

                    <label className="flex flex-col gap-[8px]">
                      Upload Repository / Code Sand Box Link:
                      <div className="px-[10px] py-[5px] flex focus-within:border-[#FF8541] rounded-[8px] border border-[#B6B6B6] w-[367px] overflow-hidden focus-within:border">
                        <input
                          className="focus:outline-none w-[350px] "
                          type="text"
                          value={repositoryLink}
                          onChange={(e) => setRepositoryLink(e.target.value)}
                        />
                        {repositoryLink && (
                          <span
                            onClick={() => handleClear("repository")}
                            className="cross-icon cursor-pointer"
                          >
                            &#10006;
                          </span>
                        )}
                      </div>
                    </label>
                    <button className="font-bold focus:outline-none rounded-[16px] text-white w-fit py-[10px] bg-[#FF8541] px-[24.5px] cursor-pointer">
                      Submit
                    </button>
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
