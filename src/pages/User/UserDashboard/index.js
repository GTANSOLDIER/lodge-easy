import Image from "next/image";
import empty from "../../../assets/empty icon.png";
import { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import allListIcon from "../../../assets/allList.svg";
import completedListIcon from "../../../assets/completedList.svg";
import pendingListIcon from "../../../assets/pendingList.svg";
import cancelledListIcon from "../../../assets/cancelledList.svg";

export default function UserDashboard() {
  const [showMenu, setShowMenu] = useState(false)
  const [inspList, setInspList] = useState([
    {
      serialNumber: "1",
      name: "Brentfield Lodge",
      status: "Completed",
    },
    {
      serialNumber: "2",
      name: "Beverly Hills Hostel",
      status: "Pending",
    },
    {
      serialNumber: "3",
      name: "Raging Pheonix Lodge",
      status: "Completed",
    },
    {
      serialNumber: "4",
      name: "Haunted House",
      status: "Cancelled",
    },
  ]);

  return (
    <div className="overflow-x-hidden">
      <div className=" relative flex justify-between items-center font-nunito font-bold text-[16px] px-5 py-4 border-b-[1px] border-b-[#EAEAEA] text-[#545454]">
        <span>Dashboard</span>
        <span onClick={()=> {
          setShowMenu(!showMenu)
        }}> {
          !showMenu ? (<CgMenuRight color="#545454" size={32}/>) : (<GrClose color="#545454" size={24}/>)
        }  </span>
        <span className={`generalMenu flex flex-col w-[50vw] rounded-bl absolute top-14 right-0 items-center bg-[#EAEAEA] transition-all ${showMenu ? 'right-0' : '-right-[200px]'}`}>
          <Link className="pt-8 py-6" href="/">Home</Link>
          <Link className="py-6" href="/blog">Blog</Link>
          <Link className="py-6" href="/store">Store</Link>
          <Link className="py-6 pb-8" href="/support">Support</Link>
        </span>
      </div>
      <div className=" mx-7 py-[18px] mr-7 overflow-scroll">
        <div className="min-w-[150vw] flex flex-row">
          <Link href="">
            <div className="allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row">
              <div className="bg-[#458CA2] w-[7px] rounded-l-[10px]"></div>
              <div className="w-[95%] flex flex-col justify-between py-[12px]">
                <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                  ALL Inspections
                </div>
                <div className="flex flex-row items-center justify-start pl-[24px]">
                  <div className="w-[40px] h-[40px] bg-[#458CA2] flex items-center justify-center rounded-full">
                    <Image src={allListIcon} alt="allListIcon" />
                  </div>
                  <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                    59
                  </div>
                </div>
                <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                  <span className="text-[#458CA2]"> +4% </span> total
                  inspections this month
                </div>
              </div>
            </div>
          </Link>
          <Link href="/User/UserDashboard/ApprovedInspections" className="ml-[24px]">
            <div className="allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row">
              <div className="bg-[#33D29A] w-[7px] rounded-l-[10px]"></div>
              <div className="w-[95%] flex flex-col justify-between py-[12px]">
                <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                  Completed Inspections
                </div>
                <div className="flex flex-row items-center justify-start pl-[24px]">
                  <div className="w-[40px] h-[40px] bg-[#00C781] flex items-center justify-center rounded-full">
                    <Image src={completedListIcon} alt="completedListIcon" />
                  </div>
                  <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                    44
                  </div>
                </div>
                <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                  <span className="text-[#458CA2]"> +4% </span> total
                  inspections this month
                </div>
              </div>
            </div>
          </Link>
          <Link href="" className="ml-[24px]">
            <div className="allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row">
              <div className="bg-[#FFBB38] w-[7px] rounded-l-[10px]"></div>
              <div className="w-[95%] flex flex-col justify-between py-[12px]">
                <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                  Pending Inspections
                </div>
                <div className="flex flex-row items-center justify-start pl-[24px]">
                  <div className="w-[40px] h-[40px] bg-[#FFBB38] flex items-center justify-center rounded-full">
                    <Image src={pendingListIcon} alt="pendingListIcon" />
                  </div>
                  <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                    12
                  </div>
                </div>
                <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                  <span className="text-[#458CA2]"> +4% </span> total
                  inspections this month
                </div>
              </div>
            </div>
          </Link>
          <Link href="" className="ml-[24px]">
            <div className="allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row">
              <div className="bg-[#9D9D9D] w-[7px] rounded-l-[10px]"></div>
              <div className="w-[95%] flex flex-col justify-between py-[12px]">
                <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                  Cancelled Inspections
                </div>
                <div className="flex flex-row items-center justify-start pl-[24px]">
                  <div className="w-[40px] h-[40px] bg-[#9D9D9D] flex items-center justify-center rounded-full">
                    <Image src={cancelledListIcon} alt="cancelledListIcon" />
                  </div>
                  <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                    03
                  </div>
                </div>
                <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                  <span className="text-[#458CA2]"> +4% </span> total
                  inspections this month
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full px-7">
        <div className="border-[1px] px-2 border-[#EAEAEA] rounded min-h-[40vh] pl-[15px]">
          <div
            className={
              inspList.length <= 0
                ? "flex flex-col w-full h-[40vh] items-center justify-center"
                : "hidden"
            }
          >
            <Image
              src={empty}
              alt="emptyIcon"
              className="w-[100px] opacity-5"
            />
            <div className="text-[#EAEAEA]">Empty</div>
          </div>
          <table
            className={
              inspList.length <= 0
                ? "hidden"
                : "dashboardTable text-center font-nunito text-[14px] font-medium text-[#707070]"
            }
          >
            <tr>
              <td colspan="2" className="text-left py-[15px]">
                Inspections
              </td>
            </tr>
            <tr>
              <th className="pt-[7px] pb-[23px]"> S/N </th>
              <th className="pt-[7px] pb-[23px]"> Name </th>
              <th className="pt-[7px] pb-[23px]"> Status </th>
            </tr>
            {inspList.map((i) => (
              <tr>
                <td className="py-[10px] px-[10px]">{i.serialNumber}</td>
                <td className="py-[10px] px-[10px]">{i.name}</td>
                <td className="py-[10px] px-[10px] flex flex-row items-center justify-start">
                  <div
                    className={
                      i.status == "Completed"
                        ? "w-[10px] h-[10px] rounded-full bg-[#00C781] mr-[10px]"
                        : "hidden"
                    }
                  ></div>
                  <div
                    className={
                      i.status == "Pending"
                        ? "w-[10px] h-[10px] rounded-full bg-[#FFBB38] mr-[10px]"
                        : "hidden"
                    }
                  ></div>
                  <div
                    className={
                      i.status == "Cancelled"
                        ? "w-[10px] h-[10px] rounded-full bg-[#9D9D9D] mr-[10px]"
                        : "hidden"
                    }
                  ></div>{" "}
                  {i.status}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <div className=" flex flex-row text-[#BDBDBD] items-center justify-between fixed bottom-0 w-full px-[30px] py-[10px] border-t-[1px] border-t-[#EAEAEA] bg-white">
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
