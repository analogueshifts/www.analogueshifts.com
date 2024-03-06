'use client'
import { useState, useRef, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import Data from './Utilities/BuildTeamData.json'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

function BuildTeam() {
    const [breakpointColumnsObj, setBreakPointColumnsObj] = useState(1)
    const masonryRef = useRef(null)
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })

    function handleResize() {
        if (window.innerWidth <= 768) {
            setBreakPointColumnsObj(1)
        } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
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
        <section ref={ref} className="bg-[#EDEFF2]">
            <div
                className={`container duration-300 mx-auto py-16 px-5 xl:px-20 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="w-[59px] mx-auto h-7 rounded-full flex mb-3 md:mb-5 justify-center items-center bg-tremor-background-darkYellow/10">
                    <p className="text-[10px] font-normal text-tremor-background-darkYellow">
                        Roles
                    </p>
                </div>
                <p
                    className={`text-2xl md:text-[32px] text-center font-normal mb-14 text-black`}>
                    Available Roles
                </p>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-full gap-5"
                    columnClassName=""
                    ref={masonryRef}>
                    {Data.BuildTeamData.map(el => (
                        <Link
                            key={el.title}
                            href={el.url}
                            className="bg-white duration-300 mb-6 h-max rounded-3xl p-5 flex flex-col gap-5 motion-safe:hover:scale-[1.02] transition-all duration-250">
                            <Image
                                className="w-full max-w-full rounded-2xl"
                                src={el.image}
                                alt="Image"
                                height={208}
                                width={347}
                            />
                            <div>
                                <h2 className="text-[22px] mb-5 font-normal text-black">
                                    {el.title}
                                </h2>

                                <p className="text-tremor-brand-boulder500 font-light text-sm leading-8">
                                    {el.datails}
                                </p>
                            </div>
                        </Link>
                    ))}
                </Masonry>
            </div>
        </section>
    )
}

export default BuildTeam
