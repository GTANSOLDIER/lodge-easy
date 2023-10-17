"use client";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

export default function Verifypwd() {
  return (
    <div className="">
      <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
        <Link href="/User/Login">
          <GrClose className="text-[#BDBDBD] text-[16px]" />
        </Link>
        <div className="text-[#545454] text-[16px] font-semibold font-nunito">
          Verify Code
        </div>
        <div></div>
      </div>
      <div className=" mt-[56px] px-7">
        <div className="text-[#545454] font-golos text-[24px] font-semibold">
          Welcome,
        </div>
        <div className="text-[#9D9D9D] font-nunito text-[14px] font-normal">
          Enter the code that was sent to your Email
        </div>
      </div>
      <div className="px-7 mt-[34px] relative">
        <input
          type="text"
          className="h-[45px] text-[24px] p-2 border-b-[1px] border-[#545454] w-full font-bold"
        />
      </div>
      <div className="px-7 mt-[72px]">
        <Link href="/User/forgotpassword/changepassword">
          <button className="h-[45px] text-[14px] font-poppins font-medium text-white w-full bg-[#458CA2] rounded">
            Verify
          </button>
        </Link>
      </div>
      <div className="text-center mt-[8px]">
        Didn't get a code? <span className="text-[#458CA2]">Resend</span>
      </div>
    </div>
  );
}
