import Image from "next/image";
import empty from "../../../../assets/empty icon.png";
import { useState } from "react";
import Link from "next/link";
import {MdDashboard} from "react-icons/md";
import {BiSolidMessageRoundedDetail} from "react-icons/bi";
import {BiSolidUser} from "react-icons/bi";
import {BiArrowBack} from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";

export default function ApprovedInspections() {
  const [ApprovedList, setApprovedList] = useState([
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-001",
      name: "2 Bedroom Flat at Ekosodin",
      date: "28/02/2023",
      status: "Approved",
    },
    {
      serialNumber: "INS43-002",
      name: "Self Contain at BDPA",
      date: "28/02/2023",
      status: "Approved",
    },
  ]);

  return (
    <div className="pb-20">
      <Link href="/User/UserDashboard">
      <div className="flex items-center font-nunito font-bold text-[16px] px-5 py-4 border-b-[1px] border-b-[#EAEAEA] text-[#545454]">
        <BiArrowBack size={26} className="mr-2"/> Back to Dashboard
      </div>
      </Link>
      <div className="text-[16px] font-nunito font-bold px-12 py-2 text-[#545454]">
        {" "}
        Approved Inspections{" "}
      </div>
      <div className="w-full px-7">
        <div className="border-[1px] border-[#EAEAEA] rounded min-h-[70vh] overflow-scroll">
          <div className={ApprovedList.length <= 0 ? "flex flex-col w-full h-[70vh] items-center justify-center" : "hidden"}>
            <Image src={empty} alt="emptyIcon" className="w-[100px] opacity-5"/>
            <div className="text-[#EAEAEA]">Empty</div>
          </div>
          <table className={ApprovedList.length <= 0 ? "hidden" : "dashboardTable min-w-[150vw] text-center"}>
            <tr>
              <th className="pt-[15px] pb-[15px]"> S/N </th>
              <th className="pt-[15px] pb-[15px]"> Name </th>
              <th className="pt-[15px] pb-[15px]"> Date </th>
              <th className="pt-[15px] pb-[15px]"> Status </th>
            </tr>
            {ApprovedList.map((i) => (
                <tr>
                    <td className="py-[10px] px-[10px]">{i.serialNumber}</td>
                    <td className="py-[10px] px-[10px]">{i.name}</td>
                    <td className="py-[10px] px-[10px]">{i.date}</td>
                    <td className="py-[10px] px-[10px] flex flex-row items-center justify-center"><div className="w-[10px] h-[10px] rounded-full bg-[#00C781] mr-[10px]"></div> {i.status}</td>
                </tr>
            ))}
          </table>
        </div>
      </div>

      <div className=" flex flex-row text-[#bdbdbd] items-center justify-between fixed bottom-0 w-full px-[30px] py-[10px] border-t-[1px] border-t-[#EAEAEA] bg-white">
        <Link href="/User/UserDashboard" className="flex flex-col items-center justify-center">
          <MdDashboard className="text-[24px] text-[#458CA2]" />
          <div className="font-nunito font-bold text-[12px] text-[#545454]">
            Dashboard
          </div>
        </Link>
        <Link href="" className="flex flex-col items-center justify-center">
          <AiFillHeart className="text-[24px]" />
          <div className="font-nunito font-bold text-[12px] text-[#BDBDBD]">
            Saved
          </div>
        </Link>
        <Link href="" className="flex flex-col items-center justify-center">
          <BiSolidMessageRoundedDetail className="text-[24px]" />
          <div className="font-nunito font-bold text-[12px] text-[#BDBDBD]">
            Inbox
          </div>
        </Link>
        <Link href="" className="flex flex-col items-center justify-center">
          <BiSolidUser className="text-[24px]" />
          <div className="font-nunito font-bold text-[12px] text-[#BDBDBD]">
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
}
