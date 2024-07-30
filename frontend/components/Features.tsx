"use client";

import { ReactNode } from "react";

interface FeaturesProps {
    title: string;
    subTitle?: string;
    icon: ReactNode;
    boldTitle?: boolean;
}

export const Features = ({ title, subTitle, icon, boldTitle = false }: FeaturesProps) => {
    return (
        <div className="flex gap-1">
            {icon}
            <span className={boldTitle ? "font-bold" : "font-normal"}>
                {title}
            </span>
            {subTitle && <span>{subTitle}</span>}
        </div>
    );
};
