import styles from "./Footer.module.css";
const Footer = () => (
  <footer className={`${styles.footer_parent} h-[326px] w-full text-white`}>
    <div className={` ${styles.footer} `}>
      <div className="text-[16px] font-[400]">
        <p className="font-bold mb-[8px]">Reach us</p>
        <div className="flex mb-[8px] gap-[11px] items-center">
          <img src="/Footer_Images/call.svg" alt="" />
          <p>6543567890</p>
        </div>
        <div className="flex mb-[26px] gap-[11px] items-center">
          <img src="/Footer_Images/mail.svg" alt="" />
          <p>support@10000coders.co</p>
        </div>
        <div>
          <p className="font-bold mb-[8px]">Our Course</p>
          <div className="flex mb-[8px] gap-[11px] items-center">
            <img src="/Footer_Images/flowerbrackets.svg" alt="" />
            <p>Full Stack Development</p>
          </div>
        </div>
      </div>
      <div className="text-[14px] flex flex-col gap-[8px] font-[600]">
        <p className="font-bold text-[16px]">10000 Coders</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Refund Policy</p>
        <p>Review</p>
      </div>
      <div className="text-[14px] flex flex-col gap-[8px] font-[600]">
        <p className="font-bold text-[16px]">Social Media</p>
        <div className="flex mb-[8px] gap-[11px] items-center">
          <img src="/Footer_Images/insta.svg" alt="" />
          <p>Instagram</p>
        </div>
        <div className="flex mb-[8px] gap-[11px] items-center">
          <img src="/Footer_Images/youtube.svg" alt="" />
          <p>Youtube</p>
        </div>
        <div className="flex mb-[8px] gap-[11px] items-center">
          <img src="/Footer_Images/meta.svg" alt="" />
          <p>Meta</p>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
