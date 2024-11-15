'use client'
import { useState, useEffect } from 'react'
import { useHire } from '@/hooks/hires'

import Cookies from 'js-cookie'
import DropdownMenu from '../../../job-seeker/jobs/components/dropdown'

import employmentTypes from '../../../(guest)/jobs/resources/employment-types.json'

import Image from 'next/image'
import Link from 'next/link'
import PostAJob from '@/public/images/user-layout/recruiter/post-a-job.svg'
import PostACompany from '@/public/images/user-layout/recruiter/post-a-company.svg'
import Spinner from '@/public/images/jobs/spinner.svg'
import EmptyState from '../../dashboard/components/empty-state'
import DeleteHire from './delete-hire'

const categories = ['All', 'Drafts']

export default function HiresOverview() {
    const [searchRole, setSearchRole] = useState('')
    const [jobType, setJobType] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const { fetchJobs } = useHire()

    // Data
    const [allJobs, setAllJobs] = useState([])

    // Data Info
    const [allJobsInfo, setAllJobsInfo] = useState(null)

    // Loading States
    const [generalLoading, setGeneralLoading] = useState(false)
    const [fetchMoreLoading, setFetchMoreLoading] = useState(false)

    const token = Cookies.get('analogueshifts')

    const fetchDatas = async () => {
        try {
            setGeneralLoading(true)

            await fetchJobs({
                setLoading: v => {},
                setCurrentPageInfo: setAllJobsInfo,
                setData: setAllJobs,
                url: '/hire/dashboard',
            })

            setGeneralLoading(false)
        } catch (error) {
            setGeneralLoading(false)
        }
    }

    const handleFetchMoreJobs = () => {
        fetchJobs({
            url: allJobsInfo?.next_page_url?.slice(33),
            setLoading: setFetchMoreLoading,
            setCurrentPageInfo: setAllJobsInfo,
            setData: newJobs => {
                setAllJobs(prev => [...prev, ...newJobs])
            },
        })
    }

    const handleSearchSubmit = async e => {
        e.preventDefault()
    }

    useEffect(() => {
        if (token) {
            fetchDatas()
        }
    }, [])

    return (
        <div className="xl:w-[calc(100%-320px)] overflow-hidden w-full bg-white rounded-[32px] flex flex-col">
            <div
                style={{
                    backgroundImage: 'url(/images/user-layout/jobs/grid.png)',
                }}
                className="w-full bg-no-repeat h-max bg-[#725200] tablet:py-7 tablet:px-6 py-9 px-14 bg-contain bg-right large:px-[67px] large:py-[49px] flex flex-col">
                <h2 className="font-semibold text-tremor-brand-boulder50 large:text-2xl text-xl large:mb-5 mb-4">
                    Let’s find your dream job!
                </h2>
                <form
                    onSubmit={handleSearchSubmit}
                    className="w-max tablet:w-full max-w-full tablet:grid tablet:grid-cols-2 mb-[22px] large:mb-[27px] flex flex-wrap gap-[6.6px]">
                    <input
                        placeholder="Search Role/jobs posted"
                        required
                        value={searchRole}
                        onChange={e => setSearchRole(e.target.value)}
                        className="w-[301px] tablet:col-span-2 tablet:w-full text-[8.8px] text-tremor-brand-boulder50 font-normal placeholder:text-[#FFFFFF52] border-none outline-none px-[13.5px] h-[30px] rounded-[8.8px] bg-[#FFFFFF29]"
                    />
                    <div className="w-[114px] tablet:col-span-2 tablet:w-full">
                        <DropdownMenu
                            list={employmentTypes}
                            placeholder="Select job type"
                            value={jobType}
                            onChange={setJobType}
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-[31px] tablet:col-span-2 tablet:w-full w-[120px] bg-tremor-background-darkYellow rounded-[8.8px] text-[8.8px] text-tremor-brand-boulder50 font-semibold">
                        Search
                    </button>
                </form>
                <div className="w-full flex gap-3 items-center flex-wrap text-xs text-tremor-brand-boulder50">
                    <p className="font-semibold">Related:</p>{' '}
                    {allJobs?.slice(0, 2)?.map((item, index) => {
                        return (
                            <button
                                onClick={() => setSearchRole(item?.title)}
                                key={index}
                                className="font-normal">
                                {item?.title}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full p-8 large:pt-8 pt-6 flex flex-col">
                <div className="mb-6 large:mb-8 w-full grid grid-cols-2 gap-2.5">
                    <Link
                        className="col-span-1 tablet:col-span-2"
                        href="/recruiter/hire/create">
                        <Image
                            src={PostAJob}
                            alt=""
                            className="w-full h-max object-cover rounded-[17px]"
                        />
                    </Link>
                    <Link
                        className="col-span-1 tablet:col-span-2"
                        href="/recruiter/companies/create">
                        <Image
                            src={PostACompany}
                            alt=""
                            className="w-full h-max object-cover rounded-[17px]"
                        />
                    </Link>
                </div>
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
                            {allJobs?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="w-full flex justify-between items-center tablet:gap-3 tablet:pb-4 tablet:border-b tablet:border-tremor-brand-boulder100 gap-5">
                                        <div className="flex gap-3 items-center">
                                            <img
                                                src={
                                                    item?.hiringOrganization
                                                        ?.logo ||
                                                    '/images/guest-layout/hero/filled_briefcase.svg'
                                                }
                                                onError={e => {
                                                    e.target.onerror = null
                                                    e.target.src =
                                                        '/images/guest-layout/hero/filled_briefcase.svg'
                                                }}
                                                alt=""
                                                className={`w-10 min-w-10 min-h-10 h-10 rounded-full object-cover`}
                                            />
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-sm font-medium text-black leading-none">
                                                    {item?.title}
                                                </h3>
                                                <Link
                                                    className="text-[11px] font-normal text-[#0000005C]"
                                                    href={
                                                        item?.hiringOrganization
                                                            ?.sameAs || ''
                                                    }>
                                                    {
                                                        item?.hiringOrganization
                                                            ?.name
                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="min-w-[202px] tablet:min-w-[101px] tablet:grid-cols-1 target:gap-1 grid grid-cols-2 items-center gap-3 ">
                                            <DeleteHire
                                                id={item?.id || ''}
                                                setCurrentPageInfo={
                                                    setAllJobsInfo
                                                }
                                                setData={setAllJobs}
                                            />
                                            <Link
                                                href={
                                                    '/recruiter/hire/edit/' +
                                                    item?.uuid
                                                }
                                                className="h-8 col-span-1 tablet:px-6 border border-[#FFBB0A59] flex justify-center items-center text-tremor-brand-boulder50 bg-tremor-background-darkYellow duration-300 hover:bg-white hover:text-tremor-background-darkYellow font-semibold text-xs rounded-xl">
                                                Edit
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                            {allJobs?.length === 0 && (
                                <EmptyState label="job" />
                            )}
                        </>
                    )}
                </div>

                {selectedCategory === 'All' && allJobsInfo?.next_page_url && (
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
