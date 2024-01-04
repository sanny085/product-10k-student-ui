import ClassroomNavBar from "@/components/classroomComponents/classroomNavBar/nav";
import SideBarClassroom from "@/components/classroomComponents/classroomSlideBar/sideBar";
import {
  BellIcon,
  ClockIcon,
  HeadingIcon,
  PersonIcon,
  LinkIcon,
  CopyIcon,
  PlaySvg,
  GreenTickImage,
} from "@/shared/svgIcons/classroom";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const SessionCard = () => {
    return (
      <div className="rounded-[16px] w-fit overflow-hidden">
        <div className="relative w-[255px] h-[106px]">
          <Image src="/classroom_Images/thumbnail.png" fill alt="" />
          <PlaySvg className="w-[40px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-1 h-[40px]  bg-[white]" />
          <GreenTickImage className="z-1 absolute top-[5px] right-[5px]" />
        </div>
        <div className="p-[16px] bg-white">
          <p className="text-[16px] font-bold">
            CSS inline, internal, external
          </p>
          <p className="text-[12px] font-[400]">12/06/23</p>
        </div>
      </div>
    );
  };
  return (
    <main className="bg-[#DDF5FF] w-full md:gap-[35px] lg:gap-[50px] flex">
      <SideBarClassroom />
      <div className="mt-[40px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar/>
        {/* upcomming session */}
        <div className="flex w-fit flex-col mt-[70px] gap-[12px]">
          <p className="text-[16px] font-bold leading-[normal]">
            Upcoming Session
          </p>
          <div className="bg-white rounded-[16px] md:p-[15px] lg:p-[24px] flex md:w-[60%] lg:w-[576px] justify-between">
            <div className="flex md:gap-[10px] lg:gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <HeadingIcon />
                <PersonIcon />
                <ClockIcon />
                <LinkIcon />
              </div>
              <div className="flex font-bold flex-col gap-[10px]">
                <p>Title:</p>
                <p>Instructor :</p>
                <p>Time :</p>
                <p>Link :</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>CSS Selectors</p>
              <p>Mohit J.</p>
              <p>12:00 PM</p>
              <div className="flex gap-[10px]">
                <Link
                  className="text-[#FF8541] underline font-bold"
                  href=" https://meet.google.com/rzs-gkrn-vzs"
                >
                  https://meet.google.com/rzs-gkrn-vzs
                </Link>
                <CopyIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[12px]">
          <p className="text-[16px] font-bold leading-[normal]">
            Previous Sessions
          </p>
          <div className="flex w-full gap-[30px]">
            <SessionCard />
            <SessionCard />
            <SessionCard />
            <SessionCard />
          </div>
        </div>
      </div>
    </main>
  );
}
