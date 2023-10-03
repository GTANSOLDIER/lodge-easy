import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { hostelArray } from "./HostelArray";
import HostelItem from "./HostelItem";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

export default function HostelItemOpen() {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const name = query.name;
  const location = query.location;
  const area = query.area;
  const price = query.price;
  const comment = query.comment;

  const [saved, setSaved] = useState(false);
  return (
    <div key={id}>
      <div className="absolute top-3 z-50 px-3 flex items-center justify-between w-full">
        <div className="text-white" onClick={() => router.back()}>
          <AiOutlineClose className="text-[24px] text-white"/>
        </div>
        <div className="" onClick={() => setSaved(!saved)}>
          {saved ? (
            <AiFillHeart className="text-white text-[24px]" />
          ) : (
            <AiOutlineHeart className="text-white text-[24px]" />
          )}
        </div>
      </div>
      <Carousel
        showArrows={true}
        className=""
        autoPlay={true}
        infiniteLoop={true}
        interval={12000}
        showStatus={false}
      >
        <div className="w-full h-[40vh] bg-[url(../assets/houseImg1.jpg)] bg-cover bg-center"></div>
        <div className="w-full h-[40vh] bg-[url(../assets/housePic.png)] bg-cover bg-center"></div>
        <div className="w-full h-[40vh] bg-[url(../assets/img1.webp)] bg-cover bg-center"></div>
        <div className="w-full h-[40vh] bg-[url(../assets/img2.jpg)] bg-cover bg-center"></div>
        <div className="w-full h-[40vh] bg-[url(../assets/img3.jpg)] bg-cover bg-center"></div>
      </Carousel>

      <div className="font-golos font-medium text-[24px] text-[#292929] mt-[20px] ml-[30px] leading-[28px]">
        {name}
      </div>
      <div className="font-golos font-bold text-[16px] text-[#292929] mt-[5px] ml-[30px] leading-[28px]">
        &#8358;{price}
      </div>
      <div className="font-nunito font-medium text-[12px] text-[#9D9D9D] py-[10px] mx-[30px] leading-[13px] border-b-[1px] border-[#AFAFAF]">
        {area},<span className="text-[#6AA3B5] pl-1">{location}</span>
      </div>
      <div className="font-golos font-medium text-[20px] text-[#292929] mt-[20px] ml-[30px] leading-[28px]">
        Listed by, <span className="text-[#6AA3B5]">John Doe</span>
      </div>
      <div className="font-nunito font-normal text-[12px] text-[#9D9D9D] pt-[10px] mx-[30px] leading-[13px]">
        12 rooms Self Contain
      </div>
      <div className="font-nunito font-normal text-[12px] text-[#9D9D9D] pt-[10px] mx-[30px] leading-[13px]">
        {comment}
      </div>
      <div className="font-golos font-medium text-[20px] text-[#292929] py-[10px] pt-[20px] mx-[30px] leading-[28px] border-b-[1px] border-[#AFAFAF]">
        Description
      </div>
      <div className="font-nunito font-normal text-[12px] text-[#9D9D9D] pt-[10px] mx-[30px] leading-[13px]">
        Lorem ipsum dolor sit amet consectetur. Amet vulputate neque id bibendum
        dictum eleifend fames. Lacus venenatis magna ac mauris felis. Hendrerit
        laoreet odio tincidunt nisi in nulla tincidunt enim consectetur.
      </div>
      <div className="font-nunito font-bold text-[14px] text-[#292929] pt-[20px] mx-[30px] leading-[28px]">
        Amenitties
      </div>
      <div className="font-nunito grid grid-cols-2 font-normal text-[12px] text-[#9D9D9D] my-[4px] pb-[20px] mx-[30px] border-b-[1px]">
        <div className="flex flex-row items-center justify-start">
          <div className="w-[8px] h-[8px] bg-[#707070] rounded-full mr-[6px]"></div>
          <div>Personal Balcony</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="w-[8px] h-[8px] bg-[#707070] rounded-full mr-[6px]"></div>
          <div>Personal Balcony</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="w-[8px] h-[8px] bg-[#707070] rounded-full mr-[6px]"></div>
          <div>Personal Balcony</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="w-[8px] h-[8px] bg-[#707070] rounded-full mr-[6px]"></div>
          <div>Personal Balcony</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="w-[8px] h-[8px] bg-[#707070] rounded-full mr-[6px]"></div>
          <div>Personal Balcony</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="w-[8px] h-[8px] bg-[#707070] rounded-full mr-[6px]"></div>
          <div>Personal Balcony</div>
        </div>
      </div>
      <div className="mt-[13px] grid grid-cols-2 px-[23px]">
        {hostelArray.slice(0, 2).map((h) => (
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
  );
}
