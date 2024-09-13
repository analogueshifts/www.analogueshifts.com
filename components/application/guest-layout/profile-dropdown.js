'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Image from 'next/image'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'

export default function LoggedInProfileDropdown({ user, handleLogout }) {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef(null)
    const router = useRouter()

    const toggleDropdown = () => {
        setIsOpen(prev => !prev)
    }

    const closeDropdown = event => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [])

    const RenderMenu = ({ item }) => (
        <button
            onClick={() => item.action()}
            className="w-max flex gap-4 items-center duration-300 hover:translate-x-1">
            <Image width={40} height={40} src={item.image} alt="" />
            <div className="flex flex-col items-start gap-1.5">
                <h3 className="text-black font-semibold text-base">
                    {item.title}
                </h3>
                <p className="text-tremor-brand-boulder400 font-normal text-[9.8px]">
                    {item.description}
                </p>
            </div>
        </button>
    )

    return (
        <div ref={dropdownRef} className="relative">
            <div
                onClick={toggleDropdown}
                className="profile-menu hidden lg:flex gap-2 bg-gray-50 items-center cursor-pointer p-1 rounded-full">
                <Avatar className="w-7 h-7">
                    <AvatarImage
                        className="object-cover"
                        src={user?.user_profile?.avatar}
                        alt="Profile"
                    />
                    <AvatarFallback className="bg-tremor-background-darkYellow text-white text-sm font-bold ">
                        {user?.email.slice(0, 1)?.toUpperCase()}
                    </AvatarFallback>
                </Avatar>

                <div className="profile-chevron duration-300">
                    <Image width={14} height={14} src={ChevronDown} alt="" />
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="our-apps-menu flex flex-col gap-6 large:gap-8 w-max absolute top-10 rounded-[18px] -right-10 bg-white py-9 large:py-10 large:px-14 px-12">
                        <RenderMenu
                            item={{
                                title: 'Dashboard',
                                description: 'Overview of your activity.',
                                image:
                                    '/images/guest-layout/profile/dashboard.svg',
                                action: () => router.push('/dashboard'),
                            }}
                        />
                        <RenderMenu
                            item={{
                                title:
                                    user?.user_mode === 'hire'
                                        ? 'Hire Talents'
                                        : 'Recommended jobs',
                                description:
                                    user?.user_mode === 'hire'
                                        ? 'Create a job post'
                                        : 'Tailored job opportunities.',
                                image:
                                    user?.user_mode === 'hire'
                                        ? '/images/guest-layout/profile/hire.svg'
                                        : '/images/guest-layout/profile/briefcase.svg',
                                action: () =>
                                    router.push(
                                        user?.user_mode === 'hire'
                                            ? '/tools/hire'
                                            : '/jobs-recommendations',
                                    ),
                            }}
                        />
                        <RenderMenu
                            item={{
                                title: 'Notifications',
                                description: 'Real-time job updates',
                                image: '/images/guest-layout/profile/bell.svg',
                                action: () => router.push('/notifications'),
                            }}
                        />
                        <RenderMenu
                            item={{
                                title: 'Log Out',
                                description: 'End your session securely',
                                image:
                                    '/images/guest-layout/profile/logout.svg',
                                action: handleLogout,
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
