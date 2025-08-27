'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'

import SideBar from '../job-seeker/components/sidebar'
import NavBar from '../job-seeker/components/navbar'
import Cookies from 'js-cookie'

import LogoutIdiom from '@/components/application/guest-layout/logout-idiom'
import SideBarMenuLinks, { sidebarMenuLinks } from './utilities/sidebar-links'
import { usePathname, useRouter } from 'next/navigation'
import Progress from './dashboard/components/progress'

export default function RecruiterLayout({ children }) {
    const { user } = useUser()
    const { getUser, getNotificationCount } = useAuth()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [notificationCount, setNotificationCount] = useState(0)
    const pathname = usePathname()
    const router = useRouter()

    const token = Cookies.get('analogueshifts')

    const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID;

    useEffect(() => {
        // Redirect To Login if User is not Authenticated
        if (!user && !token) {
            Cookies.set('RedirectionLink', pathname)
            window.location.href = `https://auth.analogueshifts.app?app=${app}`
            return null
        } else if (!user && token) {
            //    Fetch User
            getUser({ setLoading, layout: 'authenticated' })
        }
    }, [])

    useEffect(() => {
        if (token) {
            getNotificationCount({ token, setCount: setNotificationCount })
        }
        if (openSidebar) {
            setOpenSidebar(false)
        }
    }, [pathname])

    useEffect(() => {
        if (user?.user_mode === 'job') {
            router.push('/job-seeker/dashboard')
        }
    }, [user])

    return (
        <main className="w-full flex justify-end bg-[#F3F4F6] min-h-screen">
            <LogoutIdiom close={() => setOpen(false)} open={open} />
            <SideBar
                setOpen={setOpenSidebar}
                open={openSidebar}
                handleLogout={() => setOpen(true)}
                sidebarMenuLinks={sidebarMenuLinks}
            />
            <div className="min-h-screen relative  bg-transparent tablet:w-full w-[calc(100vw-305px)] large:w-[calc(100vw-344px)]">
                <NavBar
                    open={openSidebar}
                    setOpen={setOpenSidebar}
                    user={user}
                    notificationCount={notificationCount}
                    logout={() => setOpen(true)}
                />
                <div className="w-full large:py-8 py-6 px-8 tablet:px-5 flex justify-center">
                    <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
                        {children}
                        {!pathname.startsWith('/recruiter/settings') &&
                            pathname !== '/recruiter/companies/create' &&
                            !pathname.startsWith('/recruiter/companies/edit') &&
                            !pathname.startsWith('/recruiter/hire/edit') &&
                            !pathname.startsWith('/recruiter/hire/create') && (
                                <Progress />
                            )}
                    </div>
                </div>
            </div>
        </main>
    )
}
