'use client'
import React, { useState, useEffect } from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import DashboardLoader from '../components/DashboardLoader'
import ApplicationLogo from '../components/ApplicationLogo'
import MenuDropDown from './MenuDropdown'
import IdiomProof from './IdiomProof'

export default function Authenticated({ user, header, children }) {
    const [open, setOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [navAnimationClass, setNavAnimationClass] = useState('')
    const [loading, setLoading] = useState(false)
    async function logout() {
        const axios = require('axios')
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/logout'
        let config = {
            method: 'POST',
            url: url,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        setLoading(true)

        axios
            .request(config)
            .then(res => {
                console.log(res)
                Cookies.remove('analogueshifts')
                window.location.href = '/login'
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }
    const pathname = usePathname()

    //Toggle The Nav Bar
    const toggleMenu = value => {
        const sideBar = document.querySelector('.sidebar')
        sideBar.classList.toggle(value)
    }

    const toggleDrawer = () => {
        if (mobileOpen) {
            setNavAnimationClass('')
            setMobileOpen(prevExpenses => {
                return !prevExpenses
            })
        } else {
            setNavAnimationClass('open')
            setMobileOpen(prevExpenses => {
                return !prevExpenses
            })
        }
    }

    useEffect(() => {
        const auth = Cookies.get('analogueshifts')
        if (auth === null || auth === undefined) {
            window.location.href = '/login'
            return null
        }
        const sideBar = document.querySelector('.sidebar')
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                sideBar.classList.add('hide')
            }
        })
        if (window.innerWidth < 768) {
            sideBar.classList.add('hide')
        }
        window.addEventListener('resize', () => {
            setMobileOpen(false)
            setNavAnimationClass('')
        })
        return window.removeEventListener('resize', () => {
            setMobileOpen(false)
            setNavAnimationClass('')
        })
    }, [])

    return (
        <main className="body">
            {loading && <DashboardLoader />}

            <IdiomProof
                close={() => setOpen(false)}
                open={open}
                action={() => {
                    setOpen(false)
                    logout()
                }}
                title={'Log Out'}
                description={
                    'Are you sure you want to sign out of your account? You can always sign in at anytime.'
                }
            />
            <section className="sidebar">
                <div className="logo fixed sm:static">
                    <Link
                        href="https://www.analogueshifts.com"
                        className="icon sm:flex hidden">
                        <Image src={Logo} alt="Logo" className="w-6 h-6" />
                    </Link>
                    <div className="text pt-1.5">{header}</div>
                </div>

                <ul className="side-menu top">
                    <li
                        className={`${
                            pathname === '/dashboard' ? 'active' : ''
                        }`}>
                        <Link href="/dashboard" className="nav-link">
                            <i className="fas fa-border-all"></i>
                            <span className="text hidden sm:flex">
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li
                        className={`${
                            pathname.startsWith('/tools/hire') ? 'active' : ''
                        }`}>
                        <Link href="/tools/hire" className="nav-link">
                            <i className="fas fa-users"></i>
                            <span className="text hidden sm:flex">
                                Hire Talents
                            </span>
                        </Link>
                    </li>
                    <li
                        className={`${
                            pathname === '/tools/vetting' ? 'active' : ''
                        }`}>
                        <Link href="/tools/vetting" className="nav-link">
                            <i className="fa-brands fa-teamspeak"></i>
                            <span className="text hidden sm:flex">
                                Vetting System
                            </span>
                        </Link>
                    </li>
                    {user?.role == 'admin' && (
                        <li className={`${pathname === '' ? 'active' : ''}`}>
                            <Link href="" className="nav-link">
                                <i className="fas fa-users"></i>
                                <span className="text hidden sm:flex">
                                    Users
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>

                <ul className="side-menu">
                    <li>
                        <button
                            onClick={() => {
                                setOpen(true)
                            }}
                            className="logout">
                            <i className="fas fa-right-from-bracket"></i>
                            <span className="text hidden sm:flex">Logout</span>
                        </button>
                    </li>
                </ul>
            </section>

            <section className="content">
                <nav className=" justify-between z-50">
                    <i
                        onClick={() => toggleMenu('hide')}
                        className="fas fa-bars menu-btn"></i>
                    <Link
                        href="https://www.analogueshifts.com"
                        className="sm:hidden flex">
                        <ApplicationLogo />
                    </Link>
                    <button
                        className={`${navAnimationClass} block z-60 hamburger sm:hidden outline-none`}
                        type="button"
                        onClick={toggleDrawer}>
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
                                toggleDrawer()
                                setOpen(true)
                            }}
                        />
                    )}
                </nav>

                <main className="p-7 h-[calc(100dvh-56px)] overflow-y-auto">
                    {children}
                </main>
            </section>
        </main>
    )
}
