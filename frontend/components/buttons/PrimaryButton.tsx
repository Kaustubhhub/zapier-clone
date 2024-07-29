"use client";
import { ReactNode } from "react"

export const PrimaryButton = ({ children, onClick, type }: { children: ReactNode, onClick: () => void, type?: "small" | "big" }) => {
    return <div className="p-2">
        <button
            onClick={onClick}
            className={type === 'small' ? "bg-[#ff4f00] py-1 px-6 rounded-full text-white hover:shadow-lg" : "py-3 px-10 rounded-full bg-[#ff4f00] text-white"}
        >
            {children}
        </button>

    </div>
}