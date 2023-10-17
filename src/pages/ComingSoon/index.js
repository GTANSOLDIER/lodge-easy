import { useRouter } from "next/router";

export default function ComingSoon() {
    const router = useRouter();
    return(
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <h1 className="font-bold text-[30px]">COMING SOON</h1>
            <div className="mt-[10px] p-[10px] border-[1px] border-black" onClick={() => router.back()}>Go Back</div>
        </div>
    );
}