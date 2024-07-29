"use client";

import { ReactNode } from "react";

export const LinkButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return <div className="p-2">
        <button onClick={onClick} className="hover:box-border py-1 px-4 hover:bg-[#d8cecb] rounded-full border border-black">
            {children}
        </button>
    </div>
}