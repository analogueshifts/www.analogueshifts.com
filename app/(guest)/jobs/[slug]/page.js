import AboutJob from './components/about-job'

export async function generateMetadata({ params }) {
    // read route params
    const slug = params.slug

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

export default async function Page({ params }) {
    const job = await getJob(params.slug)

    return (
        <section className="w-full h-max flex justify-center large:pt-[91px] pt-16 tablet:pt-10">
            {job ? (
                <AboutJob slug={params.slug} job={job?.data?.job} />
            ) : (
                <div className="py-16 ">
                    <h2 className="text-tremor-brand-boulder950 text-center font-bold text-2xl">
                        <strong>Not Found</strong>
                    </h2>
                </div>
            )}
        </section>
    )
}

const getJob = async slug => {
    try {
        const url = 'https://api.analogueshifts.com/api/job/' + slug

        const res = await fetch(url, {
            next: {
                revalidate: 60,
            },
        })

        // Check if the response content type is JSON
        const contentType = res.headers.get('Content-Type') || ''
        if (!contentType.includes('application/json')) {
            throw new Error('Invalid response type')
        }

        if (res.ok) {
            return await res.json()
        } else {
            throw new Error(
                `Failed to fetch jobs: ${res.status} ${res.statusText}`,
            )
        }
    } catch (error) {
        console.error('Error fetching jobs:', error)
        return null
    }
}
