'use client'
import { useEffect, useState } from 'react'
import ResponsiveNavLink from './ResponsiveNavLink'
import { usePathname } from 'next/navigation'

export default function ResponsiveNavBar() {
    const [opacity, setOpacity] = useState(0)
    const pathname = usePathname()

    useEffect(() => setOpacity(1), [])

    return (
        <div
            style={{ opacity: opacity }}
            className="bg-white duration-500 fixed w-[calc(100vw-50px)] top-[68px] block lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink href="/" active={pathname === '/'}>
                    Home
                </ResponsiveNavLink>
                <ResponsiveNavLink href="/blog" active={pathname === '/blog'}>
                    Blog
                </ResponsiveNavLink>
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
                <ResponsiveNavLink href="https://app.analogueshifts.com">
                    Get Started
                </ResponsiveNavLink>
            </div>

            {/* Responsive Settings Options */}
            <div className="pt-4 pb-1 border-t border-gray-200">
                <div>
                    <div className="space-y-1">
                        {/* Authentication */}
                        <ResponsiveNavLink
                            href="/login"
                            active={pathname === '/login'}>
                            Login
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/register"
                            active={pathname === '/register'}>
                            Register
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
