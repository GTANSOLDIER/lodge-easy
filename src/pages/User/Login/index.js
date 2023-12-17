"use client";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import google from "../../../assets/logos_google-icon.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="flex items-center justify-center md:h-[100vh]">
      <div className="md:max-w-[600px] w-full md:border-[1px] md:border-[#EAEAEA] md:rounded-[10px]">
        <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
          <Link href="/">
            <GrClose className="text-[#BDBDBD] text-[16px]" />
          </Link>
          <div className="text-[#545454] text-[16px] font-semibold font-nunito">
            Log In
          </div>
          <div></div>
        </div>
        <div className=" mt-10 px-7 md:items-center md:flex md:flex-col">
          <div className="text-[#545454] font-golos text-[24px] md:leading-[30px] font-semibold">
            Welcome back
          </div>
          <div className="text-[#9D9D9D] font-nunito text-[14px] md:text-[16px] font-normal">
            Please enter your details
          </div>
        </div>
        <div className="px-7 md:px-[48px] mt-8">
          <input
            type="text"
            placeholder="E-mail"
            className="h-[45px] text-[14px] rounded p-2 border-[1px] border-[#545454] w-full"
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
          <div className="flex flex-row items-center justify-between pt-3 px-3">
            <div className="flex flex-row items-center justify-center">
              <input type="checkbox" className="mr-2 rememberMeCheck" />
              <div className="text-[#BDBDBD] text-[14px] font-nunito font-medium">
                Remember Me
              </div>
            </div>
            <Link href="/User/forgotpassword">
              <div className="text-[#458CA2] text-[14px] font-nunito font-medium">
                Forgot Password?
              </div>
            </Link>
          </div>
        </div>
        <div className="px-7 md:px-[48px] py-8">
          <Link href="/User/Dashboard">
            <button className="h-[45px] text-[14px] font-poppins font-medium text-white w-full bg-[#458CA2] rounded">
              Log In
            </button>
          </Link>
          <div className="h-[45px] flex flex-row items-center justify-center border-[1px] border-[#545454] rounded mt-4">
            <Image src={google} alt="googleIcon" className="" />
            <div className="pl-2 text-[#545454]">Sign in with Google</div>
          </div>
        </div>
        <div className="font-nunito text-[14px] font-normal text-center mt-[10vh] md:mt-[0px] mb-20 md:mb-7">
          {" "}
          Don't have an account yet?{" "}
          <Link href="/User/Signup" className="text-[#458CA2]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
