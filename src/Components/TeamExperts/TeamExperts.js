import styles from "./TeamExperts.module.css";

export function TeamExperts(props) {
  return (
    <main>
      <p className="text-[35px] font-bold my-[32px] w-fit mx-auto">
        Our team involved in <span className="text-[#FF8541]">helping you</span>
      </p>
      <section className=" flex flex-col gap-[26px]">
        <div className="w-[938px] bg-[#F5F2FF] mx-auto rounded-l-full overflow-hidden rounded-r-[32px] flex h-[183px]">
          <div
            className={`flex-shrink-0 rounded-full w-[182px] ${styles.image1} h-[182px]`}
          ></div>
          <div className="w-full py-[20px] flex flex-col gap-y-[15px] rounded-r-[32px] px-[30px] h-full">
            <div className="flex items-center justify-between ">
              <p className="text-[25px] font-bold">Anil Kumar Ghorakavi</p>
              <div className="h-[28px] w-[228px] items-start  flex gap-x-[23px]">
                <img src="experts_images/Amazon_logo 1.svg" alt="" />
                <img src="experts_images/Vector.svg" alt="" />
              </div>
            </div>
            <p className="text-[15px] w-[541px] tracking-tighter  font-[400px]">
              As an entrepreneur who’s constantly finding ways to help people
              reach greater heights in their career and an Ex-Oracle guy, I know
              exactly what it takes to launch a career in the IT industry. The
              truth is your background or your degrees don’t matter! What
              matters is your skills, only your skills!
            </p>
          </div>
        </div>
        <div className="w-[938px] bg-[#F5F2FF] items-center mx-auto rounded-l-full overflow-hidden rounded-r-[32px] flex h-[183px]">
          <div
            className={`flex-shrink-0 rounded-full w-[166px] ${styles.image2} h-[171px]`}
          ></div>
          <div className="w-full py-[22px] flex flex-col gap-y-[15px] rounded-r-[32px] text-[25px] px-[30px] h-full">
            <div className="flex items-center justify-between ">
              <p className=" font-bold">Praveen Kumar</p>
              <div className="h-[28px]  items-center flex gap-x-[23px]">
                <img
                  className="h-full"
                  src="experts_images/logos_microsoft-icon.svg"
                  alt=""
                />
                <p>MicroSoft</p>{" "}
              </div>
            </div>
            <p className="text-[15px] w-[520px] tracking-tighter  font-[400px]">
              A pioneer in Learning & Development, Praveen always felt
              disengaged with traditional education. He believes supplementing
              education with relevant and engaging experience that would prepare
              students for careers in the tech industry. He currently leads the
              program design at 10000 coders.
            </p>
          </div>
        </div>
        <div className="w-[938px] bg-[#F5F2FF] mx-auto rounded-l-full overflow-hidden rounded-r-[32px] flex h-[183px]">
          <div
            className={`flex-shrink-0 rounded-full w-[173px] ${styles.image3} h-[173px]`}
          ></div>
          <div className="w-full py-[22px] flex flex-col gap-y-[27px] rounded-r-[32px] px-[30px] h-full">
            <div className="flex items-center justify-between ">
              <p className="text-[25px] font-bold">Pavan Kumar</p>
            </div>
            <p className="text-[15px] w-[520px] tracking-tighter  font-[400px]">
              A startup enthusiast and a technology erudite, Pavan dons the
              advisor hat at 10000 Coders. He ensures our curriculum is
              up-to-date with the latest industry needs and our program delivery
              uses the trending tools and processes adopted by the industry.
            </p>
          </div>
        </div>
      </section>
      <button className="uppercase sm:mx-auto my-[32px] flex ml-[30px] justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#FF8541] text-[10px] font-semibold text-white">
        <img src="/LandingPageImages/call.svg" alt="" />
        <p>request callback</p>
      </button>
    </main>
  );
}
