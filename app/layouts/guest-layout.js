'use client'
import Cookies from 'js-cookie'
import Footer from '@/components/application/guest-layout/footer'
import Navigation from '@/components/application/guest-layout/navigation'
import { useState, useEffect } from 'react'

export default function GuestLayout({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const auth = Cookies.get('analogueshifts')
        if (auth) {
            setUser(JSON.parse(auth))
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
