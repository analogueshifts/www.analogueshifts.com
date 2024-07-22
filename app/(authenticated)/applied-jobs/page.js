import { Suspense } from 'react'
import DashboardLoader from '@/components/application/dashboard-loader'
import AppliedJobsPage from './components/page-details'

export const metadata = {
    title: 'Applied | AnalogueShifts',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    openGraph: {
        title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
        description:
            'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
        url: 'https://www.analogueshifts.com/tools/hire',
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
        canonical: '/tools/hire',
    },
}

export default function Page() {
    return (
        <Suspense fallback={<DashboardLoader />}>
            <AppliedJobsPage />
        </Suspense>
    )
}
