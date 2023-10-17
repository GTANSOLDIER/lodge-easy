import Footer from "./Footer";
import userImg from "../../../assets/userImg1.jpg";
import Link from "next/link";

export default function Inbox() {
  return (
    <div>
      <div className="px-[30px] py-[20px] font-nunito font-bold text-[16px] text-[#545454] border-b-[1px] border-b-[#E0E0E0]">
        {" "}
        Inbox{" "}
      </div>
      <div className="px-[30px] py-[20px]">
        <input
          placeholder="Search"
          className="w-full bg-[#EAEAEA] h-[40px] p-[10px] rounded-md"
        />
      </div>
      <div className="flex items-center px-[40px] py-[20px] w-full">
        <Link href="/User/Inbox/MessageBox" className="flex">
          <div className="w-[50px] h-[50px] mr-[15px] rounded-xl userImg1"></div>
          <div>
            <div className="font-golos font-semibold text-[16px] mb-1">
              Sandra Leah
            </div>
            <div className="font-nunito text-[14px] text-[#BDBDBD]">
              Movie Actress
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
