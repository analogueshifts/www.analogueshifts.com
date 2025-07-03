'use client'
import { useJobs } from '@/hooks/jobs'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { formatNumber, formatUnitText } from '@/configs/jobs/format'

export default function MoreJobs() {
    const { getRecommendedJobs } = useJobs()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

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
        <div className="bg-white tablet:hidden w-full h-max rounded-[32px] p-8 flex flex-col items-center">
            <h3 className="text-black text-start w-full font-semibold large:text-lg text-base mb-[23px]">
                More jobs for you
            </h3>
            <div className="w-full flex flex-col gap-4">
                {data?.slice(0, 5)?.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={'/job-seeker/jobs/' + item?.slug}
                            className={`w-full  pb-5  ${
                                data?.length - 1 !== index
                                    ? 'border-b border-[#DBDBDB]'
                                    : ''
                            }`}>
                            <div className="flex w-full gap-2.5 items-center">
                                <img
                                    src={
                                        item?.hiringOrganization?.logo ||
                                        '/images/guest-layout/hero/filled_briefcase.svg'
                                    }
                                    onError={e => {
                                        e.target.onerror = null
                                        e.target.src =
                                            '/images/guest-layout/hero/filled_briefcase.svg'
                                    }}
                                    alt=""
                                    className="w-[33px] h-[33px] rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-1 w-[calc(100%-43px)]">
                                    <h2 className="text-black truncate text-[10.31px] font-semibold">
                                        {item?.title}
                                    </h2>
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <Link
                                            href={
                                                item?.hiringOrganization
                                                    ?.sameAs || ''
                                            }
                                            className="truncate text-black text-[8.21px] font-normal">
                                            {item?.hiringOrganization?.name}
                                        </Link>
                                        {item?.employmentType && (
                                            <p className="text-tremor-brand-boulder400 text-[8.21px] font-normal">
                                                • &nbsp;{item.employmentType}
                                            </p>
                                        )}
                                        {item?.baseSalary?.value?.value && (
                                            <div className="text-tremor-brand-boulder400 text-[8.21px] font-normal">
                                                • &nbsp;
                                                {formatNumber(
                                                    item.baseSalary.value.value,
                                                )}
                                                {item?.baseSalary?.value
                                                    ?.unitText && (
                                                    <span>
                                                        /
                                                        {formatUnitText(
                                                            item.baseSalary
                                                                .value.unitText,
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
