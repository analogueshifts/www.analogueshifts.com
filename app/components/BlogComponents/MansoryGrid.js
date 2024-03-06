'use client'

import React, { useRef, useEffect, useState } from 'react'
import Author from '@/public/author.png'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import Image from 'next/image'

const MasonryGrid = ({ posts }) => {
    const [breakpointColumnsObj, setBreakPointColumnsObj] = useState(3)
    const masonryRef = useRef(null)

    function handleResize() {
        if (window.innerWidth <= 500) {
            setBreakPointColumnsObj(1)
        } else if (window.innerWidth < 1281) {
            setBreakPointColumnsObj(2)
        } else {
            setBreakPointColumnsObj(3)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    return (
        <div className="container mx-auto max-[500px]:w-[100%] max-[500px]:flex max-[500px]:justify-center">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-full max-[500px]:w-[90%]"
                columnClassName="px-3"
                ref={masonryRef}>
                {posts.map(data => (
                    <Link
                        key={crypto.randomUUID()}
                        href={`blog/${data.slug}`}
                        className="w-full mb-6 hover:scale-[1.05] duration-300 h-max pb-6  overflow-hidden rounded-2xl shadow-xl flex flex-col blog-box">
                        <div className="flex flex-col justify-evenly w-full h-6/12">
                            <div className="flex flex-col pb-5 w-full gap-3">
                                <div className="h-56 w-full">
                                    <img
                                        src={
                                            data.yoast_head_json.og_image[0].url
                                        }
                                        alt={
                                            data.yoast_head_json.og_image[0].url
                                        }
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-3 p-3.5">
                                    <p className="text-sm text-black/60 font-semibold">
                                        BLOG
                                    </p>
                                    <p className="text-base text-black/80 font-medium">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.title.rendered,
                                            }}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-end w-full h-[40px] gap-4 px-3.5">
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
            </Masonry>
        </div>
    )
}

export default MasonryGrid
