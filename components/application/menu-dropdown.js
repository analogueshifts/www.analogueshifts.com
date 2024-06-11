'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bell, LayoutDashboard, Users, LogOut } from 'lucide-react'

export default function MenuDropDown({ user, close, handleLogout }) {
    const [bgPos, setBgPos] = useState('translateX(-100%)')
    const [textOpacity, setTextOpacity] = useState(0)
    useEffect(() => {
        setBgPos('translateX(0px)')
        setTextOpacity(1)
    }, [])
    return (
        <div
            style={{ transform: bgPos }}
            className="fixed duration-500 w-full top-0 left-0 h-[100dvh] bg-white z-50 ">
            <div className="absolute  w-full h-[calc(100%-80px)] top-[80px] z-60 flex flex-col justify-center items-center gap-10">
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.5s' }}
                    href="/dashboard"
                    className={` duration-500 text-base -translate-y-[80px] font-semibold flex items-center gap-2`}>
                    <span className="text-black/80">Dashboard</span>
                    <i className=" text-black/80 text-sm">
                        <LayoutDashboard width={18} />
                    </i>
                </Link>
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.7s' }}
                    href="/tools/hire"
                    className={` duration-500 -translate-y-[80px] text-base font-semibold flex items-center gap-2`}>
                    <span className="text-black/80">Hire Talents</span>{' '}
                    <i className=" text-black/80 text-sm">
                        <Users width={18} />
                    </i>
                </Link>
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.7s' }}
                    href="/notifications"
                    className={` duration-500 -translate-y-[80px] text-base font-semibold flex items-center gap-2`}>
                    <span className="text-black/80">Notifications</span>{' '}
                    <i className=" text-black/80 text-sm">
                        <Bell width={18} />
                    </i>
                </Link>
                <button
                    onClick={handleLogout}
                    type="button"
                    style={{
                        opacity: textOpacity,
                        transitionDelay: '0.9s',
                    }}
                    className={` text-base -translate-y-[80px] duration-500 font-semibold flex items-center gap-2`}>
                    <span className="text-red-600">LogOut</span>
                    <i className=" text-red-600 text-sm">
                        <LogOut width={18} />
                    </i>
                </button>
            </div>
        </div>
    )
}
