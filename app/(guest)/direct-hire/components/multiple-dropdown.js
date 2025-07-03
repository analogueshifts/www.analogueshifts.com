'use client'
import { useState, useEffect, useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import CustomCheckBox from '@/components/application/custom-checkbox'
import X from '@/public/icons/x.svg'

import Image from 'next/image'
import Search from '@/public/icons/glass.png'
import { useToast } from '@/contexts/toast'

export default function MultipleDropdown({
    value,
    inCludeSearchBar,
    setValue,
    list,
    placeholder,
    label,
    required,
}) {
    const [searchValue, setSearchValue] = useState('')
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const { notifyUser } = useToast()

    const handleAction = item => {
        if (value.includes(item)) {
            setValue(prev => prev.filter(i => i !== item))
        } else {
            if (value.length >= 12) {
                notifyUser('error', 'You can only select a maximum of 12')
            } else {
                setValue(prev => [...prev, item])
            }
        }
    }

    const closeDropdown = event => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [])

    return (
        <div className="w-full relative flex flex-col gap-3 large:gap-5">
            <div
                ref={dropdownRef}
                className={`w-full flex justify-between relative h-max `}>
                <p className="text-base large:text-xl font-medium text-tremor-brand-boulder950">
                    {label}{' '}
                    {required && <span className="text-[#FF0000]">*</span>}
                </p>
                <div onClick={() => setOpen(prev => !prev)} className={'w-max'}>
                    <p className="text-tremor-background-darkYellow cursor-pointer large:text-base text-sm font-semibold">
                        {placeholder}
                    </p>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            exit={{ scale: 0 }}
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            className={`form-dropdown origin-top-right z-50 p-0 absolute right-0 pr-1  h-max w-full  rounded-2xl border-none bg-white top-8 `}>
                            <div className="w-full large:py-6 large:px-6 px-5 py-5 flex flex-col large:gap-[30px] gap-6">
                                <h3 className="font-bold text-black large:text-xl text-[17px]">
                                    {placeholder}
                                </h3>
                                {inCludeSearchBar && (
                                    <div className="w-full border border-[#00000014] px-4 flex items-center gap-2 rounded-[10px] h-12">
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
                                                searchValue
                                                    .trim()
                                                    .toLowerCase(),
                                            ),
                                    )
                                    .map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    handleAction(item.name)
                                                }
                                                className={`large:px-6 cursor-pointer rounded-none w-full px-5 py-2 text-[13px] font-normal leading-[26px] border hover:bg-[#FFBB0A0F] hover:border-[#FFBB0A0D] hover:text-tremor-brand-boulder950 flex justify-between items-center  ${
                                                    item.name === value ||
                                                    value.includes(item.name)
                                                        ? 'border-[#FFBB0A0D] bg-[#FFBB0A0F] text-tremor-brand-boulder950'
                                                        : 'bg-transparent  border-transparent  text-tremor-brand-boulder400 '
                                                }`}>
                                                {item.name}
                                                <CustomCheckBox
                                                    checked={value.includes(
                                                        item.name,
                                                    )}
                                                />
                                            </div>
                                        )
                                    })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <>
                <div className="w-full flex flex-wrap items-start gap-2 p-5 large:p-6 rounded-2xl border border-tremor-brand-boulder200 h-max min-h-[124px]">
                    {value.length === 0 ? (
                        <p className="font-normal text-tremor-brand-boulder300 large:text-base text-sm">
                            Add your {label}
                        </p>
                    ) : (
                        <AnimatePresence initial={false} mode="popLayout">
                            {value.map((item, index) => {
                                return (
                                    <motion.div
                                        layout
                                        key={index}
                                        initial={{ scale: 0.7, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ type: 'spring' }}
                                        className="bg-tremor-background-darkYellow rounded-[2px] flex items-center px-1.5 py-1">
                                        <p className="text-white text-[13px] font-normal">
                                            {item?.toUpperCase()}
                                        </p>
                                        <button
                                            type="button"
                                            className="outline-none bg-none"
                                            onClick={() =>
                                                setValue(prev =>
                                                    prev.filter(
                                                        v => v !== item,
                                                    ),
                                                )
                                            }>
                                            <Image src={X} alt="" />
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    )}
                </div>
                <p className="font-normal text-tremor-brand-boulder950 large:text-base text-sm mb-2">
                    You can select a maximum of 12 {label}
                </p>
            </>
        </div>
    )
}
