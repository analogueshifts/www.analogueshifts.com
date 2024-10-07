'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'

import ratings from './utilities/data.json'
import Star from '@/public/images/guest-layout/ratings/star.svg'
import Quote from '@/public/images/guest-layout/ratings/quote.svg'

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(1)
    const [activeIndex, setActiveIndex] = useState(0)
    const [startPos, setStartPos] = useState(null)
    const [isDragging, setIsDragging] = useState(false)

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
            prevIndex === 0 ? ratings.length - 1 : prevIndex - 1,
        )
        setActiveIndex(
            prevIndex => (prevIndex - 1 + ratings.length) % ratings.length,
        )
    }

    const goToNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === ratings.length - 1 ? 0 : prevIndex + 1,
        )
        setActiveIndex(prevIndex => (prevIndex + 1) % ratings.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext()
        }, 12000)

        return () => clearInterval(interval)
    }, [])

    const handleDragStart = e => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        setStartPos(clientX)
        setIsDragging(true)
    }

    const handleDragMove = e => {
        if (!isDragging || startPos === null) return

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const diff = clientX - startPos

        const threshold = 50
        if (diff > threshold) {
            goToPrevious()
            setStartPos(null)
            setIsDragging(false)
        } else if (diff < -threshold) {
            goToNext()
            setStartPos(null)
            setIsDragging(false)
        }
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        setStartPos(null)
    }

    return (
        <section
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            className={`w-full sticky z-20 h-max bg-white items-center overflow-hidden large:py-[168px] tablet:py-14 py-24 flex flex-col ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}>
            <h2 className="text-center mb-10 tablet:px-5 large:mb-16 font-semibold text-2xl tablet:text-lg large:text-[32px] text-black">
                What Do Our Clients Say
                <span className="text-tremor-background-darkYellow">
                    About Us
                </span>
            </h2>
            <div className="w-[calc(100%-96px)] mb-[58px] large:mb-[76px] tablet:w-[calc(100%-64px)] transition-transform  tablet:h-[300px] h-[274px] large:h-[274px] overflow-x-hidden">
                <div
                    style={{
                        transform: `translateX(-${
                            currentIndex * (100 / itemsPerView)
                        }%)`,
                    }}
                    className="duration-500  h-full flex  items-center">
                    {ratings.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-full h-full sm:w-[calc(50%-20px)] lg:w-1/3 ${
                                    index === 0
                                        ? 'pr-4 tablet:pr-0 lg:pr-6'
                                        : index !== 1
                                        ? 'pl-4 tablet:pl-0 lg:pl-6'
                                        : ''
                                }`}>
                                <div
                                    className={`w-full h-full flex flex-col justify-between px-6 py-7 rounded-2xl review-box `}>
                                    <div className="w-full flex flex-col h-[calc(100%-80px)] gap-4">
                                        <div className="w-full flex items-center gap-[5.4px]">
                                            {item.ratings.map(rating => {
                                                return (
                                                    <Image
                                                        src={Star}
                                                        alt=""
                                                        key={rating}
                                                    />
                                                )
                                            })}
                                        </div>
                                        <p className="text-[#181721] font-normal text-sm large:text-base leading-7 large:leading-8">
                                            {item.message}
                                        </p>
                                    </div>
                                    <div className="w-full h-max items-end flex justify-between">
                                        <div className="w-max h-10 flex gap-2.5 items-center">
                                            <Image
                                                src={item.userImage}
                                                alt=""
                                                width={40}
                                                height={40}
                                                className="h-10 w-10 object-cover"
                                            />
                                            <div className="flex flex-col gap-[2.7px]">
                                                <p className="text-[#181721] font-medium text-[9.5px]">
                                                    {item.userName}
                                                </p>
                                                <p className="text-[#8C8C93] font-normal text-[9.5px]">
                                                    {item.userRole}
                                                </p>
                                            </div>
                                        </div>{' '}
                                        <Image
                                            src={Quote}
                                            alt=""
                                            className="translate-y-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full flex px-6 justify-center items-center">
                <div className="flex justify-center items-center space-x-1 w-full">
                    {ratings.map((_, index) => {
                        const width =
                            index === activeIndex
                                ? 'w-[38px] bg-[#ffbb0a]'
                                : 'w-[13px] bg-[#FFBB0A4D]'
                        return (
                            <div
                                key={index}
                                className={`rounded-lg h-[6px] large:h-[7.7px] transition-all duration-500 ease-in-out ${width}`}></div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
