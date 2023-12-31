// import HomePage from "./(routes)/home/page.js";

import {
  successStories,
  curriculum,
} from "@/shared/staticData/homeScreen.json";
import PageHeader from "@/widgets/PageHeader/PageHeader";
import HomeComponents from "@/components/HomeComponents/HomeComponents";

export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <PageHeader />
      <HomeComponents successStories={successStories} curriculum={curriculum} />
    </>
  );
}
