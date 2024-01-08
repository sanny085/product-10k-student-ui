"use client";
import SessionModal from "components/Modals/sessionModal/sessionModal";
import {
  DocIcon,
  GreenTickImage,
  PlaySvg,
  QuestionIcon,
} from "@/shared/svgIcons/classroom";
import Image from "next/image";
import { useState } from "react";

const SessionCard = (props) => {
  const { type, img, title, date } = props;
  const [isSessionModal, setSessionModal] = useState(false);
  const handleSessionModal = () => setSessionModal(!isSessionModal);
  return (
    <>
      <div
        onClick={handleSessionModal}
        className="rounded-[16px] cursor-pointer w-fit overflow-hidden"
      >
        <div className="relative w-[255px] h-[106px]">
          <Image src={img} fill alt="" />
          {
            <div className="w-[40px] p-2 flex items-center rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-1 h-[40px]  bg-[white]">
              {type === "watch" || !type ? (
                <PlaySvg />
              ) : type === "document" ? (
                <DocIcon />
              ) : (
                <QuestionIcon />
              )}
            </div>
          }
          <GreenTickImage className="z-1 absolute top-[5px] right-[5px]" />
        </div>
        <div className="p-[16px] bg-white">
          <p className="text-[16px] font-bold">{title}</p>
          <p className="text-[12px] font-[400]">{date}</p>
        </div>
      </div>
      <SessionModal
        handleSessionModal={handleSessionModal}
        isSessionModal={isSessionModal}
        type={type}
      />
    </>
  );
};
export default SessionCard;
