import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";

export default function ClassroomHome() {
  return (
    <main className="bg-[#DDF5FF] w-full min-h-[100vh] flex">
      <div className="mt-[40px] pl-[50px] ml-[220px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar />
        <p className="font-bold text-[24px] text-center">
          Home page is under development
        </p>
      </div>
    </main>
  );
}
