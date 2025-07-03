import Image from 'next/image'

export default function Card({ image, title, description }) {
    return (
        <div className="talent-pool-card bg-white max-w-full w-364 h-max rounded-[20.7px] px-4 large:px-6 py-5 large:py-[26px] flex flex-col gap-1.5 large:gap-3">
            <div className="flex items-center gap-2">
                <Image
                    src={image}
                    alt=""
                    width={21.84}
                    height={21.84}
                    className="h-max large:w-max w-[18px]"
                />
                <p className="text-black font-semibold text-sm large:text-base">
                    {title}
                </p>
            </div>
            <p className="text-tremor-brand-boulder400 text-xs large:text-sm font-normal leading-6 large:leading-7">
                {description}
            </p>
        </div>
    )
}
