import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { IoIosListBox } from "react-icons/io";

export default function Footer() {
  return (
    <div className=" flex flex-row text-[#bdbdbd] items-center justify-between fixed bottom-0 w-full px-[30px] py-[10px] border-t-[1px] border-t-[#EAEAEA] bg-white">
      <Link
        href="/Agent/Dashboard"
        className="flex flex-col items-center justify-center"
      >
        <MdDashboard className="text-[24px]" />
        <div className="font-nunito font-bold text-[12px] text-[#BDBDBD]">
          Dashboard
        </div>
      </Link>
      <Link href="/Agent/Listings" className="flex flex-col items-center justify-center">
        <IoIosListBox className="text-[24px] text-[#458CA2]" />
        <div className="font-nunito font-bold text-[12px] text-[#545454]">
          Listings
        </div>
      </Link>
      <Link href="/Agent/Inbox" className="flex flex-col items-center justify-center">
        <BiSolidMessageRoundedDetail className="text-[24px]" />
        <div className="font-nunito font-bold text-[12px] text-[#BDBDBD]">
          Inbox
        </div>
      </Link>
      <Link href="/Agent/Profile" className="flex flex-col items-center justify-center">
        <BiSolidUser className="text-[24px]" />
        <div className="font-nunito font-bold text-[12px] text-[#BDBDBD]">
          Profile
        </div>
      </Link>
    </div>
  );
}
