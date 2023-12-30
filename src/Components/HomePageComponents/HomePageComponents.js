"use client";
import { useState } from "react";
// import NavBar from "../NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import HiringPartners from "../HiringPartners/HiringPartners";
import { TeamExperts } from "../TeamExperts/TeamExperts";
import SucessStories from "../SucessStories/SucessStories";
import Courses from "../Courses/Courses";
import HereAboutUs from "../HereAboutUs/HereAboutUs";
import Joinus from "../Joinus/JoinUs";
import Footer from "../Footer/Footer";
import { useRouter } from "next/navigation";

export default function HomePageComponents() {
  const [activeModuleNum, setActiveModuleNum] = useState(1);
  const { push } = useRouter();
  const handleLoginRoute = () => {
    push("/preAuth/login");
  };
  const handleActiveModule = (num) => {
    setActiveModuleNum(num);
  };
  const handleRequestModal = () => {
    push("/preAuth/requestCallBack");
  };
  const successStoriesData = [
    {
      name: "Tej",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "I got four placement offers of 4.5 LPA, 5.5 LPA, 6.5 LPA, and 9.2 LPA from different companies. The team supported me a lot with my placement.",
      package: "9.2 L",
      Img: "/succesStories_images/success story 2.png",
      status: "First Job",
    },
    {
      name: "Akhil",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "Got a hike of 250% from civil engineer background to react developer all in a duration of 7 months. Thanks to the entire team.",
      package: "8 L",
      Img: "/succesStories_images/success story 1.png",
      status: "250% Hike",
    },
    {
      name: "Manoj",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "10000coders helped me learn about real-time practices and work culture. Their guidance has helped a lot in finding the right career of becoming a web developer from being a BSc graduate.",
      package: "6.5 L",
      Img: "/succesStories_images/success story 3.png",
      status: "100% Hike",
    },
    {
      name: "Rohith",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "This institute has trained me so well that I have transformed from fearing whether I would get a job to becoming a developer",
      package: "6.5 L",
      Img: "/succesStories_images/success story 4.png",
      status: "First Job",
    },
  ];
  const curriculum = [
    {
      week: "Week 1",
      title: "Introduction to Web Development and HTML",
      points: [
        "Understanding the basics of web development",
        "Introducing HTML and its structure",
        "Creating a simple webpage and HTML",
        "Working with text, headings, and paragraph",
        "Adding links and anchors",
        "Inserting images and multimedia content",
      ],
    },
    {
      week: "Week 2",
      title: "CSS Fundamentals",
      points: [
        "Introduction to Cascading Style Sheets (CSS)",
        "Selectors and HTML elements",
        "Creating a simple webpage and HTML",
        "Managing margins, paddings and borders",
        "Understanding the box model",
        "Creating layouts with CSS positioning and floating",
      ],
    },
    {
      week: "Week 3-4",
      title: "Responsive Web design",
      points: [
        "The importance of responsive design",
        "Media queries for different devices",
        "Fluid layouts and flexible grids",
        "Using CSS frameworks for responsive developments",
        "Making images and media responsive",
        "Testing and debugging responsive websites",
      ],
    },
    {
      week: "Week 5-6",
      title: "JavaScript Basics",
      points: [
        "Introduction to JavaScript and its role in web development",
        "Working with variables, data types and operators",
        "Control structures, if statements, loops and functions",
        "Manipulating the DOM (Document Object Model)",
        "Event handling and interactive web elements",
        "Introduction to AJAX and working with APIs",
      ],
    },
    {
      week: "Week 7-8",
      title: "Front-end Tools and Libraries",
      points: [
        "Introduction to front-end build tools (e.g., npm, Web-pack)",
        "Managing packages with npm and using package.json",
        "Version control with Git and GitHub",
        "Introduction to front-end libraries (e.g., jQuery, Bootstrap)",
        "Using third-party APIs and libraries in projects",
        "Web performance optimization techniques",
      ],
    },
  ];
  return (
    <>
      <NavBar activeItem={"Home"} handleLoginRoute={handleLoginRoute} />
      <LandingPage handleRequestModal={handleRequestModal} />
      <HiringPartners handleRequestModal={handleRequestModal} />
      <TeamExperts handleRequestModal={handleRequestModal} />
      <SucessStories
        handleRequestModal={handleRequestModal}
        successStoriesData={successStoriesData}
      />
      <Courses
        activeModuleNum={activeModuleNum}
        handleActiveModule={handleActiveModule}
        curriculum={curriculum}
        handleRequestModal={handleRequestModal}
      />
      <HereAboutUs handleRequestModal={handleRequestModal} />
      <Joinus />
      <Footer />
    </>
  );
}
