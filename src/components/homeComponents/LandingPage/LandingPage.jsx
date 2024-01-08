import ButtonComponent from "components/routeButton/button";
import styles from "./LandingPage.module.css";
import Image from "next/image";
export default function LandingPage() {
  const Cards = [
    "/LandingPageImages/card1.png",
    "/LandingPageImages/card2.png",
    "/LandingPageImages/card3.png",
    "/LandingPageImages/card4.png",
  ];
  const Card = () => (
    <div className={`${styles.cards_parent} pr-[25px] flex gap-x-[25px]`}>
      {Cards.map((img, idx) => (
        <section
          className={`md:w-[384px] sm:w-[298px] flex-shrink-0 relative sm:h-[210px] md:h-[233px]`}
        >
          <Image draggable={false} key={idx} fill={true} src={img} alt="" />
        </section>
      ))}
    </div>
  );
  return (
    <main className="lg:w-[85%] pb-[6px] sm:w-[98%] md:w-[95%] mx-auto">
      <div className="flex xl:flex-row sm:flex-col-reverse justify-between ">
        <div className="sm:mx-auto xl:mx-0">
          <div className="flex items-start flex-col gap-y-[30px]">
            <div className="md:text-[52px] lg:mt-[54px] sm:mx-auto md:mx-0 sm:text-[38px] sm:leading-[45px] md:leading-[62px] w-fit font-bold">
              <p className=" ">Right Path for a</p>
              <p className={`${styles.text_linear_gradient}`}>Bright Career</p>
            </div>
            <div
              className={` px-[16px] flex py-[11px] overflow-hidden sm:w-[300px] md:w-[409px] md:h-[245px]`}
            >
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <div
                  className={`${styles.cards_parent} pr-[25px] flex gap-x-[25px]`}
                >
                  {Cards.map((img, idx) => (
                    <section
                      className={`w-[384px] flex-shrink-0 relative h-[233px]`}
                    >
                      <Image
                        draggable={false}
                        key={idx}
                        fill={true}
                        src={img}
                        alt=""
                      />
                    </section>
                  ))}
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
          <ButtonComponent
            route="/preAuth/register"
            img="/LandingPageImages/signup.svg"
            text="register"
            w="297px"
            bg={"#62B8FF"}
          />
        </div>
        <div
          className={`${styles.imageTransition1} rounded-full mx-auto sm:max-w-[400px] xl:mx-0 md:max-w-[697px] md:h-[683px]`}
        >
          <img
            draggable="false"
            className={` w-full h-full `}
            src="/LandingPageImages/LandingImage1.png"
            alt=""
          />
        </div>
      </div>
      <LandingPageFooter />
    </main>
  );
}

export const LandingPageFooter = () => {
  const textData = [
    "Experienced faculty",
    "100+ hiring partners",
    "project-based learning",
    "soft skills training",
    "placement assistance",
  ];
  return (
    <div className="flex uppercase flex-wrap sm:text-[12px] md:text-[13px] font-semibold sm:my-4 md:my-0 w-full xl:justify-between justify-center ">
      {textData.map((text, idx) => (
        <div
          key={idx}
          className="flex gap-x-[10px] w-[235px] items-center p-[10px]"
        >
          <Image
            draggable="false"
            src="/LandingPageImages/starimage.svg"
            alt=""
            width={22}
            height={22}
          />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};
