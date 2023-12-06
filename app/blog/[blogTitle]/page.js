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
            console.log(data)
            return data
        })
        .catch(error => {
            alert(error)
        })

    return {
        title: product.yoast_head_json.title,
        description: product.yoast_head_json.og_description,
        robots: product.yoast_head_json.robots,
        authors: [{ name: product.yoast_head_json.author }],
        openGraph: {
            title: product.yoast_head_json.title,
            description: product.yoast_head_json.og_description,
            url: 'https://www.analogueshifts.com',
            siteName: 'AnalogueShifts',
            images: product.yoast_head_json.og_image,
            locale: 'en_US',
            type: product.yoast_head_json.og_type,
            publishedTime: product.yoast_head_json.article_published_time,
            modifiedTime: product.yoast_head_json.article_modified_time,
        },
        alternates: {
            canonical: 'https://www.analogueshifts.com/blog/' + product.slug,
        },
        twitter: {
            card: product.yoast_head_json.twitter_card,
            misc: product.yoast_head_json.twitter_misc,
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
