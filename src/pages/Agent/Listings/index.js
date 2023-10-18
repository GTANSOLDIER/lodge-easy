import { useState } from "react";
import Footer from "./Footer";
import HostelItem from "@/pages/HostelItem";
import { hostelArray } from "@/pages/HostelArray";
import { BsHouseAdd } from "react-icons/bs";
import Link from "next/link";

export default function Listings() {
  const [emptyList, setEmptyList] = useState(true);

  return (
    <div className="overflow-scroll pb-[100px]">
      <div className="px-[30px] py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        {" "}
        Listings{" "}
      </div>
      <div className={`${emptyList ? "hidden" : "block"}`}>
        <div className="text-[24px] text-[#545454] text-center font-golos mt-[12px]">
          Oops!
        </div>
        <div className="text-center text-[#9D9D9D] font-nunito text-[14px]">
          You have no apartments Listed!
        </div>
        <div className="w-full flex items-center justify-center mt-[136px]">
          <div className="bg-[#458CA2] text-white px-[20px] py-[10px] rounded-[5px]">
            List Apartment
          </div>
        </div>
      </div>
      <div className={`${emptyList ? "block" : "hidden"}`}>
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
        <Link href="/Agent/Listings/CreateListing">
          <div className="bg-[#458CA2] p-[15px] rounded-[5px] text-[28px] text-white right-[30px] fixed bottom-[80px]">
            <BsHouseAdd />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
