"use client";
import styles from "./PageHeader.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function PageHeader({ handleRequestModal }) {
  const [activeItem, setActiveItem] = useState("Home");

  const { push } = useRouter();
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => setDropDown(() => !dropDown);
  const handleNavBarNavigation = (item) => {
    const slug = item === "Home" ? "/" : `${item}`;
    push(slug);
    setActiveItem(item);
  };
  return (
    <nav className="mt-[20px] sm:w-full }mb-[30px] sm:px-[10px] md:px-[20px] items-center flex justify-between">
      <img
        src="/LandingPageImages/10k_Logo.svg"
        className={`w-[132px] h-[46px] ${styles.logo} flex-shrink-0`}
      />
      <section
        className={`flex ${styles.menuSection} justify-end sm:gap-x-[15px] md:gap-x-[36px] font-bold sm:text-[16px] items-center`}
      >
        <div
          className={`flex ${!dropDown ? styles.hide : ""} ${
            styles.menu
          } sm:gap-x-[15px] p-[10px] md:gap-x-[32px] justify-between`}
        >
          <p
            onClick={() => handleNavBarNavigation("Home")}
            className={`${
              activeItem === "Home" ? "text-[#FF8541]" : "hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Home
          </p>
          <Link href="/#Course">
            <p
              onClick={() => handleNavBarNavigation("Course")}
              className={`${
                activeItem === "Course"
                  ? "text-[#FF8541]"
                  : "hover:text-[#FF8541]"
              } cursor-pointer`}
            >
              Course
            </p>
          </Link>
          <p
            onClick={() => handleNavBarNavigation("freeLecture")}
            className={`${
              activeItem === "freeLecture"
                ? "text-[#FF8541]"
                : "hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Free Lecture
          </p>
          <p
            onClick={() => handleNavBarNavigation("scholarship")}
            className={`${
              activeItem === "scholarship"
                ? "text-[#FF8541]"
                : "hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Scholarship
          </p>
          <p className="hover:text-[#FF8541] md:hidden">Login</p>
        </div>
        <Link
          className={`bg-[#FF8541] ${styles.hide} sm:w-[90px] p-[10px] flex justify-center items-center md:w-[107px] sm:h-[39px] rounded-md text-white`}
          href="preAuth/login"
        >
          Login
        </Link>
      </section>
      <div className={styles.menuIcon} onClick={handleDropDown}>
        {dropDown ? (
          <img
            src="/LandingPageImages/cross-svgrepo-com.svg"
            className="cursor-pointer h-[30px] w-[30px]"
          />
        ) : (
          <img
            src="/LandingPageImages/menu-svgrepo-com.svg"
            className={`h-[30px] w-[30px] cursor-pointer`}
          />
        )}
      </div>
    </nav>
  );
}
