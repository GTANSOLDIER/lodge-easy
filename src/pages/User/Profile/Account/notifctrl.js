import Footer from "../Footer";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

export default function NotifCtrl() {
  const router = useRouter();

  return (
    <div>
      <div className="px-[20px] flex py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        <div className="mr-[10px]" onClick={() => router.back()}>
          <IoIosArrowBack className="text-[24px]" />
        </div>{" "}
        Notifications{" "}
      </div>
      <div className="flex items-center justify-between mx-[30px] py-[20px] border-b-[1px] border-[#E0E0E0]">
        <div className="font-normal font-nunito text-[#9D9D9D] text-[14px]">
          Receive text notifications
        </div>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="flex items-center justify-between mx-[30px] py-[20px] border-b-[1px] border-[#E0E0E0]">
        <div className="font-normal font-nunito text-[#9D9D9D] text-[14px]">
          Receive email notifications
        </div>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <Footer/>
    </div>
  );
}
