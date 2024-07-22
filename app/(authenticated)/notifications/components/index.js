'use client'
import { useEffect, useState } from 'react'
import Curve from '@/public/images/curve.png'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { errorToast } from '@/utils/error-toast'
import DashboardLoader from '@/components/application/dashboard-loader'
import { clearUserSession } from '@/utils/clear-user-session'
import NotificationsPagination from './notifications-pagination'
import SkeletonCard from '@/components/application/skeleton-card'
import { useSearchParams } from 'next/navigation'
import NotificationGridTile from './notification-grid-tile'
import { useUser } from '@/contexts/user'

export default function Notifications() {
    const [loading, setLoading] = useState(false)
    const [loadingTwo, setLoadingTwo] = useState(false)
    const [data, setData] = useState([])
    const { user } = useUser()
    const pageQuery = useSearchParams().getAll('page')
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/notification/view${
        pageQuery.length ? `?page=${pageQuery[0]}` : ''
    }`
    const token = Cookies.get('analogueshifts')

    const getNotifications = async () => {
        const axios = require('axios')
        const config = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            setLoading(true)
            let response = await axios.request(config)
            setData(response.data.data.notifications.data)
            setCurrentPageInfo(response.data.data.notifications)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Failed To Fetch Notifications',
                error?.response?.data?.message ||
                    error.message ||
                    'An error Occured',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    useEffect(() => {
        if (user) {
            //   Fetch Notifications
            getNotifications()
        }
    }, [user])

    return (
        <>
            {loadingTwo && <DashboardLoader />}
            <div className="w-full md:px-1.5 lg:min-h-[calc(100dvh-112px)] md:block flex flex-col-reverse justify-end">
                <div className="md:sticky static md:top-0 z-20">
                    {currentPageInfo && (
                        <div className="w-full h-max py-5 md:py-6 md:px-5 md:rounded-2xl bg-white  flex justify-end">
                            {/* Pagination */}
                            <div className="z-20 h-max w-full flex justify-center max-w-full">
                                <NotificationsPagination
                                    currentPageInfo={currentPageInfo}
                                />
                            </div>
                        </div>
                    )}
                </div>
                {user && (
                    <div className="bg-white z-30 py-5 md:pt-0 md:mt-6 md:border border-[#e7e7e7] md:min-h-[200px] h-max w-full px-5  md:rounded-xl flex flex-col">
                        {loading ? (
                            <div className="w-full h-max min-h-[200px] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
                                <SkeletonCard /> <SkeletonCard />{' '}
                                <SkeletonCard />
                            </div>
                        ) : (
                            <div className="w-full h-max min-h-full flex flex-col max-w-[600px] mx-auto">
                                {data.map(item => {
                                    return (
                                        <NotificationGridTile
                                            user={user}
                                            item={item}
                                            key={item.id}
                                        />
                                    )
                                })}
                                {currentPageInfo && data.length === 0 && (
                                    <div className="w-full mt-10 flex px-5 items-center justify-center">
                                        <h3 className="text-tremor-brand-boulder950">
                                            No Notification Found
                                        </h3>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
