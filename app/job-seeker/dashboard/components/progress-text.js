import Image from 'next/image'
import Completed from '@/public/images/user-layout/dashboard/completed.svg'

import { useRouter } from 'next/navigation'

export default function ProgressText({ text, completed, path }) {
    const router = useRouter()

    return (
        <div
            onClick={() => {
                if (!completed) {
                    router.push(path)
                }
            }}
            className={`w-full flex items-center justify-between ${
                completed ? 'cursor-default' : 'cursor-pointer'
            }`}>
            <p
                className={`${
                    completed
                        ? 'text-[#039855]'
                        : 'text-tremor-brand-boulder300'
                } font-normal large:text-base text-sm`}>
                {text}
            </p>
            {completed ? (
                <Image src={Completed} alt="" />
            ) : (
                <div className="w-5 h-5 rounded-full border-2 border-[#E7E7E7]"></div>
            )}
        </div>
    )
}
