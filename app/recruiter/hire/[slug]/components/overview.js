'use client'
import JobDetails from './job-details'
import Progress from '../../../dashboard/components/progress'

export default function Overview({ slug }) {
    return (
        <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
            <JobDetails slug={slug} />
            <Progress />
        </div>
    )
}
