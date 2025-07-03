'use client'
import { useState, useEffect, useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Image from 'next/image'
import Search from '@/public/icons/glass.png'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'

export default function Dropdown({
    value,
    label,
    placeholder,
    inCludeSearchBar,
    setValue,
    list,
    image,
}) {
    const [searchValue, setSearchValue] = useState('')
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const closeDropdown = event => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setOpen(false)
        }
    }

    const handleAction = item => {
        setValue(item)
        setOpen(prev => !prev)
    }

    useEffect(() => {
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [])

    return (
        <div ref={dropdownRef} className={` relative h-max w-full`}>
            <div
                onClick={() => setOpen(prev => !prev)}
                className={`w-full  cursor-pointer text-tremor-brand-boulder300 text-sm large:text-base font-normal h-14 large:h-16 rounded-2xl outline-none focus-visible:ring-0 border border-tremor-brand-boulder200 px-6 flex justify-between items-center ${
                    value.trim().length === 0
                        ? 'text-[#B0B0B0]'
                        : 'text-tremor-brand-boulder950'
                }`}>
                <div className="flex items-center w-max gap-3">
                    <Image src={image} alt="" className="w-max h-5 large:h-6" />
                    {value.trim().length === 0 ? placeholder : value}
                </div>
                <Image src={ChevronDown} alt="" />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        exit={{ scale: 0 }}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        className={`form-dropdown origin-top-right z-50 p-0 absolute right-0 pr-1  h-max w-full rounded-2xl border-none bg-white top-[100%]`}>
                        <div className="w-full large:py-6 large:px-6 px-5 py-5 flex flex-col">
                            <h3 className="font-bold text-black large:text-xl text-[17px]">
                                {label}
                            </h3>
                            {inCludeSearchBar && (
                                <div className="w-full border border-[#00000014] px-4 flex items-center gap-2 rounded-[10px] tablet:mt-5 mt-[30px] h-12">
                                    <Image
                                        src={Search}
                                        alt=""
                                        className="min-w-5 w-5 h-max"
                                    />
                                    <input
                                        value={searchValue}
                                        onChange={e =>
                                            setSearchValue(e.target.value)
                                        }
                                        placeholder={'Search'}
                                        className="w-full outline-none bg-none border-none font-normal text-xs text-tremor-brand-boulder200 py-2"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="dropdown-list mb-5 large:mb-6 w-full h-max flex flex-col overflow-y-auto max-h-48 large:max-h-72">
                            {list
                                .filter(item =>
                                    item.name
                                        .toLowerCase()
                                        .includes(
                                            searchValue.trim().toLowerCase(),
                                        ),
                                )
                                .map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                handleAction(item.name)
                                            }
                                            className={`large:px-6 cursor-pointer rounded-none w-full px-5 py-2 text-[13px] font-normal leading-[26px] border hover:bg-[#FFBB0A0F] hover:border-[#FFBB0A0D] hover:text-tremor-brand-boulder950 flex gap-2.5 items-center  ${
                                                item.name === value ||
                                                value.includes(item.name)
                                                    ? 'border-[#FFBB0A0D] bg-[#FFBB0A0F] text-tremor-brand-boulder950'
                                                    : 'bg-transparent  border-transparent  text-tremor-brand-boulder400 '
                                            }`}>
                                            {item.flag && (
                                                <img
                                                    className="w-6 h-[18px]"
                                                    src={item.flag}
                                                    alt=""
                                                />
                                            )}{' '}
                                            {item.name}{' '}
                                        </div>
                                    )
                                })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
