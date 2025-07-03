import { useState, useRef } from 'react'

import data from '../utilities/our-apps.json'
import Link from 'next/link'
import Image from 'next/image'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'
import { AnimatePresence, motion } from 'framer-motion'

export default function OurApps() {
    const [isOpen, setIsOpen] = useState(false)
    const timerRef = useRef(null)

    const handleMouseEnter = () => {
        clearTimeout(timerRef.current)
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 100)
    }

    const MenuLink = ({ item }) => (
        <Link
            href={item.href}
            className="w-max flex gap-4 items-center duration-300 hover:translate-x-1">
            <Image width={40} height={40} src={item.image} alt="" />
            <div className="flex flex-col gap-1.5">
                <h3 className="text-black font-semibold text-base">
                    {item.title}
                </h3>
                <p className="text-tremor-brand-boulder400 font-normal text-[9.8px]">
                    {item.description}
                </p>
            </div>
        </Link>
    )

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button className="font-medium text-tremor-brand-boulder950 large:text-base text-xs h-6 leading-5 flex items-start">
                Products{' '}
                <Image
                    src={ChevronDown}
                    alt=""
                    className={`large:w-6 large:h-6 w-4 h-4 duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="our-apps-menu w-max absolute top-10 rounded-[18px] -left-10 bg-white large:px-14 px-12 gap-10 large:gap-12 flex h-max py-9 large:py-10 "
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <div className="flex flex-col w-max large:gap-[35.6px] gap-7">
                            {data.ready.map(item => {
                                return <MenuLink key={item.title} item={item} />
                            })}
                        </div>
                        <div className="h-[197px] border-r border-tremor-brand-boulder100"></div>
                        <div className="flex flex-col w-max items-center">
                            <div className="py-1 w-max large:mb-8 mb-6 px-4 rounded-full bg-tremor-background-darkYellow/10">
                                <p className="text-xs font-medium text-tremor-background-darkYellow">
                                    Products Coming Soon!
                                </p>
                            </div>
                            <div className="flex flex-col large:gap-[35.6px] gap-7">
                                {data.comingSoon.map(item => {
                                    return (
                                        <MenuLink
                                            key={item.title}
                                            item={item}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
