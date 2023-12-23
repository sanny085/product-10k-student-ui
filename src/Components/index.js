"use client";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import HiringPartners from "./HiringPartners/HiringPartners";
import { TeamExperts } from "./TeamExperts/TeamExperts";

export default function HomePage() {
  //Navbar
  const [activeItem, setActiveItem] = useState("Home");
  const handleActiveMenu = (item) => setActiveItem(item);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(!dropDown);
  return (
    <>
      <NavBar
        activeItem={activeItem}
        handleActiveMenu={handleActiveMenu}
        dropDown={dropDown}
        handleDropDown={handleDropDown}
      />
      <LandingPage activeItem={activeItem}/>
      <HiringPartners/>
      <TeamExperts/>
    </>
  );
}
