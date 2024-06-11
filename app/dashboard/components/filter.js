'use client'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import { useState } from 'react'

function formatDate(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

export default function Filter({ submit }) {
    const [start, setStart] = useState('')
    const [stop, setStop] = useState('')

    const handleSubmit = () => {
        submit(
            process.env.NEXT_PUBLIC_BACKEND_URL +
                '/dashboard' +
                `${start.length !== 0 && '?start=' + formatDate(start)}${
                    stop.length !== 0 && '&stop=' + formatDate(stop)
                }`,
        )
    }

    return (
        <div className="w-full flex flex-wrap items-center gap-3 mb-5">
            <DatePicker
                label={'Select Start Date'}
                date={start}
                setDate={setStart}
            />
            <DatePicker
                label={'Select Stop Date'}
                date={stop}
                setDate={setStop}
            />
            <Button
                onClick={handleSubmit}
                className="bg-tremor-background-lightYellow w-full md:w-max hover:bg-tremor-background-lightYellow/80">
                Filter Statistics
            </Button>
        </div>
    )
}
