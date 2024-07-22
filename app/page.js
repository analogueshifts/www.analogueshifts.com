import GuestLayout from '@/app/layouts/guest'
import BuildTeam from '@/components/application/home-page/build-team'
import Features from '@/components/application/home-page/features'
import Landing from '@/components/application/home-page/landing'
import Services from '@/components/application/home-page/services'
import Testimonials from '@/components/application/home-page/testimonials-section'

export const metadata = {
    title: 'Remote Talent Acquisition & Recruitment Agency | Analogue shifts',
    description:
        'Analogue Shifts is a remote talent acquisition and recruitment agency specializing in connecting startups with top remote tech talents globally.',
    openGraph: {
        title:
            'Remote Talent Acquisition & Recruitment Agency | Analogue shifts',
        description:
            'Analogue Shifts is a remote talent acquisition and recruitment agency specializing in connecting startups with top remote tech talents globally.',
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
