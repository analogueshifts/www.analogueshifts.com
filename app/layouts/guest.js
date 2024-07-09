'use client'
import Cookies from 'js-cookie'
import Footer from '@/components/application/guest-layout/footer'
import Navigation from '@/components/application/guest-layout/navigation'
import { useEffect, useState } from 'react'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'

export default function GuestLayout({ children }) {
    const { user, setUser } = useUser(null)
    const [loading, setLoading] = useState(false)
    const { getUser } = useAuth()
    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (user === null && token) {
            //    Fetch User
            getUser({ setLoading, layout: 'guest' })
        }
    }, [])

    return (
        <section className="bg-[#F3F4F6]">
            <Navigation user={user} />
            {children}
            <Footer />
        </section>
    )
}
