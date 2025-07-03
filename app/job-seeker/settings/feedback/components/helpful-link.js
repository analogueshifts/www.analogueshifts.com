import Link from 'next/link'

export default function HelpfulLink({ link, title, description }) {
    return (
        <Link
            href={link}
            className="w-full h-max flex justify-between items-center border border-tremor-brand-boulder100 rounded-2xl py-4 pr-4 pl-7">
            <div className="w-max flex flex-col max-w-[calc(100%-50px)] gap-4">
                <h3 className="font-semibold tablet:text-sm text-base text-tremor-brand-boulder950">
                    {title}
                </h3>
                <p className="text-tremor-brand-boulder600 text-xs font-normal">
                    {description}
                </p>
            </div>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </Link>
    )
}
