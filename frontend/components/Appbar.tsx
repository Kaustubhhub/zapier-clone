"use client";
import { PrimaryButton } from "./buttons/PrimaryButton"
import { SecondaryButton } from "./buttons/SecondaryButton";
import { useRouter } from "next/navigation";

export const Appbar = () => {
    const router = useRouter();
    return <div className="border-b flex justify-between p-1">
        <div className="flex justify-center items-center font-bold text-3xl cursor-pointer">
            <span className="text-[#ff4f00] pl-10">_</span>zapier
        </div>
        <div className="flex justify-between pr-10">
            <div>
                <SecondaryButton onClick={() => { }}>
                    Contact sales
                </SecondaryButton>
            </div>
            <div>
                <SecondaryButton onClick={() => { router.push('./login') }}>
                    Log in
                </SecondaryButton>
            </div>
            <div>
                <PrimaryButton type="small" onClick={() => { router.push('./signup') }}>
                    Sign up
                </PrimaryButton>
            </div>
        </div>
    </div>
}