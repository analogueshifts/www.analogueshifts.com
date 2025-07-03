import Blogs from '@/components/application/home-page/blog/blog'
import ContactUs from '@/components/application/home-page/contact-us'
import DownloadApp from '@/components/application/home-page/download-app'
import Hero from '@/components/application/home-page/hero/hero'
import NewsLetter from '@/components/application/home-page/news-letter'
import Organizations from '@/components/application/home-page/organizations/organizations'
import PostAJob from '@/components/application/home-page/post-a-job'
import Products from '@/components/application/home-page/products/products'
import Reviews from '@/components/application/home-page/reviews/reviews'
import TalentPool from '@/components/application/home-page/talent-pool/talent-pool'

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

export default async function Page() {
    let blogs = await getBlogs()

    return (
        <>
            <Hero />
            <Organizations />
            <TalentPool />
            <PostAJob />
            <DownloadApp />
            <Products />
            <Reviews />
            {blogs && blogs[0] && <Blogs blogs={blogs} />}
            <ContactUs />
            <NewsLetter />
        </>
    )
}

const getBlogs = async () => {
    try {
        let res = await fetch(
            'https://blog.analogueshifts.com/wp-json/wp/v2/posts',
            {
                cache: 'no-store',
            },
        )

        const contentType = res.headers.get('Content-Type') || ''
        if (!contentType.includes('application/json')) {
            throw new Error('Invalid response type')
        }

        if (res.ok) {
            return await res.json()
        } else {
            throw new Error(
                `Failed to fetch blogs: ${res.status} ${res.statusText}`,
            )
        }
    } catch (error) {
        console.error('Error fetching blogs:', error)
        return []
    }
}
