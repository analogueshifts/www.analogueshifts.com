'use client'
import Cookies from 'js-cookie'
import Footer from '@/components/application/guest-layout/footer'
import Navigation from '@/components/application/guest-layout/navigation'
import { useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'

export default function GuestLayout({ children }) {
    const { user } = useUser()
    const token = Cookies.get('analogueshifts')

    return (
        <div className="w-full bg-white flex justify-center">
            <section className="bg-white w-full large:pt-104 pt-20 max-w-[1600px]">
                <Navigation />
                {children}
                <Footer />
            </section>
        </div>
    )
}
