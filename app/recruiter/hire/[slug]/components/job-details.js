'use client'
import { useState, useEffect } from 'react'
import { useJobs } from '@/hooks/jobs'

import Cookies from 'js-cookie'

import Image from 'next/image'
import DidYouApply from '../../../../(guest)/jobs/[slug]/components/did-you-apply'
import { useToast } from '@/contexts/toast'
import GoBack from '../../../../(guest)/jobs/[slug]/components/go-back'
import { share } from '@/configs/share'
import JobGridTile from '@/app/(guest)/jobs/components/job-grid-tile'
import Share from '@/public/images/jobs/share.svg'

export default function JobDetails({ slug }) {
    const [loading, setLoading] = useState(true)
    const [job, setJob] = useState(null)
    const [idiomModal, setIdiomModal] = useState(false)
    const { getJob } = useJobs()
    const { notifyUser } = useToast()

    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (token) {
            getJob({ setLoading, setJob, slug })
        }
    }, [])

    const handleApply = () => {
        window.open(job?.apply, 'blank')
        setIdiomModal(true)
    }

    return (
        <div className="xl:w-[calc(100%-320px)] overflow-hidden w-full bg-white rounded-[32px] flex flex-col px-7 large:px-8 py-8 large:py-10">
            {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        Fetching...
                    </p>
                </div>
            ) : (
                <>
                    {' '}
                    <GoBack dashboard={true} />
                    <JobGridTile
                        index={1}
                        total={1}
                        dashboard={true}
                        details={true}
                        item={job}
                        handleApply={handleApply}
                    />
                    <h2 className="text-black font-semibold my-7  large:text-[22px] tablet:text-base text-xl">
                        About the job
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: job?.description }}
                        className="font-normal mb-7 prose text-black text-sm tablet:text-xs tablet:leading-8  leading-[33px]"></div>
                    <button
                        type="button"
                        onClick={handleApply}
                        className="w-full mb-4 h-12 flex justify-center items-center rounded-2xl bg-tremor-background-darkYellow text-tremor-brand-boulder50 text-sm font-semibold">
                        Apply now!
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            share(
                                job?.title,
                                'https://www.analogueshifts.com/' + pathname,
                                notifyUser,
                                '',
                            )
                        }
                        className="flex items-center bg-transparent outline-none w-full justify-center gap-2.5 text-tremor-background-darkYellow text-sm font-semibold">
                        Share this job{' '}
                        <Image src={Share} alt="" className="w-5 h-max" />
                    </button>
                </>
            )}
            <DidYouApply
                slug={slug}
                open={idiomModal}
                close={() => setIdiomModal(false)}
            />
        </div>
    )
}
