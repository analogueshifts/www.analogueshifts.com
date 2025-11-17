'use client'
import { useUser } from '@/contexts/user'
import { useToast } from '@/contexts/toast'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { share } from '@/configs/share'

import Image from 'next/image'
import Cookies from 'js-cookie'
import Share from '@/public/images/jobs/share.svg'
import JobGridTile from '../../components/job-grid-tile'
import DidYouApply from './did-you-apply'
import Apply from './apply'
import GoBack from './go-back'

export default function AboutJob({ job, slug, easyApply }) {
    const router = useRouter()
    const pathname = usePathname()
    const [idiomModal, setIdiomModal] = useState(false)
    const [applyModal, setApplyModal] = useState(false)

    const { user } = useUser()
    const { notifyUser } = useToast()

    const authLink = process.env.NEXT_PUBLIC_AUTH_URL
    const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID

    const handleApply = () => {
        if (user) {
            if (job?.apply === 'easyApply') {
                setApplyModal(true)

            } else {
                window.open(job?.apply, 'blank')
                setIdiomModal(true)
            }
        } else {
            Cookies.set('RedirectionLink', pathname)
            router.push(`${authLink}?app=${app}`)
        }
    }

    return (
        <div className="w-[801px] max-w-[calc(100%-48px)] flex flex-col">
            <GoBack />
            <JobGridTile
                index={1}
                total={1}
                item={job}
                details={true}
                handleApply={handleApply}
                notruncate={true}
            />
            <h2 className="text-black mt-8 font-semibold large:mb-10 mb-7 large:text-32 tablet:text-2xl text-[28px] large:mt-11">
                About the job
            </h2>
            <div
                dangerouslySetInnerHTML={{ __html: job?.description }}
                className="font-normal large:mb-10 mb-7 prose text-black large:text-xl text-base leading-10 large:leading-48"></div>
            <button
                type="button"
                onClick={handleApply}
                className="w-full large:mb-6 mb-5 h-14 flex justify-center items-center rounded-2xl bg-tremor-background-darkYellow text-tremor-brand-boulder50 text-base font-semibold">
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
                className="flex items-center bg-transparent outline-none w-full justify-center gap-2.5 text-tremor-background-darkYellow text-base font-semibold">
                Share this job <Image src={Share} alt="" />
            </button>

            <DidYouApply
                slug={slug}
                open={idiomModal}
                close={() => setIdiomModal(false)}
            />
            {applyModal && <Apply
                job={job}
                open={applyModal}
                close={() => setApplyModal(false)}
                easyApply={easyApply}
            />}
        </div>
    )
}
