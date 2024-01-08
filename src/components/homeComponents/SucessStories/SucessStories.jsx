import ButtonComponent from "components/routeButton/button";
import StudentCard from "../../StudentCard/StudentCard";
import styles from "./SucessStories.module.css";
import Link from "next/link";
export default function SucessStories({ successStoriesData }) {
  return (
    <main className="bg-[#422C60] py-[58px] ">
      <p className="md:text-[32px] sm:text-[24px] font-bold text-white text-center">
        Beyond the Classroom: Meet Our Graduates Thriving in Top Tech Companies!{" "}
      </p>
      <div>
        <div className="w-full overflow-hidden flex">
          <div className={`${styles.SuccessStories} py-[43.5px] `}>
            {successStoriesData?.map((item, index) => (
              <StudentCard
                key={index}
                ctc={item.package}
                role={item.role}
                companyLogo={item.companyLogo}
                img={item.Img}
                name={item.name}
                successStory={item.successStory}
                status={item.status}
                companyName={item.companyName || null}
              />
            ))}
          </div>
          <div className={`${styles.SuccessStories} py-[43.5px] `}>
            {successStoriesData?.map((item, index) => (
              <StudentCard
                key={index}
                ctc={item.package}
                role={item.role}
                companyLogo={item.companyLogo}
                img={item.Img}
                name={item.name}
                successStory={item.successStory}
                status={item.status}
                companyName={item.companyName || null}
              />
            ))}
          </div>
        </div>

        <ButtonComponent
          route="/preAuth/requestCallBack"
          img="/LandingPageImages/call.svg"
          text="request callback"
          w="297px"
          bg="#FF8541"
        />
      </div>
    </main>
  );
}
