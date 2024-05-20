'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MenuDropDown({ user, close, handleLogout }) {
    const [bgPos, setBgPos] = useState('translateX(-100%)')
    const [textOpacity, setTextOpacity] = useState(0)
    const pathname = usePathname()
    useEffect(() => {
        setBgPos('translateX(0px)')
        setTextOpacity(1)
    }, [])
    return (
        <div
            style={{ transform: bgPos }}
            className="fixed duration-500 w-full top-0 left-0 h-[100dvh] bg-white z-50 ">
            <div className="absolute bg-transparent  w-full h-[calc(100%-80px)] top-[80px] z-60 flex flex-col justify-center items-center gap-10">
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.5s' }}
                    href="/dashboard"
                    className={` duration-500 text-base font-semibold flex items-center gap-2`}>
                    <span className="text-black/80">Dashboard</span>
                    <i className="fas fa-border-all text-black/80 text-sm"></i>
                </Link>
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.7s' }}
                    href="/tools/hire"
                    className={` duration-500 text-base font-semibold flex items-center gap-2`}>
                    <span className="text-black/80">Hire Talents</span>{' '}
                    <i className="fas fa-users text-black/80 text-sm"></i>
                </Link>
                <Link
                    style={{ opacity: textOpacity, transitionDelay: '0.9s' }}
                    href="/tools/vet"
                    className={` text-base duration-500 font-semibold flex items-center gap-2`}>
                    <span className="text-black/80">Vetting System</span>{' '}
                    <i className="fa-brands fa-teamspeak text-black/80 text-sm"></i>
                </Link>
                {user?.role == 'admin' && (
                    <Link
                        style={{
                            opacity: textOpacity,
                            transitionDelay: '1.1s',
                        }}
                        href="/dashboard/users"
                        className={` text-base duration-500 font-semibold flex items-center gap-2`}>
                        <span className="text-black/80">Users</span>{' '}
                        <i className="fas fa-users text-black/80 text-sm"></i>
                    </Link>
                )}
                <button
                    onClick={handleLogout}
                    type="button"
                    style={{
                        opacity: textOpacity,
                        transitionDelay: `${
                            user.role == 'admin' ? '1.3s' : '1.1s'
                        }`,
                    }}
                    className={` text-base duration-500 font-semibold flex items-center gap-2`}>
                    <span className="text-red-600">LogOut</span>
                    <i className="fas fa-right-from-bracket text-red-600 text-sm"></i>
                </button>
            </div>
        </div>
    )
}
