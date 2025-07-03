'use client'

import { useNotifications } from '@/hooks/notifications'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Spinner from '@/public/images/jobs/spinner.svg'

export default function NotificationList() {
    const { getNotifications } = useNotifications()
    const [loading, setLoading] = useState(true)
    const [fetchMoreLoading, setFetchMoreLoading] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [notificationsInfo, setNotificationsInfo] = useState(null)

    useEffect(() => {
        getNotifications({
            setData: res => {
                setNotificationsInfo(res.notifications)
                setNotifications(res.notifications.data)
            },
            setLoading,
            url: '/notification/view',
        })
    }, [])

    const handleFetchMore = () => {
        getNotifications({
            url: notificationsInfo.next_page_url.slice(35),
            setData: res => {
                setNotificationsInfo(res.companies)
                setNotifications(prev => [...prev, ...res.notifications.data])
            },
            setLoading: setFetchMoreLoading,
        })
    }

    return (
        <div className="w-full p-8 gap-5 large:pt-8 pt-6 flex flex-col">
            {loading && (
                <div className="w-full h-full pt-10 flex justify-center items-center">
                    <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        Loading...
                    </p>
                </div>
            )}
            {notifications.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`w-full flex pb-5 justify-between items-center tablet:gap-3 tablet:pb-4 tablet:border-b tablet:border-tremor-brand-boulder100 gap-5 ${
                            index === notifications.length - 1 ? '' : 'border-b'
                        }`}>
                        <div className="flex gap-3 items-center">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-medium text-black leading-none">
                                    {item?.title}
                                </h3>
                                <p className="text-[11px] font-normal text-[#0000005C]">
                                    {item?.message}
                                </p>
                            </div>
                        </div>
                        <div className="min-w-max ">
                            <p className="text-[11px] font-normal text-[#0000005C]">
                                {new Date(
                                    item?.updated_at,
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                )
            })}

            {notificationsInfo?.next_page_url && (
                <div className="w-full flex justify-center items-center">
                    {!loading && (
                        <button
                            onClick={handleFetchMore}
                            disabled={fetchMoreLoading}
                            className={`outline-none mx-auto bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b ${
                                fetchMoreLoading
                                    ? 'border-transparent'
                                    : 'border-b-tremor-background-darkYellow'
                            }`}>
                            {fetchMoreLoading ? (
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
            )}
        </div>
    )
}
