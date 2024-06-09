'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/layouts/authenticated-layout'
import Curve from '@/public/images/curve.png'
import Image from 'next/image'
import Cookies from 'js-cookie'
import ProfileImage from '@/public/images/profile_avatar.JPG'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'
import SkeletonCard from '@/components/application/skeleton-card'
import { processChartData } from '@/utils/process-chart-data'
import RenderChart from './chart'

export default function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Hires',
                data: [],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
            {
                label: 'Forms',
                data: [],
                borderColor: 'rgba(153,102,255,1)',
                backgroundColor: 'rgba(153,102,255,0.2)',
                fill: true,
            },
        ],
    })
    const [user, setUser] = useState(null)

    // Fetch Jobs and Vets
    const getDatas = async () => {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/dashboard'
        const config = {
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
        }
        const axios = require('axios')
        try {
            setLoading(true)
            const request = await axios.request(config)
            setData(processChartData(request.data))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error('Error Fetching Data', toastConfig)
        }
    }

    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {
        if (user) {
            getDatas()
        }
    }, [user])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <div className="w-full min-w-[300px] px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="w-full h-60 rounded-2xl bg-tremor-background-brown flex justify-end">
                    <Image src={Curve} alt="" />
                </div>
                <div className="bg-white -translate-y-12 ml-5 h-max w-[calc(100%-40px)] px-5 pb-5 rounded-xl flex flex-col">
                    {/* Profile Overview */}

                    <Image
                        src={ProfileImage}
                        alt="Profile"
                        className="rounded-full h-28 w-28 -translate-y-12"
                    />
                    <div className="-translate-y-5">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {user?.user?.first_name}{' '}
                            {user?.user?.last_name && ' ' + user.user.last_name}
                        </h2>
                        <p className="text-gray-600">{user?.email}</p>
                        {/* <p className="text-blue-500">Nigeria</p> */}
                    </div>
                    {/* Metric Overview */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {/* Metric Card 1 */}
                        {/* {loading ? (
                            <SkeletonCard />
                        ) : (
                            <div className="bg-white p-4 rounded-xl shadow-xl">
                                <p className="text-base truncate lg:text-xl font-bold text-blue-600">
                                    Hire Talents
                                </p>
                                <p className="text-gray-600">0</p>
                            </div>
                        )} */}

                        {/* Metric Card 2 */}
                        {/* {loading ? (
                            <SkeletonCard />
                        ) : (
                            <div className="bg-white p-4 rounded-xl shadow-xl">
                                <p className="text-base truncate lg:text-xl font-bold text-green-600">
                                    Vetting System
                                </p>
                                <p className="text-gray-600">0</p>
                            </div>
                        )} */}
                    </div>

                    <RenderChart chartData={data} />
                </div>

                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </Authenticated>
    )
}
