'use client'
import { useEffect, useState } from 'react'
import ResponsiveNavLink from './responsive-navlink'
import { usePathname } from 'next/navigation'
import OurApps from './our-apps'

export default function ResponsiveNavBar({ handleBlogNavigation, user }) {
    const [opacity, setOpacity] = useState(0)
    const pathname = usePathname()

    useEffect(() => setOpacity(1), [])

    return (
        <div
            style={{ opacity: opacity }}
            className="bg-white duration-500 w-full block lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink href="/" active={pathname === '/'}>
                    Home
                </ResponsiveNavLink>
                <OurApps />
                <a
                    onClick={handleBlogNavigation}
                    href="https://blog.analogueshifts.com"
                    className={`block pl-4 pr-4 py-3 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300`}>
                    Blog
                </a>
                <ResponsiveNavLink href="/jobs" active={pathname === '/jobs'}>
                    Jobs
                </ResponsiveNavLink>
                <ResponsiveNavLink href="/about" active={pathname === '/about'}>
                    About
                </ResponsiveNavLink>
                <ResponsiveNavLink
                    href="/contact"
                    active={pathname === '/contact'}>
                    Contact
                </ResponsiveNavLink>

                <ResponsiveNavLink href={user ? '/dashboard' : '/login'}>
                    {user ? 'Dashboard' : 'Get Started'}
                </ResponsiveNavLink>
            </div>

            {/* Responsive Settings Options */}
            {!user && (
                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div>
                        <div className="space-y-1">
                            {/* Authentication */}
                            <ResponsiveNavLink href="/login">
                                Login
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href="/register">
                                Register
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
