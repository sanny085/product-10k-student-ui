"use client";
import { useParams } from "next/navigation";
import styles from "../../Login/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [registerForPasswordReset, setRegisterForPasswordReset] =
    useState(false);
  const [isPasswordReset, setPasswordReset] = useState(false);
  const {push} = useRouter();
  const params = useParams();
  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };
  const handleRegisterForPasswordReset = (e) => {
    e.preventDefault();
    setRegisterForPasswordReset(!registerForPasswordReset);
  };

  const PasswordRecovery = () => (
    <form
      onSubmit={(e) => handleRegisterForPasswordReset(e)}
      className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <p className="text-center font-[600] text-[24px] leading-[normal]">
        Password Recovery
      </p>
      <div>
        <div className="flex flex-col gap-[8px]">
          <label
            className="block text-[14px]  font-semibold  text-gray-900"
            htmlFor="Mobile Number"
          >
            Mobile Number
          </label>
          <div className="border-[#DEDEDE] gap-[8px] rounded-[8px] p-[5px] border flex">
            <img src="/RequestCallBack_images/call.svg" alt="" />
            <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
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
      </div>
      <p className="text-center text-[#646464]">OR</p>
      <div className="flex flex-col gap-[8px]">
        <label
          className="block text-[13px] font-semibold text-gray-900"
          htmlFor="Email ID"
        >
          Registered Email ID
        </label>
        <div className="border-[#DEDEDE] w-full gap-[8px] rounded-[8px] py-1 px-[15px] border flex">
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
        type="submit"
        className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
      >
        Send Password Reset Link
      </button>
    </form>
  );
  const PasswordResetConfirmation = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        push("/preAuth/login");
      }}
      className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <div className="flex gap-[16px]">
        <img src="/Login_Images/orangeTick.svg" alt="dfs" />
        <p className="font-[600] text-[24px] leading-[normal]">
          Password Reset Successful
        </p>
      </div>
      <button
        type="submit"
        className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
      >
        Login with new password
      </button>
    </form>
  );

  const ResetPasswordCard = () => (
    <form
      onSubmit={(e) => {
        setPasswordReset(!isPasswordReset);
      }}
      className={`${styles.Login_form} rounded-[16px] px-[40px] py-[38px] flex flex-col mx-auto w-[454px] gap-[24px] bg-white`}
    >
      <p className="text-center font-[600] text-[24px] leading-[normal]">
        Reset Password
      </p>
      <div className="flex flex-col gap-[8px]">
        <label
          className="block text-[14px]  font-semibold  text-gray-900"
          htmlFor="New Password"
        >
          New Password
        </label>
        <div className="border-[#DEDEDE] gap-[8px] rounded-[8px] p-[5px] border flex">
          <img src="/Login_Images/password.svg" alt="" />
          <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
            <input
              required
              type="password"
              id="New Password"
              name="New Password"
              maxLength={10}
              inputMode="numeric"
              placeholder="Minimum 8 Letters"
              className="focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <label
          className="block text-[14px]  font-semibold  text-gray-900"
          htmlFor="Re-enter Password"
        >
          Re-enter Password
        </label>
        <div className="border-[#DEDEDE] gap-[8px] rounded-[8px] p-[5px] border flex">
          <img src="/Login_Images/password.svg" alt="" />
          <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
            <input
              required
              placeholder="Make sure it Matches"
              type="password"
              id="Re-enter Password"
              name="Re-enter Password"
              maxLength={10}
              inputMode="numeric"
              className="focus:outline-none"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
      >
        Reset
      </button>
    </form>
  );

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
      <section className="lg:w-[50%] flex items-center relative h-[100vh] bg-[#332C60]">
        <div>
          <img
            className="mx-auto absolute top-[30px] right-[42%] py-[40px]"
            src="/Login_Images/2 51.png"
            alt=""
          />
          <div
            onClick={() => push("/")}
            className="flex absolute top-[80px] items-center right-[57px] gap-[10px] text-white px-[16px] py-[8px]"
          >
            <img src="/Login_Images/Home.svg" alt="" />{" "}
            <span className="text-[12px] cursor-pointer font-bold leading-[normal]">
              Go to Home
            </span>
          </div>
        </div>
        {!registerForPasswordReset ? (
          <PasswordRecovery />
        ) : !isPasswordReset ? (
          <ResetPasswordCard />
        ) : (
          <PasswordResetConfirmation />
        )}
      </section>
    </main>
  );
};
export default ResetPassword;
