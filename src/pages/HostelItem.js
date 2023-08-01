export default function HostelItem(props) {
  return (
    <div key={props.id} className="hostelItem flex flex-col px-2 py-4 font-nunito">
      <div className="imageSect rounded w-full h-[90px]"></div>
      <div className="nameLocation flex flex-row items-center mt-1">
        <div className="hostelName text-[14px] font-semibold">{props.name}</div>
        <div className="divider mx-[7px] text-[14px] text-[#545454]">|</div>
        <div className="hostelLocation text-[12px] text-[#545454]">
          {props.location}
        </div>
      </div>
      <div className="price text-[12px] font-semibold text-[#545454] mt-[2px]">
        &#8358;{props.price}
      </div>
      <div className="comments text-[12px] text-[#545454] mt-[2px] leading-[1.35]">
        {props.comment}
      </div>
    </div>
  );
}
