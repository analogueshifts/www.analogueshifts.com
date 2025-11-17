'use client'
import { useToast } from '@/contexts/toast'

import Image from 'next/image'
import VerifyImage from '@/public/images/verify.png'
import XMarkImage from '@/public/images/x-mark.svg'

export default function ToastMessage() {
    const { toast, position, message } = useToast()

    return (
        <>
            {/* <section
                className={`${toast.length ? 'flex' : 'hidden'
                    } fixed top-0  left-0 w-screen h-screen z-50 lg:z-30`}></section> */}
            <div
                className={`${message.length > 0 ? 'scale-100' : 'scale-0'
                    } w-max max-w-[250px] duration-300 z-[5000] fixed top-[77px] py-3 h-max px-4 rounded-xl flex items-center gap-1 ${position === 'center'
                        ? 'left-[50vw] -translate-x-[50%]'
                        : 'right-[50vw] translate-x-[50%] lg:translate-x-0 lg:right-[10%] '
                    } ${toast === 'success' ? 'bg-[#F2F2F2]' : 'bg-[#FFEAEA]'}`}>
                <Image
                    src={VerifyImage}
                    className={`${toast === 'success' ? 'block' : 'hidden'}`}
                    width={24}
                    height={24}
                    alt=""
                />
                <Image
                    className={`${toast === 'error' ? 'block' : 'hidden'}`}
                    src={XMarkImage}
                    width={24}
                    height={24}
                    alt=""
                />
                <p
                    className={`font-normal text-sm ${toast === 'success'
                        ? 'text-[#006633]'
                        : 'text-[#F13562]'
                        }`}>
                    {message}
                </p>
            </div>
        </>
    )
}
