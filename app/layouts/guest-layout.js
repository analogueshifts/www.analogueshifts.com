'use client'
import Footer from '@/components/application/footer'
import Navigation from '@/components/application/navigation'

export default function GuestLayout({ children }) {
    return (
        <section className="bg-[#F3F4F6]">
            <Navigation />
            {children}
            <Footer />
        </section>
    )
}
