'use client'
import Progress from '../../dashboard/components/progress'
import ProfileOverview from '../../../job-seeker/profile/components/profile-overview'

export default function Overview() {
    return (
        <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
            <ProfileOverview recruiter={true} />
            <Progress />
        </div>
    )
}
