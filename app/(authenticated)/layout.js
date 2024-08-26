'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'
import MenuDropDown from '@/components/application/user-layout/menu-dropdown'
import LogoutIdiom from '@/components/application/guest-layout/logout-idiom'
import SidebarMenu from '@/components/application/user-layout/side-bar-menu'
import NotificationSection from '@/components/application/user-layout/notifications-section'
import { handleResize } from './utilities/utilities'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import NavLogo from '@/public/images/guest-layout/nav-logo.svg'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function AuthenticatedLayout({ children }) {
    const pathname = usePathname()
    const { getUser } = useAuth()
    const { user } = useUser()
    const [open, setOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const token = Cookies.get('analogueshifts')

    //Toggle The Nav Bar
    const toggleMenu = value => {
        const sideBar = document.querySelector('.sidebar')
        sideBar.classList.toggle(value)
    }

    useEffect(() => {
        // Redirect To Login if User is not Authenticated
        if (!user && !token) {
            Cookies.set('RedirectionLink', pathname)
            window.location.href = '/'
            return null
        } else if (!user && token) {
            //    Fetch User
            getUser({ setLoading, layout: 'authenticated' })
        }

        handleResize(setMobileOpen)
    }, [])

    useEffect(() => {
        if (mobileOpen) {
            setMobileOpen(false)
        }
    }, [pathname])

    return (
        <main className="body">
            <LogoutIdiom close={() => setOpen(false)} open={open} />

            {/* SideBar Menu */}
            <SidebarMenu
                user={user}
                handleLogout={() => {
                    setOpen(true)
                }}
            />

            <section className="content">
                <nav className=" justify-between z-50">
                    <Menu
                        onClick={() => toggleMenu('hide')}
                        className="menu-btn cursor-pointer text-tremor-brand-boulder900 w-5"
                    />

                    {/* Notification */}
                    <NotificationSection user={user} />

                    <Link href="/" className="sm:hidden block">
                        <Image src={NavLogo} alt="" className="w-40 h-max" />
                    </Link>

                    {/* Hamburger */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setMobileOpen(prev => !prev)}
                            className="w-18 flex flex-col gap-1.5 bg-transparent border-none outline-none">
                            <div
                                className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
                                    mobileOpen
                                        ? 'rotate-[45deg] translate-y-[3.6px]'
                                        : 'rotate-0 translate-y-0'
                                }`}></div>
                            <div
                                className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
                                    mobileOpen
                                        ? '-rotate-[45deg] -translate-y-[3.6px]'
                                        : 'rotate-0 translate-y-0'
                                }`}></div>
                        </button>
                    </div>
                    <MenuDropDown
                        handleLogout={() => {
                            setMobileOpen(false)
                            setOpen(true)
                        }}
                        user={user}
                        open={mobileOpen}
                    />
                </nav>

                <main className="md:p-7 bg-white sm:bg-transparent p-0 h-[calc(100dvh-56px)] overflow-y-auto">
                    {children}
                </main>
            </section>
        </main>
    )
}
