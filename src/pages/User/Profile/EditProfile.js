import Footer from "./Footer";
import Link from "next/link";
import { FiUpload } from "react-icons/fi";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

export default function EditProfile() {

  const router = useRouter();

  return (
    <div className="pb-[80px]">
      <div className="px-[20px] flex py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        <div className="mr-[10px]" onClick={() => router.back()}>
          <IoIosArrowBack className="text-[24px]" />
        </div>{" "}
        Profile{" "}
      </div>
      <div className="w-full flex items-center justify-center mt-[20px]">
        <div
          className={`w-[132px] h-[132px] border-[5px] border-[#00C781]
          } rounded-full flex items-center justify-center`}
        >
          <div className="w-[108px] h-[108px] profilePic bg-cover bg-center flex items-center justify-center rounded-full"></div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[143px] font-nunito font-bold text-[14px] text-[#545454] flex flex-row items-center justify-center my-[12px] border-[1px] border-[#707070] p-[10px] rounded-md">
          <div className="mr-[8px]"> Upload Photo </div>
          <FiUpload />
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between border-t-[1px] border-t-[#E0E0E0]">
        <div className="text-[16px] text-[#545454] font-nunito font-bold pb-[4px]">
          Personal Information
        </div>
        <div className="pb-[12px] font-nunito font-medium text-[14px] text-[#BDBDBD]">
          Your information will be used to personalize your account, Personnels
          authorized by LodgeEasy will have access to the information provided
        </div>
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          Full Name
        </div>
        <input
          type="text"
          placeholder="Name"
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          Email Address
        </div>
        <input
          type="text"
          placeholder="Email"
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          Phone Number
        </div>
        <input
          type="text"
          placeholder="Number"
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          Occupation
        </div>
        <input
          type="text"
          placeholder="Occupation"
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          Date of Birth
        </div>
        <input
          type="date"
          placeholder="Email"
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] pb-[12px] flex flex-col items-start justify-between border-b-[1px] border-b-[#E0E0E0]">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          About me
        </div>
        <textarea
          type="text"
          placeholder="Email"
          className="w-full h-[100px] py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="text-[#545454] text-[16px] font-nunito font-bold mx-[30px] mt-[12px]">
        Additional Information
      </div>
      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          How did you hear about lodgeeasy?
        </div>
        <input
          type="text"
          placeholder="..."
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          Have you used an Online Real Estate Platform?
        </div>
        <input
          type="text"
          placeholder="..."
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <div className="mx-[30px] pt-[12px] flex flex-col items-start justify-between">
        <div className="text-[12px] text-[#9D9D9D] font-nunito font-medium pb-[12px]">
          If Yes, which one?
        </div>
        <input
          type="text"
          placeholder="..."
          className="w-full py-[10px] px-[16px] mb-[12px] font-nunito font-medium text-[16px] text-[#292929] border-[1px] border-[#545454]"
        />
      </div>

      <Link href="/User/Profile/ProfileDetails">
        <div className="mt-[33px] text-center mx-[30px] bg-[#458CA2] text-white py-[8.5px] rounded font-nunito font-bold text-[14px]">
          Done
        </div>
      </Link>

      <Footer />
    </div>
  );
}
