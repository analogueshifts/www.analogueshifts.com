'use client'
import { useJobs } from '@/hooks/jobs'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import JobGridTile from '@/app/(guest)/jobs/components/job-grid-tile'

export default function RecommendedJobs() {
    const { getRecommendedJobs } = useJobs()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    let url = `/jobs/recommend`
    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (token) {
            getRecommendedJobs({
                setData: data => setData(data.recommendation),
                setLoading,
                url,
            })
        }
    }, [])

    return (
        <div className="w-full pt-8 flex flex-col">
            <div className="w-full flex justify-between large:mb-8 mb-6">
                <div className="w-max flex items-center gap-[3px]">
                    <p className="font-semibold tablet:text-sm text-base text-black large:text-lg">
                        Recommended jobs
                    </p>
                    <div className="large:px-3 px-2.5 py-1 tablet:py-0.5 large:py-[6px] tablet:text-[8px] text-[10px] large:text-xs font-extrabold text-tremor-background-darkYellow bg-tremor-brand-tulip100 rounded-full">
                        {data?.length
                            ? `${data.length > 1000 ? '1000+' : data.length}`
                            : 0}
                    </div>
                </div>

                <button
                    onClick={() => router.push('/job-seeker/jobs')}
                    className="outline-none flex bg-transparent text-tremor-background-darkYellow text-[13px] tablet:text-[10px] large:text-[15px] font-medium pb-[3px] tablet:pb-[2px] large:pb-[6px] border-b border-b-tremor-background-darkYellow">
                    View More
                </button>
            </div>
            <div className="w-full flex flex-col gap-5 large:gap-[30px]">
                {data?.map((item, index) => {
                    return (
                        <JobGridTile
                            key={index}
                            index={index}
                            item={item}
                            total={data?.length}
                            dashboard={true}
                            handleApply={() =>
                                router.push('/job-seeker/jobs/' + item?.slug)
                            }
                        />
                    )
                })}
            </div>
        </div>
    )
}
