import DownloadApp from '@/components/application/home-page/download-app'
import Hero from './components/hero'
import OurMission from './components/our-mission'
import OurTeam from './components/our-team'
import OurValues from './components/our-values'
import ContactUs from '@/components/application/home-page/contact-us'
import NewsLetter from '@/components/application/home-page/news-letter'

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
        <section className="h-max w-full">
            <Hero />
            <OurMission />
            <OurValues />
            <OurTeam />
            <DownloadApp dark={true} />
            <ContactUs />
            <NewsLetter />
        </section>
    )
}
