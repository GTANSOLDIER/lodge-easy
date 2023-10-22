import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function HostelItem(props) {
  const [saved, setSaved] = useState(false);

  return (
    <div
      key={props.id}
      className="hostelItem relative flex flex-col font-nunito overflow-hidden h-[160px] lg:h-[240px] w-[142px] lg:w-[250px]"
    >
      <div
        className="absolute top-2 right-2 z-50"
        onClick={() => setSaved(!saved)}
      >
        {saved ? (
          <AiFillHeart className="text-white text-[14px]" />
        ) : (
          <AiOutlineHeart className="text-white text-[14px]" />
        )}
      </div>
      <Link href={{
        pathname: "/HostelItemOpen",
        query: props, //the name
      }}>
        <div
          className="imageSect rounded-[10px] w-full h-[79px] lg:h-[125px]"
        ></div>
        <div
          className="nameLocation flex flex-row items-center mt-1"
        >
          <div className="hostelName text-[14px] font-semibold whitespace-nowrap overflow-x-hidden">
            {props.name}
          </div>
          <div className="divider mx-[7px] text-[14px] text-[#545454]">|</div>
          <div className="hostelLocation text-[12px] text-[#545454]">
            {props.location}
          </div>
        </div>
        <div
          className="price text-[12px] font-semibold text-[#545454] mt-[2px]"
        >
          &#8358;{props.price}
        </div>
        <div
          className="comments text-[12px] text-[#545454] mt-[2px] leading-[1.35]"
        >
          {props.comment}
        </div>
      </Link>
    </div>
  );
}
