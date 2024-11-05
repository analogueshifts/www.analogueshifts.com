'use client'
import { useState, useEffect } from 'react'
import { useHire } from '@/hooks/hires'
import { useUser } from '@/contexts/user'
import Link from 'next/link'
import EmptyState from './empty-state'

export default function JobsPosted() {
    const { fetchJobs } = useHire()
    const { user } = useUser()
    const [data, setData] = useState(null)

    useEffect(() => {
        if (user) {
            if (user?.user_mode === 'hire') {
                fetchJobs({
                    setLoading: v => {},
                    setCurrentPageInfo: v => {},
                    setData,
                    url: '/hire/dashboard',
                })
            }
        }
    }, [user])

    return (
        <div className="w-full pt-8 flex flex-col">
            <div className="w-full pb-4 border-b mb-7 border-tremor-brand-boulder100 grid grid-cols-5">
                <h2 className="text-black text-sm font-semibold col-span-2 tablet:col-span-5">
                    <span className="tablet:hidden">Companies</span>{' '}
                    <span className="hidden tablet:block">
                        Recent jobs posted
                    </span>
                </h2>
                <h2 className="text-black text-sm font-semibold tablet:hidden col-span-3">
                    Job Title
                </h2>
            </div>
            <div className="w-full flex flex-col gap-5">
                {data?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full grid grid-cols-5 items-center">
                            <div className="col-span-2 tablet:col-span-5 flex gap-2 items-center">
                                <img
                                    src={
                                        item?.hiringOrganization?.logo ||
                                        '/images/guest-layout/hero/filled_briefcase.svg'
                                    }
                                    alt=""
                                    className={`w-8 min-w-8 min-h-8 h-8 rounded-full object-cover`}
                                />
                                <h3 className="text-tremor-brand-boulder950 text-sm font-medium">
                                    {item?.hiringOrganization?.name}
                                </h3>
                            </div>
                            <div className="col-span-3 tablet:col-span-5 tablet:pl-10 flex gap-3 justify-between items-center">
                                <h3 className="text-tremor-brand-boulder950 text-sm font-medium">
                                    {item?.title}
                                </h3>
                                <Link
                                    href={'/recruiter/hire/' + item?.slug}
                                    className="h-8 tablet:min-w-max tablet:px-6 min-w-[102px] flex justify-center items-center rounded-xl bg-white border border-tremor-background-darkYellow text-tremor-background-darkYellow duration-300 hover:bg-tremor-background-darkYellow hover:text-tremor-brand-boulder50 text-xs font-semibold">
                                    View
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            {data?.length === 0 && <EmptyState label="job" />}
        </div>
    )
}
