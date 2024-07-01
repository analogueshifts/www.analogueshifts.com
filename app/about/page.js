import GuestLayout from '../layouts/guest-layout'
import PageContent from '@/components/application/about-page/content'
// import SeoController from '../lib/SeoController'

export const metadata = {
    title: 'About | Analogue shifts',
    description:
        'Analogue Shifts is a remote talent acquisition and recruitment agency specializing in connecting startups with top remote tech talents globally.',
    openGraph: {
        title: 'About | Analogue shifts',
        description:
            'Analogue Shifts is a remote talent acquisition and recruitment agency specializing in connecting startups with top remote tech talents globally.',
        url: 'https://www.analogueshifts.com/about',
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
        canonical: '/about',
    },
}
export default function Page() {
    return (
        <GuestLayout>
            {/* <SeoController seoData={seoData} /> */}
            <PageContent />
        </GuestLayout>
    )
}
