'use client'
import Link from 'next/link'
import SkeletonCard from '@/components/application/skeleton-card'

import { useUser } from '@/contexts/user'
import { useJobs } from '@/hooks/jobs'
import React, { useState, useEffect } from 'react'

export default function AppliedJobsPage() {
    const { user } = useUser()
    const { getRecommendedJobs } = useJobs()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    let url = `/jobs/applied`

    useEffect(() => {
        if (user) {
            getRecommendedJobs({
                setLoading,
                url,
                setData: data => console.log(data),
            })
        }
    }, [user])

    return (
        <>
            <div className="w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="bg-white z-50 border border-[#e7e7e7] min-h-[calc(100vh-192px)] md:min-h-[200px] py-5 h-max w-full px-5 pb-5 md:rounded-xl flex flex-col">
                    {loading ? (
                        <div className="w-full h-max min-h-[200px] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
                        </div>
                    ) : (
                        <div className="w-full h-max min-h-full flex flex-wrap gap-6">
                            {data &&
                                data.map(item => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between  md:flex-col items-center gap-y-2">
                                            <div className="flex gap-5 flex-wrap md:flex-col items-center justify-center md:items-center">
                                                <img
                                                    src={
                                                        item?.hiringOrganization
                                                            ?.logo &&
                                                        item?.hiringOrganization?.logo?.trim()
                                                            .length
                                                            ? item
                                                                  .hiringOrganization
                                                                  .logo
                                                            : '/images/jobs/company_logo.JPG'
                                                    }
                                                    alt="LOGO"
                                                    className={`md:w-max md:h-[100px] object-contain w-[156px] h-[100px]`}
                                                />
                                                <div className="flex flex-col gap-1.5 items-center md:items-center">
                                                    <p className="text-sm font-normal text-[#B0B0B0]">
                                                        {
                                                            item
                                                                ?.hiringOrganization
                                                                ?.name
                                                        }
                                                    </p>
                                                    <p className="text-xl font-semibold text-black/90">
                                                        {item.title}
                                                    </p>
                                                    <p
                                                        className="text-[15px] font-normal text-[#7B7B7B] md:text-center"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                item.description
                                                                    ?.length >
                                                                100
                                                                    ? item?.description
                                                                          ?.slice(
                                                                              0,
                                                                              100,
                                                                          )
                                                                          .concat(
                                                                              '...',
                                                                          )
                                                                    : item?.description,
                                                        }}></p>
                                                    <div className="flex gap-1.5 flex-wrap">
                                                        <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                            {item?.baseSalary
                                                                ?.value.value +
                                                                ' ' +
                                                                item?.baseSalary
                                                                    ?.currency +
                                                                ' ' +
                                                                'Per' +
                                                                ' ' +
                                                                item?.baseSalary
                                                                    ?.value
                                                                    ?.unitText}
                                                        </div>
                                                        <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                            {
                                                                item?.jobLocationType
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mx-auto items-center md:mt-2 md:mx-auto">
                                                <a
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    href={item?.apply || ''}
                                                    className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                                                    Apply
                                                </a>
                                                <Link
                                                    href={'/jobs/' + item?.slug}
                                                    className="text-xs font-normal text-black/60">
                                                    View Job
                                                </Link>
                                            </div>
                                        </div>
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
                    )}
                </div>
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
