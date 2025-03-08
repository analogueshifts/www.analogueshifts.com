'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import UploadProfile from './components/upload-profile'
import Link from 'next/link'
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
                <div className="w-full flex items-center tablet:gap-2 gap-6 mb-9 large:gap-10 pb-6 border-b border-tremor-brand-boulder100">
                    <Link
                        href="/job-seeker/profile/edit"
                        target="_blank"
                        className={`large:py-2.5 py-2 tablet:px-3 px-6 rounded-[8px]  text-sm large:text-base ${
                            pathname === '/job-seeker/profile/edit'
                                ? 'bg-[#D9D9D954] font-medium text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder400 bg-transparent'
                        }`}>
                        Profile Details
                    </Link>
                    <Link
                        target="_blank"
                        href="/job-seeker/profile/edit/job-preference"
                        className={`large:py-2.5 py-2 tablet:px-3 px-6 rounded-[8px]  text-sm large:text-base ${
                            pathname ===
                            '/job-seeker/profile/edit/job-preference'
                                ? 'bg-[#D9D9D954] font-medium text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder400 bg-transparent'
                        }`}>
                        Job Preference
                    </Link>
                </div>
                {children}
            </div>
        </div>
    )
}
