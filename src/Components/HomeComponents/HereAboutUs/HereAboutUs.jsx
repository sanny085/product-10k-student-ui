import ButtonComponent from "@/components/routeButton/button";
import Link from "next/link";
export default function HereAboutUs() {
  return (
    <main className="bg-[#F6F0FF] py-[50px]">
      <p className="text-[35px] font-[700] tracking-[120%] text-center pb-[40px]">
        Hear about 10000 Coders’{" "}
        <span className="text-[#FF8541]">learning experience</span>
      </p>
      <div className=" mx-auto justify-center w-fit items-center gap-[40px] flex-wrap flex">
        <img
          draggable="false"
          className="md:w-[300px] sm:h-[380px] md:h-[461px] rounded-[14px]"
          src="/courses_images/Reel - Manoj 1.png"
          alt=""
        />
        <img
          draggable="false"
          className="md:w-[300px] sm:h-[380px] md:h-[461px] rounded-[14px]"
          src="/courses_images/Venkatesh Thumbnail 1.png"
          alt=""
        />
        <img
          draggable="false"
          className="md:w-[300px] sm:h-[380px] md:h-[461px] rounded-[14px]"
          src="/courses_images/Venkatesh Thumbnail 2.png"
          alt=""
        />
        <img
          draggable="false"
          className="md:w-[300px] sm:h-[380px] md:h-[461px] rounded-[14px]"
          src="/courses_images/1 71452.png"
          alt=""
        />
      </div>
      <ButtonComponent
        route="/preAuth/requestCallBack"
        img="/LandingPageImages/call.svg"
        text="request callback"
        w="297px"
        bg="#9747FF"
      />
    </main>
  );
}
