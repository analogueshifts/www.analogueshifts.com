import ViewId from '../../components/JobsComponents/ViewId'
// import SeoController from '@/app/lib/SeoController'

export const metadata = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',

    title: 'Jobs in Tech',
    description:
        'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
    alternates: {
        canonical: '/Jobs',
    },
    identifier: {
        '@type': 'PropertyValue',
        name: 'Google',
        value: '1234567',
    },
    datePosted: '2017-01-18',
    validThrough: '2017-03-18T00:00',
    employmentType: 'CONTRACTOR',
    hiringOrganization: {
        '@type': 'Organization',
        name: 'Google',
        sameAs: 'https://www.google.com',
        logo: 'https://www.example.com/images/logo.png',
    },
    jobLocation: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '555 Clancy St',
            addressLocality: 'Detroit',
            addressRegion: 'MI',
            postalCode: '48201',
            addressCountry: 'US',
        },
    },
    applicantLocationRequirements: [
        {
            '@type': 'State',
            name: 'Michigan, USA',
        },
        {
            '@type': 'State',
            name: 'Texas, USA',
        },
    ],
    jobLocationType: 'TELECOMMUTE',
    baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: {
            '@type': 'QuantitativeValue',
            value: 40.0,
            unitText: 'HOUR',
        },
    },
}

export default function Page({ params }) {
    return (
        <section className="min-h-screen border-b">
            {/* <SeoController seoData={seoData} /> */}
            <ViewId id={params.jobViewId} />
        </section>
    )
}
