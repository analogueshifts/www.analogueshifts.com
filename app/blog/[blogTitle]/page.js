'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import GuestLayout from '@/app/Layouts/GuestLayout'
// import ViewBlog from '@/app/components/BlogComponents/ViewBlog'
// import { axiosBlog } from '@/app/lib/axios'

// export async function generateMetadata({ params }) {
//     // read route params
//     const slug = params.blogTitle

//     // fetch data
//     const product = await axiosBlog
//         .get('/posts?slug=' + slug)
//         .then(res => {
//             const data = res.data[0]
//             return data
//         })
//         .catch(error => {
//             alert(error)
//         })

//     return {
//         title: product.yoast_head_json.title,
//         description: product.yoast_head_json.og_description,
//         robots: product.yoast_head_json.robots,
//         authors: [{ name: product.yoast_head_json.author }],
//         openGraph: {
//             title: product.yoast_head_json.title,
//             description: product.yoast_head_json.og_description,
//             url: 'https://www.analogueshifts.com/' + product.slug,
//             siteName: 'AnalogueShifts',
//             images: product.yoast_head_json.og_image,
//             locale: 'en_US',
//             type: product.yoast_head_json.og_type,
//             publishedTime: product.yoast_head_json.article_published_time,
//             modifiedTime: product.yoast_head_json.article_modified_time,
//         },
//         alternates: {
//             canonical: '/blog/' + product.slug,
//         },
//         twitter: {
//             card: product.yoast_head_json.twitter_card,
//             misc: product.yoast_head_json.twitter_misc,
//         },

//         '@context': 'https://schema.org/',
//         '@type': 'BlogPosting',
//         headline: '',
//         image: {
//             '@type': 'ImageObject',
//             url: product.yoast_head_json.og_image,
//             width: 100,
//             height: 100,
//         },
//         author: {
//             '@type': 'Person',
//             name: [{ name: product.yoast_head_json.author }],
//         },
//         publisher: {
//             '@type': 'Organization',
//             name: [{ name: product.yoast_head_json.author }],
//             logo: {
//                 '@type': 'ImageObject',
//                 url: 'https://www.analogueshifts.com/logo.png',
//                 width: 100,
//                 height: 100,
//             },
//         },
//         datePublished: '',
//     }
// }

export default function Page({ params }) {
    const router = useRouter()

    useEffect(() => {
        router.push('https://blog.analogueshifts.com/' + params.blogTitle)
    }, [])
    return (
        <GuestLayout>{/* <ViewBlog slug={params.blogTitle} /> */}</GuestLayout>
    )
}
