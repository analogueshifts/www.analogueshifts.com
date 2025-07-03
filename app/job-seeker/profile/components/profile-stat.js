export default function ProfileStat({ count, image, label, border }) {
    return (
        <div
            className={`col-span-1 flex flex-col gap-2 items-center ${
                border ? 'border-r border-[#FFEAA7]' : ''
            }`}>
            <img
                src={image}
                alt=""
                className="w-[17px] h-[17px] object-cover"
            />
            <p className="text-black font-medium text-xl">
                {count > 100 ? '100+' : count}
            </p>
            <p className="text-[#0000005C] text-[11px]">{label}</p>
        </div>
    )
}
