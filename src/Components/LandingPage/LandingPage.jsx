import styles from "./LandingPage.module.css";

export default function LandingPage({ handleRequestModal }) {
  return (
    <main className="lg:w-[85%] sm:w-[98%] md:w-[95%] mx-auto">
      <div className="flex xl:flex-row sm:flex-col-reverse justify-between ">
        <div className="sm:mx-auto xl:mx-0">
          <div className="flex items-start flex-col gap-y-[30px]">
            <div className="md:text-[52px] lg:mt-[54px] sm:mx-auto md:mx-0 sm:text-[38px] sm:leading-[45px] md:leading-[62px] w-fit font-bold">
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
              <QuoteCard />
            </div>
          </div>
          <button onClick={()=>handleRequestModal()} className="uppercase sm:mx-auto mb-[24px] mt-[36px] flex ml-[30px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
            <img  draggable="false" src="/LandingPageImages/call.svg" alt="" />
            <p  className="tracking-[1px]">request callback</p>
          </button>
          <button className="uppercase sm:mx-auto flex ml-[30px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#B7B7B7] text-[10px] font-semibold text-white">
            <img  draggable="false" src="/LandingPageImages/signup.svg" alt="" />
            <p  className="tracking-[1px]">sign up</p>
          </button>
        </div>
        <div
          className={`${styles.imageTransition1} rounded-full mx-auto sm:max-w-[400px] xl:mx-0 md:max-w-[697px] md:h-[683px]`}
        >
          <img  draggable="false"
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

const QuoteCard = () => {
  return (
    <section
      className={`md:min-w-[384px] sm:min-w-[280px] py-[11px] px-[8px] h-[210px] ${styles.quotecard_linear_gradient}`}
    >
      <img  draggable="false"
        src="/LandingPageImages/Open_Quote.svg"
        className="float-left sm:h-3 md:h-auto md:w-auto"
        alt=""
      />
      <div className="py-[11.8px] mb-[6px]">
        <p className="uppercase md:w-[332px] text-center mx-auto font-bold tracking-[1px] leading-3 sm:text-[8px] md:text-[10px]">
          The concern they showed towards their students was different from
          other institutions. The training experience was excellent
        </p>
        <img  draggable="false"
          src="/LandingPageImages/Closed_Quote.svg"
          className=" sm:h-3 md:h-auto md:w-auto float-right"
          alt=""
        />
      </div>
      <div className="uppercase items-center mx-auto sm:w-[200px] md:w-[228px] flex sm:text-[8px] md:text-[10px] font-semibold gap-x-[17px] text-[#FF8541]">
        <p>venu bandi, cse</p>
        <img  draggable="false" src="/LandingPageImages/Right_Arrow.svg" alt="" />
        <p>react dev</p>
      </div>
      <img  draggable="false"
        src="/LandingPageImages/Student_image.svg"
        className="mx-auto  mt-[6px] w-[90x] h-[90px] "
        alt=""
      />
    </section>
  );
};

export const LandingPageFooter = () => {
  return (
    <div className="flex uppercase flex-wrap text-[12px] font-semibold xl:my-0 sm:my-4 w-full xl:justify-between justify-center ">
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img  draggable="false" src="/LandingPageImages/starimage.svg" alt="" />
        <p>Experienced faculty</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img  draggable="false" src="/LandingPageImages/starimage.svg" alt="" />
        <p>100+ hiring partners</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img  draggable="false" src="/LandingPageImages/starimage.svg" alt="" />
        <p>project-based learning</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img  draggable="false" src="/LandingPageImages/starimage.svg" alt="" />
        <p>soft skills training</p>
      </div>
      <div className="flex gap-x-[10px] w-[225px] items-center p-[10px]">
        <img  draggable="false" src="/LandingPageImages/starimage.svg" alt="" />
        <p>placement assistance</p>
      </div>
    </div>
  );
};

