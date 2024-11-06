'use client'
import { useState, useEffect } from 'react'
import { useJobs } from '@/hooks/jobs'

import Cookies from 'js-cookie'
import DropdownMenu from './dropdown'
import DateTimeDropdown from './date-dropdown'

import employmentTypes from '../../../(guest)/jobs/resources/employment-types.json'
import RenderJobs from './render-jobs'

import Image from 'next/image'
import Spinner from '@/public/images/jobs/spinner.svg'

const categories = ['All', 'Recommended jobs', 'Applied jobs', 'Saved Jobs']

export default function JobsOverview() {
    const [searchRole, setSearchRole] = useState('')
    const [jobType, setJobType] = useState('')
    const [datePosted, setDatePosted] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searched, setSearched] = useState(false)
    const { getRecommendedJobs, getJobs } = useJobs()

    // Data
    const [allJobs, setAllJobs] = useState([])
    const [recommendedJobs, setRecommendedJobs] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])

    // Data Info
    const [allJobsInfo, setAllJobsInfo] = useState(null)
    const [appliedJobsInfo, setAppliedJobsInfo] = useState(null)

    // Loading States
    const [generalLoading, setGeneralLoading] = useState(false)
    const [fetchMoreLoading, setFetchMoreLoading] = useState(false)
    const [searchJobLoading, setSearchJobLoading] = useState(false)

    const token = Cookies.get('analogueshifts')
    let searchUrl = `${
        searchRole.trim().length > 0 ? '?search=' + searchRole : ''
    }${jobType.trim().length > 0 ? '&employmentType=' + jobType : ''}${
        datePosted.trim().length > 0 ? '&date=' + datePosted : ''
    }`

    const showViewMore = () => {
        if (selectedCategory === 'All' && allJobsInfo?.next_page_url)
            return true
        if (
            selectedCategory === 'Applied jobs' &&
            appliedJobsInfo?.next_page_url
        )
            return true
    }

    const fetchDatas = async () => {
        try {
            setGeneralLoading(true)

            await getJobs({
                url: '/jobs',
                setLoading: v => {},
                setInfo: setAllJobsInfo,
                setData: setAllJobs,
            })

            await getRecommendedJobs({
                setData: data => setRecommendedJobs(data.recommendation),
                setLoading: v => {},
                url: '/jobs/recommend',
            })

            await getRecommendedJobs({
                setData: res => {
                    setAppliedJobs(res.applied.data)
                    setAppliedJobsInfo(res.applied)
                },
                setLoading: v => {},
                url: '/jobs/applied',
            })
            setGeneralLoading(false)
        } catch (error) {
            setGeneralLoading(false)
        }
    }

    const handleFetchMoreJobs = () => {
        getJobs({
            url:
                allJobsInfo?.next_page_url.slice(33) + '&' + +searchUrl ||
                '/jobs',
            setLoading: setFetchMoreLoading,
            setInfo: setAllJobsInfo,
            setData: newJobs => {
                setAllJobs(prev => [...prev, ...newJobs])
            },
        })
    }

    const handleClearSearch = async () => {
        try {
            await getJobs({
                url: '/jobs',
                setLoading: v => {},
                setInfo: setAllJobsInfo,
                setData: setAllJobs,
            })
            setSearched(false)
        } catch (error) {
            setSearched(true)
        }
    }

    const handleSearchSubmit = async e => {
        e.preventDefault()

        try {
            await getJobs({
                url: '/job/search' + searchUrl,
                setLoading: setSearchJobLoading,
                setInfo: setAllJobsInfo,
                setData: setAllJobs,
            })
            setSearched(true)
            setSearchRole('')
            setJobType('')
            setDatePosted('')
        } catch (error) {
            setSearched(false)
        }
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
                        placeholder="Search Role"
                        required
                        value={searchRole}
                        onChange={e => setSearchRole(e.target.value)}
                        className="w-[179px] tablet:col-span-2 tablet:w-full text-[8.8px] text-tremor-brand-boulder50 font-normal placeholder:text-[#FFFFFF52] border-none outline-none px-[13.5px] h-[30px] rounded-[8.8px] bg-[#FFFFFF29]"
                    />
                    <div className="w-[114px] tablet:col-span-1 tablet:w-full">
                        <DropdownMenu
                            list={employmentTypes}
                            placeholder="Select job type"
                            value={jobType}
                            onChange={setJobType}
                        />
                    </div>
                    <div className="w-[114px] tablet:col-span-1 tablet:w-full">
                        <DateTimeDropdown
                            dateTime={datePosted}
                            onChange={setDatePosted}
                            placeholder="Date"
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-[31px] tablet:col-span-2 tablet:w-full w-[120px] bg-tremor-background-darkYellow rounded-[8.8px] text-[8.8px] text-tremor-brand-boulder50 font-semibold">
                        {searchJobLoading ? 'Searching...' : 'Search'}
                    </button>
                </form>
                <div className="w-full flex gap-3 items-center flex-wrap text-xs text-tremor-brand-boulder50">
                    <p className="font-semibold">Related:</p>{' '}
                    {recommendedJobs?.slice(0, 2)?.map((item, index) => {
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
            <div className="w-full p-8 flex flex-col">
                <div className="w-full large:mb-8 mb-6 overflow-x-auto scroll-hidden">
                    <div className="w-max flex items-center gap-2">
                        {categories.map(item => {
                            return (
                                <button
                                    type="button"
                                    disabled={
                                        generalLoading ||
                                        searchJobLoading ||
                                        fetchMoreLoading
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
                <RenderJobs
                    allJobs={allJobs}
                    appliedJobs={appliedJobs}
                    generalLoading={generalLoading}
                    recommendedJobs={recommendedJobs}
                    selectedCategory={selectedCategory}
                    searched={searched}
                    handleClearSearch={handleClearSearch}
                />
                {(selectedCategory === 'All' ||
                    selectedCategory === 'Applied jobs') && (
                    <>
                        {showViewMore() && !generalLoading && (
                            <button
                                onClick={() => {
                                    if (selectedCategory === 'All') {
                                        handleFetchMoreJobs()
                                    }
                                }}
                                disabled={fetchMoreLoading || searchJobLoading}
                                id="viewMoreButton"
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
