import HomePageComponents from "@/components/HomeComponents/index";
import {
  successStories,
  curriculum,
} from "@/shared/staticData/homeScreen.json";
import PageHeader from "@/widgets/PageHeader/PageHeader.jsx";
export default function HomePage() {
  //Every Page is Container - Need to define all the state and js related work

  return (
    <>
      <PageHeader />
      <HomePageComponents
        successStories={successStories}
        curriculum={curriculum}
      />
    </>
  );
}
