"use client";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPwd() {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="">
      <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
        <Link href="/">
          <GrClose className="text-[#BDBDBD] text-[16px]" />
        </Link>
        <div className="text-[#545454] text-[16px] font-semibold font-nunito">
          Forgot Password?
        </div>
        <div></div>
      </div>
      <div className=" mt-[56px] px-7">
        <div className="text-[#545454] font-golos text-[24px] font-semibold">
          Welcome,
        </div>
        <div className="text-[#9D9D9D] font-nunito text-[14px] font-normal">
          Enter your registered Email Address
        </div>
      </div>
      <div className="px-7 mt-[34px]">
        <input
          type="text"
          placeholder="E-mail"
          className="h-[45px] text-[14px] p-2 border-b-[1px] border-[#545454] w-full"
        />
      </div>
      <div className="px-7 mt-[72px]">
        <Link href="/User/forgotpassword/verifycode">
          <button className="h-[45px] text-[14px] font-poppins font-medium text-white w-full bg-[#458CA2] rounded">
            Send Code
          </button>
        </Link>
      </div>
    </div>
  );
}
