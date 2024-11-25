'use client'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import { useUser } from '@/contexts/user'
import Cookies from 'js-cookie'

import CircularProgressBar from './circular-progress'
import ProgressText from './progress-text'
import MoreJobs from './more-jobs'

export default function Progress({ hideMoreJobs, hideProgress }) {
    const { getKycDetails } = useAuth()
    const { user } = useUser()
    const [kycDetails, setKycDetails] = useState(null)
    const [percentage, setPercentage] = useState(0)

    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (token) {
            getKycDetails({ setLoading: v => {}, setData: setKycDetails })
        }
    }, [])

    useEffect(() => {
        if (user || kycDetails) {
            let count = 0
            if (kycDetails?.preferences && kycDetails.preferences?.length > 0)
                count += 50
            if (user?.user_profile?.avatar) count += 10
            if (
                user?.user_job_profile?.resume_cv &&
                user?.user_job_profile?.resume_cv?.length > 0
            )
                count += 20
            if (
                user?.user_job_profile?.experience &&
                user?.user_job_profile?.experience?.length > 0
            )
                count += 10
            if (user?.user_job_profile?.website) count += 10
            setPercentage(count)
        }
    }, [user, kycDetails])

    return (
        <div className="xl:w-[288px] w-full min-w-0 xl:min-w-[288px] flex flex-col gap-5">
            {!hideProgress && percentage < 100 && (
                <div className="bg-white w-full h-max rounded-[32px] p-8 flex flex-col items-center">
                    <h3 className="text-black font-semibold large:text-lg text-base mb-8">
                        {percentage === 100
                            ? 'Profile Completed'
                            : 'Complete your profile'}
                    </h3>

                    <CircularProgressBar percentage={percentage} />
                    <div className="w-full flex pt-10 flex-col gap-[22px]">
                        <ProgressText
                            text="KYC Completed"
                            completed={
                                !!(
                                    kycDetails?.preferences &&
                                    kycDetails.preferences?.length > 0
                                )
                            }
                            path="https://auth.analogueshifts.app/job-seeker-kyc"
                        />
                        <ProgressText
                            text="Upload your photo"
                            completed={!!user?.user_profile?.avatar}
                            path="/job-seeker/profile/edit"
                        />
                        <ProgressText
                            text="Resume/CV"
                            completed={
                                !!(
                                    user?.user_job_profile?.resume_cv &&
                                    user?.user_job_profile?.resume_cv?.length >
                                        0
                                )
                            }
                            path="/job-seeker/profile/edit"
                        />
                        <ProgressText
                            text="Add Experience"
                            completed={
                                !!(
                                    user?.user_job_profile?.experience &&
                                    user?.user_job_profile?.experience?.length >
                                        0
                                )
                            }
                            path="/job-seeker/profile/edit"
                        />
                        <ProgressText
                            text="Add Website"
                            completed={!!user?.user_job_profile?.website}
                            path="/job-seeker/profile/edit"
                        />
                    </div>
                </div>
            )}
            {!hideMoreJobs && <MoreJobs />}
        </div>
    )
}
