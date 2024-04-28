'use client'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

export default function GuestLayout({ children }) {
    return (
        <section className="bg-[#F3F4F6]">
            <Navigation />
            {children}
            <Footer />
        </section>
    )
}
