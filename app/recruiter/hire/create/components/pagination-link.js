import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import CheckMark from '@/public/images/user-layout/recruiter/check.svg'

export default function PaginationLink({
    path,
    data,
    title,
    inModal,
    isActive,
    isCompleted,
}) {
    const pathname = usePathname()

    // This function checks if the current pathname is the same as this page url
    const checkCurrentPath = () => {
        return inModal ? !!isActive : pathname === path
    }

    // This Function checks if the form for the current page has been filled
    const formFilled = () => {
        return inModal ?  !!isCompleted : data !== null ? true : false
    }

    return (
        <Link
            href={formFilled() ? path : ''}
            className="flex items-center gap-2.5">
            <div
                className={`large:w-6  tablet:w-3 tablet:p-[1px] tablet:h-3 large:h-6 p-0.5 rounded-full border border-greenPea flex justify-center items-center ${
                    checkCurrentPath() || formFilled()
                        ? 'bg-greenPea'
                        : 'bg-transparent'
                } ${inModal ? 'w-4 h-4' : 'w-5 h-5'}`}>
                {formFilled() && (
                    <Image
                        className="tablet:w-1.5 h-max"
                        src={CheckMark}
                        alt=""
                    />
                )}
                {!formFilled() && checkCurrentPath() && (
                    <div
                        className={` tablet:w-1 tablet:h-1 rounded-full bg-platinum ${
                            inModal ? 'w-2 h-2' : 'w-2.5 h-2.5'
                        }`}></div>
                )}
            </div>
            <p
                className={`text-black  tablet:leading-none large:text-lg font-normal leading-8 ${
                    inModal
                        ? 'text-sm tablet:text-xs'
                        : 'text-base tablet:text-xs'
                }`}>
                {title}
            </p>
        </Link>
    )
}
