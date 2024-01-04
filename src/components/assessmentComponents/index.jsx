"use client";
import React, { useState } from "react";
import { CloseSvgIcon } from "@/shared/svgIcons/freeAssessment";
import Button from "@/components/Button";
import CancelModalContent from "./cancelModalContent";

const libraryQuestion = {
  question:
    "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:",
  level: "Easy",
  type: "aptitude",
  isMultiAnswer: true,
  options: [
    {
      id: 0,
      option: 210,
    },
    { id: 1, option: 250 },
    { id: 2, option: 230 },
    { id: 3, option: 170 },
  ],
};

const AssessmentComponent = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [allQuestions, setAllQuestions] = useState([libraryQuestion]);
  const [selectedQuestion, setSelectedQuestion] = useState(libraryQuestion);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Current Selected Question and related answer
  const { question, level, type, isMultiAnswer, options } = selectedQuestion;

  const handleModal = () => {
    setModalStatus((prevState) => !prevState);
  };

  const handleOptionChange = (optionId) => {
    setSelectedAnswer(optionId);
  };

  const onQuestionChange = (quesNumber) => {
    console.log("quesNumber - ", quesNumber);
  };

  const renderButtonInRow = (count) => {
    return (
      <div className="flex flex-row items-start justify-start gap-[5px]">
        {[0, 1, 2, 3, 4].map((button) => (
          <Button
            key={button}
            type="button"
            onClick={onQuestionChange}
            className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg
                     transition duration-300 ease-in-out transform hover:bg-gray-300 mr-4 mb-4"
          >
            <span>{button}</span>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative bg-aliceblue  w-full h-screen overflow-hidden text-left text-xl text-black font-open-sans">
      <img
        src="/LandingPageImages/10k_Logo.svg"
        className={`absolute top-[40px] left-[39px] w-[132px] h-[46px] flex-shrink-0 object-cover`}
      />
      <div className="absolute top-[calc(50%_-_231px)] left-[calc(50%_-_593px)] flex flex-row items-start justify-start text-xl">
        <div className="rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-white flex flex-col h-[435px] items-start justify-start py-6 px-10 gap-[44px] border-r-[1px] border-solid  border-gray-500 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] ">
          <div className="flex">
            <span className="rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              {level}
            </span>
            <span className="rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ml-2">
              {type
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1) + " "
                )}
            </span>
            {isMultiAnswer && (
              <span className="rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ml-2">
                More than one Answer
              </span>
            )}
          </div>

          <b className="relative leading-[150%] inline-block w-[706px] my-[-20px]">
            {question}
          </b>
          <div className="flex flex-col items-center justify-start gap-[12px]">
            {isMultiAnswer === true
              ? options.map((option) => (
                  <div
                    key={option.id}
                    className="flex flex-row items-start justify-start gap-[14px]"
                  >
                    <input
                      type="radio"
                      id={`option-${option.id}`}
                      name="quiz-single-options"
                      value={option.id}
                      checked={selectedAnswer === option.option}
                      onChange={() => handleOptionChange(option.option)}
                      className="mt-1"
                    />
                    <div className="w-[650px] flex flex-row items-start justify-start py-0 px-2.5 box-border">
                      <div className="relative leading-[120%] inline-block w-[341px] shrink-0">
                        {option.option}
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="flex flex-row items-start justify-start gap-[469px] text-base text-white">
            <Button
              className="rounded-2xl bg-coral shadow-[0px_2px_5px_rgba(116,_116,_116,_0.25)] flex flex-row items-center justify-center py-4 px-8"
              type="button"
              onClick={"kdjhc"}
            >
              <b className="relative leading-[120%]">Next</b>
            </Button>

            <Button
              className="rounded-2xl bg-dodgerblue shadow-[0px_2px_5px_rgba(116,_116,_116,_0.25)] flex flex-row items-center justify-center py-4 px-8 opacity-[1]"
              type="submit"
              onClick={"kdjhc"}
            >
              <b className="relative leading-[120%]">Submit</b>
            </Button>
          </div>
        </div>
        <div className="rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-white w-[399px] h-[435px] flex flex-row items-center justify-center box-border relative text-xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)]">
          <div className="flex flex-col items-center justify-center mt-12">
            {renderButtonInRow(5)}
            {renderButtonInRow(5)}
            {renderButtonInRow(5)}
            {renderButtonInRow(5)}
            {renderButtonInRow(5)}
            {renderButtonInRow(5)}
          </div>
          <b className="absolute my-4 mx-[!important] top-[6px] left-[calc(50%_-_26.5px)] leading-[120%] inline-block z-[1]">
            1/30
          </b>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_260px)] right-[calc(50%_-_593px)] flex flex-row items-start justify-start gap-[6px]">
        <Button type="submit" onHandle={handleModal}>
          <div className="flex flex-row space-x-2">
            <span className="relative leading-[100%]">{`Cancel `}</span>
            <CloseSvgIcon />
          </div>
        </Button>
      </div>
      <b className="absolute top-[33px] right-[calc(50%_-_593px)] leading-[120%]">
        Hi Sanny,
      </b>
      {/* Created Modal for cancel the exam */}
      <CancelModalContent modalStatus={modalStatus} handleModal={handleModal} />
    </div>
  );
};

export default AssessmentComponent;
