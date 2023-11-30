'use client'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'
import Footer from './components/Footer'
import SeoController from './lib/SeoController'

const inter = Inter({ subsets: ['latin'] })

const seoData = {
    canonical: 'https://www.analogueshifts.com',
    ogImage: '/images/a4.jpg',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SeoController seoData={seoData} />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
