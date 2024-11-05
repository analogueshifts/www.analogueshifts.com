'use client'
import { useState, useEffect, useRef } from 'react'
import { formatDate } from '../../../job-seeker/dashboard/utilities/format-date'
import {
    getOneMonthAgoDate,
    getOneWeekAgoDate,
    getOneYearAgoDate,
} from '../../../job-seeker/dashboard/utilities/one-month-ago'
import { useJobs } from '@/hooks/jobs'

import Cookies from 'js-cookie'
import SelectPeriod from '../../../job-seeker/dashboard/components/select-period'
import Chart from './chart'

import Image from 'next/image'
import Briefcase from '@/public/images/user-layout/dashboard/briefcase.svg'
import BriefcaseHandless from '@/public/images/user-layout/dashboard/briefcase-handless.svg'
import ArrowRight from '@/public/images/user-layout/dashboard/arrow-right.svg'

import gsap from 'gsap'
import JobsPosted from './jobs-posted'

export default function Analytics() {
    const { getStats } = useJobs()
    const [analyticsPeriod, setAnalyticsPeriod] = useState('This Month')
    const [jobsPosted, setJobsPosted] = useState(0)
    const [companiesAdded, setCompaniesAdded] = useState(0)
    const [applicants, setApplicants] = useState(0)
    const numberRef = useRef()

    const token = Cookies.get('analogueshifts')

    const animateNumber = (startValue, endValue) => {
        gsap.to(numberRef.current, {
            innerHTML: endValue, // Updates innerHTML of the element
            duration: 1, // Duration of the animation
            ease: 'power1.out',
            snap: { innerHTML: 1 }, // Snap to whole numbers
            onUpdate: function () {
                numberRef.current.innerHTML = Math.ceil(
                    this.targets()[0]?.innerHTML,
                )
            },
        })
    }

    useEffect(() => {
        if (token) {
            getStats({
                url:
                    '/dashboard?start=' +
                    `${formatDate(
                        analyticsPeriod === 'This Week'
                            ? getOneWeekAgoDate()
                            : analyticsPeriod === 'This Month'
                            ? getOneMonthAgoDate()
                            : getOneYearAgoDate(),
                    )}${'&stop=' + formatDate(new Date())}`,
                setData: data => {
                    if (data?.hires?.length) {
                        let count = 0
                        data?.hires?.forEach(item => {
                            count += item.count
                        })
                        animateNumber(jobsPosted, count)
                        setTimeout(() => {
                            setJobsPosted(count)
                        }, 1000)
                    }
                    setApplicants(data?.applicants?.length || 0)
                },
                mode: 'hire',
            })
        }
    }, [analyticsPeriod])

    return (
        <div className="xl:w-[calc(100%-320px)] w-full bg-white rounded-[32px] p-8 tablet:p-5 flex flex-col">
            <div
                style={{
                    backgroundImage:
                        'url(/images/user-layout/dashboard/line.png)',
                }}
                className="w-full mb-8 bg-cover bg-no-repeat py-6 px-16 flex flex-col gap-6 h-max bg-tremor-background-darkYellow tablet:py-5 tablet:px-7 rounded-[32px]">
                <div className="w-full flex justify-between items-center">
                    <h3 className="text-white font-semibold text-xs">
                        My Analytics
                    </h3>
                    <SelectPeriod
                        color="white"
                        period={analyticsPeriod}
                        setPeriod={setAnalyticsPeriod}
                    />
                </div>
                <div className="w-full grid tablet:grid-cols-2 grid-cols-4 items-center">
                    <div className="col-span-1 flex flex-col gap-2.5">
                        <div className="w-max max-w-full flex items-center gap-2">
                            <Image src={Briefcase} alt="" />{' '}
                            <h1
                                ref={numberRef}
                                className="text-white font-bold text-[32px]">
                                {jobsPosted}
                            </h1>
                        </div>
                        <p className="font-medium text-xs text-[#FFFFFFA3]">
                            Jobs Posted
                        </p>
                    </div>
                    <div className="col-span-1 tablet:items-end flex flex-col gap-2.5">
                        <div className="w-max max-w-full flex items-center gap-2">
                            <Image src={BriefcaseHandless} alt="" />{' '}
                            <h1 className="text-white font-bold text-[32px]">
                                {companiesAdded}
                            </h1>
                        </div>
                        <p className="font-medium text-xs text-[#FFFFFFA3]">
                            Companies Added
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2.5">
                        <div className="w-max max-w-full flex items-center gap-2">
                            <Image src={BriefcaseHandless} alt="" />{' '}
                            <h1 className="text-white font-bold text-[32px]">
                                {applicants}
                            </h1>
                        </div>
                        <p className="font-medium text-xs text-[#FFFFFFA3]">
                            Applicants
                        </p>
                    </div>
                    <div className="col-span-1 h-max flex justify-end">
                        <Image src={ArrowRight} alt="" />
                    </div>
                </div>
            </div>
            <Chart />
            <JobsPosted />
        </div>
    )
}
