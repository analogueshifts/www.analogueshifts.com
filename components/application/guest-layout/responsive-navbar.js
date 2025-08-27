'use client'
import { useState } from 'react'
import ResponsiveNavLink from './responsive-navlink'

import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'

import ourApps from '../utilities/our-apps.json'
import Link from 'next/link'

export default function ResponsiveNavBar({
    handleBlogNavigation,
    user,
    open,
    handleLogout,
}) {
    const [showApps, setShowApps] = useState(false)

    const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID

    const MenuLink = ({ item }) => (
        <div>
            <Link href={item.href} className="w-full flex items-center gap-2">
                <Image src={item.image} alt="" width={25} height={25} />
                <div className="flex flex-col">
                    <p className="text-[13px] text-tremor-brand-boulder900 font-semibold">
                        {item.title}
                    </p>
                </div>
            </Link>
        </div>
    )

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    exit={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    initial={{ x: '-100%' }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                    className="bg-white z-40 overflow-y-auto  h-screen absolute overflow-hidden top-0 w-[70%] left-0 block lg:hidden">
                    <div className="pt-7 pb-5 px-8 w-full flex-col flex gap-8">
                        <ResponsiveNavLink href="/jobs">Jobs</ResponsiveNavLink>
                        <ResponsiveNavLink
                            onClick={handleBlogNavigation}
                            href="https://blog.analogueshifts.com">
                            Blog
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/">Home</ResponsiveNavLink>

                        <ResponsiveNavLink href="/about">
                            About
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/contact">
                            Contact
                        </ResponsiveNavLink>
                        <div
                            onClick={() => setShowApps(prev => !prev)}
                            className="cursor-pointer w-full flex items-center justify-between">
                            <p className="text-xl text-tremor-brand-boulder700 font-bold  focus:outline-none ">
                                Products
                            </p>
                            <Image
                                src={ChevronDown}
                                alt=""
                                className={` duration-300 w-4 h-max ${
                                    showApps ? 'rotate-180' : '-rotate-90'
                                }`}
                            />
                        </div>

                        {showApps && (
                            <motion.div className="w-full flex flex-col gap-4 -translate-y-2 px-3">
                                {ourApps.ready.map(item => {
                                    return (
                                        <MenuLink
                                            key={item.title}
                                            item={item}
                                        />
                                    )
                                })}

                                {ourApps.comingSoon.map(item => {
                                    return (
                                        <MenuLink
                                            key={item.title}
                                            item={item}
                                        />
                                    )
                                })}
                            </motion.div>
                        )}
                        <ResponsiveNavLink href="/direct-hire">
                            Direct Hire
                        </ResponsiveNavLink>

                        {/* Responsive Settings Options */}
                        {user ? (
                            <>
                                <ResponsiveNavLink
                                    href={
                                        user?.user_mode === 'hire'
                                            ? '/recruiter/dashboard'
                                            : '/job-seeker/dashboard'
                                    }>
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    onClick={handleLogout}
                                    href="">
                                    Logout
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <>
                                <ResponsiveNavLink
                                    href={`https://auth.analogueshifts.app?app=${app}`}>
                                    Login
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={`https://auth.analogueshifts.app?app=${app}`}>
                                    Sign Up
                                </ResponsiveNavLink>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
