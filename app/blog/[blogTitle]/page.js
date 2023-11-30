import ViewBlog from '@/app/components/BlogComponents/ViewBlog'

// import Image from 'next/image'

export const metadata = {
    title: 'HelpFul Articles',
    description: 'Some HelpFul Blog/Articles',
}

export default function Page({ params }) {
    return (
        <div>
            <ViewBlog slug={params.blogTitle} />
        </div>
    )
}
