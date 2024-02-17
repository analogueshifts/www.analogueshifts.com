import GuestLayout from '@/app/Layouts/GuestLayout'
import ViewId from '../../components/JobsComponents/ViewId'
import axios from 'axios'
// import SeoController from '@/app/lib/SeoController'

export async function generateMetadata({ params }) {
    // read route params
    const slug = params.jobViewId

    // Axios Config
    const axios = require('axios')
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.NEXT_PUBLIC_BACKEND_URL + '/jobs',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }

    // fetch data
    const job = await axios
        .request(config)
        .then(response => {
            let filteredData = response.data.jobs.filter(
                item => item.slug === slug,
            )[0]

            return filteredData
        })
        .catch(error => {})

    return {
        '@context': 'https://schema.org/',
        '@type': 'JobPosting',

        title: job?.title,
        description:
            'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
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
