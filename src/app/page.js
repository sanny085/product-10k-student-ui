// import HomePage from "./(routes)/home/page.js";

import {
  successStories,
  curriculum,
} from "@/shared/staticData/homeScreen.json";
import PageHeader from "@/widgets/PageHeader/PageHeader";
// import Button from "@/components/Button";
import Button from "@/widgets/Button";

import HomeComponents from "@/allcomponents/homeComponents/HomeComponents";

export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <PageHeader />
      <Button />
      <HomeComponents successStories={successStories} curriculum={curriculum} />
    </>
  );
}
