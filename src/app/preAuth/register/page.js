"use client";
import { useState } from "react";
import styles from "./Register.module.css";
import Link from "next/link";

export default function Register() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleConvertNum = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    event.target.value = inputValue;
  };

  const handleFileChange = (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      fileInput.value = null;
      setSelectedFile(fileURL);
    }
  };
  return (
    <main className="flex h-[100vh] items-center justify-center">
      <form className="py-[38px] border shadow-md flex flex-col  lg:w-[866px] md:w-[768px] gap-[32px] rounded-[16px] px-[40px] ">
        <div className="flex justify-center relative gap-[32px] items-end w-full">
          <div className="flex absolute left-0 gap-[10px] items-start font-[700] text-[12px] tracking-wide">
            <img src="/Register_Images/home.svg" alt="" />
            <Link href="/">
              <span className="uppercase"> go back</span>
            </Link>
          </div>
          <p className="text-[24px] font-[600] leading-[normal]">
            Get Started with{" "}
            <span className={styles.linear_Gradient_text}>Profile</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[46%] flex flex-col gap-[24px]">
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
                    className="focus:outline-none "
                  />
                </div>
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
            <div className="flex items-center gap-[24px]">
              <div className="flex gap-[8px] w-[152px] flex-col">
                <p className="text-[12px] font-[600] leading-[normal]">
                  Upload Profile Pic
                </p>
                <label className="w-full p-[12px] font-[400] text-center bg-[#FF8541] text-white text-[13px] rounded-[8px] cursor-pointer">
                  {selectedFile ? "Selected File" : "Select File "}
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {selectedFile ? (
                <div className="overflow-hidden rounded-[8px] relative border-[#DEDEDE] h-[60px] w-[60px]">
                  <div className=" top-[2px] border-[3px] border-red-500 bg-white rounded-full  right-[2px] p-1 absolute">
                    <img
                      onClick={() => setSelectedFile(null)}
                      className="h-2 w-2 cursor-pointer  "
                      src="/Register_Images/cross-mark-svgrepo-com.svg"
                      alt=""
                    />
                  </div>

                  <img
                    draggable={false}
                    src={selectedFile}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="border border-[#646464]"></div>
          <div className="w-[46%] flex flex-col gap-[24px] ">
            <div className="flex flex-col  gap-[8px]">
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
                    className="focus:outline-none placeholder:text-[13px]"
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
                    className="focus:outline-none placeholder:text-[13px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label
                className="block text-[14px]  font-semibold  text-gray-900"
                htmlFor="education"
              >
                Highest Qualification
              </label>
              <div className="border-[#DEDEDE] gap-[8px] rounded-[8px] p-[5px] border flex">
                <img src="/Register_Images/Graduation_Icon.svg" alt="" />
                <div className="flex relative flex-row items-center gap-[3px] w-full md:gap-[4px]">
                  <select
                    required
                    id="education"
                    name="education"
                    className="focus:outline-none w-full bg-white border-none text-[13px] text-[#808080]"
                  >
                    <option value="" disabled selected>
                      Select Education
                    </option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="btech">B-tech</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-[24px] ">
              <div className="w-[141px] flex-shrink-0 flex flex-col gap-[8px] ">
                <label
                  className="font-[600] text-[12px] "
                  htmlFor="Graduation Year"
                >
                  Graduation Year
                </label>
                <div className="border w-full gap-[8px] p-2 flex border-[#DEDEDE] rounded-[8px]">
                  <img src="/Register_Images/Calender.svg" alt="" />
                  <input
                    id="Graduation Year"
                    placeholder="eg : 2023"
                    className=" w-full placeholder:text-[13px] focus:outline-none"
                    type="text"
                    onChange={handleConvertNum}
                    name="Graduation Year"
                    maxLength={4}
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-[8px] ">
                <label
                  className="font-[600] text-[12px] "
                  htmlFor="Work Experience"
                >
                  Work Experience
                </label>
                <div className="border w-full gap-[8px] p-2 flex border-[#DEDEDE] rounded-[8px]">
                  <img src="/Register_Images/experience_icon.svg" alt="" />
                  <input
                    id="Graduation Year"
                    placeholder="eg : 2 years in BPO"
                    className=" w-full placeholder:text-[13px] focus:outline-none"
                    type="text"
                    name="Graduation Year"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-[366px] mx-auto p-[12px] font-[600] text-center bg-[#FF8541] text-white text-[16px] rounded-[8px]"
        >
          Register
        </button>
        <p className="text-[12px] mx-auto text-[#747474] font-[600]">
          Already have an account?{" "}
          <Link href="/Login" className="text-[#FF8541] cursor-pointer">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
