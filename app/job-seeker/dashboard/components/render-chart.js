'use client'
import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'

import { ChartContainer } from '@/components/ui/chart'
import { useEffect, useState } from 'react'
import { formatDate } from '../utilities/format-date'

const chartConfig = {
    count: {
        label: 'Jobs Applied',
        color: 'hsl(var(--chart-1))',
    },
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="tooltip-one-shadow text-[9px] font-normal"
                style={{
                    backgroundColor: '#FFBB0A',
                    color: 'white',
                    padding: '1.6px 6.5px 1.6px 6.5px',
                    borderRadius: '5px',
                }}>
                {`${payload[0].value}`}
            </div>
        )
    }

    return null
}

export default function RenderChart({ chartData }) {
    const [data, setData] = useState([
        { date: formatDate(new Date()), count: 0 },
    ])

    useEffect(() => {
        if (chartData) {
            setData(chartData)
        }
    }, [chartData])

    return (
        <ChartContainer
            className="h-[180px] overflow-x-hidden"
            config={chartConfig}>
            <ResponsiveContainer height="100%" width="100%">
                <AreaChart accessibilityLayer data={data}>
                    {' '}
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1">
                            <stop
                                offset="5%"
                                stopColor="#FFBB0A"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#FFBB0A"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1">
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <YAxis
                        tickMargin={14}
                        type="number"
                        width={30}
                        axisLine={false}
                        tickLine={false}
                        minTickGap={22}
                        tick={{
                            stroke: '#BCBCBC',
                            fontSize: '9.5px',
                            fontWeight: '400',
                            strokeWidth: 0.05,
                        }}
                    />
                    <CartesianGrid
                        stroke="#E0E0E0"
                        strokeDasharray="3 2"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="date"
                        tick={{
                            stroke: '#BCBCBC',
                            fontSize: '9.5px',
                            fontWeight: '400',
                            strokeWidth: 0.05,
                        }}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                    <Tooltip cursor={false} content={<CustomTooltip />} />
                    <Area
                        dataKey="count"
                        stroke="#FFBB0A"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}
