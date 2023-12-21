import styles from "./LandingPage.module.css";

export default function LandingPage({ activeItem }) {
  return activeItem == "Home" ? (
    <main>
      <div className="flex justify-between w-[90%] mx-auto items-start">
        {/* Home*/}
        <div>
          <div className="boder flex flex-col gap-y-[44px] lg:mt-[54px]">
            <div className="lg:text-[52px] w-fit font-bold">
              <p className="lg:h-[63px]">Right Path for a</p>
              <p className={`${styles.text_linear_gradient} xl:h-[70px]`}>
                Bright Career
              </p>
            </div>
            <div
              className={`${styles.quotecard_card_parent} h-[222px] my-auto p-[5px] w-[380px] `}
            >
              <QuoteCard />
              <QuoteCard />
              <QuoteCard />
              <QuoteCard />
              <QuoteCard />
              <QuoteCard />
            </div>
          </div>
          <button className="uppercase mb-[24px] mt-[36px] flex ml-[30px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
            <img src="/LandingPageImages/call.svg" alt="" />
            <p>request callback</p>
          </button>
          <button className="uppercase flex ml-[30px] mb-[55px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
            <img src="/LandingPageImages/signup.svg" alt="" />
            <p>sign up</p>
          </button>
        </div>
        <div
          className={`rounded-full ${styles.imageTransition1} w-[696px] h-[683px]`}
        >
          <img src="/LandingPageImages/LandingImage1.png" alt="" />
        </div>
      </div>
      <LandingPageFooter />
    </main>
  ) : activeItem == "Free Lecture" ? (
    <main className="flex gap-x-[240px] xl:w-[90%] mx-auto items-start">
      {/* Free lecture */}
      <div>
        <div className=" flex flex-col gap-y-[44px] xl:mt-[54px]">
          <div className="xl:text-[52px] w-fit font-bold">
            <p className="xl:h-[63px]">Right Path for a</p>
            <p className={`${styles.text_linear_gradient} xl:h-[70px]`}>
              Bright Career
            </p>
          </div>
          <div className="text-center w-[389px] h-[161px] text-[18px]">
            <p className="pb-[20px] font-[300] leading-[23px] ">
              Experience the 1000coders vibe for FREE! Join our web development
              lecture and kickstart your coding journey at no cost. Seize this
              chance to learn and grow in the exciting world of web development!
            </p>
            <p className="text-[#FF8541] font-semibold">
              Limited-time offer – seize the opportunity!
            </p>
          </div>
        </div>
        <button className="uppercase mb-[24px] mt-[54px] flex mx-auto justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/video_icon.svg" alt="" />
          <p>Watch free lecture</p>
        </button>
        <button className="uppercase flex mx-auto mb-[55px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/call.svg" alt="" />
          <p>Request Call back</p>
        </button>
      </div>
      <div
        className={`w-[591px] mt-10 ${styles.imageTransition2} rounded-full h-[591px]`}
      >
        <img src="/LandingPageImages/LandingImage3.png" alt="" />
      </div>
    </main>
  ) : (
    <main className="flex gap-x-[250px] w-[80%] mx-auto items-start">
      {/* Scholarship */}
      <div>
        <div className="boder flex flex-col gap-y-[44px] xl:mt-[54px]">
          <div className="xl:text-[52px] w-fit font-bold">
            <p className="xl:h-[63px]">Right Path for a</p>
            <p className={`${styles.text_linear_gradient} xl:h-[70px]`}>
              Bright Career
            </p>
          </div>
          <div className="text-center w-[389px] h-[161px] text-[18px]">
            <p className="pb-[20px] font-[300] leading-[23px] ">
              Start an exciting tech journey with our detailed test, designed to
              check your skills and knowledge. Act now to unlock exclusive
              discounts on our Full Stack IT Course, ensuring a better
              investment
            </p>
            <p className="text-[#FF8541] font-semibold">
              Limited-time offer – seize the opportunity!
            </p>
          </div>
        </div>
        <button className="uppercase mb-[24px] mt-[54px] flex ml-[39px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/List_Icon.svg" alt="" />
          <p>Take scholarship exam</p>
        </button>
        <button className="uppercase flex mx-auto mb-[55px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/call.svg" alt="" />
          <p>Request Call back</p>
        </button>
      </div>
      <div
        className={`w-[553px] ${styles.imageTransition2} rounded-full mt-[78px] h-[553px]`}
      >
        <img src="/LandingPageImages/LandingImage2.png" alt="" />
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

const LandingPageFooter = () => {
  return (
    <div className="flex mb-[40px] w-[90%] justify-between mx-auto">
      <div className="flex w-[225px] items-center border p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>Experienced faculty</p>
      </div>
      <div className="flex w-[225px] items-center border p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>100+ hiring partners</p>
      </div>
      <div className="flex w-[225px] items-center border p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>project-based learning</p>
      </div>
      <div className="flex w-[225px] items-center border p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>soft skills training</p>
      </div>
      <div className="flex w-[225px] items-center border p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>placement assistance</p>
      </div>
    </div>
  );
};
