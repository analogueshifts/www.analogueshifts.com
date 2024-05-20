'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Data from './utilities/FeaturesData.json'
import { useInView } from 'react-intersection-observer'
import PaymentGateway from '@/public/images/payment-gateway.png'
import ResumeBuilder from '@/public/images/resume-builder.png'
import VettingSystem from '@/public/images/vetting-system.png'

function Features() {
    const titleRef = useRef()
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })
    const [breakpointColumnsObj, setBreakPointColumnsObj] = useState(1)
    const masonryRef = useRef(null)

    //  const [selected, setSelected] = useState('Vetting System')
    // const vettingRef = useRef()
    // const paymentRef = useRef()
    // const resumeRef = useRef()

    // const [vettingSystemRef, vettingSystemInview] = useInView({
    //     rootMargin: '-140px',
    // })

    // const [resumeBuilderRef, resumeBuilderInview] = useInView({
    //     rootMargin: '-140px',
    // })

    // const [PaymentGatewayRef, PaymentGatewayInview] = useInView({
    //     rootMargin: '-140px',
    // })

    // useEffect(() => {
    //     if (PaymentGatewayInview) {
    //         setSelected('Payment Gateway')
    //     } else if (resumeBuilderInview) {
    //         setSelected('Resume Builder')
    //     } else if (vettingSystemInview) {
    //         setSelected('Vetting System')
    //     }
    // }, [PaymentGatewayInview, resumeBuilderInview, vettingSystemInview])

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
                                    className="w-full max-w-full rounded-2xl h-52 object-contain"
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

// THE PREVIOUS FEATURES UI DESIGN
// <div className="sticky top-28 w-621 flex-wrap mb-20 max-w-full min-h-[68px] h-max py-2 border border-tremor-brand-boulder50 rounded-full bg-tremor-background-white300/80 px-3.5 md:px-5 hidden md:flex items-center justify-center">
// <button
//     onClick={() =>
//         titleRef.current.scrollIntoView({
//             behavior: 'smooth',
//         })
//     }
//     className={`min-w-[33%] w-max px-2 h-9 rounded-full flex justify-center items-center ${
//         selected === 'Vetting System'
//             ? 'bg-tremor-background-darkYellow/10'
//             : 'bg-transparent'
//     }`}>
//     <p
//         className={`text-xs md:text-base font-normal ${
//             selected === 'Vetting System'
//                 ? 'text-yellow-700'
//                 : 'text-tremor-brand-boulder950'
//         }`}>
//         Vetting System
//     </p>
// </button>
// <button
//     onClick={() =>
//         vettingRef.current.scrollIntoView({
//             behavior: 'smooth',
//         })
//     }
//     className={`min-w-[33%] w-max px-2 h-9 rounded-full flex justify-center items-center ${
//         selected === 'Resume Builder'
//             ? 'bg-tremor-background-darkYellow/10'
//             : 'bg-transparent'
//     }`}>
//     <p
//         className={`text-xs md:text-base font-normal ${
//             selected === 'Resume Builder'
//                 ? 'text-yellow-700'
//                 : 'text-tremor-brand-boulder950'
//         }`}>
//         Resume Builder
//     </p>
// </button>
// <button
//     onClick={() =>
//         resumeRef.current.scrollIntoView({
//             behavior: 'smooth',
//         })
//     }
//     className={`min-w-[33%] w-max px-2 h-9 rounded-full flex justify-center items-center ${
//         selected === 'Payment Gateway'
//             ? 'bg-tremor-background-darkYellow/10'
//             : 'bg-transparent'
//     }`}>
//     <p
//         className={`text-xs md:text-base font-normal ${
//             selected === 'Payment Gateway'
//                 ? 'text-yellow-700'
//                 : 'text-tremor-brand-boulder950'
//         }`}>
//         Payment Gateway
//     </p>
// </button>
// </div>
// <div className="w-full flex flex-col gap-20 items-center">
// <div
//     ref={vettingSystemRef}
//     className="w-full flex gap-y-7 flex-col md:items-start md:flex-row md:justify-between">
//     <div
//         ref={vettingRef}
//         className="md:w-5/12 w-full flex flex-col justify-center">
//         <span
//             className={`text-2xl md:text-3xl mb-6 font-normal text-tremor-brand-boulder950 `}>
//             Vetting System
//         </span>
//         <p className="font-light text-tremor-brand-boulder500 text-lg leading-9">
//             We ensure every candidate aligns with your
//             standards, providing peace of mind in your
//             hiring process. Trust our rigorous screening
//             to deliver top-tier talent tailored to your
//             needs.
//         </p>
//     </div>
//     <div className="md:w-5/12 w-full overflow-hidden">
//         <Image src={VettingSystem} alt="Hero Image" />
//     </div>
// </div>
// <div
//     ref={resumeBuilderRef}
//     className="w-full flex gap-y-7 flex-col-reverse md:items-start md:flex-row md:justify-between">
//     <div className="md:w-5/12 w-full overflow-hidden">
//         <Image src={ResumeBuilder} alt="Hero Image" />
//     </div>
//     <div
//         ref={resumeRef}
//         className="md:w-5/12 w-full flex flex-col justify-center">
//         <span
//             className={`text-2xl md:text-3xl mb-6 font-normal text-tremor-brand-boulder950 `}>
//             Resume Builder
//         </span>
//         <p className="font-light text-tremor-brand-boulder500 text-lg leading-9">
//             Tailored templates, intuitive design, and
//             expert guidance empower you to showcase your
//             skills and experiences with confidence. Take
//             the first step towards your dream career
//             today!
//         </p>
//     </div>
// </div>
// <div
//     ref={PaymentGatewayRef}
//     className="w-full flex gap-y-7 flex-col md:items-start md:flex-row md:justify-between">
//     <div
//         ref={paymentRef}
//         className="md:w-5/12 w-full flex flex-col justify-center">
//         <span
//             className={`text-2xl md:text-3xl mb-6 font-normal text-tremor-brand-boulder950 `}>
//             Payment Gateway
//         </span>
//         <p className="font-light text-tremor-brand-boulder500 text-lg leading-9">
//             Your financial information is safeguarded,
//             ensuring peace of mind as you invest in your
//             future. Experience hassle-free payments and
//             unlock access to premium services with
//             confidence.
//         </p>
//     </div>
//     <div className="md:w-5/12 w-full overflow-hidden">
//         <Image src={PaymentGateway} alt="Hero Image" />
//     </div>
// </div>
// </div>
