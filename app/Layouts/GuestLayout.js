'use client'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function GuestLayout({ children }) {
    return (
        <section className="bg-[#F3F4F6]">
            <Navigation />
            {children}
            <Footer />
        </section>
    )
}
