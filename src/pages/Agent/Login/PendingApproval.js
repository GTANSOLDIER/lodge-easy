import Image from "next/image";
import pendingIcon from "../../../assets/pendingIcon.png";
import Link from "next/link";

export default function PendingApproval() {
    return(
        <div className="px-[30px] w-full h-[100vh] flex flex-col items-center justify-center">
            <div className="w-[100px] h-[100px]">
                <Image src={pendingIcon}/>
            </div>
            <div className="font-bold text-[24px] text-center mt-[20px]">
                Your Account is pending approval
            </div>
            <div className="text-[16px] text-center mt-[20px]">
                In the meantime you can check out other agents <Link href="/Search" className="text-[#458CA2]">Listings</Link>
            </div>
        </div>
    );
}