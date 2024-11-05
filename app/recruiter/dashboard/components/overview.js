'use client'

import Analytics from './analytics'
import Progress from './progress'

export default function Overview() {
    return (
        <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
            <Analytics />
            <Progress />
        </div>
    )
}
