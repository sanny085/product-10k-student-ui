"use client";
import ButtonComponent from "components/routeButton/button";
import { LandingPageFooter } from "components/homeComponents/LandingPage/LandingPage";
import styles from "components/homeComponents/LandingPage/LandingPage.module.css";

// import { LandingPageFooter } from "components/HomeComponents/LandingPage/LandingPage";
// import styles from "components/HomeComponents/LandingPage/LandingPage.module.css";
import FreeLectureModal from "components/Modals/FreeLectureModal/FreeLecture";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const FreeLecture = () => {
  const [isModalActive, setModalActive] = useState(false);
  const handleModal = () => setModalActive(!isModalActive);
  return (
    <>
      <main
        className={`lg:w-[80%] ${styles.transition} pb-[6px] sm:w-[98%] md:w-[95%] mx-auto`}
      >
        <div className="flex  xl:flex-row sm:flex-col-reverse justify-between items-start">
          {/* Free lecture */}
          <div className="sm:mx-auto  xl:mx-0 ">
            <div className="flex items-start flex-col gap-y-[30px] ">
              <div className="md:text-[52px] lg:mt-[54px] sm:mx-auto md:mx-0 sm:text-[38px] sm:leading-[45px] md:leading-[62px] w-fit font-bold">
                <p>Right Path for a</p>
                <p className={`${styles.text_linear_gradient} xl:h-[70px]`}>
                  Bright Career
                </p>
              </div>
              <div className="text-center sm:w-[300px] md:w-[389px] md:text-[18px]">
                <p className="pb-[20px] font-[300] leading-[23px] ">
                  Experience the 1000coders vibe for FREE! Join our web
                  development lecture and kickstart your coding journey at no
                  cost. Seize this chance to learn and grow in the exciting
                  world of web development!
                </p>
                <p className="text-[#FF8541] font-semibold">
                  Limited-time offer – seize the opportunity!
                </p>
              </div>
            </div>
            <button
              onClick={handleModal}
              className={`uppercase bg-[#FF8541] sm:mx-auto mb-[24px] mt-[36px] flex ml-[30px] justify-center sm:w-[230px] md:w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center text-[10px] font-semibold text-white`}
            >
              <Image
                width={24}
                height={24}
                draggable="false"
                src="/LandingPageImages/video_icon.svg"
                alt=""
              />
              <p className="tracking-[1px]">Free Lecture</p>
            </button>
            <ButtonComponent
              route="/preAuth/requestCallBack"
              img="/LandingPageImages/call.svg"
              text="Request Call back"
              bg={"#B7B7B7"}
            />
          </div>
          <div
            className={`${styles.imageTransition2} sm:mx-auto xl:mx-0 rounded-full sm:max-w-[400px] md:max-w-[591px] md:h-[591px]`}
          >
            <img
              draggable="false"
              src="/LandingPageImages/LandingImage3.png"
              alt=""
            />
          </div>
        </div>
        <LandingPageFooter />
      </main>
      <div className="flex w-full px-[15px] font-bold md:justify-center bg-[#FF8541] sm:justify-around sm:text-[12px] md:text-[16px] text-white items-center py-[4px] gap-x-[34px]">
        <p>Have Questions? Reach out at 9892201029</p>
        <Link
          href="/preAuth/requestCallBack"
          className="text-[#FF8541] sm:text-center md:text-start cursor-pointer bg-white rounded-[8px] sm:-[5px] md:p-[10px] underline"
        >
          Request Callback
        </Link>
      </div>
      <FreeLectureModal
        handleModal={handleModal}
        isModalActive={isModalActive}
      />
    </>
  );
};

export default FreeLecture;
