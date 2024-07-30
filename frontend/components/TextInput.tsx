export const TextInput = ({ title, onChange, type, placeholder }: { placeholder: string, type: string, title: string, onChange?: (e: any) => void }) => {
    return <div>
        <div className="pb-1 pt-2 font-semibold">
            {title}
        </div>
        <div className="">
            <input className="rounded h-10 w-full border border-black p-2" type={type} placeholder={placeholder} />
        </div>
    </div>
}