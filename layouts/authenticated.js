'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import DashboardLoader from '@/components/application/dashboard-loader'
import ApplicationLogo from '@/components/application/application-logo'
import MenuDropDown from '@/components/application/menu-dropdown'
import IdiomProof from '@/components/application/idiom-proof'
import SidebarMenu from '@/components/application/side-bar-menu'
import NotificationSection from '@/components/application/notifications-section'
import UnverifiedBanner from '@/components/application/unverified-banner'
import {
    handleResize,
    toggleDrawer,
} from '@/layouts/utilities/authenticated-layout'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'

export default function Authenticated({ header, children }) {
    const pathname = usePathname()
    const router = useRouter()
    const { getUser, logout } = useAuth()
    const { user } = useUser()
    const [open, setOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [navAnimationClass, setNavAnimationClass] = useState('')
    const [loading, setLoading] = useState(false)
    const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(false)

    const token = Cookies.get('analogueshifts')

    //Toggle The Nav Bar
    const toggleMenu = value => {
        const sideBar = document.querySelector('.sidebar')
        sideBar.classList.toggle(value)
    }

    useEffect(() => {
        // Redirect To Login if User is not Authenticated
        if (user === null && !token) {
            Cookies.set('RedirectionLink', pathname)
            router.push('/login')
            return null
        } else if (user === null && token) {
            //    Fetch User
            getUser({ setLoading, layout: 'authenticated' })
        }

        handleResize(setMobileOpen, setNavAnimationClass)
    }, [])

    // Display Unverified Email Banner if the user's email is unverified
    useEffect(() => {
        if (user && !user.email_verified_at) {
            setShowUnverifiedBanner(true)
        }
    }, [user])

    return (
        <main className="body">
            {loading && <DashboardLoader />}

            <IdiomProof
                close={() => setOpen(false)}
                open={open}
                action={() => {
                    setOpen(false)
                    logout({ setLoading })
                }}
                title={'Log Out'}
                description={
                    'Are you sure you want to sign out of your account? You can always sign in at anytime.'
                }
            />

            {/* SideBar Menu */}
            <SidebarMenu
                header={header}
                user={user}
                handleLogout={() => {
                    setOpen(true)
                }}
            />

            <section className="content">
                <nav className=" justify-between z-50">
                    <Link
                        href="https://www.analogueshifts.com"
                        className="sm:hidden flex">
                        <ApplicationLogo />
                    </Link>
                    <i
                        onClick={() => toggleMenu('hide')}
                        className="fas fa-bars menu-btn"></i>
                    {/* Notification */}
                    <NotificationSection user={user} />

                    {/* Hamburger */}
                    <button
                        className={`${navAnimationClass} block z-60 hamburger sm:hidden outline-none`}
                        type="button"
                        onClick={() =>
                            toggleDrawer(
                                setNavAnimationClass,
                                setMobileOpen,
                                mobileOpen,
                            )
                        }>
                        <span
                            className={`hamburger-top ${
                                mobileOpen ? 'bg-black/80' : 'bg-[#342e37]'
                            }`}></span>
                        <span
                            className={`hamburger-middle ${
                                mobileOpen ? 'bg-black/80' : 'bg-[#342e37]'
                            }`}></span>
                        <span
                            className={`hamburger-bottom ${
                                mobileOpen ? 'bg-black/80' : 'bg-[#342e37]'
                            }`}></span>
                    </button>

                    {mobileOpen && (
                        <MenuDropDown
                            user={user}
                            close={() => setMobileOpen(false)}
                            handleLogout={() => {
                                toggleDrawer(
                                    setNavAnimationClass,
                                    setMobileOpen,
                                    mobileOpen,
                                )
                                setOpen(true)
                            }}
                        />
                    )}
                </nav>

                <main className="md:p-7 p-0 h-[calc(100dvh-56px)] overflow-y-auto">
                    {children}
                </main>
                {/*  UnVerified Banner */}
                <UnverifiedBanner
                    visible={showUnverifiedBanner}
                    setVisible={setShowUnverifiedBanner}
                    user={user}
                    setLoading={setLoading}
                />
            </section>
        </main>
    )
}
