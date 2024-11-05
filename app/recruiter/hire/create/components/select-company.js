'use client'
import Cookies from 'js-cookie'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Spinner from '@/public/images/jobs/spinner.svg'
import { useCompany } from '@/hooks/companies'

export default function SelectCompany() {
    const [companies, setCompanies] = useState([])
    const [selectedCompany, setSelectedCompany] = useState('')
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const { getCompanies } = useCompany()
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
            getCompanies({
                url: '/profile/companies',
                setData: res => {
                    setCurrentPageInfo(res.companies)
                    setCompanies(res.companies.data)
                },
                setLoading,
            })
        }
    }, [token])

    const handleFetchMore = async () => {
        try {
            await getCompanies({
                url: currentPageInfo?.next_page_url.slice(33),
                setData: res => {
                    setCurrentPageInfo(res.companies)
                    setCompanies(prev => [...prev, ...res.companies.data])
                },
                setLoading,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (selectedCompany !== '') {
            let company = companies.find(item => item?.name === selectedCompany)
            if (company) {
                localStorage.setItem('newJobCompany', JSON.stringify(company))
            }
        }
    }, [selectedCompany])

    useEffect(() => {
        const company = localStorage.getItem('newJobCompany')
        if (company) {
            setSelectedCompany(JSON.parse(company)?.name || '')
        }
    }, [])

    return (
        <div
            className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 border-b border-tremor-brand-boulder100`}>
            <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                    Company Name
                    <span className="text-[#FF0000]">*</span>
                </h3>
                <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                    You can select company if added or type in name manually
                </p>
            </div>

            <div
                ref={dropdownRef}
                className="w-full relative flex flex-col col-span-1">
                <button
                    type="button"
                    onClick={() => setOpen(p => !p)}
                    className={`col-span-1 w-full flex justify-between items-center h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal outline-none rounded-2xl bg-white ${
                        selectedCompany?.length > 0
                            ? 'text-tremor-brand-boulder900'
                            : 'text-tremor-brand-boulder300'
                    }`}>
                    {selectedCompany?.length > 0
                        ? selectedCompany
                        : 'Select company'}{' '}
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
                                    Select Company
                                </h3>
                            </div>
                            <div className="dropdown-list mb-5 large:mb-6 w-full h-max flex flex-col overflow-y-auto max-h-48 large:max-h-72">
                                {companies.map((item, index) => {
                                    return (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedCompany(item?.name)
                                                setOpen(prev => !prev)
                                            }}
                                            className="text-tremor-brand-boulder300 text-start w-full cursor-pointer border-transparent relative h-[42px] text-[13px] border py-2 px-6 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]"
                                            key={index}>
                                            {item?.name}
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
        </div>
    )
}
