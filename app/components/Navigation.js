'use client'
import ApplicationLogo from './ApplicationLogo'
import Link from 'next/link'
import NavLink from './NavLink'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ResponsiveNavBar from './ResponsiveNavBar'

const Navigation = () => {
    const pathname = usePathname()

    const [open, setOpen] = useState(false)

    //Close the Nav bar whenever the pathname changes
    useEffect(() => {
        if (open) {
            setOpen(previous => !previous)
        }
    }, [pathname])

    return (
        <div className="flex justify-center pt-3 pb-20 px-3">
            <nav className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-gray-100 w-full lg:rounded-full fixed z-30">
                {/* Primary Navigation Menu */}
                <div className="w-full mx-auto px-4 lg:px-6 xl:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">
                            <NavLink href="/" active={pathname === '/'}>
                                Home
                            </NavLink>
                            <a
                                href="https://blog.analogueshifts.com"
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300`}>
                                Blog
                            </a>
                            <NavLink href="/jobs" active={pathname === '/jobs'}>
                                Jobs
                            </NavLink>
                            <NavLink
                                href="/about"
                                active={pathname === '/about'}>
                                About
                            </NavLink>
                            <NavLink
                                href="/contact"
                                active={pathname === '/contact'}>
                                Contact
                            </NavLink>
                        </div>

                        {/* Settings Dropdown */}
                        <div className="hidden lg:flex lg:items-center lg:ml-6">
                            <Link
                                className="text-sm font-medium py-2 px-7 duration-300 rounded-full bg-yellow-500 text-white hover:bg-transparent hover:text-yellow-500 hover:ring-1 ring-yellow-500"
                                href="/dashboard">
                                Get Started
                            </Link>
                        </div>

                        {/* Hamburger */}
                        <div className="-mr-2 flex items-center lg:hidden">
                            <button
                                onClick={() => setOpen(open => !open)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    {open ? (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Responsive Navigation Menu */}
                {open && (
                    <ResponsiveNavBar
                        handleBlogNavigation={() => setOpen(false)}
                    />
                )}
            </nav>
        </div>
    )
}

export default Navigation
