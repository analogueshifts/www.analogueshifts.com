'use client'
import { usePathname } from 'next/navigation'
import navLinks from './nav-links.json'
import Link from 'next/link'

export default function SettingsLayout({ children }) {
    const pathname = usePathname()
    return (
        <section className="w-full h-max bg-white rounded-[32px] p-8 large:min-h-[calc(100dvh-152px)] min-h-[calc(100dvh-136px)] flex flex-col">
            <h1 className="font-semibold text-black text-lg large:text-xl large:mb-6 mb-4">
                Settings
            </h1>
            <div className="w-full flex scroll-hidden overflow-x-auto pb-4 gap-6 large:pb-6 items-center border-b border-tremor-brand-boulder100">
                {navLinks.map(item => (
                    <Link
                        href={item.path}
                        key={item.path}
                        className={`w-max min-w-max h-10 flex items-center justify-center tablet:text-xs  font-medium large:text-base text-sm rounded-[8px] ${
                            pathname === item.path
                                ? 'px-6 bg-[#D9D9D954] text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder400'
                        }`}>
                        {item.name}
                    </Link>
                ))}
            </div>
            {children}
        </section>
    )
}
