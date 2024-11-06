'use client'
import { useEffect, useState } from 'react'
import NotificationGridTile from './notification-grid-tile'
import { useUser } from '@/contexts/user'
import { useNotifications } from '@/hooks/notifications'

import Image from 'next/image'
import Spinner from '@/public/images/jobs/spinner.svg'

export default function Notifications() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [currentPageInfo, setCurrentPageInfo] = useState(null)

    const { user } = useUser()
    const { getNotifications } = useNotifications()

    useEffect(() => {
        if (user) {
            //   Fetch Notifications
            getNotifications({
                url: '/notification/view',
                setLoading,
                setData: data => {
                    setData(data.notifications.data)
                    setCurrentPageInfo(data.notifications)
                },
            })
        }
    }, [user])

    const handleFetchMore = () => {
        getNotifications({
            url: currentPageInfo.next_page_url.slice(33),
            setLoading,
            setData: data => {
                setCurrentPageInfo(data.notifications)
                setData(prev => [...prev, ...data.notifications.data])
            },
        })
    }

    return (
        <>
            <div className="w-full md:px-1.5 lg:min-h-[calc(100dvh-112px)] md:block flex flex-col-reverse justify-end">
                {data && (
                    <div className="bg-white z-30 pb-5 md:py-5 md:border border-[#e7e7e7] md:min-h-[85vh] h-max w-full px-5 justify-between  md:rounded-xl flex flex-col">
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
                            {data.length === 0 && (
                                <div className="w-full mt-10 flex px-5 items-center justify-center">
                                    <h3 className="text-tremor-brand-boulder950">
                                        No Notification Found
                                    </h3>
                                </div>
                            )}
                            {currentPageInfo?.next_page_url && (
                                <button
                                    onClick={handleFetchMore}
                                    disabled={loading}
                                    className={`outline-none mx-auto bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b mt-6 ${
                                        loading
                                            ? 'border-transparent'
                                            : 'border-b-tremor-background-darkYellow'
                                    }`}>
                                    {loading ? (
                                        <Image
                                            src={Spinner}
                                            alt=""
                                            className="h-max w-10"
                                        />
                                    ) : (
                                        'View More'
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                )}
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
