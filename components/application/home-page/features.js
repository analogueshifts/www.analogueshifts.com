'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Data from './utilities/FeaturesData.json'
import { useInView } from 'react-intersection-observer'

function Features() {
    const titleRef = useRef()
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })

    return (
        <div ref={ref}>
            {/* Page Content */}
            <section
                ref={titleRef}
                className={`md:py-9 duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="container mx-auto py-5 px-5 md:px-9 xl:px-20 flex flex-col items-center">
                    <div className="w-[59px] h-7 rounded-full flex mb-3 md:mb-5 justify-center items-center bg-tremor-background-darkYellow/10">
                        <p className="text-[10px] font-normal text-tremor-background-darkYellow">
                            O
                        </p>
                    </div>
                    <p
                        className={`text-2xl md:text-[32px] text-center font-normal mb-14 text-black`}>
                        Our Features
                    </p>
                    <div className="grid w-full gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {Data.FeaturesData.map(el => (
                            <a
                                key={el.title}
                                href={el.url}
                                className="bg-white col-span-1 duration-300 rounded-3xl p-5 flex flex-col gap-5 motion-safe:hover:scale-[1.02] transition-all duration-250">
                                <Image
                                    className="w-full max-w-full rounded-2xl h-52 object-cover"
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
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features

// {
//     "image": "/images/payment-gateway.png",
//     "title": "Payment Gateway",
//     "datails": "Your financial information is safeguarded, ensuring peace of mind as you invest in your future. Experience hassle-free payments and unlock access to premium services with confidence.",
//     "url": "https://pay.analogueshifts.com"
// },
