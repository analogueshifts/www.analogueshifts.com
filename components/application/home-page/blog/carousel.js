'use client'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import LeftArrow from '@/public/images/guest-layout/blogs/left-arrow.svg'
import RightArrow from '@/public/images/guest-layout/blogs/right-arrow.svg'
import RightArrowWhite from '@/public/images/guest-layout/products/right-arrow.svg'
import DummyBlogImage from '@/public/images/guest-layout/blogs/dummy-blog.svg'

const Carousel = ({ posts }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(1)

    // Set itemsPerView based on the window width
    useEffect(() => {
        const updateItemsPerView = () => {
            const width = window.innerWidth
            if (width >= 1024) {
                setItemsPerView(3) // Desktop
            } else if (width >= 640) {
                setItemsPerView(2) // Tablet
            } else {
                setItemsPerView(1) // Mobile
            }
        }

        updateItemsPerView() // Initial check
        window.addEventListener('resize', updateItemsPerView)

        return () => window.removeEventListener('resize', updateItemsPerView)
    }, [])

    const goToPrevious = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? posts.length - 1 : prevIndex - 1,
        )
    }

    const goToNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === posts.length - 1 ? 0 : prevIndex + 1,
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext()
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex  transition-transform duration-500"
                style={{
                    transform: `translateX(-${
                        currentIndex * (100 / itemsPerView)
                    }%)`,
                }}>
                {posts.map((item, index) => (
                    <div
                        key={index}
                        className="sm:pr-5 lg:pr-10 pr-0  flex-shrink-0 flex w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex flex-col w-full">
                            <div className="w-full h-[245px] rounded-2xl mb-8">
                                <Image
                                    src={DummyBlogImage}
                                    alt=""
                                    className="rounded-2xl w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full flex gap-x-8 gap-y-5 flex-wrap items-center">
                                <p className="text-[15px] text-tremor-brand-boulder400 font-normal mb-4">
                                    Tech
                                </p>
                                <h2 className="large:text-[22px] text-lg mb-2 large:mb-[18px] leading-8 large:leading-10 font-medium text-tremor-brand-tan">
                                    5 Things to watch out when hiring for a
                                    cybersecurity expert.
                                </h2>
                                <p className="text-tremor-brand-boulder400 mb-8 large:mb-[49px] font-normal text-[15px]">
                                    Feb 22, 2024 — by{' '}
                                    <span className="text-tremor-brand-tan">
                                        analogueshifts
                                    </span>{' '}
                                    in{' '}
                                    <span className="text-tremor-brand-tan">
                                        Recruitment
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-12 large:h-14 flex justify-between">
                <div className="w-max h-full flex items-center gap-2 sm:gap-6">
                    <button
                        className="large:w-14 large:h-14 w-12 h-12 rounded-full flex justify-center items-center bg-tremor-brand-boulder100"
                        onClick={goToPrevious}>
                        <Image
                            src={LeftArrow}
                            alt=""
                            className="h-max large:w-max w-3"
                        />
                    </button>
                    <button
                        className="large:w-14 large:h-14 w-12 h-12 rounded-full flex justify-center items-center bg-tremor-brand-boulder100"
                        onClick={goToNext}>
                        <Image
                            src={RightArrow}
                            alt=""
                            className="h-max large:w-max w-3"
                        />
                    </button>
                </div>
                <Link
                    className="h-full px-10 large:px-12 bg-tremor-background-darkYellow flex justify-center items-center gap-1 rounded-2xl text-sm large:text-base font-semibold text-tremor-brand-boulder50"
                    href="https://blog.analogueshifts.com">
                    Read More{' '}
                    <Image
                        src={RightArrowWhite}
                        alt=""
                        className="h-max large:w-max w-4"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Carousel
