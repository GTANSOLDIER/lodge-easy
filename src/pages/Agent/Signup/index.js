"use client";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function Signup() {
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();
  return (
    <div className="">
      <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
        <Link href="/">
          {" "}
          <GrClose
            className="text-[#BDBDBD] text-[16px]"
            onClick={() => router.back}
          />
        </Link>
        <div className="text-[#545454] text-[16px] font-semibold font-nunito">
          Sign Up
        </div>
        <div></div>
      </div>
      <div className=" mt-10 px-7">
        <div className="text-[#545454] font-golos text-[24px] font-semibold">
          Welcome,
        </div>
        <div className="text-[#9D9D9D] font-nunito text-[14px] font-normal">
          Let's get you started and listing apartments in no time.
        </div>
      </div>
      <div className="px-7 mt-8">
        <input
          type="text"
          placeholder="Full Name"
          className="h-[45px] text-[14px] rounded p-2 border-[1px] border-[#545454] w-full"
        />
        <input
          type="text"
          placeholder="E-mail"
          className="h-[45px] text-[14px] mt-4 rounded p-2 border-[1px] border-[#545454] w-full"
        />
        <div className="flex flex-row items-center justify-between h-[45px] mt-4 rounded border-[1px] border-[#545454] w-full">
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            className="text-[14px] p-2 w-[85%]"
          />
          <AiOutlineEye
            className={
              showPwd ? "text-[24px] text-[#BDBDBD] w-[15%]" : "hidden"
            }
            onClick={() => setShowPwd(false)}
          />
          <AiOutlineEyeInvisible
            className={
              showPwd ? "hidden" : "text-[24px] text-[#BDBDBD] w-[15%]"
            }
            onClick={() => setShowPwd(true)}
          />
        </div>
      </div>
      <div className="px-7 py-8">
        <Link href="/Agent/Signup/SignupDetails">
          <button className="h-[45px] text-[14px] font-poppins font-medium text-white w-full bg-[#458CA2] rounded">
            Sign Up
          </button>
        </Link>
        <div className="font-nunito text-[14px] font-normal text-center">
          By creating an account you are agreeing to our{" "}
          <a className="text-[#458CA2]"> Terms & Conditions </a> &{" "}
          <a className="text-[#458CA2]">Privacy Policy</a>{" "}
        </div>
      </div>
      <div className="font-nunito text-[14px] font-normal text-center mt-[10vh] mb-20">
        {" "}
        Already have an account?{" "}
        <Link href="/Agent/Login" className="text-[#458CA2]">
          Log in
        </Link>
      </div>
    </div>
  );
}
