'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'
import NavLink from './navlink'

import OurApps from './our-apps'
import ResponsiveNavBar from './responsive-navbar'
import LoggedInProfileDropdown from './profile-dropdown'

import NavLogo from '@/public/images/guest-layout/nav-logo.svg'
import LogoutIdiom from './logout-idiom'

const Navigation = ({ user }) => {
    const pathname = usePathname()

    const [open, setOpen] = useState(false)
    const [logoutIdiomDisplay, setLogoutIdiomDisplay] = useState(false)

    const authLink = process.env.NEXT_PUBLIC_AUTH_URL;
    const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID

    //Close the Nav bar whenever the pathname changes
    useEffect(() => {
        if (open) {
            setOpen(previous => !previous)
        }
    }, [pathname])

    return (
        <div
            className={`w-full bg-white flex justify-center h-20 large:h-104  z-30 duration-500 fixed top-0 left-0`}>
            {/* Logout Idiom */}
            <LogoutIdiom
                close={() => setLogoutIdiomDisplay(false)}
                open={logoutIdiomDisplay}
            />

            <nav className="bg-white max-w-[1650px] absolute z-30 h-20 large:h-104 px-6 sm:px-20 large:px-112 flex items-center justify-between w-full  ">
                {/* Primary Navigation Menu */}

                {/* Logo */}

                <Link href="/">
                    <Image
                        src={NavLogo}
                        alt=""
                        className="large:w-221 w-40 sm:w-48 h-max"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden items-center gap-7 large:gap-10 lg:flex">
                    <NavLink href="/" active={pathname === '/'}>
                        Home
                    </NavLink>
                    <NavLink
                        href="/direct-hire"
                        active={pathname === '/direct-hire'}>
                        Direct Hire
                    </NavLink>

                    <OurApps />

                    <NavLink href="/jobs" active={pathname.startsWith('/jobs')}>
                        Jobs
                    </NavLink>

                    <NavLink href="https://blog.analogueshifts.com">
                        Blog
                    </NavLink>

                    <NavLink href="/about" active={pathname === '/about'}>
                        About
                    </NavLink>
                    <NavLink href="/contact" active={pathname === '/contact'}>
                        Contact
                    </NavLink>
                </div>

                {/* Settings Dropdown */}
                {user ? (
                    <LoggedInProfileDropdown
                        handleLogout={() => setLogoutIdiomDisplay(true)}
                        user={user}
                    />
                ) : (
                    <div className="hidden lg:flex lg:items-center gap-6">
                        <NavLink
                            href={`${authLink}?app=${app}`}>
                            Login
                        </NavLink>
                        <Link
                            className="text-[13px] large:text-base font-medium h-11 large:h-14 px-10  large:px-12 duration-200 rounded-2xl bg-tremor-background-darkYellow text-white hover:bg-transparent hover:text-tremor-background-darkYellow hover:ring-1 ring-tremor-background-darkYellow flex items-center justify-center"
                            href={`${authLink}?app=${app}`}>
                            Sign Up
                        </Link>
                    </div>
                )}

                {/* Hamburger */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={() => setOpen(prev => !prev)}
                        className="w-18 flex flex-col gap-1.5 bg-transparent border-none outline-none">
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

            {/* Responsive Navigation Menu */}

            <ResponsiveNavBar
                user={user}
                open={open}
                handleBlogNavigation={() => setOpen(false)}
                handleLogout={() => {
                    setOpen(false)
                    setLogoutIdiomDisplay(true)
                }}
            />
        </div>
    )
}

export default Navigation
