'use client'

import Image from 'next/image'
import Bell from '@/public/images/user-layout/bell.svg'
import SearchBar from './searchbar'
import ProfileDropdown from './profile-dropdown'
import SwitchMode from './switch-mode'
import Link from 'next/link'
import NavLogo from '@/public/images/guest-layout/nav-logo.svg'
import { useRouter } from 'next/navigation'

export default function NavBar({
    user,
    logout,
    open,
    setOpen,
    notificationCount,
}) {
    const router = useRouter()
    return (
        <nav className="w-full z-40 sticky top-0 h-[88px] bg-white flex justify-between items-center pr-16 pl-8 tablet:px-6 ">
            <div className="w-full h-max tablet:hidden">
                <SwitchMode />
            </div>
            <Link
                href="/"
                className="h-[25px] hidden tablet:flex w-max justify-center  items-start ">
                <Image src={NavLogo} alt="Logo" className="h-full w-max" />
            </Link>
            <div className="flex items-center h-11">
                <div className="h-full tablet:hidden w-[230px] xl:w-[477px] mr-6">
                    <SearchBar />
                </div>
                <div
                    onClick={() => {
                        router.push(
                            user?.user_mode === 'hire'
                                ? '/recruiter/notifications'
                                : '/job-seeker/notifications',
                        )
                    }}
                    className="h-max w-max tablet:mr-5 mr-6 relative  flex items-center justify-center cursor-pointer">
                    <Image src={Bell} alt="" />{' '}
                    <div className="w-3 h-3 rounded-full text-white flex justify-center items-center text-[6px] font-medium absolute top-0 right-0 translate-y-[-30%] bg-vibrantRed">
                        {notificationCount}
                    </div>
                </div>
                <div className="h-10 border border-x-tremor-brand-boulder100 mr-6 tablet:hidden"></div>
                <div className="w-max h-max tablet:hidden">
                    <ProfileDropdown user={user} logout={logout} />
                </div>

                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="w-18 hidden tablet:flex flex-col gap-1.5 bg-transparent border-none outline-none">
                    <div
                        className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
                            open
                                ? 'rotate-[45deg] translate-y-[3.6px]'
                                : 'rotate-0 translate-y-0'
                        }`}></div>
                    <div
                        className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
                            open
                                ? '-rotate-[45deg] -translate-y-[3.6px]'
                                : 'rotate-0 translate-y-0'
                        }`}></div>
                </button>
            </div>
        </nav>
    )
}
