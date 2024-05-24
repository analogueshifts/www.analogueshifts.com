'use client'
import Logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
                        <i className="fas fa-border-all"></i>
                        <span className="text hidden sm:flex">Dashboard</span>
                    </Link>
                </li>
                <li
                    className={`${
                        pathname.startsWith('/tools/hire') ? 'active' : ''
                    }`}>
                    <Link href="/tools/hire" className="nav-link">
                        <i className="fas fa-users"></i>
                        <span className="text hidden sm:flex">
                            Hire Talents
                        </span>
                    </Link>
                </li>
                {/* <li
                    className={`${
                        pathname.startsWith('/tools/vet') ? 'active' : ''
                    }`}>
                    <Link href="/tools/vet" className="nav-link">
                        <i className="fa-brands fa-teamspeak"></i>
                        <span className="text hidden sm:flex">
                            Vetting System
                        </span>
                    </Link>
                </li> */}
                {user?.role == 'admin' && (
                    <li className={`${pathname === '' ? 'active' : ''}`}>
                        <Link href="" className="nav-link">
                            <i className="fas fa-users"></i>
                            <span className="text hidden sm:flex">Users</span>
                        </Link>
                    </li>
                )}
            </ul>

            <ul className="side-menu">
                <li>
                    <button onClick={handleLogout} className="logout">
                        <i className="fas fa-right-from-bracket"></i>
                        <span className="text hidden sm:flex">Logout</span>
                    </button>
                </li>
            </ul>
        </section>
    )
}
