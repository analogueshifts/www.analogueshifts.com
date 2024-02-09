'use client'
import React, { useState, Fragment, useRef, useEffect } from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Transition, Dialog } from '@headlessui/react'
import { toast } from 'react-toastify'
import DashboardLoader from '../components/DashboardLoader'
import ApplicationLogo from '../components/ApplicationLogo'
import MenuDropDown from './MenuDropdown'

export default function Authenticated({ user, header, children }) {
    const [open, setOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [navAnimationClass, setNavAnimationClass] = useState('')
    const [loading, setLoading] = useState(false)
    async function logout() {
        const axios = require('axios')
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/logout'
        let config = {
            method: 'post',
            url: url,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
        }
        console.log(user)
        setLoading(true)
        try {
            await axios.request(config)
            localStorage.removeItem('analogueshifts')
            setLoading(false)
            window.location.href = '/login'
        } catch (error) {
            console.log(error)
            toast.error('Error Logging Out', {
                position: 'top-right',
                autoClose: 3000,
            })
            setLoading(false)
        }
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
        const auth = localStorage.getItem('analogueshifts')
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
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <i
                                                    className=" text-red-600 fas fa-triangle-exclamation"
                                                    aria-hidden="true"></i>
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900">
                                                    Log Out
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to
                                                        sign out of your
                                                        account? You can always
                                                        sign in at anytime.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => {
                                                setOpen(false)
                                                logout()
                                            }}>
                                            Log Out
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}>
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
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
                    {user?.user.role == 'admin' && (
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

                <main className="lg:p-7 p-3">{children}</main>
            </section>
        </main>
    )
}
