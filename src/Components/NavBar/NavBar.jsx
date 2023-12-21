import styles from "./NavBar.module.css";
export default function NavBar({
  handleActiveMenu,
  activeItem,
  dropDown,
  handleDropDown,
}) {
  return (
    <nav className="mx-[20px] mt-[42px] items-center flex justify-between">
      <img src="/LandingPageImages/10k_Logo.svg" className={`w-[132px] h-[46px] ${styles.logo} flex-shrink-0`} />
      <section
        className={`flex ${styles.menuSection} justify-end sm:gap-x-[15px] md:gap-x-[36px] font-bold sm:text-[16px] items-center`}
      >
        <div
          className={`flex ${!dropDown ? styles.hide : ""} ${
            styles.menu
          } sm:gap-x-[15px] p-[10px] md:gap-x-[32px] justify-between`}
        >
          <p
            onClick={() => handleActiveMenu("Home")}
            className={`${
              activeItem == "Home" ? "text-[#FF8541]" : " hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Home
          </p>
          <p
            onClick={() => handleActiveMenu("Course")}
            className={`${
              activeItem == "Course" ? "text-[#FF8541]" : "hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Course
          </p>
          <p
            onClick={() => handleActiveMenu("Free Lecture")}
            className={`${
              activeItem == "Free Lecture"
                ? "text-[#FF8541]"
                : "hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Free Lecture
          </p>
          <p
            onClick={() => handleActiveMenu("Sholarship")}
            className={`${
              activeItem == "Sholarship"
                ? "text-[#FF8541]"
                : "hover:text-[#FF8541]"
            } cursor-pointer`}
          >
            Sholarship
          </p>
        </div>
        <button
          className={`bg-[#FF8541] ${styles.hide} sm:w-[90px] p-[10px] flex justify-center items-center md:w-[107px] sm:h-[39px] rounded-md text-white`}
        >
          Login
        </button>
      </section>
      <div className={styles.menuIcon} onClick={handleDropDown}>
        {dropDown ? (
          <img src="/LandingPageImages/cross-svgrepo-com.svg" className="cursor-pointer h-[30px] w-[30px]" />
        ) : (
          <img src="/LandingPageImages/menu-svgrepo-com.svg"
            className={`h-[30px] w-[30px] cursor-pointer`}
          />
        )}
      </div>
    </nav>
  );
}
