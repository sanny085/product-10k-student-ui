import { InfoIcon, RaceFlag } from "@/shared/svgIcons/classroom";

const StudentProgressCard = () => {
  const circleStyle = {

    background:
      "radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(#FF8541 50%, #EFEFEF 0)",
  };
  return (
    <main className="h-[20.3rem] w-[260px] rounded-[16px] flex flex-col gap-[14px]  bg-white mx-auto">
      <p className="font-bold text-center pt-[14px]">Week 1 Progress</p>
      <div style={circleStyle} className="h-[140px] w-[140px] rounded-full flex items-center justify-center mx-auto relative ">
        <p className="font-bold text-gray-400">
          <span className=" text-Vivid_Tangelo text-[32px] mr-[4px]">30</span>/
          160
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex w-[13rem] mx-auto gap-[12px]">
          <InfoIcon className="flex-shrink-0" />
          <p className="font-bold text-[12px]">
            Try to keep a steady routine for{" "}
            <span className="text-Vivid_Tangelo">streak points.</span>
          </p>
        </div>
        <div className="flex w-[13rem] mx-auto gap-[12px]">
          <RaceFlag className="flex-shrink-0" />{" "}
          <p className="font-bold text-[12px]">
            You are<span className="text-Vivid_Tangelo"> ahead of 54% </span>
            students in your batch
          </p>
        </div>
      </div>
    </main>
  );
};
export default StudentProgressCard;
