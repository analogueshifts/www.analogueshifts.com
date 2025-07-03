import Link from 'next/link'

export default function ContactLink({ link, label, contact, image }) {
    return (
        <Link href={link} className="w-max h-max flex gap-3 items-center">
            <img
                src={image}
                alt=""
                className="w-[60px] h-[52px] rounded-[6.3px] object-cover"
            />
            <div className="w-max h-max flex flex-col gap-2.5">
                <h3 className="text-base tablet:text-sm font-semibold text-tremor-brand-boulder950">
                    {label}
                </h3>
                <p className="text-xs font-normal text-tremor-brand-boulder600">
                    {contact}
                </p>
            </div>
        </Link>
    )
}
