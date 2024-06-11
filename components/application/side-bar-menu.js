'use client'
import Logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bell, LayoutDashboard, Users, LogOut } from 'lucide-react'

export default function SidebarMenu({ header, user, handleLogout }) {
    const pathname = usePathname()

    return (
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
                <li className={`${pathname === '/dashboard' ? 'active' : ''}`}>
                    <Link href="/dashboard" className="nav-link">
                        <i className="">
                            <LayoutDashboard className="" width={18} />
                        </i>
                        <span className="text hidden sm:flex">Dashboard</span>
                    </Link>
                </li>
                <li
                    className={`${
                        pathname.startsWith('/tools/hire') ? 'active' : ''
                    }`}>
                    <Link href="/tools/hire" className="nav-link">
                        <i className="">
                            <Users className="" width={18} />
                        </i>
                        <span className="text hidden sm:flex">
                            Hire Talents
                        </span>
                    </Link>
                </li>
                <li
                    className={`${
                        pathname.startsWith('/notifications') ? 'active' : ''
                    }`}>
                    <Link href="/notifications" className="nav-link">
                        <i className="l">
                            <Bell className="" width={18} />
                        </i>
                        <span className="text hidden sm:flex">
                            Notifications
                        </span>
                    </Link>
                </li>
                {/* {user?.role == 'admin' && (
                    <li className={`${pathname === '' ? 'active' : ''}`}>
                        <Link href="" className="nav-link">
                            <i className="fas fa-users"></i>
                            <span className="text hidden sm:flex">Users</span>
                        </Link>
                    </li>
                )} */}
            </ul>

            <ul className="side-menu">
                <li>
                    <button onClick={handleLogout} className="logout">
                        <i className="">
                            <LogOut className="" width={18} />
                        </i>
                        <span className="text hidden sm:flex">Logout</span>
                    </button>
                </li>
            </ul>
        </section>
    )
}
