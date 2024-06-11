import DashboardLoader from '@/components/application/dashboard-loader'
import Notifications from './components'
import { Suspense } from 'react'

export const metadata = {
    title: 'Notifications | AnalogueShifts',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    openGraph: {
        title: 'Notifications | AnalogueShifts',
        description:
            'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
        url: 'https://www.analogueshifts.com/notifications',
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
        canonical: '/notifications',
    },
}

export default function Page() {
    return (
        <Suspense fallback={<DashboardLoader />}>
            <Notifications />
        </Suspense>
    )
}
