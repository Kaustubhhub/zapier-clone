"use client";

import { ReactNode } from "react";

export const SecondaryButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return <div className="p-2">
        <button onClick={onClick} className="hover:box-border py-1 px-4 hover:bg-[#d8cecb] rounded-md">
            {children}
        </button>
    </div>
}