"use client";
import Image from "next/image";
import {
  HouseIcon,
  BookOpenTextIcon,
  CalenderIcon,
  AssignmentIcon,
  ProjectIcon,
  CurrlyBracesIcon,
  GiftIcon,
} from "@/shared/svgIcons/classroom";
import { useState } from "react";
import styles from "./sideBar.module.css";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";


export default function SideBarClassroom() {
  const [activeItem, setActiveItem] = useState("Home");
 const params = useParams()
 console.log(params)
  const Items = [
    {
      text: "Home",
      svgBlack: <HouseIcon stroke="black" />,
      svgOrange: <HouseIcon stroke="#FF8541" />,
    },
    {
      text: "Classes",
      svgBlack: <BookOpenTextIcon />,
      svgOrange: <BookOpenTextIcon stroke="#FF8541" />,
    },
    {
      text: "Curriculum",
      svgBlack: <CalenderIcon />,
      svgOrange: <CalenderIcon stroke="#FF8541" />,
    },
    {
      text: "Assignments",
      svgBlack: <AssignmentIcon />,
      svgOrange: <AssignmentIcon fill="#FF8541" />,
    },
    {
      text: "Projects",
      svgBlack: <ProjectIcon />,
      svgOrange: <ProjectIcon stroke="#FF8541" />,
    },
    {
      text: "Problems",
      svgBlack: <CurrlyBracesIcon />,
      svgOrange: <CurrlyBracesIcon stroke="#FF8541" />,
    },
    {
      text: "Bonus",
      svgBlack: <GiftIcon />,
      svgOrange: <GiftIcon stroke="#FF8541" />,
    },
  ];
  const {push} = useRouter()
  const handleAciveItem = (item) => {
    const slug = `/classroom/${item.toLowerCase()}`
    push(slug)
    setActiveItem(item);
  };
  const MenuItem = ({ svgBlack, svgOrange, text }) => {
    return (
        <div
          className="flex cursor-pointer p-[10px] gap-[10px] items-center"
          onClick={() => handleAciveItem(text)}
        >
          {text === activeItem ? svgOrange : svgBlack}
          <p
            className={`text-[16px] font-bold leading-[normal] ${
              text == activeItem ? "text-[#FF8541]" : "hover:text-[#FF8541]"
            }`}
          >
            {text}
          </p>
        </div>
    );
  };
  return (
    <nav
      className={` fixed md:w-[200px] lg:w-[240px] flex-shrink-0 bg-white  flex items-center justify-center h-[100vh] rounded-r-[32px] ${styles.shadow}`}
    >
      <div className="top-[30px] left-[40px] absolute w-[132px] mt-[30px] h-[46px] mx-auto">
        <Image src="/LandingPageImages/10k_Logo.svg" alt="" fill />
      </div>
      <div className="flex gap-[10px] h-fit flex-col">
        {Items.map((item, idx) => (
          <MenuItem
            key={idx}
            svgBlack={item.svgBlack}
            svgOrange={item.svgOrange}
            text={item.text}
          />
        ))}
      </div>
    </nav>
  );
}
