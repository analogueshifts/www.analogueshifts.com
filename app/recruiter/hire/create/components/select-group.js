'use client'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export default function SelectGroup({
    label,
    description,
    value,
    setValue,
    required,
    border,
    placeholder,
    list,
}) {
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
        <div
            className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 ${
                border ? 'border-b border-tremor-brand-boulder100' : ''
            }`}>
            <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                    {label}
                    {required && <span className="text-[#FF0000]">*</span>}
                </h3>
                <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                    {description}
                </p>
            </div>
            <div
                ref={dropdownRef}
                className="w-full relative flex flex-col col-span-1">
                <button
                    type="button"
                    onClick={() => setOpen(p => !p)}
                    className={`col-span-1 w-full flex justify-between items-center h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal outline-none rounded-2xl bg-white ${
                        value?.length > 0
                            ? 'text-tremor-brand-boulder900'
                            : 'text-tremor-brand-boulder300'
                    }`}>
                    {value?.length > 0
                        ? list?.find(item => item.value === value)?.label
                        : placeholder}{' '}
                    <svg
                        className="w-5 h-5 large:w-6 large:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
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
                            <div className="w-full large:py-5 large:px-6 px-5 py-3 flex flex-col large:gap-[30px] gap-6">
                                <h3 className="font-semibold text-black large:text-base text-sm">
                                    {placeholder}
                                </h3>
                            </div>
                            <div className="dropdown-list w-full h-max flex flex-col overflow-y-auto max-h-48 large:max-h-72">
                                {list.map((item, index) => {
                                    return (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setValue(item?.value)
                                                setOpen(prev => !prev)
                                            }}
                                            className="text-tremor-brand-boulder300 text-start w-full cursor-pointer border-transparent relative h-[42px] text-[13px] border py-2 px-6 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]"
                                            key={index}>
                                            {item?.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
