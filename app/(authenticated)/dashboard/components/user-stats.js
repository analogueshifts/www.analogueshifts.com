'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { stats } from '../utilities/stats'
import Filter, { formatDate } from './filter'
import { getOneMonthAgoDate } from '../utilities/one-month-ago'
import { useJobs } from '@/hooks/jobs'
import RenderChart from './chart'

export default function UserStats() {
    const [data, setData] = useState(stats)
    const { user } = useUser()
    const { getStats } = useJobs()

    useEffect(() => {
        if (user) {
            getStats({
                url:
                    '/dashboard?start=' +
                    `${formatDate(getOneMonthAgoDate())}${
                        '&stop=' + formatDate(new Date())
                    }`,
                setData,
                mode: user?.user_mode,
            })
        }
    }, [user])

    return (
        <>
            {' '}
            <RenderChart
                title={
                    user?.user_mode === 'job'
                        ? 'Applied jobs over time'
                        : 'Hires over time'
                }
                chartData={data}
            />
            <Filter submit={url => getStats({ url, setData })} />
        </>
    )
}
