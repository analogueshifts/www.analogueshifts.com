import ViewBlog from '@/app/components/BlogComponents/ViewBlog'

// import Image from 'next/image'

export const metadata = {
    title: 'Trends in Talent Recruitment | AnalogueShifts Blog',
    description:
        "Stay up-to-date with the latest news and trends in the tech industry with Analogueshifts' blog. Our expert writers cover a wide range of topics, from coding to cybersecurity and everything in between.",
    canonical: 'https://www.analogueshifts.com',
    ogImage: '/images/a4.jpg',
}

export default function Page({ params }) {
    return (
        <div>
            <ViewBlog slug={params.blogTitle} />
        </div>
    )
}
