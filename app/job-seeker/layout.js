'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'

import SideBar from './components/sidebar'
import NavBar from './components/navbar'
import Cookies from 'js-cookie'

import LogoutIdiom from '@/components/application/guest-layout/logout-idiom'
import { usePathname, useRouter } from 'next/navigation'
import { sidebarMenuLinks } from './components/links'
import Progress from './dashboard/components/progress'

export default function JobSeekerLayout({ children }) {
    const { user } = useUser()
    const { getUser, getNotificationCount } = useAuth()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [notificationCount, setNotificationCount] = useState(0)
    const pathname = usePathname()
    const router = useRouter()

    const token = Cookies.get('analogueshifts')

    const authLink = process.env.NEXT_PUBLIC_AUTH_URL
    const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID

    useEffect(() => {
        // Redirect To Login if User is not Authenticated
        if (!user && !token) {
            Cookies.set('RedirectionLink', pathname)
            window.location.href = `${authLink}?app=${app}`
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
        if (user?.user_mode === 'hire') {
            router.push('/recruiter/dashboard')
        }
    }, [user])

    return (
        <main className="w-full flex justify-end bg-[#F3F4F6] min-h-screen">
            <LogoutIdiom close={() => setOpen(false)} open={open} />
            <SideBar
                sidebarMenuLinks={sidebarMenuLinks}
                setOpen={setOpenSidebar}
                open={openSidebar}
                handleLogout={() => setOpen(true)}
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
                        {!pathname.startsWith('/job-seeker/settings') && (
                            <Progress />
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
