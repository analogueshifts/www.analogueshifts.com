import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

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
                            <NavLink href="/" active={router.pathname === '/'}>
                                Home
                            </NavLink>
                            <NavLink
                                href="/blog"
                                active={router.pathname === '/blog'}>
                                Blog
                            </NavLink>
                            <NavLink
                                href="/jobs"
                                active={router.pathname === '/jobs'}>
                                Jobs
                            </NavLink>
                            <NavLink
                                href="/about"
                                active={router.pathname === '/about'}>
                                About
                            </NavLink>
                            <NavLink
                                href="/contact"
                                active={router.pathname === '/contact'}>
                                Contact
                            </NavLink>
                        </div>

                        {/* Settings Dropdown */}
                        <div className="hidden lg:flex lg:items-center lg:ml-6">
                            {user ? (
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                            <div>{user?.name}</div>

                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>
                                    {/* Authentication */}
                                    <DropdownButton onClick={logout}>
                                        Logout
                                    </DropdownButton>
                                </Dropdown>
                            ) : (
                                <Link
                                    className="text-lg py-1.5 px-3 rounded-full bg-yellow-500 text-white hover:bg-transparent hover:text-yellow-500 hover:ring-2 ring-yellow-500"
                                    href="https://app.analogueshifts.com">
                                    Get Started
                                </Link>
                            )}
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
                    <div className="bg-white block lg:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href="/"
                                active={router.pathname === '/'}>
                                Home
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="/blog"
                                active={router.pathname === '/blog'}>
                                Blog
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="/jobs"
                                active={router.pathname === '/jobs'}>
                                Jobs
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="/about"
                                active={router.pathname === '/about'}>
                                About
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href="/contact"
                                active={router.pathname === '/contact'}>
                                Contact
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="https://app.analogueshifts.com">
                                Get Started
                            </ResponsiveNavLink>
                        </div>

                        {/* Responsive Settings Options */}
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            {user ? (
                                <div className="space-y-1">
                                    {/* Authentication */}
                                    <ResponsiveNavButton onClick={logout}>
                                        Logout
                                    </ResponsiveNavButton>
                                </div>
                            ) : (
                                <div>
                                    <div className="space-y-1">
                                        {/* Authentication */}
                                        <ResponsiveNavLink
                                            href="/login"
                                            active={
                                                router.pathname === '/login'
                                            }>
                                            Login
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            href="/register"
                                            active={
                                                router.pathname === '/register'
                                            }>
                                            Register
                                        </ResponsiveNavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navigation
