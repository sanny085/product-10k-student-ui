import styles from "./StudentCard.module.css";

const StudentCard = (props) => {
  const { name, role, companyLogo, successStory, ctc, img, status } = props;
  return (
    <div
      className={`${styles.card}  overflow-hidden shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]`}
    >
      <div className="bg-[#87DB85] flex w-fit gap-[9.5px] absolute right-0 text-[11px] font-bold p-[7.52px] rounded-l-[7.52px]">
        <img draggable="false" src="/experts_images/sticker.svg" alt="" />
        <p>{status}</p>
      </div>
      <div>
        <img
          draggable="false"
          src={img}
          className={`mx-auto block h-36 w-36 rounded-full ${styles.profile}`}
          alt={name}
        />
      </div>
      <p className=" mt-4 text-center text-xl font-semibold">{name}</p>
      <p className="text-center text-xl font-semibold">{role}</p>
      <img
        draggable="false"
        className={` mx-auto my-2 h-12 w-44 px-2 ${styles.img}`}
        src={companyLogo}
        alt=""
      />
      <p className={`${styles.text} my-auto  sm:h-[6rem] md:h-[8rem] `}>
        {successStory}
      </p>
      <p
        className={`md:mt-6 sm:mt-4 text-center text-lg font-bold text-[#f57932] ${styles.package}`}
      >
        Package : {ctc}
      </p>
    </div>
  );
};
export default StudentCard;
