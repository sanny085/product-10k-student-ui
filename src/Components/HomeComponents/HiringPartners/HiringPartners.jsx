import ButtonComponent from "@/components/routeButton/button";
import styles from "./HiringPartners.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HiringPartners({ HiringPartnersData }) {
  return (
    <>
      <section className="flex items-center gap-[24px]  flex-col font-bold">
        <div className="flex w-full px-[15px] md:justify-center bg-[#FF8541] sm:justify-around sm:text-[12px] md:text-[16px] text-white items-center py-[4px] gap-x-[34px]">
          <p>Have Questions? Reach out at 9892201029</p>
          <Link
            href="/preAuth/requestCallBack"
            className="text-[#FF8541] sm:text-center md:text-start cursor-pointer bg-white rounded-[8px] sm:-[5px] md:p-[10px] underline"
          >
            Request Callback
          </Link>
        </div>
        <p
          className={`tracking-[0.75px] ${styles.heading} leading-10 text-center sm:text-[28px] md:text-[35px]`}
        >
          <span className="text-[#FF8541]">100+</span> Companies have hired from{" "}
          <br /> 10000 Coders
        </p>
      </section>
      <section className={`flex flex-col my-[40px] gap-[8px]`}>
        <div className="w-full overflow-hidden flex">
          <div className={`${styles.scroll1}`}>
            {HiringPartnersData.primary.map((img, idx) => (
              <div className="md:w-[150px] flex-shrink-0  sm:w-[100px] sm:h-[100px] md:h-[120px] relative">
                <Image fill={true} key={idx} src={img} alt="" />
              </div>
            ))}
          </div>
          <div className={`${styles.scroll1}`}>
            {HiringPartnersData.primary.map((img, idx) => (
              <div
                key={idx}
                className="md:w-[150px] flex-shrink-0  sm:w-[100px] sm:h-[100px] md:h-[120px] relative"
              >
                <Image fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full overflow-hidden flex">
          <div className={`${styles.scroll2}`}>
            {HiringPartnersData.secondary.map((img, idx) => (
              <div
                key={idx}
                className="md:w-[150px] flex-shrink-0  sm:w-[100px] sm:h-[100px] md:h-[120px] relative"
              >
                <Image fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div className={`${styles.scroll2}`}>
            {HiringPartnersData.secondary.map((img, idx) => (
              <div
                key={idx}
                className="md:w-[150px] flex-shrink-0  sm:w-[100px] sm:h-[100px] md:h-[120px] relative"
              >
                <Image fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full overflow-hidden flex">
          <div className={`${styles.scroll3}`}>
            {HiringPartnersData.teritory.map((img, idx) => (
              <div
                key={idx}
                className="md:w-[150px] flex-shrink-0  sm:w-[100px] sm:h-[100px] md:h-[120px] relative"
              >
                <Image fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div className={`${styles.scroll3}`}>
            {HiringPartnersData.teritory.map((img, idx) => (
              <div
                key={idx}
                className="md:w-[150px] flex-shrink-0  sm:w-[100px] sm:h-[100px] md:h-[120px] relative"
              >
                <Image fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ButtonComponent
        route="/preAuth/requestCallBack"
        img="/LandingPageImages/call.svg"
        text="Request Callback"
        bg={"#FF8541"}
      />
    </>
  );
}
