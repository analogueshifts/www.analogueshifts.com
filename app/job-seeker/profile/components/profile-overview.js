'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'
import { useJobs } from '@/hooks/jobs'

import Cookies from 'js-cookie'
import Stats from './stats'
import Link from 'next/link'
import SocialLinks from './social-links'
import Calendar from '@/public/images/user-layout/calendar.svg'
import Image from 'next/image'

export default function ProfileOverview() {
    const token = Cookies.get('analogueshifts')
    const [kycDetails, setKycDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [seeMoreBio, setSeeMoreBio] = useState(false)
    const { getKycDetails } = useAuth()
    const { user } = useUser()
    const { getRecommendedJobs } = useJobs()
    const [counts, setCounts] = useState({
        profileViews: 0,
        jobsApplied: 0,
        jobsSaved: 0,
    })

    const fetchDatas = async () => {
        try {
            await getRecommendedJobs({
                setData: res => {
                    setCounts(prev => {
                        return { ...prev, jobsApplied: res?.applied?.total }
                    })
                },
                setLoading,
                url: '/jobs/applied',
            })
            await getKycDetails({
                setLoading,
                setData: setKycDetails,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) {
            fetchDatas()
        }
    }, [])

    return (
        <div className="xl:w-[calc(100%-320px)] h-max flex flex-col w-full gap-5">
            <div className=" h-max px-8 pt-8 tablet:px-5 tablet:pt-5 overflow-hidden w-full bg-white rounded-[32px] flex flex-col">
                <div
                    style={{
                        backgroundImage:
                            'url(/images/user-layout/profile/line.png)',
                    }}
                    className="w-full large:h-[168px] h-[150px] bg-cover bg-no-repeat  bg-[#575346] rounded-[25px] "></div>
                <Stats kycDetails={kycDetails} user={user} counts={counts} />
            </div>
            <div className="w-full h-max relative overflow-hidden p-8 tablet:p-5 bg-white rounded-[32px] flex flex-col gap-2.5">
                <h3 className="text-black text-base font-semibold">Bio</h3>
                <div
                    dangerouslySetInnerHTML={{
                        __html: user?.user_profile?.biography
                            ? user.user_profile.biography.length > 300 &&
                              !seeMoreBio
                                ? user.user_profile.biography.slice(0, 297) +
                                  '...'
                                : user.user_profile.biography
                            : 'Your Bio',
                    }}
                    className={`text-sm font-normal leading-6 text-tremor-brand-boulder400 `}></div>
                {user?.user_profile?.biography?.length > 300 && (
                    <button
                        onClick={() => setSeeMoreBio(prev => !prev)}
                        className="text-sm font-normal leading-6 text-tremor-brand-boulder300 absolute bottom-2.5 right-6">
                        See {seeMoreBio ? 'less' : 'more'}...
                    </button>
                )}
            </div>
            <div className="w-full h-max relative overflow-hidden p-8 tablet:p-5 bg-white rounded-[32px] flex flex-col gap-3">
                <h3 className="text-black text-base font-semibold">
                    Qualifications
                </h3>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full justify-between flex items-center">
                        <p className="text-sm text-tremor-brand-boulder400 font-normal leading-4">
                            Role:
                        </p>
                        <p className="text-sm text-black font-normal leading-4">
                            {kycDetails?.userJobProfile?.headline ||
                                'Not added'}
                        </p>
                    </div>
                    <div className="w-full justify-between flex items-center">
                        <p className="text-sm text-tremor-brand-boulder400 font-normal leading-4">
                            Years of Experience:
                        </p>
                        <p className="text-sm text-black font-normal leading-4">
                            {kycDetails?.userJobProfile?.years_of_experience ||
                                'Not added'}
                        </p>
                    </div>
                    <div className="w-full justify-between flex items-center">
                        <p className="text-sm text-tremor-brand-boulder400 font-normal leading-4">
                            Experience Level:
                        </p>
                        <p className="text-sm text-black font-normal leading-4">
                            {kycDetails?.userJobProfile?.experience_level ||
                                'Not added'}
                        </p>
                    </div>
                    <div className="w-full justify-between flex items-center">
                        <p className="text-sm text-tremor-brand-boulder400 font-normal leading-4">
                            Phone Number:
                        </p>
                        <p className="text-sm text-black font-normal leading-4">
                            {user?.phone_number || 'Not added'}
                        </p>
                    </div>
                    <div className="w-full justify-between flex items-center">
                        <p className="text-sm text-tremor-brand-boulder400 font-normal leading-4">
                            Email Address:
                        </p>
                        <p className="text-sm text-black font-normal leading-4">
                            {user?.email || 'Not added'}
                        </p>
                    </div>
                </div>
            </div>
            {user?.user_job_profile?.resume ||
                ((user?.user_job_profile?.socials ||
                    user?.user_job_profile?.website) && (
                    <div className="w-full h-max relative overflow-hidden p-8 tablet:p-5 bg-white rounded-[32px] flex flex-col">
                        <h3 className="text-black text-base font-semibold">
                            Links
                        </h3>
                        {user?.user_job_profile?.website && (
                            <div className="w-full flex-wrap flex items-center justify-between mt-5 large:mt-6">
                                <p className="text-tremor-brand-boulder400 font-normal text-sm">
                                    Visit Website
                                </p>
                                <Link
                                    href={user.user_job_profile.website}
                                    className="text-sm font-normal text-tremor-background-darkYellow">
                                    {user.user_job_profile.website}
                                </Link>
                            </div>
                        )}

                        <SocialLinks user={user} />
                        {user?.user_job_profile?.resume_cv && (
                            <div className="w-full flex flex-col mt-3 gap-3">
                                <h3 className="text-black text-base font-semibold mb-2">
                                    CV/Resume
                                </h3>
                                {user.user_job_profile.resume_cv.map(
                                    (item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.url}
                                                target="_blank"
                                                className="w-max max-w-full flex gap-3 items-center">
                                                <Image
                                                    src={Calendar}
                                                    alt=""
                                                    className="min-w-10 h-max"
                                                />
                                                <div className="flex w-[calc(100%-52px)] max-w-full flex-col gap-1.5">
                                                    <p className="truncate max-w-full text-sm text-black font-normal">
                                                        {item.name}
                                                    </p>
                                                    <p className="truncate max-w-full text-[11px] text-[#0000005C] font-normal">
                                                        {item.dateAdded}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                    },
                                )}
                            </div>
                        )}
                    </div>
                ))}

            {user?.user_job_profile?.experience && (
                <div className="w-full h-max relative overflow-hidden p-8 tablet:p-5 bg-white rounded-[32px] flex flex-col gap-5">
                    <h3 className="text-black text-base font-semibold mb-1">
                        Experience
                    </h3>
                    {user.user_job_profile.experience.map(item => {
                        return (
                            <div key={item.id} className="w-full flex flex-col">
                                <div className="w-full flex justify-between mb-4 items-center">
                                    <h2 className="text-sm tablet:text-xs text-black font-medium max-w-[58%]">
                                        {item?.role} | {item?.company}
                                    </h2>
                                    <p className="max-w-[40%] tablet:text-xs text-sm text-tremor-brand-boulder400 font-normal">
                                        {item?.startDate} - {item?.endDate}
                                    </p>
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item?.description,
                                    }}
                                    className="text-xs tablet:text-[10px] font-normal text-black leading-6"></div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
