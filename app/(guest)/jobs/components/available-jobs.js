'use client'
import { useState } from 'react'
import { useUser } from '@/contexts/user'
import { useJobs } from '@/hooks/jobs'

import AsideSection from './aside'
import JobGridTile from './job-grid-tile'
import { scrollToSection } from '@/configs/scroll-to-section'

import Image from 'next/image'
import Spinner from '@/public/images/jobs/spinner.svg'

export default function AvailableJobs({ initialData }) {
    const { user } = useUser()
    const { getJobs } = useJobs()
    const [loading, setLoading] = useState(false)
    const [jobs, setJobs] = useState(initialData?.data || [])
    const [jobsInfo, setJobsInfo] = useState(initialData || {})

    const handleFetchMore = () => {
        getJobs({
            url: jobsInfo.next_page_url,
            setLoading,
            setInfo: setJobsInfo,
            setData: newJobs => {
                setJobs(prev => [...prev, ...newJobs])
            },
        })
    }

    return (
        <section className="w-full large:mb-20 mb-14 large:px-112 px-20 tablet:px-6 h-max xl:flex-row flex-col flex items-start gap-[60px]">
            <div className="xl:w-minus355 w-full flex flex-col">
                <div className="w-full flex justify-between large:mb-12 mb-9">
                    <div className="w-max flex items-center gap-2">
                        <p className="font-semibold tablet:text-[22px] text-[28px] text-black large:text-32">
                            Available Roles
                        </p>
                        <div className="large:px-4 px-3 py-1.5 tablet:py-1 large:py-2 tablet:text-xs text-sm large:text-base font-extrabold text-tremor-background-darkYellow bg-tremor-brand-tulip100 rounded-full">
                            {initialData?.total
                                ? `${
                                      initialData.total > 1000
                                          ? '1000+'
                                          : initialData.total
                                  }`
                                : 0}
                        </div>
                    </div>
                    {jobsInfo?.next_page_url && (
                        <button
                            onClick={() => scrollToSection('viewMoreButton')}
                            className="outline-none tablet:hidden flex bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b border-b-tremor-background-darkYellow">
                            View More
                        </button>
                    )}
                </div>
                <div className="w-full flex flex-col gap-7 large:gap-10">
                    {jobs.map((item, index) => {
                        return (
                            <JobGridTile
                                key={index}
                                index={index}
                                item={item}
                                total={jobs?.length}
                            />
                        )
                    })}
                    {jobsInfo?.next_page_url && (
                        <button
                            onClick={handleFetchMore}
                            disabled={loading}
                            id="viewMoreButton"
                            className={`outline-none mx-auto bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b ${
                                loading
                                    ? 'border-transparent'
                                    : 'border-b-tremor-background-darkYellow'
                            }`}>
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
                </div>
            </div>
            <div className="xl:w-355 w-[710px] tablet:w-full static xl:sticky large:top-28 top-24">
                <AsideSection user={user} />
            </div>
        </section>
    )
}
