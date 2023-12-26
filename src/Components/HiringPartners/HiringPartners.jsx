import styles from "./HiringPartners.module.css";

export default function HiringPartners() {
  return (
    <>
      <section className="flex items-center gap-[24px] my-[16px] flex-col font-bold">
        <div className="flex w-full md:justify-center bg-[#FF8541] sm:justify-around  sm:text-[14px] md:text-[16px] text-white items-center py-[16.5px] gap-x-[34px]">
          <p>Have Questions? Reach out at 9892201029</p>
          <p>Request Callback</p>
        </div>
        <p
          className={`tracking-[0.75px] ${styles.heading} leading-10 text-center sm:text-[28px] md:text-[35px]`}
        >
          <span className="text-[#FF8541]">100+</span> Companies have hired from{" "}
          <br /> 10000 Coders
        </p>
      </section>
      <section className={` flex flex-col gap-[8px]`}>
        {/* first line need to update */}
        <div
          className={`h-[125px] ${styles.image_slide_parent} flex-shrink-0  flex gap-x-[35px]  bg-white my-[8px]`}
        >
          <div
            className={`w-[129px] flex justify-center items-center ${styles.image_slide}  h-[103.5px] flex-shrink-0 `}
          >
            <img  draggable="false"
              className="h-full w-full"
              src="HiringPartners_images/line1/HETERO HEALTHCARE LIMITED.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide} flex-shrink-0  items-center justify-center h-full w-[150px]`}
          >
            <img  draggable="false" src="HiringPartners_images/line1/PragmaEdge.png" alt="" />
          </div>
          <div
            className={`w-[125px] flex justify-center  items-center flex-shrink-0  ${styles.image_slide}`}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="HiringPartners_images/line1/Teletext India Private Limited.png"
              alt=""
            />
          </div>
          <div
            className={`w-[129px] flex justify-center items-center ${styles.image_slide} flex-shrink-0 `}
          >
            <img  draggable="false"
              className="h-full"
              src="HiringPartners_images/line1/The D. E.png"
              alt=""
            />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide} flex-shrink-0 flex justify-center items-center`}
          >
            <img  draggable="false" src="HiringPartners_images/line1/Vector.svg" alt="" />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide} flex-shrink-0 justify-center flex items-center`}
          >
            <img  draggable="false"
              src="HiringPartners_images/line1/Cigniti Technologies.png"
              alt=""
            />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide} flex-shrink-0 px-[34px] flex justify-center items-center `}
          >
            <img  draggable="false" src="HiringPartners_images/line1/Quixy.png" alt="" />
          </div>
          <div
            className={`w-[150px] flex-shrink-0 px-[34px] ${styles.image_slide} flex justify-center items-center `}
          >
            <img  draggable="false" src="HiringPartners_images/line1/8th_element.png" alt="" />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide} flex-shrink-0 justify-center flex items-center`}
          >
            <img  draggable="false"
              className="h-full "
              src="HiringPartners_images/line1/birla_soft.jpeg"
              alt=""
            />
          </div>
          <div
            className={`w-[129px] flex justify-center items-center  ${styles.image_slide} h-[103.5px] flex-shrink-0 `}
          >
            <img  draggable="false"
              className="h-full w-full"
              src="HiringPartners_images/line1/HETERO HEALTHCARE LIMITED.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide} flex-shrink-0  items-center justify-center h-full w-[150px]`}
          >
            <img  draggable="false" src="HiringPartners_images/line1/PragmaEdge.png" alt="" />
          </div>
          <div
            className={`w-[125px] flex justify-center items-center  flex-shrink-0  ${styles.image_slide}`}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="HiringPartners_images/line1/Teletext India Private Limited.png"
              alt=""
            />
          </div>
          <div
            className={`w-[129px] flex justify-center  items-center ${styles.image_slide} flex-shrink-0 `}
          >
            <img  draggable="false"
              className="h-full"
              src="HiringPartners_images/line1/The D. E.png"
              alt=""
            />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide}  flex-shrink-0 flex justify-center items-center`}
          >
            <img  draggable="false" src="HiringPartners_images/line1/Vector.svg" alt="" />
          </div>

          <div
            className={`w-[150px] flex-shrink-0 px-[34px] ${styles.image_slide}  flex justify-center items-center `}
          >
            <img  draggable="false" src="HiringPartners_images/line1/8th_element.png" alt="" />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide} flex-shrink-0 flex justify-center items-center`}
          >
            <img  draggable="false" src="HiringPartners_images/line1/Vector.svg" alt="" />
          </div>
          <div
            className={`w-[150px] ${styles.image_slide} flex-shrink-0 justify-center flex items-center`}
          >
            <img  draggable="false"
              src="HiringPartners_images/line1/Cigniti Technologies.png"
              alt=""
            />
          </div>
        </div>
        {/* second line */}
        <div
          className={`flex  ${styles.image_slide_parent}  gap-x-[35px] h-[125px]`}
        >
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-centerh-full  w-[150px] `}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/xilinx.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center   w-[150px] `}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/value_labs.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center   w-[150px]`}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/value_creed.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center   justify-center w-[150px] px-[12.5px]`}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/ht_labs.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center   justify-center w-[150px] `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line2/kelton.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line2/Mindtree.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false"
              className=" h-full"
              src="/HiringPartners_images/line2/Technovert.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line2/INVECAS.png" alt="" />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px] px-[31px] py-[18.5px]`}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/Accenture.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line2/Dhan AI.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line2/lima ai.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]`}
          >
            <img  draggable="false" src="/HiringPartners_images/line2/Commvault.png" alt="" />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-centerh-full  w-[150px] `}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/xilinx.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center   w-[150px] `}
          >
            <img  draggable="false"
              className="w-full h-full"
              src="/HiringPartners_images/line2/value_labs.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line2/Mindtree.png"
              alt=""
            />
          </div>
          <div
            className={`flex ${styles.image_slide2} flex-shrink-0 items-center justify-center w-[150px]  `}
          >
            <img  draggable="false"
              className=" h-full"
              src="/HiringPartners_images/line2/Technovert.png"
              alt=""
            />
          </div>
        </div>
        {/* third line */}
        <div
          className={`h-[125px]  ${styles.image_slide_parent} flex  gap-x-[35px] `}
        >
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false"
              src="/HiringPartners_images/line3/Tata Consultancy Services.png"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center   `}
          >
            <img  draggable="false"
              src="/HiringPartners_images/line3/helicaltech_helical insight.png"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/CGI.png" alt="" />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/RightData.png" alt="" />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/Citrix.png" alt="" />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/GlobalLogic.png" alt="" />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/Amista.png" alt="" />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center   `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line3/ca_technologies.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line3/thomsonreuters.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center             className="h-full"
            `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line3/zebra.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false"
              className="h-full"
              src="/HiringPartners_images/line3/enhanz.jpeg"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false"
              src="/HiringPartners_images/line3/Tata Consultancy Services.png"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center   `}
          >
            <img  draggable="false"
              src="/HiringPartners_images/line3/helicaltech_helical insight.png"
              alt=""
            />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/CGI.png" alt="" />
          </div>
          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/RightData.png" alt="" />
          </div>

          <div
            className={`flex justify-center w-[150px] flex-shrink-0 ${styles.image_slide} items-center  `}
          >
            <img  draggable="false" src="/HiringPartners_images/line3/Citrix.png" alt="" />
          </div>
        </div>
      </section>
      <button className="uppercase sm:mx-auto my-[32px] flex ml-[30px] justify-center w-[297px] h-[44px]  gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
        <img  draggable="false" src="/LandingPageImages/call.svg" alt="" />
        <p>request callback</p>
      </button>
    </>
  );
}
