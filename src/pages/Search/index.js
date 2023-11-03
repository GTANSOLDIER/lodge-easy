"use client";
import { LiaUserCircle } from "react-icons/lia";
import { BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import HostelItem from "../HostelItem";
import Link from "next/link";
import { hostelArray } from "../HostelArray";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import lodgeeasyLogo from "../../assets/logo1.png";
import Image from "next/image";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [openApartFilter, setOpenApartFilter] = useState(true);
  const [openLocationFilter, setOpenLocationFilter] = useState(false);
  const [openFeatureFilter, setOpenFeatureFilter] = useState(false);
  const [openAgentFilter, setOpenAgentFilter] = useState(false);
  const [openPriceFilter, setOpenPriceFilter] = useState(false);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    if (typeof search === "string") {
      setSearchValue(search);
    }
    setSearchResponse("showing search results for ");
  }, []);

  return (
    <div className="relative pb-20">
      <div
        className={`block fixed top-0 bg-[#0000001f] ${
          openFilter ? "left-0" : "left-[-100%]"
        } w-full z-40 transition-all duration-300 flex flex-col h-[100vh] items-center justify-center`}
      >
        <div
          className={`w-full max-w-[700px] relative bg-white pb-16 h-[100vh] overflow-y-auto lg:h-[80vh] lg:rounded-t-[10px]`}
        >
          <div className="border-b-[1px] border-b-[#E0E0E0] filterHeader flex flex-row justify-between items-center px-7 mt-4 pb-4">
            <GrClose
              className="text-[20px]"
              onClick={() => setOpenFilter(false)}
            />
            <div className="font-golos text-[20px] font-medium"> Filters </div>
            <div></div>
          </div>
          <div className="filterApartmentType mx-7 py-4 border-b-[1px] border-b-[#E0E0E0]">
            <div className="flex flex-row justify-between items-center text-[#545454]">
              <div className="font-nunito text-[16px] font-normal">
                Apartment Type
              </div>
              <MdKeyboardArrowUp
                className={
                  openApartFilter
                    ? "text-[24px] rotate-0 transition-all duration-300"
                    : "text-[24px] rotate-180 transition-all duration-300"
                }
                onClick={() => setOpenApartFilter(!openApartFilter)}
              />
            </div>
            <div
              className={
                openApartFilter
                  ? "flex flex-col mx-4 md:grid md:grid-cols-3"
                  : "hidden"
              }
            >
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  Self-Contain
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  2-Bedroom
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  3-Bedroom
                </div>
              </div>
              <div className="mt-3 md:mt-[24px] flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  Flat
                </div>
              </div>
            </div>
          </div>
          <div className="filterLocation mx-7 py-4 border-b-[1px] border-b-[#E0E0E0]">
            <div className="flex flex-row justify-between items-center text-[#545454]">
              <div className="font-nunito text-[16px] font-normal">
                Location
              </div>
              <MdKeyboardArrowUp
                className={
                  openLocationFilter
                    ? "text-[24px] rotate-0 transition-all duration-300"
                    : "text-[24px] rotate-180 transition-all duration-300"
                }
                onClick={() => setOpenLocationFilter(!openLocationFilter)}
              />
            </div>
            <div
              className={
                openLocationFilter
                  ? "flex flex-col mx-4 md:grid md:grid-cols-3"
                  : "hidden"
              }
            >
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  Ekosodin
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  BDPA
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  Osasogie
                </div>
              </div>
              <div className="mt-3 md:mt-[24px] flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  Ugbowo
                </div>
              </div>
            </div>
          </div>
          <div className="filterFeatures mx-7 py-4 border-b-[1px] border-b-[#E0E0E0]">
            <div className="flex flex-row justify-between items-center text-[#545454]">
              <div className="font-nunito text-[16px] font-normal">
                Features
              </div>
              <MdKeyboardArrowUp
                className={
                  openFeatureFilter
                    ? "text-[24px] rotate-0 transition-all duration-300"
                    : "text-[24px] rotate-180 transition-all duration-300"
                }
                onClick={() => setOpenFeatureFilter(!openFeatureFilter)}
              />
            </div>
            <div
              className={
                openFeatureFilter
                  ? "flex flex-col mx-4 md:grid md:grid-cols-3"
                  : "hidden"
              }
            >
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  24/7 Light Supply
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  Stand-by Gen
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center justify-start">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] filterCheck"
                />
                <div className="mx-4 text-[14px] font-nunito font-normal text-[#9D9D9D]">
                  4-Car Garage
                </div>
              </div>
            </div>
          </div>
          <div className="filterAgent mx-7 py-4 border-b-[1px] border-b-[#E0E0E0]">
            <div className="flex flex-row justify-between items-center text-[#545454]">
              <div className="font-nunito text-[16px] font-normal">Agent</div>
              <MdKeyboardArrowUp
                className={
                  openAgentFilter
                    ? "text-[24px] rotate-0 transition-all duration-300"
                    : "text-[24px] rotate-180 transition-all duration-300"
                }
                onClick={() => setOpenAgentFilter(!openAgentFilter)}
              />
            </div>
            <div className={openAgentFilter ? "flex flex-col mx-4" : "hidden"}>
              <div className="flex flex-row mt-4 mb-1 items-center justify-center border-[1px] border-[#9D9D9D]">
                <input
                  type="text"
                  placeholder="Enter Agent Name"
                  className="w-[85%] p-2 text-[14px]"
                />
                <FaSearch className="text-[#9D9D9D] w-[15%]" />
              </div>
            </div>
          </div>
          <div className="priceFilter mx-7 py-4 border-b-[1px] border-b-[#E0E0E0]">
            <div className="flex flex-row justify-between items-center text-[#545454]">
              <div className="font-nunito text-[16px] font-normal">
                Price Range
              </div>
              <MdKeyboardArrowUp
                className={
                  openPriceFilter
                    ? "text-[24px] rotate-0 transition-all duration-300"
                    : "text-[24px] rotate-180 transition-all duration-300"
                }
                onClick={() => setOpenPriceFilter(!openPriceFilter)}
              />
            </div>
            <div className={openPriceFilter ? "flex flex-col mx-4" : "hidden"}>
              <div className="flex flex-row mt-4 mb-1 items-center justify-between">
                <div>From:</div>
                <input
                  type="text"
                  placeholder="Min."
                  className="w-[35%] p-2 border-[1px] border-[#9D9D9D] text-[14px]"
                />
                <div>To:</div>
                <input
                  type="text"
                  placeholder="Max."
                  className="w-[35%] p-2 border-[1px] border-[#9D9D9D] text-[14px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`filterFooter w-full max-w-[700px] lg:border-b-[1px] lg:border-b-[#BDBDBD] lg:border-l-[1px] lg:border-l-[#BDBDBD] lg:rounded-b-[10px] px-7 py-3 md:border-r-[1px] md:border-r-[#BDBDBD] flex flex-row items-center justify-between bg-white border-t-[1px] border-t-[#BDBDBD] transition-all duration-300`}
        >
          <div className="text-[#707070] text-[14px] font-nunito font-bold">
            {" "}
            Clear all{" "}
          </div>
          <div
            className="bg-[#458CA2] text-white py-2 px-5 rounded-lg font-bold"
            onClick={() => setOpenFilter(false)}
          >
            {" "}
            Save{" "}
          </div>
        </div>
      </div>

      <div className="px-[20px] lg:hidden flex py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        <Link className="mr-[10px]" href="/">
          <IoIosArrowBack className="text-[24px]" />
        </Link>{" "}
        Search{" "}
      </div>

      <div className="pt-7 px-7 lg:px-[70px] lg:py-[24px] flex items-center justify-between lg:border-b-[4px] lg:border-b-[#EAEAEA]">
        <div className="lg:block hidden">
          <Image
            alt="logo1"
            src={lodgeeasyLogo}
            className="w-[130px] mr-[3px]"
          />
        </div>
        <div className="rounded-md lg:w-[600px] w-full searchBar border-[2px] border-[#bdbdbd] flex flex-row items-center justify-center">
          <AiOutlineSearch className="text-[#BDBDBD] text-[24px] w-[15%]" />
          <input
            type="text"
            placeholder="Search..."
            className="py-2 w-[70%] lg:w-[85%] text-[14px] border-none outline-none"
            onChange={(e) => {
              setSearchValue(e.target.value);
              setSearchResponse("showing search results for ");
            }}
          />
          <BsFilter
            className="text-[24px] w-[15%] text-[#BDBDBD] lg:hidden"
            onClick={() => setOpenFilter(true)}
          />
        </div>
        <div></div>
      </div>

      <div
        onClick={() => setOpenFilter(true)}
        className="hidden lg:flex font-nunito mt-[28px] ml-[30px] text-[16px] px-[20px] py-[10px] border-[1px] border-[#EAEAEA] rounded-[10px] w-[110px]"
      >
        <BsFilter className="text-[20px] mr-[10px]" />
        Filter
      </div>

      <div className="mx-7 mt-7 font-nunito text-[14px] text-[#545454] font-medium">
        {searchResponse}
        {searchValue}
      </div>

      <div className="hostelListings justify-items-center grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-5 lg:mx-[70px] my-3">
        {hostelArray
          .filter((house) =>
            house.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((h) => (
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

      <div className="bg-white fixed w-full bottom-0 flex flex-row text-[#545454] justify-between items-center py-3 px-[30%] border-t-[3px] z-20">
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
    </div>
  );
}
