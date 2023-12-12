import JobView from '../components/JobsComponents/JobView'
// import SeoController from '../lib/SeoController'

export const metadata = {
    title: 'Jobs in Tech',
    description:
        'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
    openGraph: {
        title: 'Jobs in Tech',
        description:
            'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
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
        <div>
            {/* Page Content */}
            {/* <SeoController seoData={seoData} /> */}
            <JobView />
        </div>
    )
}
