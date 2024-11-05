'use client'
import { useEffect, useState } from 'react'
import { useUser } from '@/contexts/user'
import { useHire } from '@/hooks/hires'
import { useCompany } from '@/hooks/companies'
import Cookies from 'js-cookie'

import CircularProgressBar from '../../../job-seeker/dashboard/components/circular-progress'
import ProgressText from '../../../job-seeker/dashboard/components/progress-text'
import MoreJobsPosted from './more-jobs-posted'

export default function Progress({ hideJobPosted, hideProgress }) {
    const { user } = useUser()
    const { getCompanies } = useCompany()
    const { fetchJobs } = useHire()
    const [percentage, setPercentage] = useState(0)
    const [companies, setCompanies] = useState(null)
    const [jobsPosted, setJobsPosted] = useState(null)

    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (user || companies || jobsPosted) {
            let count = 0
            if (user?.user_profile?.avatar) count += 20
            if (companies?.total > 0) count += 40
            if (jobsPosted?.total > 0) count += 40
            setPercentage(count)
        }
    }, [user, companies, jobsPosted])

    useEffect(() => {
        if (token) {
            getCompanies({
                url: '/profile/companies',
                setData: res => {
                    setCompanies(res?.companies)
                },
                setLoading: d => {},
            })
            fetchJobs({
                setLoading: v => {},
                setCurrentPageInfo: v => {
                    setJobsPosted(v)
                },
                setData: v => {},
                url: '/hire/dashboard',
            })
        }
    }, [token])

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
                            text="Upload your photo"
                            completed={!!user?.user_profile?.avatar}
                            path="/profile/edit"
                        />
                        <ProgressText
                            text="Add a Company"
                            completed={!!companies?.total > 0}
                            path="/recruiter/company/create"
                        />
                        <ProgressText
                            text="Post a Job"
                            completed={!!jobsPosted?.total > 0}
                            path="/recruiter/hire/create"
                        />
                    </div>
                </div>
            )}
            {!hideJobPosted && <MoreJobsPosted data={jobsPosted?.data || []} />}
        </div>
    )
}
