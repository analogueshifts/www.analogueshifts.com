// Sections
import Hero from './components/hero'
import RecentJobs from './components/recent-jobs'
import AvailableJobs from './components/available-jobs'
import PostAJob from '@/components/application/home-page/post-a-job'
import DownloadApp from '@/components/application/home-page/download-app'
import { Suspense } from 'react'

export const metadata = {
    title: 'Find High Paying Remote Tech Jobs | Analogue Shifts',
    description:
        'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
    openGraph: {
        title: 'Find High Paying Remote Tech Jobs | Analogue Shifts',
        description:
            'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
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

export default async function Page({ searchParams }) {
    const page = searchParams.page || '1'
    const jobs = await getJobs(page, searchParams)

    return (
        <>
            <Suspense fallback={<p></p>}>
                <Hero />
            </Suspense>

            <Suspense fallback={<p></p>}>
                <AvailableJobs initialData={jobs?.data?.jobs} />
            </Suspense>
            <RecentJobs />
            <PostAJob />
            <DownloadApp />
        </>
    )
}

const getJobs = async (page, searchParams) => {
    try {
        const url = new URL(
            searchParams.search
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/job/search`
                : `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs`,
        )

        // Always include the page query parameter
        url.searchParams.append('page', page)

        // Append optional query parameters if they exist
        if (searchParams.search) {
            url.searchParams.append('search', searchParams.search)
        }
        if (searchParams.employmentType) {
            url.searchParams.append(
                'employmentType',
                searchParams.employmentType,
            )
        }
        if (searchParams.date) {
            url.searchParams.append('date', searchParams.date)
        }

        const res = await fetch(url.toString(), {
            cache: 'no-store',
        })

        console.log("Response URL:", url.toString());
        console.log("Status:", res.status);
        console.log("Content-Type:", contentType);

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

        console.log(error)
        return null
    }
}
