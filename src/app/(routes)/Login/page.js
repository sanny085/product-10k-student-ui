"use client";
import { useState } from "react";
import styles from "./Login.module.css";
export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };

  return (
    <main className="flex lg:flex-row">
      <section
        className={`lg:w-[50%] bg-[#747474] ${styles.left_section} h-[100vh] overflow-auto gap-[24.5px] justify-center flex`}
      >
        <div className={`${styles.image1}`}>
          <img
            draggable={false}
            className={``}
            src="/Login_Images/Frame 735.svg"
            alt=""
          />
          <img
            draggable={false}
            className={``}
            src="/Login_Images/Frame 735.svg"
            alt=""
          />
        </div>
        <div className={`${styles.image2}`}>
          <img draggable={false} src="/Login_Images/Frame 735.svg" alt="" />
          <img draggable={false} src="/Login_Images/Frame 735.svg" alt="" />
        </div>
        <div className={`${styles.image3}`}>
          <img draggable={false} src="/Login_Images/Frame 735.svg" alt="" />
          <img draggable={false} src="/Login_Images/Frame 735.svg" alt="" />
        </div>
      </section>
      <section className="lg:w-[50%] relative h-[100vh] bg-[#332C60]">
        <img
          className="mx-auto py-[40px]"
          src="/Login_Images/2 51.png"
          alt=""
        />
        {!isLogin ? (
          <form
            className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
            action=""
          >
            <p className="text-center w-full text-[24px] font-[600] leading-[normal]">
              Login / Register
            </p>

            <div className={`flex flex-col gap-[8px]`}>
              <label
                className="block text-[14px] font-semibold text-gray-900"
                htmlFor="Mobile Number"
              >
                Mobile Number
              </label>
              <div
                className={`border-[#DEDEDE] px-[15px] ${styles.border} gap-[8px] rounded-[8px] p-[5px] border flex`}
              >
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
                </div>
              </div>
              <p className="text-[16px] font-[600] leding-[normal]">
                You are new here. Please fill in these details
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label
                className="block text-[14px]  font-semibold  text-gray-900"
                htmlFor="Name"
              >
                Name
              </label>
              <div className="border-[#DEDEDE] px-[15px] gap-[8px] rounded-[8px] p-[5px] border w-full flex">
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
                className="block text-[14px] font-semibold  text-gray-900"
                htmlFor="Email ID"
              >
                Email ID
              </label>
              <div className="border-[#DEDEDE] px-[15px] w-full gap-[8px] rounded-[8px] p-[5px] border flex">
                <img src="/RequestCallBack_images/mail.svg" alt="" />
                <input
                  required
                  type="email"
                  id="Email ID"
                  name="Email ID"
                  className="focus:outline-none"
                />
              </div>
              <p
                onClick={() => setIsLogin(true)}
                className="text-[#FF8541] cursor-pointer text-[12px] font-[600] leading-[normal]"
              >
                Login
              </p>
            </div>
            <button
              type="submit"
              className="w-full p-[12px] text-center bg-[#FF8541] text-white font-[600] text-[16px] rounded-[8px]"
            >
              Register
            </button>
          </form>
        ) : (
          <form
            className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
          >
            <p className="text-center w-full text-[24px] font-[600] leading-[normal]">
              Login
            </p>
            <div className="flex flex-col gap-[8px]">
              <label
                className="block text-[14px] font-semibold  text-gray-900"
                htmlFor="Email ID"
              >
                Email ID / Mobile
              </label>
              <div className="border-[#DEDEDE] px-[15px] w-full gap-[8px] rounded-[8px] p-[5px] border flex">
                <img src="/RequestCallBack_images/mail.svg" alt="" />
                <input
                  placeholder="Email / Mobile"
                  required
                  type="email"
                  id="Email ID"
                  name="Email ID"
                  className="focus:outline-none"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[8px]">
              <label
                className="block text-[14px] font-semibold  text-gray-900"
                htmlFor="Password"
              >
                Password
              </label>
              <div className="border-[#DEDEDE] px-[15px]   w-full gap-[8px] rounded-[8px] p-[5px] border flex ">
                <input
                  required
                  placeholder="Password"
                  type="password"
                  id="Password"
                  name="Password"
                  className="focus:outline-none w-full"
                />
                <img
                  className="cursor-pointer"
                  src="/Login_Images/eye.svg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="flex gap-[8px]">
                <input
                  className={`${styles.checkbox}`}
                  required
                  type="checkbox"
                  name="WhatsApp Notification Remainder"
                  id="WhatsApp Notification Remainder"
                />
                <label htmlFor="WhatsApp Notification Remainder">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full p-[12px] text-center bg-[#FF8541] text-white font-[600] text-[16px] rounded-[8px]"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
