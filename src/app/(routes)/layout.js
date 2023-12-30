import PageHeader from "@/widgets/PageHeader/PageHeader.jsx";

export default function HomeLayout({ children }) {
  return (
    <section>
      <PageHeader />
      <main>{children}</main>
    </section>
  );
}
