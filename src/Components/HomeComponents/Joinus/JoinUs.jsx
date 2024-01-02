import styles from "./JoinUs.module.css";

export default function Joinus() {
  return (
    <main className="bg-[#332C60] pt-[59px]">
      <p className="xl:text-[60px] lg:text-[40px] md:text-[30px] sm:text-[20px]  text-white text-center font-[100px] leading-[normal]">
        Join us and we will find your
      </p>
      <div className="xl:text-[84px] lg:text-[64px] md:text-[44px] sm:text-[24px] mx-auto w-fit flex md:flex-row sm:flex-col md:gap-[21px] font-[700] leading-[normal]">
        <p className="text-white">Right Path for a</p>
        <p className={`${styles.text}`}>Bright Career</p>
      </div>
      <img
        className={`${styles.img}`}
        src="/Footer_images/footer_image.png"
        alt=""
      />
    </main>
  );
}
