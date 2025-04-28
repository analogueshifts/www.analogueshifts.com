'use client'
import Cookies from 'js-cookie'
import { useState, useEffect, useRef } from 'react'
import { useToast } from '@/contexts/toast'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Spinner from '@/public/images/jobs/spinner.svg'

export default function SelectForm({ setValue }) {
    const [selectedForm, setSelectedForm] = useState('')
    const [forms, setForms] = useState([])
    const { notifyUser } = useToast()
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const token = Cookies.get('analogueshifts')

    // Function to handle clicks outside the dropdown
    const handleClickOutside = event => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setOpen(false)
        }
    }

    const fetchForms = async (url, success) => {
        const axios = require('axios')
        const config = {
            method: 'GET',
            url: url,
            headers: { Authorization: 'Bearer ' + token },
        }

        try {
            setLoading(true)
            const response = await axios.request(config)
            if (success) {
                success(response)
            } else {
                setCurrentPageInfo(response.data.data.forms)
                setForms(response.data.data.forms.data)
            }
            setLoading(false)
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.data?.message ||
                    error?.response?.data?.message ||
                    'Error Fetching Forms',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                Cookies.remove('analogueshifts')
                window.location.reload()
            }
        }
    }

    const handleFetchMore = async () => {
        try {
            await fetchForms(
                process.env.NEXT_PUBLIC_BACKEND_URL +
                    currentPageInfo.next_page_url.slice(35),
                response => {
                    setCurrentPageInfo(response.data.data.forms)
                    setForms(prev => [
                        ...prev,
                        ...response.data.data.forms.data,
                    ])
                },
            )
        } catch (error) {
            console.log(error)
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

    useEffect(() => {
        if (token) {
            fetchForms(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tools/form`)
        }
    }, [token])

    return (
        <div
            ref={dropdownRef}
            className="w-full relative flex flex-col col-span-1">
            <button
                type="button"
                onClick={() => setOpen(p => !p)}
                className={`col-span-1 w-full flex justify-between items-center h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal outline-none rounded-2xl bg-white ${
                    selectedForm?.length > 0
                        ? 'text-tremor-brand-boulder900'
                        : 'text-tremor-brand-boulder300'
                }`}>
                {selectedForm?.length > 0 ? selectedForm : 'Select form'}{' '}
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
                                Select Form
                            </h3>
                        </div>
                        <div className="dropdown-list mb-5 large:mb-6 w-full h-max flex flex-col overflow-y-auto max-h-48 large:max-h-72">
                            {forms.map((item, index) => {
                                return (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedForm(item?.title)
                                            setOpen(prev => !prev)
                                            setValue(
                                                'https://forms.analogueshifts.com/forms/show/' +
                                                    item?.slug,
                                            )
                                        }}
                                        className="text-tremor-brand-boulder300 text-start w-full cursor-pointer border-transparent relative h-[42px] text-[13px] border py-2 px-6 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]"
                                        key={index}>
                                        {item?.title}
                                    </button>
                                )
                            })}
                        </div>
                        {currentPageInfo?.next_page_url && (
                            <button
                                onClick={handleFetchMore}
                                disabled={loading}
                                className={`outline-none mx-auto bg-transparent mb-3 text-tremor-background-darkYellow text-sm large:text-base font-medium pb-0.5 large:pb-2`}>
                                {loading ? (
                                    <Image
                                        src={Spinner}
                                        alt=""
                                        className="h-max w-10"
                                    />
                                ) : (
                                    'View More'
                                )}
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
