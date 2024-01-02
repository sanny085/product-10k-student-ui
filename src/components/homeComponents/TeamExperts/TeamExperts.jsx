import ButtonComponent from "@/components/routeButton/button";
import styles from "./TeamExperts.module.css";
import Link from "next/link";

export function TeamExperts() {
  return (
    <main>
      <p
        className={`sm:text-[28px] px-[10px] lg:text-[35px] font-bold my-[32px] w-fit mx-auto ${styles.heading} text-center`}
      >
        Our team involved in <span className="text-[#FF8541]">helping you</span>
      </p>
      <section className=" flex flex-col gap-[26px]">
        <div
          className={`lg:w-[938px] sm:w-[80%] md:w-[60%] ${styles.card} bg-[#F5F2FF] mx-auto overflow-hidden lg:flex-row sm:flex-col flex `}
        >
          <div
            className={`flex-shrink-0 sm:w-[160px] sm:h-[160px] rounded-full lg:w-[182px] mx-auto ${styles.image1} lg:h-[182px]`}
          ></div>
          <div
            className={`w-full py-[20px] flex flex-col gap-y-[15px] px-[30px] h-full`}
          >
            <div className="className={`w-full items-center lg:justify-between flex lg:flex-row sm:flex-col gap-y-[15px] h-full`}">
              <p
                className={`md:text-[25px] text-center ${styles.heading} sm:text-[22px] sm:leading-6 md:leading-[auto] font-bold`}
              >
                Anil Kumar Ghorakavi
              </p>
              <div className="lg:h-[28px] sm:flex-wrap md:flex-nowrap gap-[10px] lg:w-[228px] items-start flex lg:gap-x-[23px]">
                <img
                  draggable="false"
                  className="mx-auto"
                  src="experts_images/Amazon_logo 1.svg"
                  alt=""
                />
                <img
                  draggable="false"
                  className="mx-auto"
                  src="experts_images/Vector.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="md:text-[15px] text-center lg:text-start sm:text-[14px] lg:w-[541px] tracking-tighter  font-[400px]">
              As an entrepreneur who’s constantly finding ways to help people
              reach greater heights in their career and an Ex-Oracle guy,{" "}
              <span className={`${styles.text_hover}`}>
                I know exactly what it takes to launch a career in the IT
                industry.
              </span>
              The truth is your background or your degrees don’t matter! What
              matters is your skills, only your skills!
            </p>
          </div>
        </div>
        <div
          className={`lg:w-[938px] sm:w-[80%] md:w-[60%] ${styles.card} bg-[#F5F2FF] mx-auto overflow-hidden lg:flex-row sm:flex-col flex `}
        >
          <div className="w-[183px] flex-shrink-0 sm:w-[170px] sm:h-[170px]  mx-auto h-[183px] flex items-end justify-center rounded-full bg-[#fcd966] ">
            <div
              className={`flex-shrink-0 sm:w-[160px] sm:h-[160px] w-[166px] rounded-full h-[171px]  ${styles.image2}`}
            ></div>
          </div>

          <div
            className={`w-full py-[20px] flex flex-col gap-y-[15px] px-[30px] h-full`}
          >
            <div className="flex lg:flex-row md:text-[25px]  sm:text-[22px] items-center sm:flex-col gap-[20px] justify-between ">
              <p
                className={`sm:leading-6 md:leading-[auto] font-bold ${styles.heading}`}
              >
                Praveen Kumar
              </p>
              <div className="lg:h-[28px]  sm:flex-wrap md:flex-nowrap gap-[10px] lg:w-[228px] items-start  flex lg:gap-x-[23px]">
                <img
                  draggable="false"
                  className="h-full"
                  src="experts_images/logos_microsoft-icon.svg"
                  alt=""
                />
                <p>MicroSoft</p>{" "}
              </div>
            </div>
            <p className="md:text-[15px] text-center lg:text-start sm:text-[14px] lg:w-[541px] tracking-tighter  font-[400px]">
              A pioneer in Learning & Development, Praveen always felt
              disengaged with traditional education.
              <span className={`${styles.text_hover}`}>
                {" "}
                He believes supplementing education with relevant and engaging
                experience that would prepare students for careers in the tech
                industry.
              </span>{" "}
              He currently leads the program design at 10000 coders.
            </p>
          </div>
        </div>
        <div
          className={`lg:w-[938px] sm:w-[80%] md:w-[60%] ${styles.card} bg-[#F5F2FF] mx-auto overflow-hidden lg:flex-row sm:flex-col flex `}
        >
          <div
            className={`flex-shrink-0 sm:w-[163px] sm:h-[163px] rounded-full w-[173px] mx-auto ${styles.image3} h-[173px]`}
          ></div>
          <div
            className={`w-full py-[20px] flex flex-col gap-y-[15px] px-[30px] h-full`}
          >
            <div className={`w-full  h-full`}>
              <p
                className={`md:text-[25px] ${styles.heading} text-center lg:text-start sm:text-[22px] sm:leading-6 md:leading-[auto] font-bold`}
              >
                Pavan Kumar
              </p>
            </div>
            <p className="md:text-[15px] text-center lg:text-start sm:text-[14px] lg:w-[541px] tracking-tighter font-[400px]">
              A startup enthusiast and a technology erudite, Pavan dons the
              advisor hat at 10000 Coders.{" "}
              <span className={`${styles.text_hover}`}>
                {" "}
                He ensures our curriculum is up-to-date with the latest industry
                needs and our program delivery uses the trending tools and
                processes adopted by the industry.
              </span>
            </p>
          </div>
        </div>
      </section>
      <ButtonComponent
        route="/preAuth/requestCallBack"
        img="/LandingPageImages/call.svg"
        text="request callback"
        bg={"#FF8541"}
      />
    </main>
  );
}
