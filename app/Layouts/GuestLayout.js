'use client'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function GuestLayout({ children }) {
    useEffect(() => {
        const auth = localStorage.getItem('analogueshifts')
        if (auth) {
            window.location.href = '/dashboard'
            return null
        }
    }, [])

    return (
        <section className="bg-slate-50">
            <Navigation />
            {children}
            <Footer />
        </section>
    )
}
