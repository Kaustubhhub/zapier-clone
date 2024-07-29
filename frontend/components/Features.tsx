"use client"
export const Features = ({ title, subTitle }: { title: String, subTitle: String }) => {
    return <div className="flex gap-1">
        <CheckIcon />
        <span className="font-bold">{title} </span>
        <span>{subTitle}</span>
    </div>
}

function CheckIcon() {
    return <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    </div>
}