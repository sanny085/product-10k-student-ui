import styles from "./LandingPage.module.css";

export default function LandingPage({ activeItem }) {
  return activeItem == "Home" ? (
    <Home />
  ) : activeItem == "Free Lecture" ? (
    <FreeLecture />
  ) : activeItem == "Courses" ? (
    <Sholarship />
  ) : (
    ""
  );
}

const QuoteCard = () => {
  return (
    <section
      className={`md:min-w-[384px] sm:min-w-[280px] py-[11px] px-[8px] h-[210px] ${styles.quotecard_linear_gradient}`}
    >
      <img
        src="/LandingPageImages/Open_Quote.svg"
        className="float-left sm:h-3 md:h-auto md:w-auto"
        alt=""
      />
      <div className="py-[11.8px] mb-[6px]">
        <p className="uppercase md:w-[332px] text-center mx-auto font-bold tracking-[1px] leading-3 sm:text-[8px] md:text-[10px]">
          The concern they showed towards their students was different from
          other institutions. The training experience was excellent
        </p>
        <img
          src="/LandingPageImages/Closed_Quote.svg"
          className=" sm:h-3 md:h-auto md:w-auto float-right"
          alt=""
        />
      </div>
      <div className="uppercase items-center mx-auto sm:w-[200px] md:w-[228px] flex sm:text-[8px] md:text-[10px] font-semibold gap-x-[17px] text-[#FF8541]">
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
    <div className="flex uppercase flex-wrap text-[12px] font-semibold xl:my-0 sm:my-4 w-full xl:justify-between justify-center ">
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>Experienced faculty</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>100+ hiring partners</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>project-based learning</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>soft skills training</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img src="/LandingPageImages/starimage.svg" alt="" />
        <p>placement assistance</p>
      </div>
    </div>
  );
};

const Home = () => (
  <main className="lg:w-[85%] sm:w-[98%] md:w-[95%] mx-auto">
    <div className="flex xl:flex-row sm:flex-col-reverse justify-between ">
      <div className="sm:mx-auto xl:mx-0">
        <div className="flex flex-col gap-y-[30px]">
          <div className="md:text-[52px] sm:mx-auto md:mx-0 sm:text-[38px] sm:leading-[45px] md:leading-[62px] w-fit font-bold">
            <p className=" ">Right Path for a</p>
            <p className={`${styles.text_linear_gradient}`}>Bright Career</p>
          </div>
          <div
            className={`${styles.quotecard_card_parent} h-[230px] py-[10px] sm:px-[29px] md:px-[5px] sm:mx-auto md:mx-0 sm:w-[300px] md:w-[400px] `}
          >
            <QuoteCard />
            <QuoteCard />
            <QuoteCard />
            <QuoteCard />
            <QuoteCard />
          </div>
        </div>
        <button className="uppercase sm:mx-auto  mb-[24px] mt-[36px] flex ml-[30px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/call.svg" alt="" />
          <p>request callback</p>
        </button>
        <button className="uppercase sm:mx-auto flex ml-[30px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
          <img src="/LandingPageImages/signup.svg" alt="" />
          <p>sign up</p>
        </button>
      </div>
      <div
        className={`${styles.imageTransition1} rounded-full mx-auto sm:max-w-[400px] xl:mx-0 md:max-w-[590px] md:h-[595px]`}
      >
        <img
          className={` w-full h-full `}
          src="/LandingPageImages/LandingImage1.png"
          alt=""
        />
      </div>
    </div>
    <LandingPageFooter />
  </main>
);

const FreeLecture = () => (
  <main className="lg:w-[80%] sm:w-[98%] md:w-[95%] mx-auto">
    <div className="flex xl:flex-row sm:flex-col-reverse mx-auto justify-between items-start">
      {/* Free lecture */}
      <div className="sm:mx-auto xl:mx-0 ">
        <div className="flex items-start flex-col gap-y-[44px] ">
          <div className="md:text-[52px] sm:mx-auto md:mx-0 sm:text-[38px] leading-[62px] w-fit font-bold">
            <p>Right Path for a</p>
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
        className={`${styles.imageTransition2} sm:mx-auto xl:mx-0 rounded-full sm:max-w-[400px] md:max-w-[591px] md:h-[591px]`}
      >
        <img src="/LandingPageImages/LandingImage3.png" alt="" />
      </div>
    </div>
    <LandingPageFooter />
  </main>
);

const Sholarship = () => (
  <main className="lg:w-[80%] sm:w-[98%] md:w-[95%] mx-auto">
    <div className="flex xl:flex-row sm:flex-col-reverse mx-auto justify-between items-start">
      {/* Scholarship */}
      <div className="sm:mx-auto xl:mx-0 ">
        <div className="flex items-start flex-col gap-y-[44px] ">
          <div className="md:text-[52px] sm:mx-auto md:mx-0 sm:text-[38px] leading-[62px] w-fit font-bold">
            <p>Right Path for a</p>
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
        className={`${styles.imageTransition2} sm:mx-auto xl:mx-0 rounded-full sm:max-w-[400px] md:max-w-[591px] md:h-[591px]`}
      >
        <img src="/LandingPageImages/LandingImage2.png" alt="" />
      </div>
    </div>
    <LandingPageFooter />
  </main>
);
