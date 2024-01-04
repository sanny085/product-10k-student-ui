import SideBarClassroom from "@/components/classroomComponents/classroomSlideBar/sideBar";

export default function HomeLayout({ children }) {
  return (
    <section>
      <SideBarClassroom/>
      <main>{children}</main>
    </section>
  );
}