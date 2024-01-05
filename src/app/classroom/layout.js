import SideBarClassroom from "components/classroomComponents/SideBarClassroom";

export default function HomeLayout({ children }) {
  return (
    <section>
      <SideBarClassroom />
      <main>{children}</main>
    </section>
  );
}
