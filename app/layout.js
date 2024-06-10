import { Lexend } from 'next/font/google'
import './globals.css'
import './scss/app.scss'
import Script from 'next/script'

import { cn } from '@/lib/utils'

//Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    verification: {
        google: 'SyAAgxsXes-UzPmZubsHldcLFGqyvtB2Spen8LZxR9k',
    },
    'twilio-domain-verification': '9e857c0c645cf1823a163c70580f36e9',
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
            <body className={cn('', lexend.className)}>
                {' '}
                <ToastContainer position="top-center" />
                {children}
            </body>
            <Script
                src="https://kit.fontawesome.com/39a80cd06c.js"
                crossorigin="anonymous"
            />
        </html>
    )
}
