import GuestLayout from '@/layouts/guest'
import ViewId from '../components/view-id'
// import SeoController from '@/app/lib/SeoController'

export async function generateMetadata({ params }) {
    // read route params
    const slug = params.jobViewId

    // Axios Config
    const axios = require('axios')
    let config = {
        method: 'GET',
        url: process.env.NEXT_PUBLIC_BACKEND_URL + '/job/' + slug,
    }

    // fetch data
    const job = await axios
        .request(config)
        .then(response => {
            let filteredData = response.data.data.job
            return filteredData
        })
        .catch(error => {})

    return {
        '@context': 'https://schema.org/',
        '@type': 'JobPosting',

        title: job?.title,
        description:
            'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
        openGraph: {
            title: 'Find high paying remote tech jobs | Analogue Shifts',
            description:
                'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
            url: 'https://www.analogueshifts.com/jobs/' + job?.slug,
            siteName: 'AnalogueShifts',
            images: [
                {
                    url: '/images/jobs/we-are-live.jpg',
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        alternates: {
            canonical: '/jobs/' + job?.slug,
        },
        identifier: job?.identifier,
        datePosted: job?.datePosted,
        validThrough: job?.validThrough,
        employmentType: job?.employmentType,
        hiringOrganization: job?.hiringOrganization,
        jobLocation: job?.jobLocation,
        jobLocationType: job?.jobLocationType,
        applicantLocationRequirements: job?.applicantLocationRequirements,
        baseSalary: job?.baseSalary,
    }
}

export default function Page({ params }) {
    return (
        <GuestLayout>
            <section className="min-h-screen border-b">
                {/* <SeoController seoData={seoData} /> */}
                <ViewId id={params.jobViewId} />
            </section>
        </GuestLayout>
    )
}
