import Footer from "./Footer";
import { useState } from "react";
import Link from "next/link";
import { hostelArray } from "@/pages/HostelArray";
import HostelItem from "@/pages/HostelItem";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";

export default function ProfileDetails() {
  const [online, checkOnline] = useState(true);
  const router = useRouter();

  return (
    <div className="pb-[80px]">
      <div className="flex px-[20px] py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        <Link href="/Agent/Profile" className="mr-[10px]">
          <IoIosArrowBack className="text-[24px]" />
        </Link>{" "}
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
      <div className="mx-[30px] flex justify-center items-end py-[12px] border-b-[1px] border-[#E0E0E0]">
        <div className="">
          <StarRatings rating={3} starDimension="24px" starSpacing="2px" />
        </div>
        <div className="text-[16px] leading-[20px] font-nunito font-semibold text-[#6AA3B5] ml-[14px]">
          {" "}
          5 reviews{" "}
        </div>
      </div>
      <div className="flex justify-between items-center mt-[12px] px-[30px]">
        <div className="font-golos font-medium text-[24px] text-[#292929]">
          John Doe
        </div>
        <div className="text-[#545454] font-nunito font-semibold text-[16px]">
          AGT-064
        </div>
      </div>
      <div className="font-nunito font-normal text-[14px] text-[#292929] px-[30px] mt-[6px] mb-[12px]">
        No. 2 St. Peterson Square, Ekosodin
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between border-y-[1px] border-y-[#E0E0E0]">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Email Address
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          jnddee@mailg.com
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between border-b-[1px] border-b-[#E0E0E0]">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Phone number
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          +234-801-234-5678
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between border-b-[1px] border-b-[#E0E0E0]">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Agency
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          F&H Agency
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between border-b-[1px] border-b-[#E0E0E0]">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          C.A.C
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          BCH12890
        </div>
      </div>

      <div className="mx-[30px] border-b-[1px] border-b-[#E0E0E0] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          About me
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          Lorem ipsum dolor sit amet consectetur. Ut vestibulum risus in sem
          commodo odio ut vitae. Sed amet sit proin amet.
        </div>
      </div>

      <div className="px-[30px] mt-[24px] font-nunito font-medium text-[16px] text-[#292929]">
        Agency Information
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Name
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          F&H Agency
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Location
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          Herald street
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Contact Number
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          +234-801-234-5678
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Email Address
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[16px] text-[#292929]">
          agency@email.com
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between border-b-[1px] border-[#E0E0E0]">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-normal pb-[12px]">
          Years of Experience
        </div>
        <div className="pb-[24px] font-nunito font-medium text-[16px] text-[#292929]">
          5
        </div>
      </div>

      <div className="pt-[12px]">
        <div className="text-[#458CA2] px-[30px] text-[16px] font-bold font-nunito">
          Apartments Listed
        </div>
        <div className="grid grid-cols-2 px-[23px]">
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

      <Footer />
    </div>
  );
}
