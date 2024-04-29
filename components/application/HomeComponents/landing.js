'use client'
import Image from 'next/image'
import A4 from '@/public/images/a4.jpg'
import { useInView } from 'react-intersection-observer'

function Landing() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })
    return (
        <div ref={ref}>
            {/* Page Content */}
            <section
                className={`md:py-9 duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="container mx-auto py-5 px-5 md:px-9 xl:px-20">
                    <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-6 p-7 lg:p-14">
                                <div className="grid justify-center lg:justify-start gap-5 lg:col-span-6">
                                    <h1 className="text-3xl md:text-4xl font-bold lg:leading-[50px] tracking-normal">
                                        The Future of Talent Recruitment
                                    </h1>
                                    <h2 className="">
                                        Your Success in Recruitment and
                                        Technical Support is our Priority.
                                        Welcome to Analogue Shifts, where we
                                        blend the expertise of recruitment with
                                        the precision of technical support to
                                        deliver exceptional results for your
                                        business. We understand that finding top
                                        talent and providing reliable technical
                                        assistance are crucial to driving your
                                        company’s growth.
                                    </h2>
                                </div>
                            </div>
                            <div className="grid lg:col-span-6">
                                <Image
                                    className="object-cover h-full w-full"
                                    src={A4}
                                    alt="landing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
