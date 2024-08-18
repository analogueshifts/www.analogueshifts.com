'use client'
import Image from 'next/image'
import ArrowLeft from '@/public/images/jobs/arrow-left.svg'

import { useRouter } from 'next/navigation'

export default function GoBack() {
    const router = useRouter()
    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="bg-transparent outline-none large:mb-10 mb-7 w-10 h-10 flex items-center justify-center rounded border border-[#DBDBDB]">
            <Image src={ArrowLeft} alt="" />
        </button>
    )
}
