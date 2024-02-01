'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MenuDropDown({ user, close }) {
    const [bgPos, setBgPos] = useState('translateY(-100%)')
    const [textOpacity, setTextOpacity] = useState(0)
    const pathname = usePathname()
    useEffect(() => {
        setBgPos('translateY(0px)')
        setTextOpacity(1)
    }, [])
    return (
        <div
            style={{ transform: bgPos }}
            className="fixed duration-500 w-full left-0 top-[80px] h-[calc(100dvh-80px)] bg-black/80 z-50 flex flex-col justify-center items-center gap-8">
            <Link
                style={{ opacity: textOpacity, transitionDelay: '0.5s' }}
                href="/dashboard"
                className={`text-[#f1f1f1] duration-500 text-2xl font-semibold flex items-center`}>
                <span className="">DASHBOARD</span>
            </Link>
            <Link
                style={{ opacity: textOpacity, transitionDelay: '0.7s' }}
                href="/tools/hire"
                className={`text-[#f1f1f1] duration-500 text-2xl font-semibold flex items-center`}>
                <span className="">HIRE TALENTS</span>
            </Link>
            <Link
                style={{ opacity: textOpacity, transitionDelay: '0.9s' }}
                href="/tools/vetting"
                className={`text-[#f1f1f1] text-2xl duration-500 font-semibold flex items-center`}>
                <span className="">VETTING SYSTEM</span>
            </Link>
            {user?.role == 'admin' && (
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '1.1s' }}
                    href="/dashboard/users"
                    className={`text-[#f1f1f1] text-2xl duration-500 font-semibold flex items-center`}>
                    <span className="">USERS</span>
                </Link>
            )}
        </div>
    )
}
