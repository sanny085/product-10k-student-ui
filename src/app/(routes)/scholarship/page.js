import ButtonComponent from "@/components/routeButton/button";
import { LandingPageFooter } from "@/components/HomeComponents/LandingPage/LandingPage";
import styles from "@/components/HomeComponents/LandingPage/LandingPage.module.css";
import Link from "next/link";
const Scholarship = () => {
  return (
    <>
      <main
        className={`lg:w-[80%] ${styles.transition} pb-[7px] sm:w-[98%] md:w-[95%] mx-auto`}
      >
        <div className="flex xl:flex-row sm:flex-col-reverse justify-between items-start">
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
            <ButtonComponent
              route="/postAuth/assessment"
              img="/LandingPageImages/List_Icon.svg"
              text="Take scholarship exam"
              bg={"#FF8541"}
            />
            <ButtonComponent
              route="/preAuth/requestCallBack"
              img="/LandingPageImages/call.svg"
              text="Request Call back"
              bg={"#B7B7B7"}
            />
          </div>
          <div
            className={`${styles.imageTransition2} sm:mx-auto xl:mx-0 rounded-full sm:max-w-[400px] md:max-w-[552px] md:h-[552px]`}
          >
            <img
              draggable="false"
              src="/LandingPageImages/LandingImage2.png"
              alt=""
            />
          </div>
        </div>
        <LandingPageFooter />
      </main>{" "}
      <div className="flex w-full px-[15px] font-bold md:justify-center bg-[#FF8541] sm:justify-around sm:text-[12px] md:text-[16px] text-white items-center py-[4px] gap-x-[34px]">
        <p>Have Questions? Reach out at 9892201029</p>
        <Link
          href="/preAuth/requestCallBack"
          className="text-[#FF8541] sm:text-center md:text-start cursor-pointer bg-white rounded-[8px] sm:-[5px] md:p-[10px] underline"
        >
          Request Callback
        </Link>
      </div>
    </>
  );
};
export default Scholarship;
