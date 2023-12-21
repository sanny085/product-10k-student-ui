import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className="flex justify-between xl:mx-[37px] items-start">
      <div>
        <div className="boder flex flex-col gap-y-[44px] xl:mt-[54px]">
          <div className="xl:text-[52px] w-fit  font-bold">
            <p className="xl:h-[63px]">Right Path for a</p>
            <p className={`${styles.text_linear_gradient} xl:h-[70px]`}>
              Bright Career
            </p>
          </div>
          <QuoteCard />
        </div>
        <button className="uppercase mb-[18px] mt-[36px] flex ml-[80px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/call.svg" alt="" />
          <p>request callback</p>
        </button>
        <button className="uppercase flex ml-[80px] mb-[55px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/signup.svg" alt="" />
          <p>sign up</p>
        </button>
      </div>
      <div className=" rounded-full w-[698px] h-[683px]">
        <img src="/LandingPageImages/LandingImage1.svg" alt="" />
      </div>
    </main>
  );
}

const QuoteCard = () => {
  return (
    <section
      className={`w-[384px] py-[11px] px-[8px] h-[210px] ${styles.quotecard_linear_gradient}`}
    >
      <img
        src="/LandingPageImages/Open_Quote.svg"
        className="float-left"
        alt=""
      />
      <div className="py-[11.8px] mb-[6px]">
        <p className="uppercase w-[332px] text-center mx-auto font-bold tracking-[1px] leading-3 text-[10px]">
          The concern they showed towards their students was different from
          other institutions. The training experience was excellent
        </p>
        <img
          src="/LandingPageImages/Closed_Quote.svg"
          className=" float-right"
          alt=""
        />
      </div>
      <div className="uppercase items-center mx-auto xl:w-[228px] flex text-[10px] font-semibold gap-x-[17px] text-[#FF8541]">
        <p>venu bandi, cse</p>
        <img src="/LandingPageImages/Right_Arrow.svg" alt="" />
        <p>react dev</p>
      </div>
      <img
        src="/LandingPageImages/Student_image.svg"
        className="mx-auto  mt-[6px] w-[90x] h-[90px] "
        alt=""
      />
    </section>
  );
};
