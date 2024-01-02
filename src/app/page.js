import HomeComponents from "@/components/HomeComponents/HomeComponents";
import {
  successStories,
  curriculum,
  HiringPartners
} from "@/shared/staticData/homeScreen.json";
import PageHeader from "@/widgets/PageHeader/PageHeader";


export default function Home() {
  return (
    <>
      <PageHeader />
      <HomeComponents successStories={successStories} HiringPartnersData={HiringPartners} curriculum={curriculum} />
    </>
  );
}
