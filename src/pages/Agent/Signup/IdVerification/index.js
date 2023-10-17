import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { BiImageAlt } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import successIcon from "../../../../assets/successIcon.png";
import Image from "next/image";

export default function IdVerification() {
  const router = useRouter();
  const [onSubmit, setOnSubmit] = useState(false);

  return (
    <div className="relative overflow-hidden h-[100vh]">
      <div
        className={` ${
          onSubmit ? "absolute opacity-100" : "hidden opacity-0"
        } top-0 h-full w-full transition-opacity duration-300 bg-[#0000002a] z-10`}
      ></div>
      <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
        <div onClick={() => router.back()}>
          {" "}
          <GrClose
            className="text-[#BDBDBD] text-[16px]"
            onClick={() => router.back}
          />
        </div>
        <div className="text-[#545454] text-[16px] font-semibold font-nunito">
          Verification
        </div>
        <div></div>
      </div>
      <div className="flex flex-col px-[30px] items-center pt-[24px]">
        <div className="flex flex-col items-center justify-center w-[220px] rounded-[10px] h-[150px] border-[1px] border-[#545454] border-dashed">
          <BiImageAlt className="text-[32px] text-[#545454]" />
          <div className="text-[#545454] text-[16px] font-semibold mt-[12px]">
            Front of ID Card
          </div>
        </div>
        <div className="w-[220px] font-nunito font-bold text-[14px] text-[#545454] border-[1px] border-[#545454] flex flex-row items-center justify-center my-[24px] p-[10px] rounded-md">
          <div className="mr-[8px]"> Upload Photo </div>
          <FiUpload />
        </div>
        <div className="flex mt-[24px] flex-col items-center justify-center w-[220px] rounded-[10px] h-[150px] border-[1px] border-[#545454] border-dashed">
          <BiImageAlt className="text-[32px] text-[#545454]" />
          <div className="text-[#545454] text-[16px] font-semibold mt-[12px]">
            Back of ID Card
          </div>
        </div>
        <div className="w-[220px] font-nunito font-bold text-[14px] text-[#545454] border-[1px] border-[#545454] flex flex-row items-center justify-center my-[24px] p-[10px] rounded-md">
          <div className="mr-[8px]"> Upload Photo </div>
          <FiUpload />
        </div>
        <div
          className="mt-[24px] font-nunito font-semibold text-[14px] mb-[32px] w-[220px] text-center bg-[#458CA2] text-white py-[8px] rounded-[5px]"
          onClick={() => setOnSubmit(true)}
        >
          {" "}
          Submit{" "}
        </div>
      </div>
      <div
        className={`${
          onSubmit ? "bottom-0" : "bottom-[-100%]"
        } rounded-t-2xl bg-white w-full px-7 flex flex-col items-center justify-center absolute transition-all duration-300 z-50`}
      >
        <div className="relative w-[47px] h-[33px] mt-[60px] mb-[30px]">
          <Image src={successIcon} alt="successIcon" layout="fill" />
        </div>
        <div className="text-[#545454] mb-[6px] font-golos text-[24px] font-semibold">
          Registration Success
        </div>
        <div className="text-[#9D9D9D] text-center font-nunito text-[14px] font-normal">
          Your account has been registered successfully and is awaiting approval
        </div>
        <Link href="/Agent/Login">
          <button className="mt-[22px] mb-[50px] h-[36px] w-[69px] text-[14px] font-poppins font-medium text-white bg-[#458CA2] rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
