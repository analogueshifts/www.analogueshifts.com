'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import GuestLayout from '../layouts/guest'
// import BlogList from '../components/BlogComponents/BlogList'

// export const metadata = {
//     title: 'Trends in Talent Recruitment | AnalogueShifts Blog',
//     description:
//         "Stay up-to-date with the latest news and trends in the tech industry with Analogueshifts' blog. Our expert writers cover a wide range of topics, from coding to cybersecurity and everything in between. ",
//     openGraph: {
//         title: 'Trends in Talent Recruitment | AnalogueShifts Blog',
//         description:
//             "Stay up-to-date with the latest news and trends in the tech industry with Analogueshifts' blog. Our expert writers cover a wide range of topics, from coding to cybersecurity and everything in between.",
//         url: 'https://www.analogueshifts.com/blog',
//         siteName: 'AnalogueShifts',
//         images: [
//             {
//                 url: '/images/a4.jpg',
//                 width: 800,
//                 height: 600,
//             },
//         ],
//         locale: 'en_US',
//         type: 'website',
//     },
//     alternates: {
//         canonical: '/blog',
//     },
// }

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        router.push('https://blog.analogueshifts.com')
    }, [])

    return (
        <GuestLayout>
            {/* Page Content */}
            <section className="">
                {/* <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    <BlogList />
                </div> */}
            </section>
        </GuestLayout>
    )
}
