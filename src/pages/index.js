"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo1 from "../assets/logo1.png";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { LiaUserCircle } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { useState } from "react";
import HostelItem from "./HostelItem";
import Link from "next/link";
import { hostelArray } from "./HostelArray";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <div className="Header w-full border-[1px] border-[#545454]-500 flex flex-row justify-between items-center px-[50px] py-[15px] mx-auto">
        <div className="brandNameAndLogo flex flex-row items-center justify-center w-full md:w-auto">
          <Image alt="logo1" src={logo1} className="w-[130px] mr-[3px]" />
        </div>
        <div className="RegisterAsAgentSect md:flex flex-row items-center hidden">
          <div className="mr-[30px] font-bold text-[#545454]">
            {" "}
            Register as Agent{" "}
          </div>
          <div className="flex flex-row items-center border-[1px] py-[10px] px-[15px] rounded-[10px]">
            <div className="relative mr-[15px]">
              <BiSolidUpArrow className="text-[10px] text-[#545454]" />
              <select className="absolute top-0 w-full h-full opacity-0">
                {/* <option value="0"></option> */}
                <option value="1" className="p-5">
                  Option 1
                </option>
                <option value="2">Option 2</option>
              </select>
            </div>
            <FaUserAlt className="text-[15px] text-[#545454]" />
          </div>
        </div>
      </div>

      <div className="HeroSection w-full h-[40vh] flex flex-col justify-center items-center text-white text-center">
        <div className={`text-[24px] font-golos font-normal`}>
          Find Your Perfect Home
        </div>
        <div
          className={`font-nunito font-normal mt-2 text-[12px] max-w-[85vw] pb-7 heroSectSmallTxt`}
        >
          With just a few clicks, you can find the perfect place to call home.
          Start your search today!
        </div>
        <div className="searchBar w-full mt-2 flex flex-row items-center justify-center">
          <div className="overflow-hidden rounded-md flex flex-row items-center justify-center w-[70%]">
            <input
              type="text"
              placeholder="Search by Location / Type"
              className="bg-[#f1f1f1] w-[80%] h-10 p-3 text-black homeSearchInput text-[14px] outline-none"
            />
            <Link className="w-[20%]" href="/Search">
              <button className="flex items-center justify-center bg-[#458CA2] w-full h-10">
                <FaSearch className="text-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-center">
        <div className={`text-[22px] font-golos font-semibold text-[#292929]`}>
          Let's get started
        </div>
        <div className="text-[12px] w-[70%] text-center mt-3 font-nunito font-normal text-[#707070]">
          LodgeEasy is the ultimate off-campus housing solution for{" "}
          <span className="text-[#458CA2] font-bold"> UNIBEN </span> students
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="getStartedImgs w-[60%] flex flex-col items-center justify-center mt-4 p-2 relative">
          <div className="flex flex-row items-center justify-center relative z-10 w-full">
            <div className="homeImg1 mr-2 w-full h-24"></div>
            <div className="homeImg2 w-full h-24"></div>
          </div>
          <div className="homeImg3 mt-2 relative z-10 w-full h-24"></div>
        </div>
        <div className="mt-20 flex flex-col text-center items-center justify-center">
          <div className="text-[22px] text-[#545454] font-semibold font-golos">
            How does it work
          </div>
          <div className="text-[12px] w-[70%] text-[#545454] mt-3 font-nunito font-normal">
          Embark on a smooth journey to off-campus living bliss!
          </div>
          <div className="mt-4 flex flex-col items-center justify-center w-full">
            <div className="w-[70%]">
              <div className="flex flex-row justify-start items-center">
                <div className="bg-[#458CA2] p-2 rounded-full border-[#ECF4F6] border-4 mr-5">
                  <HiOutlineMail className="text-[22px] text-white" />
                </div>
                <div className="text-[16px] font-bold font-nunito text-[#545454]">
                  Create an Account
                </div>
              </div>
              <div className="font-nunito font-normal text-[#707070] pl-10 ml-[22px] border-l-4 text-left border-l-[#458CA2] text-[12px] leading-normal -mt-2 pb-2">
              Gain access to a vast database of student-tailored apartments. Your path to comfort and convenience starts here!
              </div>
              <div className="flex flex-row justify-start items-center">
                <div className="bg-[#458CA2] p-2 rounded-full border-[#ECF4F6] border-4 mr-5">
                  <HiOutlineMail className="text-[22px] text-white" />
                </div>
                <div className="text-[16px] font-bold font-nunito text-[#545454]">
                  Search for an apartment
                </div>
              </div>
              <div className="text-[#707070] font-nunito font-normal pl-10 ml-[22px] border-l-4 text-left -mt-2 pb-2 border-l-[#458CA2] text-[12px] leading-normal">
                Our smart tech finds your perfect fit, no more irrelevant listings – we've got you covered!
              </div>
              <div className="flex flex-row justify-start items-center">
                <div className="bg-[#458CA2] p-2 rounded-full border-[#ECF4F6] border-4 mr-5">
                  <HiOutlineMail className="text-[22px] text-white" />
                </div>
                <div className="text-[16px] font-bold font-nunito text-[#545454]">
                  Request an inspection
                </div>
              </div>
              <div className="text-[#707070] font-nunito font-normal pl-10 ml-[26px] text-left border-l-[#458CA2] -mt-2 pb-2 text-[12px] leading-normal">
              Excited about a potential home? Request an Inspection, and our Agents will arrange a viewing at your convenience.
              </div>
            </div>
            <Link href="/User/Signup">
              <button className="font-nunito font-bold mt-4 ml-6 py-3 px-7 bg-[#458CA2] text-white rounded-lg">
                {" "}
                Get Started{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center px-4 mt-20">
        <div className="text-center text-[20px] font-semibold font-golos text-[#545454]">
          Discover our New Listings
        </div>
        <div className="text-center font-nunito font-normal mt-3 text-[14px] text-[#545454]">
        Make Lodge Easy your ultimate destination for a seamless and stress-free apartment hunting experience. Start exploring now!
        </div>
        <div className="hostelListings w-full mt-4 grid grid-cols-2">
          {hostelArray.map((h) => (
            <HostelItem area={h.area} id={h.id} name={h.name} location={h.location} price={h.price} comment={h.comment}/>
          ))}
        </div>
      </div>

      <div className="searchNowSect font-nunito mt-24 text-white text-center flex flex-col items-center justify-center p-8">
        <div className="text-[14px] leading-5">
          Your search for student apartments near your school has never been
          easier! Our database of available apartments is updated regularly, so
          you can be sure you're seeing the latest listings. Our filters make it
          simple to narrow down your search by price, location, and amenities.
        </div>
        <div className="text-[14px] mt-4 font-nunito">
          Check out the available apartments below and find your new home today!
        </div>
        <Link href="/Search">
          <button className="mt-6 font-nunito bg-[#458CA2] py-3 px-7 rounded-lg font-semibold">
            {" "}
            Search now{" "}
          </button>
        </Link>
      </div>

      <div className="addServSect pt-16 bg-[#ebebeb]">
        <div className="mb-10 flex flex-col items-center justify-center">
          <div className="font-semibold text-[22px] font-golos">
            Additional Services
          </div>
          <div className="text-[14px] w-[70%] text-center font-nunito mt-3">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>

        <div className="addServListings px-4 py-8 flex flex-col items-center justify-center">
          <div className="addServ flex flex-col items-center justify-center text-center py-6 px-5 mt-5 bg-white rounded-lg mb-14">
            <div className="bg-[#458CA2] p-4 rounded-full border-[6px] border-white -mt-16">
              <GoMail className="text-[30px] text-white" />
            </div>
            <div className="text-[22px] font-semibold font-golos mt-2">
              Cleaning Service
            </div>
            <div className="text-[14px] mt-1 font-nunito">
              Lorem ipsum dolor sit amet consectetur. Morbi aenean orci nisi
              vulputate et blandit feugiat. In mauris gravida et tincidunt
              cursus eu.
            </div>
            <button className="font-nunito text-[14px] mt-3 bg-[#EAEAEA] text-[#9D9D9D] px-4 py-2 font-semibold">
              {" "}
              Coming Soon{" "}
            </button>
          </div>
          <div className="addServ flex flex-col items-center justify-center mt-5 text-center py-6 px-5 bg-white rounded-lg mb-14">
            <div className="bg-[#458CA2] p-4 rounded-full border-[6px] border-white -mt-16">
              <GoMail className="text-[30px] text-white" />
            </div>
            <div className="text-[22px] font-semibold mt-2 font-golos">
              E-commerce Store
            </div>
            <div className="text-[14px] mt-1 font-nunito">
              Lorem ipsum dolor sit amet consectetur. Morbi aenean orci nisi
              vulputate et blandit feugiat. In mauris gravida et tincidunt
              cursus eu.
            </div>
            <button className="text-[14px] font-nunito mt-3 bg-[#EAEAEA] text-[#9D9D9D] px-4 py-2 font-semibold">
              {" "}
              Coming Soon{" "}
            </button>
          </div>
          <div className="addServ flex flex-col items-center justify-center text-center py-6 px-5 mt-5 bg-white rounded-lg mb-14">
            <div className="bg-[#458CA2] p-4 rounded-full border-[6px] border-white -mt-16">
              <GoMail className="text-[30px] text-white" />
            </div>
            <div className="text-[22px] font-semibold mt-2 font-golos">
              Movers
            </div>
            <div className="text-[14px] mt-1 font-nunito">
              Lorem ipsum dolor sit amet consectetur. Morbi aenean orci nisi
              vulputate et blandit feugiat. In mauris gravida et tincidunt
              cursus eu.
            </div>
            <button className="text-[14px] font-nunito mt-3 bg-[#EAEAEA] text-[#9D9D9D] px-4 py-2 font-semibold">
              {" "}
              Coming Soon{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="footer px-6 pt-10">
        <div className="subNewsLetterSect">
          <div className="text-[14px] text-[#707070]">
            Subscribe to our Newsletter
          </div>
          <div className="bg-[#DDDDDD] mt-2 flex flex-row items-center justify-between px-4">
            <input
              type="email"
              placeholder="Enter your email:"
              className="bg-[#DDDDDD] py-4 w-[84%]"
            />
            <HiOutlineMail className="text-[30px]" />
          </div>
        </div>
        <div className="supportSect font-poppins">
          <div className="text-[20px] font-normal mt-12 mb-3 border-b-[1px] border-b-black max-w-[20px] font-poppins">
            Support
          </div>
          <div className="flex flex-col">
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              About us
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Privacy
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Terms of use
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Contact Us
            </a>
          </div>
        </div>
        <div className="customerCareSect font-poppins">
          <div className=" whitespace-nowrap text-[20px] font-normal font-poppins mt-8 mb-3 border-b-[1px] border-b-black max-w-[20px]">
            Customer care
          </div>
          <div className="flex flex-col">
            <a className="text-[14px] text-[#707070] mb-1 font-medium">FAQ</a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Complaints
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Inquiry
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Payment
            </a>
          </div>
        </div>
        <div className="contactSect font-poppins">
          <div className="text-[20px] font-normal font-poppins mt-8 mb-3 border-b-[1px] border-b-black max-w-[20px]">
            Contact
          </div>
          <div className="flex flex-col">
            <a className="text-[14px] text-[#707070] mb-1 font-medium">BDPA</a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              7 Uyiedo Street
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              Ugbowo, Benin City
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              lodgeeasy@gmail.com
            </a>
            <a className="text-[14px] text-[#707070] mb-1 font-medium">
              +234 814 767 6982
            </a>
          </div>
        </div>
        <div className="socialLinksSect w-full flex flex-row items-center justify-center mt-10">
          <a className="mr-10">
            <FaFacebookF className="text-[24px]" />
          </a>
          <a className="mr-10">
            <AiFillInstagram className="text-[24px]" />
          </a>
          <a>
            <AiFillYoutube className="text-[24px]" />
          </a>
        </div>
        <div className="mt-4 mb-9 w-full flex items-center justify-center font-semibold">
          LodgeEasy &copy; 2023 All rights reserved.
        </div>
      </div>

      <div className="bg-white sticky bottom-0 flex flex-row text-[#545454] justify-between items-center py-3 px-[30%] border-t-[3px] z-20">
        <Link href="/User/Signup">
          <div className="flex flex-col justify-center items-center">
            <LiaUserCircle className="text-[24px]" />
            <div className="text-[12px]"> Register </div>
          </div>
        </Link>
        <Link href="/User/Login">
          <div className="flex flex-col justify-center items-center">
            <LiaUserCircle className="text-[24px]" />
            <div className="text-[12px]"> Login </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
