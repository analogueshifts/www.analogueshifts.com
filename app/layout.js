'use client'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <section className="bg-slate-50">
                    <Navigation />
                    {children}
                    <Footer />
                </section>
            </body>
        </html>
    )
}
