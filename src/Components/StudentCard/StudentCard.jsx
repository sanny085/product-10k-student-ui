import styles from "./StudentCard.module.css";

const StudentCard = (props) => {
  const {
    name,
    role,
    companyLogo,
    successStory,
    ctc,
    img,
    status,
    companyName,
  } = props;
 
  return (
    <div
      className={`${styles.card} overflow-hidden p-[20px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]`}
    >
      <div className="bg-[#87DB85] flex w-fit gap-[9.5px] absolute right-0 text-[11px] font-bold p-[7.52px] rounded-l-[7.52px]">
        <img draggable="false" src="/experts_images/sticker.svg" alt="" />
        <p>{status}</p>
      </div>
      <div>
        <img
          draggable="false"
          src={img}
          className={`mx-auto block sm:h-[120px] sm:w-[120px] md:h-36 md:w-36 rounded-full ${styles.profile}`}
          alt={name}
        />
      </div>
      <p className=" mt-4 text-center text-xl font-semibold">{name}</p>
      <p className="text-center text-xl text-[#f57932] font-semibold">{role}</p>
      <div
        className="flex sm:gap-x-[15px] items-center justify-center w-fit mx-auto sm:my-[5px] md:my-[10px]"
      >
        <img
          draggable="false"
          src={companyLogo}
          alt=""
        />
      
      </div>
      <p
        className={`text-center sm:text-justify md:text-start my-auto  sm:h-[6rem] md:h-[8rem] `}
      >
        {successStory}
      </p>
      <p
        className={`md:mt-6 sm:mt-4 text-center text-lg font-bold text-[#f57932] ${styles.package}`}
      >
        Package : &#x20B9; {ctc}
      </p>
    </div>
  );
};
export default StudentCard;
