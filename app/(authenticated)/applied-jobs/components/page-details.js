'use client'
import { useUser } from '@/contexts/user'
import { useJobs } from '@/hooks/jobs'
import React, { useState, useEffect } from 'react'
import GridTile from './grid-tile'

import Image from 'next/image'
import Spinner from '@/public/images/jobs/spinner.svg'

export default function AppliedJobsPage() {
    const { user } = useUser()
    const { getRecommendedJobs } = useJobs()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentPageInfo, setCurrentPageInfo] = useState(null)

    let url = '/jobs/applied'

    useEffect(() => {
        if (user) {
            getRecommendedJobs({
                setLoading,
                url,
                setData: res => {
                    setData(res.applied.data)
                    setCurrentPageInfo(res.applied)
                },
            })
        }
    }, [user])

    const handleFetchMore = () => {
        getRecommendedJobs({
            setLoading,
            url: currentPageInfo.next_page_url.slice(34),
            setData: res => {
                setData(prev => [...prev, ...res.applied.data])
                setCurrentPageInfo(res.applied)
            },
        })
    }

    return (
        <>
            <div className="w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                {data && (
                    <div className="bg-white z-50 border border-[#e7e7e7] tablet:p-5 p-10 h-max w-full md:rounded-xl flex flex-col">
                        <div className="w-full h-max min-h-full items-center flex flex-col gap-7 large:gap-10">
                            {data.map((item, index) => {
                                return (
                                    <GridTile
                                        key={index}
                                        item={item}
                                        index={index}
                                        total={data.length}
                                    />
                                )
                            })}
                            {data?.length === 0 && (
                                <div className="w-full my-10 flex px-5 items-center justify-center">
                                    <h3 className="text-tremor-brand-boulder950">
                                        No Applied Job
                                    </h3>
                                </div>
                            )}
                            {currentPageInfo?.next_page_url && (
                                <button
                                    onClick={handleFetchMore}
                                    disabled={loading}
                                    className={`outline-none mx-auto bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b mt-6 ${
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
                )}
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
