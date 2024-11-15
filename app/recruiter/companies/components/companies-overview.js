'use client'
import { useState, useEffect } from 'react'
import { useCompany } from '@/hooks/companies'

import Cookies from 'js-cookie'

import Image from 'next/image'
import Link from 'next/link'
import Spinner from '@/public/images/jobs/spinner.svg'
import Building from '@/public/images/user-layout/recruiter/building.svg'
import EmptyState from '../../dashboard/components/empty-state'
import DeleteCompany from './delete-company'

const categories = ['All', 'Drafts']

export default function CompaniesOverview() {
    const { getCompanies } = useCompany()
    const [selectedCategory, setSelectedCategory] = useState('All')

    // Data
    const [allCompanies, setAllCompanies] = useState([])

    // Data Info
    const [allCompaniessInfo, setAllCompaniesInfo] = useState(null)

    // Loading States
    const [generalLoading, setGeneralLoading] = useState(false)
    const [fetchMoreLoading, setFetchMoreLoading] = useState(false)

    const token = Cookies.get('analogueshifts')

    const fetchDatas = async () => {
        try {
            setGeneralLoading(true)

            await getCompanies({
                url: '/profile/companies',
                setData: res => {
                    setAllCompaniesInfo(res.companies)
                    setAllCompanies(res.companies.data)
                },
                setLoading: v => {},
            })

            setGeneralLoading(false)
        } catch (error) {
            setGeneralLoading(false)
        }
    }

    const handleFetchMoreJobs = () => {
        getCompanies({
            url: allCompaniessInfo.next_page_url.slice(33),
            setData: res => {
                setAllCompaniesInfo(res.companies)
                setAllCompanies(prev => [...prev, ...res.companies.data])
            },
            setLoading: setFetchMoreLoading,
        })
    }

    useEffect(() => {
        if (token) {
            fetchDatas()
        }
    }, [])

    return (
        <div className="xl:w-[calc(100%-320px)] overflow-hidden w-full bg-white rounded-[32px] flex flex-col p-8">
            <Link
                className="w-full rounded-[17px] h-[101px] bg-[#C69F3A] px-11 flex justify-between"
                href="/recruiter/companies/create">
                <h2 className="text-white font-semibold pt-5 text-[13px]">
                    Add Company
                </h2>
                <Image src={Building} alt="" />
            </Link>
            <div className="w-full large:pt-8 pt-6 flex flex-col">
                <div className="w-full large:mb-8 mb-6 overflow-x-auto scroll-hidden">
                    <div className="w-max flex items-center gap-2">
                        {categories.map(item => {
                            return (
                                <button
                                    type="button"
                                    disabled={
                                        generalLoading || fetchMoreLoading
                                    }
                                    onClick={() => setSelectedCategory(item)}
                                    className={`h-9 w-max px-5 text-xs font-semibold outline-none duration-300 flex justify-center items-center rounded-full ${
                                        item === selectedCategory
                                            ? 'bg-tremor-background-darkYellow text-white border-none'
                                            : 'border bg-[#FBFCFC] border-[#FFBB0A3D] text-tremor-background-darkYellow'
                                    }`}
                                    key={item}>
                                    {item}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="large:text-lg text-base font-semibold text-black ">
                            {selectedCategory === 'All'
                                ? 'All activities'
                                : selectedCategory}
                        </h2>
                    </div>
                    {selectedCategory === 'Drafts' ? (
                        <div className="w-full h-max py-8 flex justify-center items-center">
                            <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                                Coming Soon
                            </p>
                        </div>
                    ) : (
                        <>
                            {generalLoading ? (
                                <div className="w-full h-max py-8 flex justify-center items-center">
                                    <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                                        Fetching...
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {allCompanies?.length === 0 ? (
                                        <EmptyState label="company" />
                                    ) : (
                                        <div className="w-full flex flex-col">
                                            <div className="w-full mb-7 pb-4 border-b border-tremor-brand-boulder100">
                                                <h2 className="font-semibold text-black text-sm">
                                                    Companies
                                                </h2>
                                            </div>
                                            <div className="w-full flex flex-col gap-5">
                                                {allCompanies.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="w-full flex items-center justify-between gap-3">
                                                                <div className="flex gap-2 items-center">
                                                                    <img
                                                                        src={
                                                                            item?.logo ||
                                                                            '/images/guest-layout/hero/filled_briefcase.svg'
                                                                        }
                                                                        onError={e => {
                                                                            e.target.onerror = null
                                                                            e.target.src =
                                                                                '/images/guest-layout/hero/filled_briefcase.svg'
                                                                        }}
                                                                        alt=""
                                                                        className={`w-[33px] min-w-[33px] min-h-[33px] h-[33px] rounded-full object-cover`}
                                                                    />
                                                                    <h3 className="text-sm font-medium text-black leading-none">
                                                                        {
                                                                            item?.name
                                                                        }
                                                                    </h3>
                                                                </div>
                                                                <div className="min-w-[202px] tablet:min-w-[101px] tablet:grid-cols-1 target:gap-1 grid grid-cols-2 items-center gap-3 ">
                                                                    <DeleteCompany
                                                                        id={
                                                                            item?.uuid ||
                                                                            ''
                                                                        }
                                                                        setCurrentPageInfo={
                                                                            setAllCompaniesInfo
                                                                        }
                                                                        setData={
                                                                            setAllCompanies
                                                                        }
                                                                    />
                                                                    <Link
                                                                        href={
                                                                            '/recruiter/companies/edit/' +
                                                                            item?.uuid
                                                                        }
                                                                        className="h-8 col-span-1 tablet:px-6 border border-[#FFBB0A59] flex justify-center items-center text-tremor-brand-boulder50 bg-tremor-background-darkYellow duration-300 hover:bg-white hover:text-tremor-background-darkYellow font-semibold text-xs rounded-xl">
                                                                        Edit
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>

                {selectedCategory === 'All' &&
                    allCompaniessInfo?.next_page_url && (
                        <>
                            {!generalLoading && (
                                <button
                                    onClick={handleFetchMoreJobs}
                                    disabled={fetchMoreLoading}
                                    className={`outline-none mx-auto bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b ${
                                        fetchMoreLoading
                                            ? 'border-transparent'
                                            : 'border-b-tremor-background-darkYellow'
                                    }`}>
                                    {fetchMoreLoading ? (
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
                        </>
                    )}
            </div>
        </div>
    )
}
