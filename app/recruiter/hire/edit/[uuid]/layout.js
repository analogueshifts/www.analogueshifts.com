'use client'

import GoBack from '../../../../(guest)/jobs/[slug]/components/go-back'
import PaginationLink from '../../create/components/pagination-link'
import Image from 'next/image'
import PaginationLine from '@/public/images/user-layout/recruiter/pagination-line.svg'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function CreateJobLayout({ children, params }) {
    const pathname = usePathname()
    const { uuid } = params

    const [editJob, setEditJob] = useState({
        stepOne: {},
        stepTwo: {},
        stepThree: {},
    })

    useEffect(() => {
        let storedData = localStorage.getItem('editJob')
        if (storedData) {
            setEditJob(JSON.parse(storedData))
        }
    }, [pathname])

    return (
        <div className="w-full relative h-max rounded-[32px] flex flex-col items-center bg-white px-8 py-10">
            <div className="w-max absolute tablet:top-5 left-8 top-10 h-max">
                <GoBack />
            </div>
            <h2 className="text-lg tablet:text-base tablet:mb-2.5 text-black text-center font-semibold mb-3">
                Edit Job Post
            </h2>
            <p className="text-tremor-brand-boulder500 tablet:text-sm text-[15px] tablet:mb-4 text-center large:text-base font-normal mb-7">
                Kindly make changes to your job post.
            </p>
            <div className="w-max h-[52px] mb-14 tablet:mb-8 tablet:gap-1.5 flex items-center gap-2.5">
                <PaginationLink
                    path={'/recruiter/hire/edit/' + uuid}
                    data={editJob.stepOne}
                    title={'Step 1'}
                />
                <Image
                    src={PaginationLine}
                    className="tablet:w-9 h-max"
                    alt=""
                />
                <PaginationLink
                    path={'/recruiter/hire/edit/' + uuid + '/step-two'}
                    data={editJob.stepTwo}
                    title={'Step 2'}
                />
                <Image
                    src={PaginationLine}
                    className="tablet:w-9 h-max"
                    alt=""
                />
                <PaginationLink
                    path={'/recruiter/hire/edit/' + uuid + '/step-three'}
                    data={editJob.stepThree}
                    title={'Step 3'}
                />
            </div>
            {children}
        </div>
    )
}
