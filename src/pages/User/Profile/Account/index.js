import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../Footer";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Account() {

  return (
    <div>
      <div className="text-[16px] items-center flex font-nunito font-bold py-[21px] px-[20px] border-[1px] border-[#EAEAEA]">
        <Link className="mr-[10px]" href="/User/Profile">
          <IoIosArrowBack className="text-[24px]"/>
        </Link>
        Account
      </div>
      <Link href="Account/changepassword">
        <div className="flex items-center justify-between mx-[30px] py-[20px] border-b-[1px] border-[#E0E0E0]">
          <div>
            <div className="font-bold font-nunito text-[#9D9D9D] text-[16px]">
              Password
            </div>
            <div className="font-nunito font-normal text-[#9D9D9D] text-[12px]">
              change password
            </div>
          </div>
          <MdKeyboardArrowRight className="text-[24px]" />
        </div>
      </Link>
      <Link href="Account/notifctrl">
        <div className="flex items-center justify-between mx-[30px] py-[20px] border-b-[1px] border-[#E0E0E0]">
          <div>
            <div className="font-bold font-nunito text-[#9D9D9D] text-[16px]">
              Notifications
            </div>
            <div className="font-nunito font-normal text-[#9D9D9D] text-[12px]">
              control your notifications
            </div>
          </div>
          <MdKeyboardArrowRight className="text-[24px]" />
        </div>
      </Link>
      <Footer />
    </div>
  );
}
