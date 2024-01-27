import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function GuestLayout({ children }) {
    return (
        <section className="bg-slate-50">
            <Navigation />
            {children}
            <Footer />
        </section>
    )
}
