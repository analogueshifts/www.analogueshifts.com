'use client'

import GoBack from '../../../(guest)/jobs/[slug]/components/go-back'
import PaginationLink from './components/pagination-link'
import Image from 'next/image'
import PaginationLine from '@/public/images/user-layout/recruiter/pagination-line.svg'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function CreateJobLayout({ children }) {
    const pathname = usePathname()

    const [newJob, setNewJob] = useState({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
    })

    useEffect(() => {
        let storedData = localStorage.getItem('newJob')
        if (storedData) {
            setNewJob(JSON.parse(storedData))
        }
    }, [pathname])

    return (
        <div className="w-full relative h-max rounded-[32px] flex flex-col items-center bg-white px-8 py-10">
            <div className="w-max absolute tablet:top-5 left-8 top-10 h-max">
                <GoBack />
            </div>
            <h2 className="text-lg tablet:text-base tablet:mb-2.5 text-black text-center font-semibold mb-3">
                Post a Job
            </h2>
            <p className="text-tremor-brand-boulder500 tablet:text-sm text-[15px] tablet:mb-4 text-center large:text-base font-normal mb-7">
                To post a job kindly fill in the job details below
            </p>
            <div className="w-max h-[52px] mb-14 tablet:mb-8 tablet:gap-1.5 flex items-center gap-2.5">
                <PaginationLink
                    path={'/recruiter/hire/create'}
                    data={newJob.stepOne}
                    title={'Step 1'}
                />
                <Image
                    src={PaginationLine}
                    className="tablet:w-9 h-max"
                    alt=""
                />
                <PaginationLink
                    path={'/recruiter/hire/create/step-two'}
                    data={newJob.stepTwo}
                    title={'Step 2'}
                />
                <Image
                    src={PaginationLine}
                    className="tablet:w-9 h-max"
                    alt=""
                />
                <PaginationLink
                    path={'/recruiter/hire/create/step-three'}
                    data={newJob.stepThree}
                    title={'Step 3'}
                />
            </div>
            {children}
        </div>
    )
}
