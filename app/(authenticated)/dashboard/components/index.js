'use client'
import { useState } from 'react'
import Curve from '@/public/images/curve.png'
import Image from 'next/image'
import EditProfile from './edit-profile'
import { useUser } from '@/contexts/user'
import UserModeSwitch from './user-mode'
import UserStats from './user-stats'

export default function Dashboard() {
    const [loading, setLoading] = useState(false)
    const { user } = useUser()

    return (
        <>
            <div className="w-full min-w-[300px] px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="w-full relative h-48 md:rounded-2xl bg-tremor-background-brown flex justify-end">
                    <Image src={Curve} alt="" />
                    <UserModeSwitch setLoading={setLoading} />
                </div>
                <div className="bg-white relative -translate-y-12 md:ml-5 min-h-[calc(100vh-240px)] h-max w-full md:w-[calc(100%-40px)] px-5 pb-5 md:rounded-xl flex flex-col">
                    {/* Profile Overview */}

                    <div className="w-32 h-32 bg-white rounded-full flex justify-center -translate-y-12 items-center">
                        <img
                            width={112}
                            height={112}
                            src={
                                user?.user_profile?.avatar ||
                                '/images/profile_avatar.JPG'
                            }
                            alt="Profile"
                            className="rounded-full object-cover h-28 w-28 "
                        />
                    </div>
                    <div className="-translate-y-5">
                        <div className="w-full gap-2 flex items-center">
                            <h2 className="text-2xl font-bold truncate w-max max-w-[90%] text-gray-800">
                                {user?.user_profile?.first_name}{' '}
                                {user?.user_profile?.last_name}
                            </h2>
                        </div>
                        <p className="text-gray-600">{user?.email}</p>
                        {/* <p className="text-blue-500">Nigeria</p> */}
                    </div>
                    {/* Metric Overview */}

                    {/* {user && <EditProfile updateLoading={setLoading} />} */}

                    <UserStats />
                    {/* <OurApps /> */}
                </div>

                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
