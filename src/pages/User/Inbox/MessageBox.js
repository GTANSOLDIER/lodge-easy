import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { GoPaperclip } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

export default function MessageBox() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [textValue, setTextValue] = useState([]);

  return (
    <div>
      <div className="flex fixed top-[10px] items-center px-[20px] py-[20px] w-full border-b-[1px] border-b-[#E0E0E0]">
        <div className="mr-[10px]" onClick={() => router.back()}>
          <IoIosArrowBack className="text-[24px]" />
        </div>
        <div className="w-[50px] h-[50px] mr-[15px] userImg1 rounded-xl"></div>
        <div>
          <div className="font-golos font-semibold text-[16px] mb-1">Sandra Leah</div>
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] bg-[#00C781] rounded-full mr-[10px]"></div>
            <div className="font-nunito text-[14px]">Online</div>
          </div>
        </div>
      </div>
      <div className="py-[20px] mt-[100px] text-center mx-[30px] border-b-[1px] border-[#EAEAEA] font-nunito text-[14px] text-[#545454]">
        Oct 3, 2023
      </div>
      <div className="font-nunito text-[14px] text-center py-[20px] text-[#545454]">
        Chat started with Sandra Leah
      </div>
      <div className="mt-[20px] flex flex-col justify-center items-end px-[30px]">
        {messages.map((m) => (
          <div className="text-white mb-[8px] bg-[#82B2C1] py-[8px] px-[16px]">
            {m.text}
          </div>
        ))}
      </div>
      <div className="px-[30px] pb-[20px] fixed bottom-0 w-full flex justify-between items-center">
        <div className="">
          <GoPaperclip className="text-[24px]" />
        </div>
        <div className="flex items-center px-2 justify-between border-[1px] border-[#707070] rounded-md w-[70vw] h-[44px]">
          <textarea
            placeholder="Type a message..."
            className="h-[30px] w-[85%]"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <IoMdSend
            className="text-[24px]"
            onClick={() => {
              setMessages((oldArray) => [...oldArray, { text: textValue }]);
              setTextValue("");
            }}
          />
        </div>
      </div>
    </div>
  );
}
