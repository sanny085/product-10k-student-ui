import { LeftArrow, VideoIcon } from "@/shared/svgIcons/classroom";
import Link from "next/link";

export default function WriteCode() {
  return (
    <div className="flex mt-[70px] gap-[30px]">
      <div className="rounded-[16px] overflow-hidden">
        <div className="bg-[#FF8541] h-[30rem] text-white  flex flex-col gap-[30px]">
          <div className="flex p-[20px] gap-[10px]">
            <LeftArrow />
            <p className="font-[700] text-[16px]">Go back</p>
          </div>
          <div className="flex flex-col gap-[10px] pl-[40px] pr-[20px]">
            <p className="text-[24px] font-[700]">Bold Text</p>
            <p>
              Estimated time: <span>10mins</span>
            </p>
            <p>
              Deadline: <span>25/06/23</span>
            </p>
            <p className="flex gap-[5px]">
              Type: <VideoIcon fill="white" />
            </p>
          </div>
          <div className="pl-[40px] flex flex-col gap-[10px] pr-[50px]">
            <p>Question</p>
            <p className="font-bold w-[205px] leading-[120%]">
              Add extra importance to the word "degradation" in the paragraph
              below.
            </p>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center font-bold text-[#FF8541] p-[30px] h-[5rem]">
          +50 Points
        </div>
      </div>
      <div className="flex flex-col  gap-[30px]">
        <div className="h-[400px] bg-white w-[40rem] overflow-hidden rounded-[16px]">
          <textarea name="" id="" className="bg-[#F1F1F1] rounded-[16px] p-[10px] resize-none w-[90%] mt-[30px] mx-auto block focus:outline-none " cols="30" rows="10"></textarea>
        <div className="flex mt-[20px] mx-[30px] justify-between">
          <p className="font-bold text-[#C3C3C3]">Hint</p>
          <button className="font-bold rounded-[16px] p-[10px] text-white bg-[#FF8541]">
            submit
          </button>
        </div>
        </div>
        <div className="h-[130px] p-[20px] flex flex-col gap-[10px] bg-white rounded-[16px]">
          <p className="text-[#FF8541] font-bold">Output</p>
          <p>WWF's mission is to stop the degradation of our planet's natural environment.</p>
        </div>
      </div>
    </div>
  );
}
