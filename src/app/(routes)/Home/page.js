// import HomePageComponents from "@/components/HomeComponents/index";
import {
  successStories,
  curriculum,
} from "@/shared/staticData/homeScreen.json";
import PageHeader from "@/widgets/PageHeader/PageHeader";

export default function HomePage() {
  return (
    <>
      <PageHeader />
      {/* <HomePageComponents
        successStories={successStories}
        curriculum={curriculum}
      /> */}
    </>
  );
}
