'use client'
import GridTile from './grid-tile'

import { useUser } from '@/contexts/user'
import { useJobs } from '@/hooks/jobs'
import React, { useState, useEffect } from 'react'

export default function JobsRecommendationsPage() {
    const { user } = useUser()
    const { getRecommendedJobs } = useJobs()

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    let url = `/jobs/recommend`

    useEffect(() => {
        if (user) {
            getRecommendedJobs({
                setData: data => setData(data.recommendation),
                setLoading,
                url,
            })
        }
    }, [user])

    return (
        <>
            <div className="w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                {data && (
                    <div className="bg-white z-50 border border-[#e7e7e7] min-h-[calc(100vh-192px)] md:min-h-[200px] tablet:p-7 p-10 h-max w-full md:rounded-xl flex flex-col">
                        <div className="w-full h-max min-h-full items-center flex flex-col gap-7 large:gap-10">
                            {data &&
                                data.map((item, index) => {
                                    return (
                                        <GridTile
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            total={data.length}
                                        />
                                    )
                                })}
                            {data && data?.length === 0 && (
                                <div className="w-full mt-10 flex px-5 items-center justify-center">
                                    <h3 className="text-tremor-brand-boulder950">
                                        No Job Found
                                    </h3>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
