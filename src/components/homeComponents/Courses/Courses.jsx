"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Courses.module.css";
import ButtonComponent from "@/components/routeButton/button";

export default function Courses({ curriculum }) {
  const [activeModuleNum, setActiveModuleNum] = useState(0);
  const handleActiveModule = (num) => {
    setActiveModuleNum(num);
  };

  const renderModule = (moduleNum, title, duration) => (
    <div
      key={moduleNum}
      onClick={() => handleActiveModule(moduleNum)}
      className={` ${
        activeModuleNum === moduleNum ? styles.active : ""
      } cursor-pointer rounded-2xl hover:bg-[#d3d3d3] sm:m-2 sm:w-[250px] sm:flex-shrink-0 sm:p-2 md:m-0 md:w-[293px] md:px-[20px] md:py-[10px] lg:py-[20px] xl:px-[30px]`}
    >
      <p className="text-[10px] font-bold lg:mb-[10px]">Module {moduleNum}</p>
      <div className="flex items-center justify-between gap-x-10 font-bold ">
        <p className={`sm:text-[14px] lg:w-[144px] lg:text-[15px]`}>{title}</p>
        <p className={`text-[10px] xsm:hidden `}>{duration}</p>{" "}
      </div>
    </div>
  );
  return (
    <>
      <p
        id="Course"
        className="my-[40px] uppercase tracking-[6.4px] font-[800] sm:text-[30px] md:text-[48px] lg:text-[64px] text-center "
      >
        our offerings
      </p>
      <section className={` ${styles.section} w-full flex`}>
        <div className="flex-shrink-0  sm:w-[10%] items-center gap-[10px] justify-center md:w-[10%] flex flex-col ">
          <img
            draggable="false"
            className=" block flex-shrink-0 sm:h-[40px] sm:w-[40px]"
            src="/courses_images/htm_icon.svg"
            alt=""
          />
          <div className={`w-[3px]  bg-[#FF8541] h-full`}></div>
        </div>
        <div className="sm:w-[90%] pb-20">
          <p className="text-[#FF8541] ml-[25px] md:text-start md:text-[32px] sm:text-center sm:text-[24px] lg:text-[48px] font-semibold tracking-[4.8px] uppercase leading-[normal]">
            curriculum
          </p>
          <div className="w-full rounded-[32px] mt-[21px] sm:p-[10px] md:p-[25px] shadow-[-23_34px_131px_0px_rgba(0, 0, 0, 0.10)] bg-[#FCD966] ">
            <p className="lg:text-[28px] md:text-[22px]  pt-[20px] sm:text-[18px] font-semibold w-[80%] mx-auto text-center md:text-center tracking-[0.557px] leading-[normal]">
              Our Course offers an in-depth knowledge into Full Stack
              Development, providing the skills needed to thrive in current
              market.
            </p>
            <div
              className={`flex mt-[50px] ${styles.parent_div} pb-[20px] sm:flex-col sm:gap-y-10 lg:gap-[38px] xl:flex-row`}
            >
              <div
                className={`flex flex-shrink-0 flex-col overflow-hidden rounded-2xl shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:w-[80%] ${styles.card1} md:w-[70%] lg:w-[50%] xl:mx-[0px] xl:w-[381px] `}
              >
                <div className="">
                  <img
                    draggable="false"
                    src="/courses_images/courseheading.png"
                    className="w-full"
                    alt="Course-heading"
                  />
                </div>
                <div className="bg-white sm:p-3 md:p-4 xl:h-[417px]">
                  <p className="font-bold md:text-[18px] lg:text-[20px] ">
                    Course Outcome
                  </p>
                  <p className="text-[#838383]  sm:my-1 sm:text-[14px] md:text-[15px] lg:text-[16px] ">
                    Full-stack Front-end Developer
                  </p>
                  <p className="font-bold sm:my-1 sm:text-[16px] md:text-[18px] lg:text-[20px]">
                    What You Will Learn
                  </p>
                  <p className="leading-6 text-[#838383] sm:mb-[30px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                    HTML, CSS, JavaScript, responsive design, user interface
                    (UI) design, web accessibility, version control (Git),
                    browser compatibility, front-end frameworks (e.g., React,
                    Angular, Vue.js). CSS preprocessors (e.g., Sass, Less), DOM
                    manipulation, web performance optimization, cross-browser
                    testing, progressive web apps (PWAs), JavaScript libraries
                    (e.g.,JQuery), front-end build tools etc.
                  </p>
                  <button
                    className={`mx-auto block cursor-pointer font-bold text-[#ff8541] sm:text-[16px] md:text-[18px] lg:text-[20px]`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div
                className={` w-full rounded-lg bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] sm:p-2 md:p-4`}
              >
                <p className="pb-1 text-xl text-[#AEAEAE]">
                  Duration : 8 weeks
                </p>
                <div className={`flex sm:flex-col md:flex-row md:gap-x-12 `}>
                  <div
                    className={`flex sm:flex-row  md:flex-col ${styles.scroll}  md:gap-y-4 lg:gap-y-1`}
                  >
                    {curriculum.map(({ week, title }, idx) =>
                      renderModule(idx, title, week)
                    )}
                  </div>
                  <div className="w-full">
                    <p className="font-bold sm:p-2 sm:text-[14px] md:p-0 md:text-[14px] lg:p-0 lg:text-[15px]">
                      {curriculum[activeModuleNum].week}
                    </p>
                    <hr className="h-1 rounded-xl bg-black to-[#CB5C1C] md:mt-[10px]" />
                    <ul
                      className={`list-disc sm:m-[10px] sm:text-[14px] md:text-[14px] lg:m-[27px] lg:text-[15px] ${styles.points}`}
                    >
                      <li>
                        <p className="mb-[18px]  font-bold">
                          {curriculum[activeModuleNum].title}
                        </p>
                        <ul className={`ml-[30px] list-disc`}>
                          {curriculum[activeModuleNum].points.map(
                            (point, idx) => (
                              <li className="mb-[18px] " key={idx}>
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    </ul>
                    <hr className="h-1 rounded-xl bg-black lg:mt-[10px]" />
                    <button className="mx-auto my-8 block text-center font-bold text-[#F87B34]">
                      Download Curriculum
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ButtonComponent
              route="/preAuth/requestCallBack"
              img="/LandingPageImages/call.svg"
              text="request callback"
              w="297px"
              bg="#FF8541"
            />
          </div>
        </div>
      </section>
      <section className="flex">
        <div className=" items-center gap-[10px] justify-center md:w-[10%] flex flex-col ">
          <img
            draggable="false"
            className=" my-2 block flex-shrink-0 sm:h-[40px] sm:w-[40px]"
            src="/courses_images/location.svg"
            alt=""
          />
          <div className={`w-[3px] bg-[#FF8541] h-full`}></div>
        </div>
        <div className="w-[90%]  m ">
          <p className="text-[#FF8541]  ml-[25px] md:text-start md:text-[32px] sm:text-center sm:text-[24px] lg:text-[48px] font-semibold tracking-[4.8px] sm:my-4 md:my-2 uppercase leading-[normal]">
            journey
          </p>{" "}
          <div className=" ">
            <img
              draggable="false"
              className="w-full"
              src="/courses_images/map.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex md:flex-row sm:flex-col">
        <div className="sm:w-[10%] ">
          <img
            draggable="false"
            className="w-[40px] mx-auto mt-1 h-[40px]"
            src="/courses_images/profileicon.svg"
            alt=""
          />
        </div>
        <div className="sm:w-[90%] lg:w-[90%] mx-auto">
          <p className="text-[#FF8541] ml-[25px] md:text-start md:text-[32px] sm:text-center sm:text-[24px] lg:text-[48px] font-semibold tracking-[4.8px] uppercase leading-[normal]">
            support
          </p>
          <div className="flex lg:ml-[55px] sm:items-end lg:justify-between sm:justify-around  md:items-center md:gap-[100px]">
            <div className="flex mt-[30px] gap-y-[14px] items-center flex-col">
              <div className=" sm:h-[40px] sm:w-[50px] md:h-[98px] md:w-[100px] lg:h-[130px] lg:w-[130px] xl:w-[150px] xl:h-[150px]">
                <img
                  draggable="false"
                  src="/courses_images/Frame 682.png"
                  alt=""
                />
              </div>
              <div className=" sm:h-[42px] sm:w-[50px]  md:h-[98px] md:w-[100px] lg:h-[130px] lg:w-[130px] xl:w-[150px] xl:h-[150px]">
                <img
                  draggable="false"
                  src="/courses_images/Frame 687.png"
                  alt=""
                />
              </div>
              <div className=" sm:h-[42px] sm:w-[50px] md:h-[98px] md:w-[100px] lg:h-[130px] lg:w-[130px] xl:w-[150px] xl:h-[150px]">
                <img
                  draggable="false"
                  src="/courses_images/Frame 687.png"
                  alt=""
                />
              </div>
              <div className=" sm:h-[42px] sm:w-[50px] md:h-[98px] md:w-[100px] lg:h-[130px] lg:w-[130px] xl:w-[150px] xl:h-[150px]">
                <img
                  draggable="false"
                  src="/courses_images/Frame 688.png"
                  alt=""
                />
              </div>
              <div className=" sm:h-[42px] sm:w-[50px] md:h-[98px] md:w-[100px] lg:h-[130px] lg:w-[130px] xl:w-[150px] xl:h-[150px]">
                <img
                  draggable="false"
                  src="/courses_images/Frame 689.png"
                  alt=""
                />
              </div>
              <div className=" sm:h-[40px] sm:w-[50px] md:h-[98px] md:w-[100px] lg:h-[130px] lg:w-[130px] xl:w-[150px] xl:h-[150px]">
                <img
                  draggable="false"
                  src="/courses_images/Frame 690.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className={`${styles.bg_image} sm:w-[310px] md:w-[700px] md:h-[500px] lg:w-[900px] lg:h-[900px] xl:w-[977px] xl:h-[931px] `}
            >
              <img
                draggable="false"
                src="/courses_images/Frame 698.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <ButtonComponent
        route="/preAuth/requestCallBack"
        img="/LandingPageImages/call.svg"
        text="request callback"
        w="297px"
        bg="#FF8541"
      />
    </>
  );
}
