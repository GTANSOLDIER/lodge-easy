import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { BiImageAlt } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import Link from "next/link";

export default function SignupDetails() {
  const router = useRouter();

  return (
    <div className="">
      <div className="px-7 py-4 userSignupHeader flex flex-row items-center justify-between border-b-[1px] border-[#E0E0E0]">
        <div onClick={() => router.back()}>
          {" "}
          <GrClose
            className="text-[#BDBDBD] text-[16px]"
            onClick={() => router.back}
          />
        </div>
        <div className="text-[#545454] text-[16px] font-semibold font-nunito">
          Create Account
        </div>
        <div></div>
      </div>

      <div className="flex flex-col px-[30px] items-center pt-[24px]">
        <div className="flex flex-col items-center justify-center w-[220px] rounded-[10px] h-[150px] border-[1px] border-[#545454] border-dashed">
          <BiImageAlt className="text-[32px] text-[#545454]" />
          <div className="text-[#545454] text-[16px] font-semibold mt-[12px]">
            JPEG or PNG only
          </div>
        </div>
        <div className="w-[220px] font-nunito font-bold text-[14px] text-[#545454] border-[1px] border-[#545454] flex flex-row items-center justify-center mt-[24px] p-[10px] rounded-md">
          <div className="mr-[8px]"> Upload Photo </div>
          <FiUpload />
        </div>
        <div className="border-t-[1px] my-[24px] border-t-[#E0E0E0] w-full"></div>

        <div className="border-[1px] border-[#EAEAEA] p-[12px] rounded-[10px] w-full text-left">
          <div className="text-[#545454] mb-[12px] font-nunito font-bold text-[16px]">
            Personal Information
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Name
            </div>
            <input
              placeholder="Name"
              className="border-[1px] text-[14px] p-[16px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Email Address
            </div>
            <input
              placeholder="Email"
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Phone Number
            </div>
            <input
              placeholder="Phone"
              className="border-[1px] text-[14px] p-[16px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Agency Name
            </div>
            <input
              placeholder="Name of Agency"
              className="border-[1px] text-[14px] p-[16px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
        </div>
        <div className="border-t-[1px] my-[24px] border-t-[#E0E0E0] w-full"></div>
        <div className="border-[1px] border-[#EAEAEA] p-[12px] rounded-[10px] w-full text-left">
          <div className="text-[#545454] mb-[12px] font-nunito font-bold text-[16px]">
            Agency Information
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Name
            </div>
            <input
              placeholder="Name of Agency"
              className="border-[1px] text-[14px] p-[16px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Email Address
            </div>
            <input
              placeholder="Agency email"
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Phone Number
            </div>
            <input
              placeholder="Agency Number"
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Address
            </div>
            <input
              placeholder="Address"
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              C.A.C
            </div>
            <input
              placeholder=""
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Years in service
            </div>
            <input
              placeholder=""
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
          <div className="mb-[4px]">
            <div className="text-[#545454] font-nunito text-[14px] mb-[4px]">
              Social Media Handle
            </div>
            <input
              placeholder=""
              className="border-[1px] p-[16px] text-[14px] border-[#545454] rounded-[5px] w-full h-[40px]"
            />
          </div>
        </div>
        <div className="px-[12px] w-full">
          <Link href="/Agent/Signup/IdVerification">
            <div className="mt-[24px] mb-[32px] w-full text-center bg-[#458CA2] text-white py-[8px] rounded-[5px]">
              {" "}
              Submit{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
