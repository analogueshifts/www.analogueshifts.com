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
            className="fixed duration-500 w-full top-0 left-0 h-[100dvh] bg-black/80 z-50 ">
            <div className="absolute bg-transparent  w-full h-[calc(100%-80px)] top-[80px] z-60 flex flex-col justify-center items-center gap-8">
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.5s' }}
                    href="/dashboard"
                    className={` duration-500 text-xl font-semibold flex items-center`}>
                    <span className="text-[#f1f1f1]">DASHBOARD</span>
                </Link>
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.7s' }}
                    href="/tools/hire"
                    className={` duration-500 text-xl font-semibold flex items-center`}>
                    <span className="text-[#f1f1f1]">HIRE TALENTS</span>
                </Link>
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.9s' }}
                    href="/tools/vetting"
                    className={` text-xl duration-500 font-semibold flex items-center`}>
                    <span className="text-[#f1f1f1]">VETTING SYSTEM</span>
                </Link>
                {user?.role == 'admin' && (
                    <Link
                        style={{
                            opacity: textOpacity,
                            transitionDelay: '1.1s',
                        }}
                        href="/dashboard/users"
                        className={` text-xl duration-500 font-semibold flex items-center`}>
                        <span className="text-[#f1f1f1]">USERS</span>
                    </Link>
                )}
            </div>
        </div>
    )
}
