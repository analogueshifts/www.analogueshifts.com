'use client'
import Progress from '../../dashboard/components/progress'
import HiresOverview from './hires-overview'

export default function Overview() {
    return (
        <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
            <HiresOverview />
            <Progress />
        </div>
    )
}
