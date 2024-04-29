import GuestLayout from '@/app/layouts/guest-layout'
import BuildTeam from '@/components/application/home-page/build-team'
import Features from '@/components/application/home-page/features'
import Landing from '@/components/application/home-page/landing'
import Services from '@/components/application/home-page/services'
import Testimonials from '@/components/application/home-page/testimonials'

export const metadata = {
    title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    openGraph: {
        title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
        description:
            'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
        url: 'https://www.analogueshifts.com',
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
        canonical: '/',
    },
    verification: {
        google: 'SyAAgxsXes-UzPmZubsHldcLFGqyvtB2Spen8LZxR9k',
    },
}

export default function Page() {
    return (
        <GuestLayout>
            <Landing />
            <Features />
            <Services />
            <BuildTeam />
            <Testimonials />
        </GuestLayout>
    )
}
