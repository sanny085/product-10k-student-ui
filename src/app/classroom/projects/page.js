"use client";
import ProjectModal from "components/Modals/ProjectModal/projectModal";
import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";
import { useState } from "react";

export default function Projects() {
  const [isModal, setModal] = useState(false);
  const handleProjectModal = () => setModal(!isModal);
  const PendingCard = () => {
    return (
      <div
        onClick={handleProjectModal}
        className="w-[311px] cursor-pointer rounded-[16px] bg-white p-[24px] flex flex-col gap-[27px]"
      >
        <p className="font-bold text-[#0FA90C] text-[24px] leading-[normal]">
          +200 Points
        </p>
        <div>
          <p className="font-bold text-[24px] leading-[normal]">
            Build a Survey Form
          </p>
          <p className="text-[16px] font-[400]">
            Estimated time : <span>30 mins</span>
          </p>
        </div>
      </div>
    );
  };
  const CompletedCard = () => {
    return (
      <div
        onClick={handleProjectModal}
        className="w-[311px] cursor-pointer text-[#747474] rounded-[16px] bg-white p-[24px] flex flex-col gap-[27px]"
      >
        <p className="font-bold text-[24px] leading-[normal]">+100 Points</p>
        <div>
          <p className="font-bold text-[24px] leading-[normal]">
            CSS Selectors
          </p>
          <p className="text-[16px] font-[400]">
            Estimated Time :<span>20 mins</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <main className="bg-[#DDF5FF] w-full min-h-[100vh] flex">
      <div className="mt-[40px] ml-[220px] pl-[50px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar />
        {/* pending session */}
        <div className="flex w-full overflow-hidden flex-col mt-[70px] gap-[20px]">
          <p className="text-[16px] font-bold leading-[normal]">Pending</p>
          <div className="flex gap-[16px]">
            <PendingCard />
            <PendingCard />
            <PendingCard />
          </div>
        </div>
        <div className="flex w-full flex-col gap-[20px]">
          <p className="text-[16px] font-bold leading-[normal]">Completed</p>
          <div className="flex gap-[16px]">
            <CompletedCard />
          </div>
        </div>
      </div>
      <ProjectModal isModal={isModal} handleProjectModal={handleProjectModal} />
    </main>
  );
}
