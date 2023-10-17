import Footer from "./Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import LogoutIcon from "../../../assets/logoutIcon.png";
import Image from "next/image";

export default function Profile() {
  const [online, checkOnline] = useState(true);
  const [onClickLogout, setOnClickLogout] = useState(false);

  return (
    <div className="pb-[76px] relative overflow-hidden">
      <div
        className={` ${
          onClickLogout ? "absolute opacity-100" : "hidden opacity-0"
        } top-0 h-full w-full transition-opacity duration-300 bg-[#0000002a] z-10`}
      ></div>
      <div className="px-[30px] py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        {" "}
        Profile{" "}
      </div>
      <div className="w-full flex items-center justify-center mt-[20px]">
        <div
          className={`w-[132px] h-[132px] border-[5px] ${
            online ? "border-[#00C781]" : "border-[#BDBDBD]"
          } rounded-full flex items-center justify-center`}
        >
          <div className="w-[108px] h-[108px] flex items-center justify-center profilePic bg-cover bg-center rounded-full"></div>
        </div>
      </div>
      <div className="font-golos font-medium text-[24px] text-[#292929] text-center mt-[12px] leading-[28.8px]">
        John Doe
      </div>
      <div className="font-nunito font-normal text-[14px] text-[#292929] text-center leading-[19.1px] mt-[4px]">
        No. 2 St. Peterson Square, Ekosodin
      </div>
      <Link href="/Agent/Profile/ProfileDetails">
        <div className="mx-[30px] py-[20px] flex flex-row items-center justify-between border-b-[1px] border-b-[#E0E0E0]">
          <div className="text-[14px] text-[#9D9D9D] font-nunito font-normal pl-[16px]">
            Show profile
          </div>
          <MdKeyboardArrowRight className="text-[24px]" />
        </div>
      </Link>
      <div className="text-[16px] text-[#545454] font-nunito font-bold mx-[30px] mt-[20px] mb-[10px] ">
        Account Settings
      </div>
      <Link href="/Agent/Profile/EditProfile">
        <div className="mx-[30px] pt-[10px] pb-[10px] flex flex-row items-center justify-between">
          <div className="text-[14px] text-[#9D9D9D] font-nunito font-normal pl-[16px]">
            Edit profile
          </div>
          <MdKeyboardArrowRight className="text-[24px]" />
        </div>
      </Link>
      <Link href="/Agent/Profile/Account">
        <div className="mx-[30px] py-[20px] flex flex-row items-center justify-between border-b-[1px] border-b-[#E0E0E0]">
          <div className="text-[14px] text-[#9D9D9D] font-nunito font-normal pl-[16px]">
            Account
          </div>
          <MdKeyboardArrowRight className="text-[24px]" />
        </div>
      </Link>
      <div className="text-[16px] text-[#545454] font-nunito font-bold mx-[30px] mt-[20px] mb-[10px] ">
        Support
      </div>
      <Link href="/Agent/Profile/HelpCenter">
        <div className="mx-[30px] pt-[10px] pb-[20px] flex flex-row items-center justify-between border-b-[1px] border-b-[#E0E0E0]">
          <div className="text-[14px] text-[#9D9D9D] font-nunito font-normal pl-[16px]">
            Help center
          </div>
          <MdKeyboardArrowRight className="text-[24px]" />
        </div>
      </Link>
      <div className="text-[16px] text-[#545454] font-nunito font-bold mx-[30px] mt-[20px] mb-[10px] ">
        Logout
      </div>
      <div
        className="mx-[30px] pt-[10px] pb-[20px] flex flex-row items-center justify-between border-b-[1px] border-b-[#E0E0E0]"
        onClick={() => setOnClickLogout(true)}
      >
        <div className="text-[14px] text-[#9D9D9D] font-nunito font-normal pl-[16px]">
          Logout
        </div>
        <MdKeyboardArrowRight className="text-[24px]" />
      </div>
      <div className="flex flex-row items-center justify-center mt-[60px] leading-[13.64px] font-nunito font-normal text-[#545454] text-[10px]">
        <div>Terms of Service</div>
        <div className="w-[2px] h-[2px] bg-[#545454] mx-1 rounded-full"></div>
        <div>Privacy Policy</div>
      </div>
      <div className="text-center text-[10px] text-[#BDBDBD] font-nunito font-normal leading-[13.64px] mt-[12px]">
        LodgeEasy &copy; 2023 All rights reserved.
      </div>
      <Footer />
      <div
        className={`${
          onClickLogout ? "bottom-0" : "bottom-[-100%]"
        } rounded-t-2xl bg-white w-full px-7 flex flex-col items-center justify-center fixed transition-all duration-300 z-50`}
      >
        <div className="relative w-[53px] h-[60px] mt-[60px] mb-[30px]">
          <Image src={LogoutIcon} alt="successIcon" />
        </div>
        <div className="text-[#545454] mb-[4px] font-golos text-[24px] font-semibold">
          You are about to Logout
        </div>
        <div className="text-[#9D9D9D] text-center font-nunito text-[14px] font-normal">
          You might miss out on important updates if you leave now
        </div>
        <div className="flex mt-1">
          <button
            className="mt-[12px] mb-[40px] h-[36px] w-[69px] text-[14px] font-poppins font-medium text-[#458CA2] mr-10 rounded"
            onClick={() => setOnClickLogout(false)}
          >
            Cancel
          </button>
          <Link href="/">
            <button className="mt-[12px] mb-[40px] h-[36px] w-[69px] text-[14px] font-poppins font-medium text-white bg-[#458CA2] rounded">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
