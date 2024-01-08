"use client";
import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "./home.module.css";
import { CodeBlockIcon } from "@/shared/svgIcons/classroom";
import { NextUIProvider } from "@nextui-org/react";

export default function ClassroomHome() {
  const ContinueCard = () => {
    return (
      <div className={styles.continue_card}>
        <div className={styles.text_content}>
          <p className="text-[40px] w-fit font-bold leading-[normal] ">
            Continue
          </p>
          <p className="font-bold w-fit">Front-end Development</p>
          <p className="w-fit font-[400]">Module 4 - Intro to JavaScript</p>
        </div>
      </div>
    );
  };
  const VisulaizationCard = () => {
    return (
      <div className="bg-white rounded-[16px] px-[20px] py-[20px] w-[317px] h-[186px] ">
        <Bar
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "Your Performance",
                data: [16, 20, 8, 10, 0, 12, 6, 30],
                backgroundColor: ["#FF8541"],
                borderRadius: "30px",
              },
            ],
          }}
          height={300}
          width={500}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  };

  const AssignmentCard = () => {
    return (
      <div className="bg-white w-[317px] h-[186px] flex flex-col gap-[30px] rounded-[16px] py-[19px] px-[30px]">
        <p className="font-bold text-Green">+ 270 points pending</p>
        <div className="w-[249px] flex flex-col ">
          <p className="text-[32px] w-full flex justify-between items-center font-bold ">
            Assignments <CodeBlockIcon />
          </p>
          <p>Module 3 - Assignment 2 Pending</p>
          <p>and 3 more</p>
        </div>
      </div>
    );
  };
  return (
    <NextUIProvider>
      <main className="bg-[#DDF5FF] w-full min-h-[100vh] flex">
        <div className="mt-[40px] pl-[50px] ml-[220px] flex w-full flex-col gap-[40px]">
          <ClassroomNavBar />
          <p className="font-bold text-[24px] text-center">
            Home page is under development
          </p>
          <div className="flex gap-[30px]">
            <ContinueCard />
            <AssignmentCard />
            <VisulaizationCard />
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
