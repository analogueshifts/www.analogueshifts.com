import LoadingTwo from '@/components/ui/loading-spinner'
import GuestLayout from '../../layouts/guest'
import JobView from './components/job-view'
import { Suspense } from 'react'

export const metadata = {
    title: 'Find high paying remote tech jobs | Analogue Shifts',
    description:
        'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
    openGraph: {
        title: 'Find high paying remote tech jobs | Analogue Shifts',
        description:
            'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
        url: 'https://www.analogueshifts.com/jobs',
        siteName: 'AnalogueShifts',
        images: [
            {
                url: '/images/a4.jpg',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/jobs',
    },
}

export default function Page() {
    return (
        <GuestLayout>
            <Suspense fallback={<LoadingTwo />}>
                <JobView />
            </Suspense>
        </GuestLayout>
    )
}
