import StudentCard from "../StudentCard/StudentCard";
import styles from "./SucessStories.module.css"

export default function SucessStories({successStoriesData, handleRequestModal}) {
  return (
    <main className="bg-[#422C60] py-[58px] ">
      <p className="text-[32px] font-bold text-white text-center">
        Beyond the Classroom: Meet Our Graduates Thriving in Top Tech Companies!{" "}
      </p>
      <div>
      <div className={`${styles.SuccessStories} py-[43.5px] `}>
        {successStoriesData.map((item, index) => (
          <StudentCard
            key={index}
            ctc={item.package}
            role={item.role}
            companyLogo={item.companyLogo}
            img={item.Img}
            name={item.name}
            successStory={item.successStory}
            status={item.status}
          />
        ))}
      </div>
      <button  onClick={()=>handleRequestModal()} className="uppercase sm:mx-auto mt-[40px] flex justify-center w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center bg-[#9747FF] text-[10px] font-semibold text-white">
        <img src="/LandingPageImages/call.svg" alt="" />
        <p  className="tracking-[1px]">request callback</p>
      </button>
      </div>
    </main>
  );
}
