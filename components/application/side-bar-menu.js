'use client'
import Logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    Bell,
    LayoutDashboard,
    Users,
    LogOut,
    Building2,
    Briefcase,
    User,
} from 'lucide-react'

export default function SidebarMenu({ handleLogout, user }) {
    const pathname = usePathname()

    return (
        <section className="sidebar">
            <div className="logo fixed sm:static">
                <Link
                    href="https://www.analogueshifts.com"
                    className="icon sm:flex hidden">
                    <Image src={Logo} alt="Logo" className="w-6 h-6" />
                </Link>
                <div className="text pt-1.5">
                    <h2 className="text-xl font-bold text-gray-800 leading-tight">
                        {pathname === '/dashboard' && 'Dashboard'}
                        {pathname.startsWith('/tools/hire') && 'Hire'}
                        {pathname.startsWith('/manage-companies') &&
                            'Companies'}
                        {pathname.startsWith('/notifications') &&
                            'Notifications'}
                        {pathname.startsWith('/jobs-recommendations') &&
                            'Recommendations'}
                        {pathname.startsWith('/applied-jobs') && 'Applied'}
                    </h2>
                </div>
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
                {user?.user_mode === 'hire' && (
                    <>
                        <li
                            className={`${
                                pathname.startsWith('/tools/hire')
                                    ? 'active'
                                    : ''
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
                                pathname.startsWith('/manage-companies')
                                    ? 'active'
                                    : ''
                            }`}>
                            <Link href="/manage-companies" className="nav-link">
                                <i className="">
                                    <Building2 className="" width={18} />
                                </i>
                                <span className="text hidden sm:flex">
                                    Manage Companies
                                </span>
                            </Link>
                        </li>
                    </>
                )}
                {user?.user_mode === 'job' && (
                    <>
                        <li
                            className={`${
                                pathname.startsWith('/jobs-recommendations')
                                    ? 'active'
                                    : ''
                            }`}>
                            <Link
                                href="/jobs-recommendations"
                                className="nav-link">
                                <i className="">
                                    <Briefcase className="" width={18} />
                                </i>
                                <span className="text hidden sm:flex">
                                    Recommendations
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${
                                pathname.startsWith('/applied-jobs')
                                    ? 'active'
                                    : ''
                            }`}>
                            <Link href="/applied-jobs" className="nav-link">
                                <i className="">
                                    <Briefcase className="" width={18} />
                                </i>
                                <span className="text hidden sm:flex">
                                    Applied Jobs
                                </span>
                            </Link>
                        </li>
                        <li
                            className={`${
                                pathname.startsWith('/applied-jobs')
                                    ? 'active'
                                    : ''
                            }`}>
                            <Link href="/kyc" className="nav-link">
                                <i className="">
                                    <User className="" width={18} />
                                </i>
                                <span className="text hidden sm:flex">
                                    Update KYC
                                </span>
                            </Link>
                        </li>
                    </>
                )}

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
