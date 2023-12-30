import { LandingPageFooter } from "@/components/HomeComponents/LandingPage/LandingPage";
import styles from "@/components/HomeComponents/LandingPage/LandingPage.module.css";

const Scholarship = () => {
  return (
    <>
      <main
        className={`lg:w-[80%] ${styles.transition} pb-4 sm:w-[98%] md:w-[95%] mx-auto`}
      >
        <div className="flex xl:flex-row sm:flex-col-reverse justify-between items-start">
          {/* Scholarship */}
          <div className="sm:mx-auto xl:mx-0 ">
            <div className="flex items-start flex-col gap-y-[30px] ">
              <div className="md:text-[52px] lg:mt-[54px] sm:mx-auto md:mx-0 sm:text-[38px] sm:leading-[45px] md:leading-[62px] w-fit font-bold">
                <p className=" ">Right Path for a</p>
                <p className={`${styles.text_linear_gradient}`}>
                  Bright Career
                </p>
              </div>
              <div className="text-center sm:w-[300px] md:w-[389px] md:text-[18px]">
                <p className="pb-[20px] font-[300] leading-[23px] ">
                  Start an exciting tech journey with our detailed test,
                  designed to check your skills and knowledge. Act now to unlock
                  exclusive discounts on our Full Stack IT Course, ensuring a
                  better investment
                </p>
                <p className="text-[#FF8541] font-semibold">
                  Limited-time offer – seize the opportunity!
                </p>
              </div>
            </div>
            <button className="uppercase my-[24px] flex mx-auto justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
              <img
                draggable="false"
                src="/LandingPageImages/List_Icon.svg"
                alt=""
              />
              <p>Take scholarship exam</p>
            </button>
            <button className="uppercase flex mx-auto my-[24px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
              <img draggable="false" src="/LandingPageImages/call.svg" alt="" />
              <p>Request Call back</p>
            </button>
          </div>
          <div
            className={`${styles.imageTransition2} sm:mx-auto xl:mx-0 rounded-full sm:max-w-[400px] md:max-w-[591px] md:h-[591px]`}
          >
            <img
              draggable="false"
              src="/LandingPageImages/LandingImage2.png"
              alt=""
            />
          </div>
        </div>
        <LandingPageFooter />
      </main>
    </>
  );
};
export default Scholarship;
