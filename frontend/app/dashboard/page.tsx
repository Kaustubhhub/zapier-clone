"use client";
import { Appbar } from "@/components/Appbar";
import { CreateButton } from "@/components/buttons/CreateButton";

export default function () {
    return <div>
        <Appbar />
        <div className="flex justify-around pt-10">
            <div>
                My Zaps
            </div>
            <div>
                <CreateButton onClick={() => { }} >
                   <span>+</span> create
                </CreateButton>
            </div>
        </div>
    </div>
}