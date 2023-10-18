import { FiUpload } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateListing() {
  const router = useRouter();

  return (
    <div>
      <div className="px-[30px] py-[20px] flex font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        <div className="mr-[10px]" onClick={() => router.back()}>
          <IoIosArrowBack className="text-[24px]" />
        </div>{" "}
        Create Listing{" "}
      </div>
      <div className="mx-[30px] my-[12px] border-[1px] border-[#EAEAEA] p-[12px]">
        <div className="grid-cols-3 inline-grid w-full justify-items-center">
          <div className="bg-[#D9D9D9] w-[21vw] my-[5px] h-[21vw] "></div>
          <div className="bg-[#D9D9D9] w-[21vw] my-[5px] h-[21vw] "></div>
          <div className="bg-[#D9D9D9] w-[21vw] my-[5px] h-[21vw] "></div>
          <div className="bg-[#D9D9D9] w-[21vw] my-[5px] h-[21vw] "></div>
          <div className="bg-[#D9D9D9] w-[21vw] my-[5px] h-[21vw] "></div>
        </div>
        <div className="w-full mt-[24px] font-nunito font-bold text-[14px] text-[#545454] flex flex-row items-center justify-center border-[1px] border-[#707070] py-[8px] rounded-md">
          <div className="mr-[8px]"> Click here to add pictures </div>
          <FiUpload />
        </div>
      </div>
      <div className="border-b-[1px] border-[#EAEAEA] mx-[30px]"></div>
      <div className="border-[1px] my-[12px] mx-[30px] border-[#EAEAEA] p-[12px] rounded-[10px] text-left">
        <div className="text-[#545454] mb-[12px] font-nunito font-bold text-[16px]">
          Fill All
        </div>
        <div className="mb-[4px]">
          <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
            Apartment Name
          </div>
          <input
            placeholder="Name"
            className="border-[1px] text-[14px] p-[16px] border-[#545454] rounded-[5px] w-full h-[40px]"
          />
        </div>
        <div className="mb-[4px]">
          <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
            Apartment Address
          </div>
          <input
            placeholder="Address"
            className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
          />
        </div>
        <div className="mb-[4px]">
          <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
            Price
          </div>
          <input className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]" />
        </div>
        <div className="mb-[4px]">
          <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
            Location
          </div>
          <input className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]" />
        </div>
        <div className="mb-[4px]">
          <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
            Apartment Type
          </div>
          <input
            placeholder=""
            className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
          />
        </div>
        <div className="mb-[4px]">
          <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
            Description
          </div>
          <textarea className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full min-h-[240px]" />
        </div>
      </div>
      <div className="border-b-[1px] border-[#EAEAEA] mx-[30px]"></div>
      <div className="border-[1px] my-[12px] mx-[30px] border-[#EAEAEA] p-[12px] rounded-[10px]">
        <div className="my-[12px] font-nunito text-[14px] text-[#545454] font-semibold">
          Ammenities
        </div>
        <div className="font-nunito grid grid-cols-2 justify-items-center font-normal text-[12px] text-[#545454]">
          <div className="flex flex-row items-center justify-start mb-[12px]">
            <input type="checkbox" className="mr-[12px]"/>
            <div>Personal Balcony</div>
          </div>
          <div className="flex flex-row items-center justify-start mb-[12px]">
            <input type="checkbox" className="mr-[12px]"/>
            <div>Personal Balcony</div>
          </div>
          <div className="flex flex-row items-center justify-start mb-[12px]">
            <input type="checkbox" className="mr-[12px]"/>
            <div>Personal Balcony</div>
          </div>
          <div className="flex flex-row items-center justify-start mb-[12px]">
            <input type="checkbox" className="mr-[12px]"/>
            <div>Personal Balcony</div>
          </div>
          <div className="flex flex-row items-center justify-start mb-[12px]">
            <input type="checkbox" className="mr-[12px]"/>
            <div>Personal Balcony</div>
          </div>
          <div className="flex flex-row items-center justify-start mb-[12px]">
            <input type="checkbox" className="mr-[12px]"/>
            <div>Personal Balcony</div>
          </div>
        </div>
      </div>
      <div className="px-[30px] w-full">
        <Link href="/Agent/Listings/AgentHostelItemOpen">
          <div className="mt-[24px] mb-[32px] w-full text-center bg-[#458CA2] text-white py-[8px] rounded-[5px]">
            {" "}
            Create Listing{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}
