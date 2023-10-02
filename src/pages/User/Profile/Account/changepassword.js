"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import successIcon from "../../../../assets/successIcon.png";

export default function ChangePwd() {
  const [showOldPwd, setShowOldPwd] = useState(false);
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [showConfPwd, setShowConfPwd] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  return (
    <div className={`h-[100vh] overflow-hidden relative`}>
      <div
        className={` ${
          onSuccess ? "absolute opacity-100" : "hidden opacity-0"
        } top-0 h-full w-full transition-opacity duration-300 bg-[#0000002a] z-10`}
      ></div>
      <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
        <div className="text-[#545454] text-[16px] font-semibold font-nunito">
          Password
        </div>
      </div>
      <div className=" mt-[20px] px-7">
        <div className="text-[#9D9D9D] font-nunito text-[16px] font-bold">
          Change Password
        </div>
      </div>
      <div className="px-7 mt-[20px]">
        <div className="flex flex-row items-center justify-between h-[45px] mt-4 rounded border-[1px] border-[#545454] w-full">
          <input
            type={showOldPwd ? "text" : "password"}
            placeholder="Old Password"
            className="text-[14px] p-2 w-[85%]"
          />
          <AiOutlineEye
            className={
              showOldPwd ? "text-[24px] text-[#BDBDBD] w-[15%]" : "hidden"
            }
            onClick={() => setShowOldPwd(false)}
          />
          <AiOutlineEyeInvisible
            className={
              showOldPwd ? "hidden" : "text-[24px] text-[#BDBDBD] w-[15%]"
            }
            onClick={() => setShowOldPwd(true)}
          />
        </div>
        <div className="flex flex-row items-center justify-between h-[45px] mt-4 rounded border-[1px] border-[#545454] w-full">
          <input
            type={showNewPwd ? "text" : "password"}
            placeholder="New Password"
            className="text-[14px] p-2 w-[85%]"
          />
          <AiOutlineEye
            className={
              showNewPwd ? "text-[24px] text-[#BDBDBD] w-[15%]" : "hidden"
            }
            onClick={() => setShowNewPwd(false)}
          />
          <AiOutlineEyeInvisible
            className={
              showNewPwd ? "hidden" : "text-[24px] text-[#BDBDBD] w-[15%]"
            }
            onClick={() => setShowNewPwd(true)}
          />
        </div>
        <div className="flex flex-row items-center justify-between h-[45px] mt-4 rounded border-[1px] border-[#545454] w-full">
          <input
            type={showConfPwd ? "text" : "password"}
            placeholder="Confirm New Password"
            className="text-[14px] p-2 w-[85%]"
          />
          <AiOutlineEye
            className={
              showConfPwd ? "text-[24px] text-[#BDBDBD] w-[15%]" : "hidden"
            }
            onClick={() => setShowConfPwd(false)}
          />
          <AiOutlineEyeInvisible
            className={
              showConfPwd ? "hidden" : "text-[24px] text-[#BDBDBD] w-[15%]"
            }
            onClick={() => setShowConfPwd(true)}
          />
        </div>
      </div>
      <div className="px-7 absolute bottom-[38px] w-full">
        <button
          className="h-[45px] text-[14px] font-poppins font-medium text-white w-full bg-[#458CA2] rounded"
          onClick={() => {
            setOnSuccess(true);
          }}
        >
          Save
        </button>
      </div>
      <div
        className={`${
          onSuccess ? "bottom-0" : "bottom-[-100%]"
        } rounded-t-2xl bg-white w-full px-7 flex flex-col items-center justify-center absolute transition-all duration-300 z-50`}
      >
        <div className="relative w-[47px] h-[33px] mt-[60px] mb-[30px]">
          <Image src={successIcon} alt="successIcon" layout="fill" />
        </div>
        <div className="text-[#545454] mb-[4px] font-golos text-[24px] font-semibold">
          Changed Successfully!
        </div>
        <div className="text-[#9D9D9D] font-nunito text-[14px] font-normal">
          You have successfully changed your password
        </div>
        <Link href="/User/Profile/Account">
          <button className="mt-[12px] mb-[60px] h-[36px] w-[69px] text-[14px] font-poppins font-medium text-white bg-[#458CA2] rounded">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
