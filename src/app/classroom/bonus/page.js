import ClassroomNavBar from "@/components/classroomComponents/classroomNavBar/nav";
import SideBarClassroom from "@/components/classroomComponents/classroomSlideBar/sideBar";
import SessionCard from "@/components/classroomComponents/sessionCard/sessionCard";

export default function ClassroomBonus() {
  return (
    <main className="bg-[#DDF5FF] min-h-[100vh] w-full flex">
      <div className="mt-[40px] ml-[220px] pl-[50px] pb-[50px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar />
        <div className="flex flex-col mt-[70px] gap-[40px]">
          <div className="flex w-full overflow-hidden flex-col gap-[20px]">
            <p className="text-[16px] font-bold leading-[normal]">Videos</p>
            <div className="flex gap-[16px]">
              <SessionCard
                type="watch"
                img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23"
              />
              <SessionCard type="watch"
                img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[20px]">
            <p className="text-[16px] font-bold leading-[normal]">
              Reading Materials
            </p>
            <div className="flex gap-[16px]">
              {" "}
              <SessionCard type="document"  img="/classroom_Images/thumbnail.png"
                title="Selector Tags"
                date="12/06/23"/>
              <SessionCard type="document" img="/classroom_Images/thumbnail.png"
                title="Selector Tags"
                date="12/06/23" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[20px]">
            <p className="text-[16px] font-bold leading-[normal]">Quiz</p>
            <div className="flex gap-[16px]">
              <SessionCard type="quiz" img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23" />
              <SessionCard type="quiz" img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
