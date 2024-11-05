'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import Image from 'next/image'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'
import { useAuth } from '@/hooks/auth'
import { useUser } from '@/contexts/user'
import { useState } from 'react'
import LoadingSpinnerOverlay from '@/components/application/loading-spinner-overlay'

export default function ProfileDropdown() {
    const { updateProfileMode } = useAuth()
    const [loading, setLoading] = useState(false)
    const { user } = useUser()

    const handleClick = mode => {
        if (user?.user_mode !== mode) {
            updateProfileMode({ setLoading })
        }
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="[&[data-state=open]>img]:rotate-180 [&[data-state=closed]>img]:rotate-0 duration-200 flex h-max items-center outline-none focus-visible:outline-none ">
                    <h3 className="large:mr-1 tablet:text-sm mr-0.5 text-tremor-brand-boulder950 font-medium text-[15px] large:text-base">
                        {user?.user_mode === 'hire'
                            ? 'Recruiter Mode'
                            : 'Job Seeker Mode'}
                    </h3>

                    <Image
                        src={ChevronDown}
                        alt=""
                        className="duration-200 w-max h-6 tablet:h-4"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="translate-y-2 border-none bg-white rounded-2xl py-6 px-0 w-[200px] large:w-[227px]">
                    <DropdownMenuItem
                        onClick={() => handleClick('job')}
                        className={`border cursor-pointer rounded-none focus:bg-[#FFBB0A0D] focus:border-[#FFBB0A0D] focus:text-[#060606]  py-2 px-6 font-normal text-xs leading-5 ${
                            user?.user_mode === 'job'
                                ? 'border-[#FFBB0A0D] bg-[#FFBB0A0D] text-[#060606] '
                                : 'bg-[#ffffff] border-transparent text-tremor-brand-boulder400'
                        }`}>
                        Job Seeker mode
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => handleClick('hire')}
                        className={`border cursor-pointer rounded-none focus:bg-[#FFBB0A0D] focus:border-[#FFBB0A0D] focus:text-[#060606]  py-2 px-6 font-normal text-xs leading-5 ${
                            user?.user_mode === 'hire'
                                ? 'border-[#FFBB0A0D] bg-[#FFBB0A0D] text-[#060606] '
                                : 'bg-[#ffffff] border-transparent text-tremor-brand-boulder400'
                        }`}>
                        Recruiter mode
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {loading && <LoadingSpinnerOverlay />}
        </>
    )
}
