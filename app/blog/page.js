import BlogList from '../components/BlogComponents/BlogList'

export const metadata = {
    title: 'Trends in Talent Recruitment | AnalogueShifts Blog',
    description:
        "Stay up-to-date with the latest news and trends in the tech industry with Analogueshifts' blog. Our expert writers cover a wide range of topics, from coding to cybersecurity and everything in between.",
    canonical: 'https://www.analogueshifts.com',
    ogImage: '/images/a4.jpg',
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
