import ViewBlog from '@/app/components/BlogComponents/ViewBlog'
import { axiosBlog } from '@/app/lib/axios'

export async function generateMetadata({ params }) {
    // read route params
    const slug = params.blogTitle

    // fetch data
    const product = await axiosBlog
        .get('/posts?slug=' + slug)
        .then(res => {
            const data = res.data[0]
            return data
        })
        .catch(error => {
            alert(error)
        })

    return {
        title: product.yoast_head_json.title,
        description: product.yoast_head_json.og_description,
        openGraph: {
            title: product.yoast_head_json.title,
            description: product.yoast_head_json.og_description,
            url: 'https://www.analogueshifts.com',
            siteName: 'AnalogueShifts',
            images: product.yoast_head_json.og_image,
            locale: 'en_US',
            type: 'website',
        },
        alternates: {
            canonical: product.yoast_head_json.canonical,
        },
    }
}

export default function Page({ params }) {
    return (
        <div>
            <ViewBlog slug={params.blogTitle} />
        </div>
    )
}
