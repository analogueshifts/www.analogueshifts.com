import { Inter, Lexend } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'
import './scss/app.scss'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const lexend = Lexend({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    openGraph: {
        title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
        description:
            'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
        url: 'https://www.analogueshifts.com',
        siteName: 'AnalogueShifts',
        images: [
            {
                url: '/images/a4.jpg',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.analogueshifts.com',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="https://www.analogueshifts.com/logo.png"
                    sizes="any"
                />
            </head>
            <body className={lexend.className}>
                <section className="bg-slate-50">
                    <Navigation />
                    {children}
                    <Footer />
                </section>
            </body>
        </html>
    )
}
