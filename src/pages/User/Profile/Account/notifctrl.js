import Footer from "../Footer";

export default function NotifCtrl() {
  return (
    <div>
      <div className="text-[16px] font-nunito font-bold py-[21px] px-[30px] border-[1px] border-[#EAEAEA]">
        Notifications
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
