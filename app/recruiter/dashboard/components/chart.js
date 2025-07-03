import { useJobs } from '@/hooks/jobs'
import { useState, useEffect } from 'react'
import SelectPeriod from '../../../job-seeker/dashboard/components/select-period'
import { formatDate } from '../../../job-seeker/dashboard/utilities/format-date'
import {
    getOneMonthAgoDate,
    getOneWeekAgoDate,
    getOneYearAgoDate,
} from '../../../job-seeker/dashboard/utilities/one-month-ago'

import Cookies from 'js-cookie'
import RenderChart from '../../../job-seeker/dashboard/components/render-chart'

export default function Chart() {
    const { getStats } = useJobs()
    const [data, setData] = useState(null)
    const [analyticsPeriod, setAnalyticsPeriod] = useState('This Month')

    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        if (token) {
            getStats({
                url:
                    '/dashboard?start=' +
                    `${formatDate(
                        analyticsPeriod === 'This Week'
                            ? getOneWeekAgoDate()
                            : analyticsPeriod === 'This Month'
                            ? getOneMonthAgoDate()
                            : getOneYearAgoDate(),
                    )}${'&stop=' + formatDate(new Date())}`,
                setData: d => {
                    setData(d.hires)
                },
                mode: 'hire',
            })
        }
    }, [analyticsPeriod])

    return (
        <div className="w-full border border-tremor-brand-boulder100 rounded-2xl p-6 flex flex-col gap-8">
            <div className="w-full flex justify-between items-center">
                <h3 className="text-black font-semibold tablet:hidden large:text-base text-[15px]">
                    Top Active Jobs
                </h3>
                <h3 className="text-black font-semibold text-xs tablet:block hidden">
                    Top Active Jobs
                </h3>
                <SelectPeriod
                    color="black"
                    period={analyticsPeriod}
                    setPeriod={setAnalyticsPeriod}
                />
            </div>
            <RenderChart chartData={data} />
        </div>
    )
}
