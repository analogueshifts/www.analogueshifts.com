'use client'
import { useRef, useState, useEffect } from 'react'

import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function DropdownMenu({ value, onChange, list, placeholder }) {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Function to handle clicks outside the dropdown
    const handleClickOutside = event => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setOpen(false)
        }
    }

    // Add and clean up event listener for clicks outside
    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    return (
        <div className="w-full relative flex flex-col" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setOpen(p => !p)}
                className="w-full h-[30px] outline-none bg-[#FFFFFF29] flex items-center rounded-[8.8px] border-none px-[13px] text-[8.8px] justify-between font-normal">
                {value.trim().length > 0 ? (
                    <p className="text-tremor-brand-boulder50 font-normal">
                        {value}
                    </p>
                ) : (
                    <p className="leading-none font-normal text-[#FFFFFF52]">
                        {placeholder}
                    </p>
                )}
                <ChevronDown className="h-3 w-3 text-[#F6F6F6]" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        transition={{ ease: 'backOut', duration: 0.15 }}
                        initial={{ opacity: 0.5, scale: 0.93 }}
                        exit={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl z-40 bg-white top-[35px] flex flex-col w-full  absolute origin-top shadow-lg focus:outline-none py-1"
                        style={{
                            boxShadow: '0px 20px 417px 0px #00000012',
                        }}>
                        {list.map(item => {
                            return (
                                <button
                                    type="button"
                                    onClick={() => onChange(item.value)}
                                    className="text-tremor-brand-boulder300 text-start w-full cursor-pointer border-transparent relative h-[30px] text-[8.8px] border px-[13px] hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]"
                                    key={item.label}>
                                    {item.label}
                                </button>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
