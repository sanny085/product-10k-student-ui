"use client";
// import ThankYouModal from "@/components/Modals/ThankYouModal/ThankYouModal";
import styles from "./RequestCallBack.module.css";
import { useState } from "react";
const RequestCallBack = () => {
  const [isTQModal, setTQmodal] = useState(false);

  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };
  const handleThankYouModal = () => {
    setTQmodal(!isTQModal);
  };

  return (
    <main className="flex lg:flex-row sm:flex-col">
      <section
        className={`lg:w-[50%] md:flex sm:hidden ${styles.left_section} sm:w-[100%] justify-center items-center bg-[#B0BFD6] h-[100dvh]`}
      >
        <div className={`${styles.bg_img}`}>
          <img
            className={`${styles.call}`}
            src="/RequestCallBack_images/callImage.svg"
            alt=""
          />
          <img
            className={`${styles.settings}`}
            src="/RequestCallBack_images/settingimage.svg"
            alt=""
          />
          <img
            className={`${styles.chat_blue}`}
            src="/RequestCallBack_images/blue_chat.svg"
            alt=""
          />
          <img
            className={`${styles.black_chat}`}
            src="/RequestCallBack_images/black_chat.svg"
            alt=""
          />
          <img
            className={`${styles.email}`}
            src="/RequestCallBack_images/email.svg"
            alt=""
          />
        </div>
      </section>
      <section
        className={`flex flex-col px-[10px] py-[20px] sm:gap-[20px]  md:gap-[40px] justify-center items-center bg-[#F2F8FF]  lg:h-[100dvh] lg:w-[50%] sm:w-[100%]`}
      >
        <img
          className="md:pt-[40px]"
          src="/LandingPageImages/10k_Logo.svg"
          alt=""
        />
        <form
          className={`w-[454px] ${styles.content_section}  gap-[24px] flex flex-col rounded-[16px] h-[564px] bg-white px-[40px] py-[38px]`}
          action=""
        >
          <p className="text-center sm:text-[20px] md:text-[24px] font-semibold leading-[normal]">
            Talk to Our{" "}
            <span className={`${styles.text_linear_gradient}`}>Career</span>{" "}
            Expert
          </p>
          <div className="flex flex-col gap-[8px]">
            <label
              className="block text-[14px]  font-semibold  text-gray-900"
              htmlFor="Name"
            >
              Name
            </label>
            <div className="border-[#DEDEDE] gap-[8px] rounded-[8px] p-[5px] border w-full flex">
              <img src="/RequestCallBack_images/profile.svg" alt="" />
              <input
                required
                type="text"
                id="Name"
                name="Name"
                className="focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className="block text-[14px]  font-semibold  text-gray-900"
              htmlFor="Mobile Number"
            >
              Mobile Number
            </label>
            <div className="border-[#DEDEDE] gap-[8px] rounded-[8px] p-[5px] border flex">
              <img src="/RequestCallBack_images/call.svg" alt="" />
              <div className="flex relative flex-row items-center gap-[3px]  w-full md:gap-[4px]">
                <span className="text-[#808080]  text-[13px] leading-[normal] font-[500]">
                  +91
                </span>
                <input
                  required
                  type="tele"
                  id="Mobile Number"
                  name="Mobile Number"
                  maxLength={10}
                  inputMode="numeric"
                  onChange={handleConvertNum}
                  className="focus:outline-none"
                />
                <button className="bg-[#FF8541] text-white tracking-[0.8px] py-1 px-2 font-semibold uppercase absolute right-[8px] text-[10px] rounded-[8px]">
                  get otp
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className="block text-[14px] font-semibold  text-gray-900"
              htmlFor="OTP"
            >
              OTP
            </label>
            <div className="border-[#DEDEDE] w-full gap-[8px] rounded-[8px] p-[5px] border flex">
              <img src="/RequestCallBack_images/otp.svg" alt="" />
              <input
                required
                type="text"
                maxLength="6"
                inputMode="numeric"
                pattern="\d*"
                id="OTP"
                name="OTP"
                className="focus:outline-none"
                onChange={handleConvertNum}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className="block text-[14px] font-semibold  text-gray-900"
              htmlFor="Email ID"
            >
              Email ID
            </label>
            <div className="border-[#DEDEDE] w-full gap-[8px] rounded-[8px] p-[5px] border flex">
              <img src="/RequestCallBack_images/mail.svg" alt="" />
              <input
                required
                type="email"
                id="Email ID"
                name="Email ID"
                className="focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[8px]">
              <input
                required
                type="checkbox"
                name="WhatsApp Notification Remainder"
                id="WhatsApp Notification Remainder"
              />
              <label htmlFor="WhatsApp Notification Remainder">
                I want to receive updates on WhatsApp
              </label>
            </div>
            <button
              onClick={handleThankYouModal}
              type="submit"
              className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
            >
              Send Request
            </button>
          </div>
        </form>
        {/* <ThankYouModal
          isTQModal={isTQModal}
          handleThankYouModal={handleThankYouModal}
        /> */}
      </section>
    </main>
  );
};
export default RequestCallBack;
