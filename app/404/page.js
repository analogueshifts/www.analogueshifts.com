import Link from 'next/link'

export const metadata = {
    title: '404',
    description:
        'Next SEO packages simplifies the SEO management in Next Apps with less configurations',
}

export default function Page() {
    return (
        <>
            <section className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                    <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-6">
                                <img
                                    className="object-cover h-full w-full"
                                    src="/images/1.jpg"
                                />
                            </div>
                            <div className="grid lg:col-span-6 py-16 px-3 lg:px-9">
                                <div className="grid gap-5 p-4">
                                    <Link
                                        className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                                        href="/">
                                        Home
                                    </Link>
                                    <Link
                                        className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                                        href="/blog">
                                        Blog
                                    </Link>
                                    <Link
                                        className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                                        href="/about">
                                        About
                                    </Link>
                                    <Link
                                        className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                                        href="/contact">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
