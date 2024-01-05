'use client'
import { useState, useEffect } from 'react'
import { axiosBlog } from '../../lib/axios'
import LoadingTwo from '../Loading'
import Link from 'next/link'
import Image from 'next/image'
import Author from '@/public/author.png'

// import Image from 'next/image'

export default function ViewBlog({ slug }) {
    const [blogData, setBlogData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Fetch job data from your API
        setLoading(true)
        axiosBlog
            .get('/posts?slug=' + slug)
            .then(res => {
                const data = res.data[0]
                setBlogData(data)
                // console.log(data)
                setLoading(false)
            })
            .catch(error => {
                alert(error)
                setLoading(false)
            })
    }, [])

    // console.log(blogData)
    return (
        <>
            {loading && <LoadingTwo />}
            <section className="">
                <div className="container mx-auto py-5 px-5 md:px-24 lg:px-56 xl:px-72">
                    {blogData && (
                        <>
                            <h1 id="title" className="font-bold text-2xl mb-9">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogData.title.rendered,
                                    }}
                                />
                            </h1>
                            {/* <Image
                            src={blogData.image}
                            alt="..."
                            className="w-full h-max mb-5"
                        /> */}
                            <p className="text-sm text-black/60 font-medium pb-4">
                                {blogData.date}
                            </p>
                            <p className="text-black/90 font-medium">
                                <div
                                    id="post"
                                    dangerouslySetInnerHTML={{
                                        __html: blogData.content.rendered,
                                    }}
                                />
                            </p>
                        </>
                    )}
                    {blogData && (
                        <div className="w-full pt-8 flex flex-col gap-3">
                            <p className="text-black/80 font-medium text-base">
                                Author:
                            </p>
                            <Link
                                href="https://analogueshifts.com"
                                className="flex w-full h-[40px] gap-4 mb-5">
                                <Image
                                    src={Author}
                                    alt=""
                                    className="w-[40px] h-[40px] rounded-full"
                                />
                                <div className="h-full flex flex-col justify-center">
                                    <h2 className="text-sm text-black/80 font-medium">
                                        AnalogueShifts
                                    </h2>
                                </div>
                            </Link>
                            <Link
                                href={blogData.link}
                                className="text-as underline text-base font-medium">
                                Visit The Blog Page
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
