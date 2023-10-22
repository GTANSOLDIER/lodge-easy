"use client";
import Image from "next/image";
import logo1 from "../assets/logo1.png";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
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
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.jpg";
import heroImg3 from "../assets/heroImg3.jpg";
import heroImg4 from "../assets/heroImg4.jpg";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative pb-20 lg:pb-0 overflow-hidden">
      {/* page header (logo and nav) */}
      <div className="Header w-full border-[1px] border-[#545454]-500 flex justify-between items-center px-[30px] py-[15px] md:px-[70px] md:py-[24px]">
        <div className="md:hidden"></div>
        <div className="">
          <Image alt="logo1" src={logo1} className="w-[130px] mr-[3px]" />
        </div>
        <div className="flex items-center">
          <div className="hidden items-center md:flex font-golos text-[13px] font-semibold">
            <Link
              href="/User/Login"
              className="p-[10px] rounded-[10px] hover:bg-[#458CA2] hover:text-white transition-all duration-200"
            >
              LOGIN
            </Link>
            <Link
              href="/User/Register"
              className="p-[10px] rounded-[10px] hover:bg-[#458CA2] hover:text-white transition-all duration-200"
            >
              REGISTER
            </Link>
          </div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex md:ml-[24px] ${
              menuOpen
                ? "bg-[#458CA2] shadow-none"
                : "bg-white shadow-sm shadow-black"
            } items-center justify-center p-[7px] md:p-[10px] rounded-md md:rounded-[10px]`}
          >
            <BiSolidDownArrow
              className={`text-[10px] md:text-[11px] transition-all duration-300 ${
                menuOpen ? "rotate-180 text-white" : "rotate-0 text-[#6e6e6e]"
              }`}
            />
            <FaUserAlt
              className={`ml-[7px] md:ml-[15px] transition-all duration-300 text-[10px] md:text-[11px] ${
                menuOpen ? "text-white" : "text-[#6e6e6e]"
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-white z-50 flex flex-col rounded-bl-[10px] font-golos text-[13px] w-[50vw] p-[12px] max-w-[240px] absolute transition-all duration-300 ${
          menuOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <Link
          href="/User/Signup"
          className="text-[14px] font-nunito text-[#545454] p-[12px] w-full hover:bg-[#458CA2] hover:text-white transition-all duration-200"
        >
          Login
        </Link>
        <Link
          href="/User/Signup"
          className="text-[14px] font-nunito text-[#545454] p-[12px] w-full hover:bg-[#458CA2] hover:text-white transition-all duration-200"
        >
          Register
        </Link>
        <div className="border-b-[1px] my-[4px]"></div>
        <Link
          href="/Agent/Signup"
          className="text-[14px] font-nunito text-[#545454] p-[12px] w-full hover:bg-[#458CA2] hover:text-white transition-all duration-200"
        >
          Agent
        </Link>
        <Link
          href="/ComingSoon"
          className="text-[14px] font-nunito text-[#545454] p-[12px] w-full hover:bg-[#458CA2] hover:text-white transition-all duration-200"
        >
          Contact Us
        </Link>
      </div>

      <div className="w-full h-[40vh] md:h-[60vh] lg:h-[90vh] absolute z-40 flex flex-col justify-center items-center text-white text-center">
        <div
          className={`text-[24px] md:text-[36px] lg:text-[52px] font-golos font-normal`}
        >
          Find Your Perfect Home
        </div>
        <div
          className={`font-nunito mt-2 text-[12px] lg:text-[16px] max-w-[85vw] pb-7 heroSectSmallTxt`}
        >
          With just a few clicks, you can find the perfect place to call home.
          Start your search today!
        </div>
        <div className="searchBar w-full max-w-[700px] mt-2 flex flex-row items-center justify-center">
          <div className="overflow-hidden rounded-md flex flex-row items-center justify-center w-[70%]">
            <input
              type="text"
              placeholder="Search by location / house type"
              className="bg-[#f1f1f1] md:w-[88%] w-[85%] h-10 p-3 text-black homeSearchInput text-[12px] lg:text-[16px] outline-none"
            />
            <Link className="md:w-[12%] w-[15%]" href="/Search">
              <button className="flex items-center justify-center bg-[#458CA2] w-full h-10">
                <AiOutlineSearch className="text-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Fade
          duration={10000}
          transitionDuration={500}
          arrows={false}
          autoplay={true}
          infinite={true}
          pauseOnHover={false}
        >
          <div className="w-full h-[40vh] md:h-[60vh] lg:h-[90vh]">
            <Image src={heroImg1} layout="fill" />
          </div>
          <div className="w-full h-[40vh] md:h-[60vh] lg:h-[90vh]">
            <Image src={heroImg2} layout="fill" />
          </div>
          <div className="w-full h-[40vh] md:h-[60vh] lg:h-[90vh]">
            <Image src={heroImg3} layout="fill" />
          </div>
          <div className="w-full h-[40vh] md:h-[60vh] lg:h-[90vh]">
            <Image src={heroImg4} layout="fill" />
          </div>
        </Fade>
      </div>

      <div className="mt-20 lg:mt-[55px] flex flex-col items-center justify-center">
        <div
          className={`text-[22px] lg:text-[24px] font-golos lg:leading-[29px] font-semibold text-[#292929]`}
        >
          Let's get started
        </div>
        <div className="text-[12px] lg:text-[16px] w-[70%] text-center mt-[4px] font-nunito font-normal text-[#707070]">
          LodgeEasy is the ultimate off-campus housing solution for{" "}
          <span className="text-[#458CA2] font-bold"> UNIBEN </span> students
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:mt-[40px] lg:items-stretch items-center justify-center">
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="grid grid-cols-2 w-[50%] max-w-[408px] mt-[20px] lg:mt-0">
            <Image
              src={home1}
              className="mr-[8px] w-full h-auto max-w-[200px]"
            />
            <Image src={home2} className="w-full h-auto max-w-[200px]" />
            <Image
              src={home3}
              className="mt-2 relative w-full z-10 h-auto col-span-2"
            />
          </div>
        </div>
        <div className="mt-20 lg:mt-0 lg:w-[50%] flex flex-col text-center items-center justify-center">
          <div className="text-[22px] lg:text-[24px] text-[#545454] font-semibold font-golos">
            How does it work
          </div>
          <div className="text-[12px] lg:text-[16px] w-[70%] text-[#545454] mt-3 font-nunito font-normal">
            Embark on a smooth journey to off-campus living bliss!
          </div>
          <div className="mt-4 flex flex-col items-center justify-center w-full">
            <div className="w-[70%]">
              <div className="flex flex-row justify-start items-center">
                <div className="bg-[#458CA2] p-2 rounded-full border-[#ECF4F6] border-4 mr-5">
                  <HiOutlineMail className="text-[22px] text-white" />
                </div>
                <div className="text-[16px] lg:text-[20px] font-bold font-nunito text-[#545454]">
                  Create an Account
                </div>
              </div>
              <div className="font-nunito font-normal lg:text-[16px] text-[#707070] pl-10 ml-[22px] border-l-4 text-left border-l-[#458CA2] text-[12px] leading-normal -mt-2 pb-2">
                Gain access to a vast database of student-tailored apartments.
                Your path to comfort and convenience starts here!
              </div>
              <div className="flex flex-row justify-start items-center">
                <div className="bg-[#458CA2] p-2 rounded-full border-[#ECF4F6] border-4 mr-5">
                  <HiOutlineMail className="text-[22px] text-white" />
                </div>
                <div className="text-[16px] lg:text-[20px] font-bold font-nunito text-[#545454]">
                  Search for an apartment
                </div>
              </div>
              <div className="text-[#707070] lg:text-[16px] font-nunito font-normal pl-10 ml-[22px] border-l-4 text-left -mt-2 pb-2 border-l-[#458CA2] text-[12px] leading-normal">
                Our smart tech finds your perfect fit, no more irrelevant
                listings – we've got you covered!
              </div>
              <div className="flex flex-row justify-start items-center">
                <div className="bg-[#458CA2] p-2 rounded-full border-[#ECF4F6] border-4 mr-5">
                  <HiOutlineMail className="text-[22px] text-white" />
                </div>
                <div className="text-[16px] lg:text-[20px] font-bold font-nunito text-[#545454]">
                  Request an inspection
                </div>
              </div>
              <div className="text-[#707070] lg:text-[16px] font-nunito font-normal pl-10 ml-[26px] text-left border-l-[#458CA2] -mt-2 pb-2 text-[12px] leading-normal">
                Excited about a potential home? Request an Inspection, and our
                Agents will arrange a viewing at your convenience.
              </div>
            </div>
            <Link href="/User/Signup">
              <button className="font-nunito font-bold mt-4 ml-6 py-3 px-7 bg-[#458CA2] text-white rounded-lg">
                {" "}
                Get Started!{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center px-4 mt-20 lg:mt-[145px]">
        <div className="text-center lg:text-[24px] text-[20px] lg:leading-[29px] font-semibold font-golos text-[#545454]">
          Discover our New Listings
        </div>
        <div className="text-center font-nunito lg:text-[16px] font-normal mt-[4px] text-[14px] text-[#545454]">
          Make Lodge Easy your ultimate destination for a seamless and
          stress-free apartment hunting experience. Start exploring now!
        </div>
        <div className="hostelListings mt-4 lg:mt-[40px] gap-x-[16px] mx-[30px] lg:mx-[40px] lg: lg:gap-x-[70px] gap-y-[24px] md:mt-[40px] grid grid-cols-2 md:grid-cols-3 md:items justify-items-end">
          {hostelArray.map((h) => (
            <HostelItem
              area={h.area}
              id={h.id}
              name={h.name}
              location={h.location}
              price={h.price}
              comment={h.comment}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="searchNowSect w-full max-w-[860px] lg:rounded-[10px] font-nunito mt-24 text-white text-center flex flex-col items-center justify-center p-8">
          <div className="text-[14px] lg:text-[16px] leading-5">
            Your search for student apartments near your school has never been
            easier! Our database of available apartments is updated regularly,
            so you can be sure you're seeing the latest listings. Our filters
            make it simple to narrow down your search by price, location, and
            amenities.
          </div>
          <div className="text-[14px] lg:text-[16px] mt-4 font-nunito">
            Check out the available apartments below and find your new home
            today!
          </div>
          <Link href="/Search">
            <button className="mt-6 font-nunito bg-[#458CA2] py-3 px-7 rounded-lg font-semibold flex items-center justify-center">
              Search now! <AiOutlineSearch className="text-[16px] ml-[4px]" />
            </button>
          </Link>
        </div>
      </div>

      <div className="addServSect pt-16 lg:pt-[100px] bg-[#ebebeb] lg:bg-white">
        <div className="mb-10 flex flex-col items-center justify-center">
          <div className="font-semibold text-[22px] lg:text-[24px] lg:leading-[29px] font-golos">
            Additional Services
          </div>
          <div className="text-[14px] lg:text-[16px] w-[70%] text-center lg:leading-[22px] font-nunito mt-3 lg:mt-[4px]">
            Lorem ipsum dolor sit amet consectetur. Nisl mi commodo viverra et
            malesuada et id.
          </div>
        </div>

        <div className="addServListings px-4 py-8 flex flex-col lg:flex-row items-center justify-center">
          <div className="addServ flex flex-col items-center max-w-[400px] max-h-[335px] shadow lg:shadow-md lg:shadow-black shadow-black justify-center lg:mx-[30px] text-center py-6 px-5 mt-5 bg-white rounded-lg mb-14">
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
          <div className="addServ flex shadow lg:shadow-md lg:shadow-black shadow-black flex-col max-w-[400px] max-h-[335px] items-center justify-center mt-5 lg:mx-[30px] text-center py-6 px-5 bg-white rounded-lg mb-14">
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
          <div className="addServ flex shadow lg:shadow-md shadow-black lg:shadow-black flex-col max-w-[400px] max-h-[335px] items-center justify-center text-center lg:mx-[30px] py-6 px-5 mt-5 bg-white rounded-lg mb-14">
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

      <div className="footer px-6 lg:px-[50px] lg:pb-[25px] pt-10 lg:pt-[120px] lg:bg-black">
        <div className="lg:flex lg:flex-row-reverse justify-between items-center">
          <div className="subNewsLetterSect lg:w-[50%] lg:max-w-[600px] lg:ml-[50px]">
            <div className="text-[14px] text-[#707070] lg:text-white lg:text-[20px]">
              Subscribe to our Newsletter
            </div>
            <div className="bg-[#DDDDDD] mt-2 flex flex-row items-center justify-between px-4">
              <input
                type="email"
                placeholder="Enter your email:"
                className="bg-[#DDDDDD] py-4 w-[84%] lg:w-full"
              />
              <HiOutlineMail className="text-[30px] lg:text-white" />
            </div>
          </div>
          <div className="lg:flex lg:flex-row items-center justify-between lg:justify-center lg:items-start w-[50%]">
            <div className="supportSect font-poppins">
              <div className="text-[20px] lg:text-white lg:mr-[10vw] font-normal lg:text-[17px] mt-12 lg:mt-0 mb-3 border-b-[1px] border-b-black lg:border-b-white max-w-[20px] font-poppins">
                Support
              </div>
              <div className="flex flex-col">
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  About us
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Privacy
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Terms of use
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="customerCareSect font-poppins">
              <div className="whitespace-nowrap lg:text-white lg:mr-[15vw] text-[20px] lg:text-[17px] font-normal font-poppins mt-8 lg:mt-0 mb-3 border-b-[1px] border-b-black lg:border-b-white max-w-[20px]">
                Customer care
              </div>
              <div className="flex flex-col">
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  FAQ
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Complaints
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Inquiry
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Payment
                </a>
              </div>
            </div>
            <div className="contactSect font-poppins">
              <div className="text-[20px] lg:text-white font-normal lg:text-[17px] font-poppins mt-8 lg:mt-0 mb-3 border-b-[1px] border-b-black lg:border-b-white max-w-[20px]">
                Contact
              </div>
              <div className="flex flex-col">
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  BDPA
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  7 Uyiedo Street
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  Ugbowo, Benin City
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  lodgeeasy@gmail.com
                </a>
                <a className="text-[12px] text-[#707070] lg:text-[#595858] mb-1 font-medium">
                  +234 814 767 6982
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="socialLinksSect w-full flex flex-row items-center justify-center mt-10">
          <a className="mr-10">
            <FaFacebookF className="text-[24px] lg:text-white" />
          </a>
          <a className="mr-10">
            <AiFillInstagram className="text-[24px] lg:text-white" />
          </a>
          <a>
            <AiFillYoutube className="text-[24px] lg:text-white" />
          </a>
        </div>
        <div className="mt-4 mb-9 lg:mb-0 w-full flex items-center lg:text-white justify-center font-semibold">
          LodgeEasy &copy; 2023 All rights reserved.
        </div>
      </div>

      <div className="bg-white md:hidden fixed w-full bottom-0 flex flex-row text-[#545454] justify-between items-center py-3 px-[30%] border-t-[3px] z-20">
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
