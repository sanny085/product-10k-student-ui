import LandingPage from "./LandingPage/Landing";
import HiringPartners from "./HiringPartners/HiringPartners";
import { TeamExperts } from "./TeamExperts/TeamExperts";
import SucessStories from "./SucessStories/SucessStories";
import Courses from "./Courses/Courses";
import HereAboutUs from "./HereAboutUs/HereAboutUs";
import Joinus from "./Joinus/JoinUs";
import PageFooter from "@/widgets/PageFooter/PageFooter";

export default function HomePageComponents({ successStories, curriculum }) {
  return (
    <>
      <LandingPage />
      <HiringPartners />
      <TeamExperts />
      <SucessStories successStoriesData={successStories} />
      <Courses curriculum={curriculum} />
      <HereAboutUs />
      <Joinus />
      <PageFooter />
    </>
  );
}
