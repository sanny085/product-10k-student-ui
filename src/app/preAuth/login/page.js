"use client";
import { useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [loginType, setLoginType] = useState("Mobile");
  const [isOTP, setOTP] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { push } = useRouter();

  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };
  const LoginForm = () => (
    <form
      className={`${styles.Login_form} mt-[10rem] h-[450px] rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <p className="text-center w-full text-[24px] font-[600] leading-[normal]">
        Login
      </p>
      <div className="flex flex-col gap-[8px]">
        {loginType == "Mobile" ? (
          <>
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="Mobile Number"
            >
              Mobile Number
            </label>
            <div
              className={`border-[#DEDEDE] ${styles.focus} gap-[8px] rounded-[8px] py-1 px-[15px] border flex`}
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
          </>
        ) : (
          <>
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="Email ID"
            >
              Email ID
            </label>
            <div className="border-[#DEDEDE] focus-within:border-[#FF8541] focus-within:border w-full gap-[8px] rounded-[8px] py-1 px-[15px] border flex">
              <img src="/RequestCallBack_images/mail.svg" alt="" />
              <input
                required
                type="email"
                id="Email ID"
                name="Email ID"
                className="focus:outline-none"
              />
            </div>
          </>
        )}
        {!isOTP && loginType !== "Email" ? (
          <div className="flex flex-col gap-[8px]">
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="OTP"
            >
              OTP
            </label>
            <div
              className={`border-[#DEDEDE] ${styles.focus} w-full gap-[8px] rounded-[8px] py-1 px-[15px] border flex`}
            >
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
        ) : loginType === "Email" ? (
          <div className="flex w-full flex-col gap-[8px]">
            <label
              className="block text-[13px] font-semibold  text-gray-900"
              htmlFor="Password"
            >
              Password
            </label>
            <div className="border-[#DEDEDE] focus-within:border-[#FF8541] focus-within:border px-[15px]  w-full gap-[8px] rounded-[8px] py-1 border items-center flex ">
              <input
                required
                type={showPassword ? "password" : "text"}
                id="Password"
                name="Password"
                className="focus:outline-none w-full"
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer h-[21px]"
                src="/Login_Images/eye.svg"
                alt=""
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="cursor-pointer flex justify-between text-[13px] font-[600]">
        <p
          onClick={() => {
            loginType === "Mobile"
              ? setLoginType("Email")
              : setLoginType("Mobile");
          }}
          className="text-[#FF8541]"
        >
          {loginType === "Mobile"
            ? "Login with Email"
            : "Login with Phone Number"}
        </p>
        {loginType === "Email" ? (
          <p
            onClick={() => {
              setForgotPassword(!forgotPassword);
            }}
            className="text-[#747474]"
          >
            forgot password?
          </p>
        ) : (
          ""
        )}
      </div>
      {loginType === "Email" ? (
        <div className="flex text-[13px] font-[600] gap-[8px]">
          <input
            required
            type="checkbox"
            name="Remember me"
            id="Remember me"
            className=" checked:bg-[#FF8541]"
          />
          <label htmlFor="Remember me">Remember me</label>
        </div>
      ) : (
        ""
      )}
      {isOTP && loginType === "Mobile" ? (
        <button
          onClick={() => {
            setOTP(!true);
          }}
          type="submit"
          className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
        >
          OTP
        </button>
      ) : (
        <button
          onClick={(e) => e.preventDefault()}
          type="submit"
          className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
        >
          Login
        </button>
      )}
      <p className="text-[12px] text-[#747474] text-center font-[600]">
        Don't have account?{" "}
        <Link
          href="/preAuth/register"
          className="text-[#FF8541] cursor-pointer"
        >
          Register
        </Link>
      </p>
    </form>
  );
  const PasswordRecovery = () => (
    <form
      className={`${styles.Login_form} mt-[10rem] h-[450px] rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <p className="text-center text-[24px] font-[600] leading-[normal]">
        Password Recovery
      </p>
      <div className="flex flex-col gap-[8px]">
        <label
          className="block text-[13px] font-semibold  text-gray-900"
          htmlFor="Mobile Number"
        >
          Registered Phone Number
        </label>
        <div
          className={`border-[#DEDEDE] ${styles.focus} gap-[8px] rounded-[8px] py-1 px-[15px] border flex`}
        >
          <img src="/RequestCallBack_images/call.svg" alt="" />
          <div className="flex relative  flex-row items-center gap-[3px]  w-full md:gap-[4px]">
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
      </div>
      <p className="text-[12px] text-center font-[600] leading-[normal] text-[#747474]">
        OR
      </p>
      <div className="flex flex-col gap-[8px]">
        <label
          className="block text-[13px] font-semibold  text-gray-900"
          htmlFor="Email ID"
        >
          Registered Email ID
        </label>
        <div className="border-[#DEDEDE] w-full focus-within:border-[#FF8541] focus-within:border gap-[8px] rounded-[8px] py-1 px-[15px] border flex">
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
      <button
        onClick={() => push("/preAuth/resetPassword/1")}
        type="submit"
        className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
      >
        Send Password Reset Link
      </button>
    </form>
  );

  return (
    <main className="flex lg:flex-row">
      <section
        className={`lg:w-[50%] bg-[#747474] ${styles.left_section} h-[100vh] overflow-auto gap-[30px] justify-center flex`}
      >
        <div className="flex flex-col overflow-hidden">
          <div className={`${styles.image1} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages1.png"
              alt=""
            />
          </div>
          <div className={`${styles.image1} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className={`${styles.image2} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages2.png"
              alt=""
            />
          </div>
          <div className={`${styles.image2} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages2.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className={`${styles.image3} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages3.png"
              alt=""
            />
          </div>
          <div className={`${styles.image3} h-fit pb-[15px]`}>
            <img
              draggable={false}
              src="/Login_Images/studentImages3.png"
              alt=""
            />
          </div>
        </div>
    
      </section>
      <section className="lg:w-[50%]  flex justify-center relative h-[100vh] bg-[#332C60]">
        <div>
          <img
            className="mx-auto absolute top-[30px] right-[42%] py-[40px]"
            src="/Login_Images/2 51.png"
            alt=""
          />
          <Link
            href="/"
            className="flex absolute top-[80px] items-center right-[57px] gap-[10px] text-white px-[16px] py-[8px]"
          >
            <img src="/Login_Images/Home.svg" alt="" />
            <span className="text-[12px] cursor-pointer font-bold leading-[normal]">
              Go to Home
            </span>
          </Link>
        </div>
        {!forgotPassword ? <LoginForm /> : <PasswordRecovery />}
      </section>
    </main>
  );
}
