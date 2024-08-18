'use client'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import DashboardLoader from '@/components/application/dashboard-loader'
import { clearUserSession } from '@/configs/clear-user-session'
import NotificationsPagination from './notifications-pagination'
import SkeletonCard from '@/components/application/skeleton-card'
import { useSearchParams } from 'next/navigation'
import NotificationGridTile from './notification-grid-tile'
import { useUser } from '@/contexts/user'
import { useToast } from '@/contexts/toast'

export default function Notifications() {
    const [loading, setLoading] = useState(false)
    const [loadingTwo, setLoadingTwo] = useState(false)
    const [data, setData] = useState([])
    const { user } = useUser()
    const { notifyUser } = useToast()
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
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
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
                {user && (
                    <div className="bg-white z-30 py-5 md:border border-[#e7e7e7] md:min-h-[85vh] h-max w-full px-5 justify-between  md:rounded-xl flex flex-col">
                        {loading ? (
                            <div className="w-full h-max min-h-[200px] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
                                <SkeletonCard /> <SkeletonCard />{' '}
                                <SkeletonCard /> <SkeletonCard />{' '}
                                <SkeletonCard />
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
                        {currentPageInfo && (
                            <NotificationsPagination
                                currentPageInfo={currentPageInfo}
                            />
                        )}
                    </div>
                )}
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
