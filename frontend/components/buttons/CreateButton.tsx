"use client";
import { ReactNode } from "react"

export const CreateButton = ({ children, onClick, type }: { children: ReactNode, onClick: () => void, type?: "small" | "big" }) => {
    return <div className="p-2  w-full">
        <button
            onClick={onClick}
            className={type === 'small' ? "bg-[#3d4592] py-1 px-3 rounded-md text-white hover:shadow-lg" : "w-full py-1 px-3 rounded-md bg-[#3d4592] text-white"}
        >
            {children}
        </button>

    </div>
}