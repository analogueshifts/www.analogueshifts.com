'use client'
import { useEffect } from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Authenticated({ user, header, children }) {
    const pathname = usePathname()

    //Toggle The Nav Bar
    const toggleMenu = value => {
        const sideBar = document.querySelector('.sidebar')
        sideBar.classList.toggle(value)
    }

    useEffect(() => {
        const sideBar = document.querySelector('.sidebar')
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                sideBar.classList.add('hide')
            }
        })
        if (window.innerWidth < 768) {
            sideBar.classList.add('hide')
        }
    }, [])

    return (
        <main className="body">
            <section className="sidebar">
                <div className="logo">
                    <Link
                        href="https://www.analogueshifts.com"
                        className="icon">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="w-6 h-6"></Image>
                    </Link>
                    <div className="text pt-1.5">{header}</div>
                </div>

                <ul className="side-menu top">
                    <li
                        className={`${
                            pathname === '/dashboard' ? 'active' : ''
                        }`}>
                        <Link href="/dashboard" className="nav-link">
                            <i className="fas fa-border-all"></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li
                        className={`${
                            pathname.startsWith('/tools/hire') ? 'active' : ''
                        }`}>
                        <Link href="/tools/hire" className="nav-link">
                            <i className="fas fa-users"></i>
                            <span className="text">Hire Talents</span>
                        </Link>
                    </li>
                    <li
                        className={`${
                            pathname === '/tools/vetting' ? 'active' : ''
                        }`}>
                        <Link href="/tools/vetting" className="nav-link">
                            <i className="fa-brands fa-teamspeak"></i>
                            <span className="text">Vetting System</span>
                        </Link>
                    </li>
                    {user?.role == 'admin' && (
                        <li className={`${pathname === '' ? 'active' : ''}`}>
                            <Link href="" className="nav-link">
                                <i className="fas fa-users"></i>
                                <span className="text">Users</span>
                            </Link>
                        </li>
                    )}
                </ul>

                <ul className="side-menu">
                    <li>
                        <Link href="#" className="logout">
                            <i className="fas fa-right-from-bracket"></i>
                            <span className="text">Logout</span>
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="content">
                <nav>
                    <i
                        onClick={() => toggleMenu('hide')}
                        className="fas fa-bars menu-btn"></i>
                </nav>

                <main>{children}</main>
            </section>
        </main>
    )
}
