import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";
import SessionCard from "components/classroomComponents/SessionCard";
import {
  ClockIcon,
  HeadingIcon,
  PersonIcon,
  LinkIcon,
  CopyIcon,
} from "@/shared/svgIcons/classroom";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#DDF5FF]  min-h-[100vh] flex">
      <div className="mt-[40px] pl-[50px] ml-[220px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar />
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
            <SessionCard
              type="watch"
              img="/classroom_Images/thumbnail.png"
              title="CSS inline, internal, external"
              date="12/06/23"
            />
            <SessionCard
              type="watch"
              img="/classroom_Images/thumbnail.png"
              title="CSS inline, internal, external"
              date="12/06/23"
            />
            <SessionCard
              type="watch"
              img="/classroom_Images/thumbnail.png"
              title="CSS inline, internal, external"
              date="12/06/23"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
