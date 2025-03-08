'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import UploadProfile from '../../../job-seeker/profile/edit/components/upload-profile'
import { usePathname } from 'next/navigation'

export default function EditProfileLayout({ children }) {
    const [profileUrl, setProfileUrl] = useState('')
    const { user } = useUser()
    const pathname = usePathname()

    useEffect(() => {
        if (user) {
            setProfileUrl(user?.user_profile?.avatar || '')
        }
    }, [user])

    return (
        <div className="xl:w-[calc(100%-320px)] h-max flex flex-col w-full gap-5">
            <div className=" h-max px-8 py-8 tablet:px-5 tablet:py-5 overflow-hidden w-full bg-white rounded-[32px] flex flex-col">
                <div
                    style={{
                        backgroundImage:
                            'url(/images/user-layout/profile/line.png)',
                    }}
                    className="w-full large:h-[168px] h-[150px] bg-cover bg-no-repeat  bg-[#575346] rounded-[25px] "></div>
                <UploadProfile url={profileUrl} setUrl={setProfileUrl} />

                {children}
            </div>
        </div>
    )
}
