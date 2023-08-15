import Image from "next/image";
import empty from "../../../assets/empty icon.png";
import { useState } from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import allListIcon from "../../../assets/allList.svg";
import completedListIcon from "../../../assets/completedList.svg";
import pendingListIcon from "../../../assets/pendingList.svg";
import cancelledListIcon from "../../../assets/cancelledList.svg";
import Footer from "./Footer";

export default function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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

  const numberOfAll = inspList.filter((list) =>
    list.status.toLowerCase().includes("")
  ).length;

  const numberOfCompleted = inspList.filter((list) =>
    list.status.toLowerCase().includes("completed")
  ).length;

  const numberOfPending = inspList.filter((list) =>
    list.status.toLowerCase().includes("pending")
  ).length;

  const numberOfCancelled = inspList.filter((list) =>
    list.status.toLowerCase().includes("cancelled")
  ).length;

  return (
    <div className="overflow-x-hidden mb-16">
      <div className="h-[64px] relative flex justify-between items-center font-nunito font-bold text-[16px] px-5 py-4 border-b-[1px] border-b-[#EAEAEA] text-[#545454]">
        <span>Dashboard</span>
        <span
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {" "}
          {!showMenu ? (
            <CgMenuRight color="#545454" size={32} />
          ) : (
            <GrClose color="#545454" size={24} />
          )}{" "}
        </span>
        <span
          className={`generalMenu flex flex-col w-[50vw] rounded-bl absolute top-[64px] items-center border-[1px] border-[#eaeaea] bg-white transition-all ${
            showMenu ? "right-0" : "-right-[100%]"
          }`}
        >
          <Link
            className="pt-8 py-6 border-b-[1px] w-full text-center"
            href="/"
          >
            Home
          </Link>
          <Link className="py-6 border-b-[1px] w-full text-center" href="/blog">
            Blog
          </Link>
          <Link
            className="py-6 border-b-[1px] w-full text-center"
            href="/store"
          >
            Store
          </Link>
          <Link className="py-6 pb-8" href="/support">
            Support
          </Link>
        </span>
      </div>
      <div className=" mx-7 py-[18px] mr-7 overflow-scroll">
        <div className="min-w-[150vw] flex flex-row">
          <div
            className="allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row"
            onClick={() => setSearchValue("")}
          >
            <div className="bg-[#458CA2] w-[7px] rounded-l-[10px]"></div>
            <div className={`w-[95%] flex flex-col justify-between ${searchValue == "" ? "pt-[12px]" : "py-[12px]"}`}>
              <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                All Inspections
              </div>
              <div className="flex flex-row items-center justify-start pl-[24px]">
                <div className="w-[40px] h-[40px] bg-[#458CA2] flex items-center justify-center rounded-full">
                  <Image src={allListIcon} alt="allListIcon" />
                </div>
                <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                  {numberOfAll < 10 ? `0${numberOfAll}` : `${numberOfAll}`}
                </div>
              </div>
              <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                <span className="text-[#458CA2]"> +4% </span> total inspections
                this month
              </div>
              <div className={searchValue == "" ? "bg-[#458CA2] h-[7px] w-[152px] rounded-br-lg" : "hidden"}></div>
            </div>
          </div>
          <div
            className="ml-[24px] allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row"
            onClick={() => setSearchValue("Completed")}
          >
            <div className="bg-[#33D29A] w-[7px] rounded-l-[10px]"></div>
            <div className={`w-[95%] flex flex-col justify-between ${searchValue == "Completed" ? "pt-[12px]" : "py-[12px]"}`}>
              <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                Completed Inspections
              </div>
              <div className="flex flex-row items-center justify-start pl-[24px]">
                <div className="w-[40px] h-[40px] bg-[#00C781] flex items-center justify-center rounded-full">
                  <Image src={completedListIcon} alt="completedListIcon" />
                </div>
                <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                  {numberOfCompleted < 10
                    ? `0${numberOfCompleted}`
                    : `${numberOfCompleted}`}
                </div>
              </div>
              <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                <span className="text-[#458CA2]"> +4% </span> total inspections
                this month
              </div>
              <div className={searchValue == "Completed" ? "bg-[#00C781] h-[7px] w-[152px] rounded-br-lg" : "hidden"}></div>
            </div>
          </div>
          <div
            className="ml-[24px] allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row"
            onClick={() => setSearchValue("Pending")}
          >
            <div className="bg-[#FFBB38] w-[7px] rounded-l-[10px]"></div>
            <div className={`w-[95%] flex flex-col justify-between ${searchValue == "Pending" ? "pt-[12px]" : "py-[12px]"}`}>
              <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                Pending Inspections
              </div>
              <div className="flex flex-row items-center justify-start pl-[24px]">
                <div className="w-[40px] h-[40px] bg-[#FFBB38] flex items-center justify-center rounded-full">
                  <Image src={pendingListIcon} alt="pendingListIcon" />
                </div>
                <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                  {numberOfPending < 10
                    ? `0${numberOfPending}`
                    : `${numberOfPending}`}
                </div>
              </div>
              <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                <span className="text-[#458CA2]"> +4% </span> total inspections
                this month
              </div>
              <div className={searchValue == "Pending" ? "bg-[#FFBB38] h-[7px] w-[152px] rounded-br-lg" : "hidden"}></div>
            </div>
          </div>
          <div
            className="ml-[24px] allInspections rounded-[10px] w-[160px] h-[140px] border-[1px] border-[#EAEAEA] flex flex-row"
            onClick={() => setSearchValue("Cancelled")}
          >
            <div className="bg-[#9D9D9D] w-[7px] rounded-l-[10px]"></div>
            <div className={`w-[95%] flex flex-col justify-between ${searchValue == "Cancelled" ? "pt-[12px]" : "py-[12px]"}`}>
              <div className="text-[10px] font-nunito font-medium text-[#707070] pl-[27px]">
                Cancelled Inspections
              </div>
              <div className="flex flex-row items-center justify-start pl-[24px]">
                <div className="w-[40px] h-[40px] bg-[#9D9D9D] flex items-center justify-center rounded-full">
                  <Image src={cancelledListIcon} alt="cancelledListIcon" />
                </div>
                <div className="font-golos font-medium text-[24px] text-[#545454] pl-[18px]">
                  {numberOfCancelled < 10
                    ? `0${numberOfCancelled}`
                    : `${numberOfCancelled}`}
                </div>
              </div>
              <div className="text-[10px] pt-[12px] mx-[10px] whitespace-nowrap font-nunito font-medium text-[#9D9D9D] border-t-[1px] border-t-[#EAEAEA] overflow-hidden">
                <span className="text-[#458CA2]"> +4% </span> total inspections
                this month
              </div>
              <div className={searchValue == "Cancelled" ? "bg-[#9D9D9D] h-[7px] w-[152px] rounded-br-lg" : "hidden"}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-7">
        <div className="min-w-[85vw] border-[1px] px-2 border-[#EAEAEA] rounded min-h-[40vh] pl-[15px] whitespace-nowrap overflow-x-scroll">
          <div
            className={
              inspList.filter((list) =>
                list.status.toLowerCase().includes(searchValue.toLowerCase())
              ).length <= 0
                ? "flex flex-col w-full h-[40vh] items-center justify-center"
                : "hidden"
            }
          >
            <Image
              src={empty}
              alt="emptyIcon"
              className="w-[100px] opacity-5"
            />
            <div className="text-[#EAEAEA] mt-3">
              No {searchValue.toLowerCase()} inspections so far.
            </div>
          </div>
          <table
            className={
              inspList.filter((list) =>
                list.status.toLowerCase().includes(searchValue.toLowerCase())
              ).length <= 0
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
            {inspList
              .filter((list) =>
                list.status.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((i) => (
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

      <Footer />
    </div>
  );
}
