import ClassroomNavBar from "@/components/classroomComponents/classroomNavBar/nav";
import SideBarClassroom from "@/components/classroomComponents/classroomSlideBar/sideBar";

export default function ClassroomBonus() {
  return (
    <main className="bg-[#DDF5FF] w-full md:gap-[35px] lg:gap-[50px] flex">
      <SideBarClassroom />
      <div className="mt-[40px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar />
        <p className="font-bold text-[24px] text-center">
          Bonus page is under development
        </p>
      </div>
    </main>
  );
}
