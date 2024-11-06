import { useEffect, useState } from 'react'

import Image from 'next/image'
import Avatar from '@/public/images/user-layout/profile/avatar.svg'
import ProfileStat from './profile-stat'
import Link from 'next/link'
import { useHire } from '@/hooks/hires'
import Cookies from 'js-cookie'

export default function Stats({ user, kycDetails, counts, recruiter }) {
    const [total, setTotal] = useState(0)
    const [jobsPosted, setJobsPosted] = useState(0)
    const { fetchJobs } = useHire()
    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (user || kycDetails) {
            let count = 0
            if (kycDetails?.preferences) count += 50
            if (user?.user_profile?.avatar) count += 10
            if (user?.user_job_profile?.resume_cv) count += 20
            if (user?.user_job_profile?.experience) count += 10
            if (user?.user_job_profile?.website) count += 10
            setTotal(count)
        }
    }, [user, kycDetails])

    useEffect(() => {
        if (token) {
            fetchJobs({
                setLoading: v => {},
                setCurrentPageInfo: item => setJobsPosted(item?.total || 0),
                setData: v => {},
                url: '/hire/dashboard',
            })
        }
    }, [token])

    return (
        <div className="w-full flex flex-col -translate-y-8 tablet:-translate-y-5">
            <div className="w-full  h-max flex justify-between items-start mb-7 large:mb-8">
                <div className="w-full flex flex-col ">
                    <div className="translate-x-[38px] mb-4">
                        {user?.user_profile?.avatar ? (
                            <div className="w-[92px] h-[92px] rounded-full bg-white overflow-hidden p-3">
                                <img
                                    src={user?.user_profile?.avatar}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        ) : (
                            <div className="w-[92px] h-[92px] flex justify-center items-center rounded-full overflow-hidden bg-white">
                                <Image
                                    src={Avatar}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div className="w-full relative flex justify-between items-start">
                        <div className="w-max max-w-[70%] tablet:max-w-full flex flex-col">
                            <h3 className="text-black font-medium text-lg large:text-xl mb-2">
                                {user?.user_profile?.first_name}{' '}
                                {user?.user_profile.last_name}
                            </h3>
                            <p className="text-[11px] text-[#0000005C] font-normal mb-4">
                                {kycDetails?.userJobProfile?.headline ||
                                    'Your Headline'}
                            </p>
                            <div className="w-full flex flex-wrap gap-2 large:gap-2.5">
                                {kycDetails?.preferences?.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="rounded-[7px] bg-[#D9D9D954] px-3 large:px-3.5 py-[7px]  text-xs text-tremor-brand-boulder950 font-normal">
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Link
                            href={
                                recruiter
                                    ? '/recruiter/profile/edit'
                                    : '/job-seeker/profile/edit'
                            }
                            className="flex tablet:absolute tablet:-top-6 tablet:right-2 items-center gap-1 text-xs text-tremor-background-darkYellow font-normal">
                            <img
                                src="/images/user-layout/profile/pen.svg"
                                alt=""
                                className="w-5 h-5 object-cover"
                            />
                            {total === 100
                                ? 'Edit Profile'
                                : 'Complete Profile'}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#FDF8EB] rounded-2xl py-5 grid grid-cols-3">
                <ProfileStat
                    border={true}
                    count={counts.profileViews}
                    label={'Profile Views'}
                    image={'/images/user-layout/profile/profile-view.svg'}
                />
                <ProfileStat
                    border={true}
                    count={recruiter ? jobsPosted : counts.jobsApplied}
                    label={recruiter ? 'Jobs Posted' : 'Jobs Applied'}
                    image={'/images/user-layout/profile/briefcase.svg'}
                />
                <ProfileStat
                    count={counts.jobsSaved}
                    label={'Jobs Saved'}
                    image={'/images/user-layout/profile/briefcase.svg'}
                />
            </div>
        </div>
    )
}
