'use client'
import Image from 'next/image'
import ArrowLeft from '@/public/images/jobs/arrow-left.svg'

import { useRouter } from 'next/navigation'

export default function GoBack({ dashboard }) {
    const router = useRouter()
    return (
        <button
            type="button"
            onClick={() => router.back()}
            className={`bg-transparent outline-none  flex items-center justify-center border border-[#DBDBDB] ${
                dashboard
                    ? 'w-7 h-7 rounded-[2.8px] mb-7'
                    : 'large:mb-10 mb-7 w-10 h-10 rounded'
            }`}>
            <Image
                className={`${dashboard ? 'w-[10px] h-max' : 'w-max h-max'}`}
                src={ArrowLeft}
                alt=""
            />
        </button>
    )
}
