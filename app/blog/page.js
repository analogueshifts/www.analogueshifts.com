import BlogList from '../components/BlogComponents/BlogList'

export const metadata = {
    title: 'HelpFul Articles',
    description: 'Some HelpFul Blog/Articles',
}

export default function Page() {
    return (
        <div>
            {/* Page Content */}
            <section className="">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    <BlogList />
                </div>
            </section>
        </div>
    )
}
