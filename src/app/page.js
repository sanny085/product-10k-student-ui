// import HomePage from "./(routes)/home/page.js";

import {
  successStories,
  curriculum,
} from "@/shared/staticData/homeScreen.json";
import PageHeader from "@/widgets/PageHeader/PageHeader";
import Button from "@/components/Button/Button";

// import HomeComponents from "@/components/HomeComponents/HomeComponents";

export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <PageHeader />
      <Button />
      {/* <HomeComponents successStories={successStories} curriculum={curriculum} /> */}
    </>
  );
}
