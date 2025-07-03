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
                className="w-full tablet:h-12 h-14 hover:ring-transparent outline-none flex items-center rounded-2xl border border-tremor-brand-boulder200 px-6 tablet:text-sm text-sm large:text-base justify-between font-normal text-tremor-brand-boulder700 placeholder:text-tremor-brand-boulder200">
                {value.trim().length > 0 ? (
                    <p className="tablet:text-sm text-sm large:text-base font-normal">
                        {value}
                    </p>
                ) : (
                    <p className="tablet:text-sm text-sm large:text-base font-normal text-tremor-brand-boulder200">
                        {placeholder}
                    </p>
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        transition={{ ease: 'backOut', duration: 0.15 }}
                        initial={{ opacity: 0.5, scale: 0.93 }}
                        exit={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-3xl z-40 bg-white top-[60px] border flex flex-col w-full tablet:top-[52px] absolute origin-top text-base shadow-lg focus:outline-none sm:text-sm py-3"
                        style={{
                            boxShadow: '0px 20px 417px 0px #00000012',
                        }}>
                        {list.map(item => {
                            return (
                                <button
                                    type="button"
                                    onClick={() => onChange(item.value)}
                                    className="text-tremor-brand-boulder300 text-start w-full cursor-pointer border-transparent relative h-[42px] text-[13px] border py-2 px-6 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]"
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
