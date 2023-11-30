'use client'
import { useState, useEffect } from 'react'
import { axiosBlog } from '../../lib/axios'
import Link from 'next/link'
import Image from 'next/image'
import SearchIcon from '@/public/images/search-icon.png'
import LoadingTwo from '../Loading'
import Author from '@/public/author.png'
// import { data } from 'autoprefixer'

export default function BlogList() {
    const [blogData, setBlogData] = useState([])
    const [searchFilter, setSearchFilter] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Fetch job data from your API
        setLoading(true)
        axiosBlog
            .get('/posts')
            .then(res => {
                const data = res.data
                setBlogData(data)
                setLoading(false)
            })
            .catch(error => {
                alert(error)
                setLoading(false)
            })
    }, [])

    // useEffect(() => {
    //     if (searchValue.length > 1) {
    //         setBlogData(
    //             blogData.filter(blog => {
    //                 return blog.title
    //                     .toLowerCase()
    //                     .includes(searchValue.toLowerCase())
    //             }),
    //         )
    //     } else {
    //         setBlogData(data)
    //     }
    // }, [searchValue])

    return (
        <>
            {loading && <LoadingTwo />}
            <div className="w-full">
                <div className="w-full relative h-12 flex items-center">
                    <input
                        placeholder="Search Blog"
                        value={searchFilter}
                        onChange={e => setSearchFilter(e.target.value)}
                        className="w-full h-full border  rounded pl-3 pr-12 py-2 outline-none border-black/20"
                    />
                    <Image
                        className="absolute cursor-pointer top-3.5 right-3 w-5 h-5 mr-3 opacity-70"
                        src={SearchIcon}
                        alt="Search Icon"
                    />
                </div>
                <div className="pt-5 w-full flex justify-between flex-wrap gap-y-5">
                    {blogData &&
                        blogData
                            .filter(data =>
                                data.title.rendered
                                    .toLowerCase()
                                    .includes(searchFilter.toLowerCase()),
                            )
                            .map(data => (
                                <Link
                                    key={crypto.randomUUID()}
                                    href={`blog/${data.slug}`}
                                    className="w-[31%] hover:scale-105 duration-300 h-max pb-6 max-[1000px]:w-[48%] max-[600px]:w-full overflow-hidden rounded-2xl shadow-xl flex flex-col blog-box">
                                    <div className="w-full h-6/12  p-3.5">
                                        <div className="flex flex-col pb-5 w-full gap-3 h-max">
                                            <p className="text-sm text-black/60 font-semibold">
                                                BLOG
                                            </p>
                                            <p className="text-base text-black/80 font-medium">
                                                {data.title.rendered.length < 75
                                                    ? data.title.rendered
                                                    : data.title.rendered
                                                          .slice(0, 72)
                                                          .concat('...')}
                                            </p>
                                        </div>
                                        <div className="flex w-full h-[40px] gap-4">
                                            <Image
                                                src={Author}
                                                alt=""
                                                className="w-[40px] h-[40px] rounded-full"
                                            />
                                            <div className="h-full flex flex-col justify-between">
                                                <p className="text-sm text-black/80 font-medium">
                                                    AnalogueShifts
                                                </p>
                                                <p className="text-xs text-black/60 font-medium">
                                                    {data.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
        </>
    )
}
