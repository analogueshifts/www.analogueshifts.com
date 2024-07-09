'use client'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from '@/public/images/1.jpg'
import AboutImage1 from '@/public/images/about/1.jpg'
import AboutImage2 from '@/public/images/about/2.jpg'
import { useInView } from 'react-intersection-observer'
import TeamData from './utilities/team.json'

export default function PageContent() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-140px', //triggers when the div is -50px up
    })
    return (
        <div ref={ref}>
            {/* Page Content */}
            <section
                className={`duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-6 p-7 lg:p-14">
                                <div className="grid justify-center lg:justify-start gap-5 lg:col-span-6">
                                    <h1
                                        id="title"
                                        className="text-3xl md:text-4xl font-bold lg:leading-[50px] tracking-normal">
                                        Learn about AnalogueShifts
                                    </h1>
                                    <h2 className="">
                                        AnalogueShifts is a Project Management
                                        and Talent Acquisition Company. Our
                                        mission is to solve the problem of cost
                                        for Startups and Large scale companies
                                        abroad by sourcing the best talents for
                                        clients. We are equipped with the most
                                        talented work force across the globe and
                                        we are ready to work 24/7.
                                    </h2>
                                </div>
                            </div>
                            <div className="grid lg:col-span-6">
                                <Image
                                    className="object-cover object-center h-full w-full"
                                    src={Image1}
                                    alt="landing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Header */}
            <header
                className={`bg-gray-50 duration-500 ${
                    inView
                        ? 'opacity-1 translate-x-0'
                        : 'opacity-0 -translate-x-2'
                }`}>
                <div className="container  mx-auto py-14  px-3 md:px-9 xl:px-20">
                    <div className="grid lg:grid-cols-3  items-center">
                        <div className="grid pb-10 lg:pb-0 lg:col-span-1 h-full w-full justify-center lg:justify-start items-center">
                            <div className=" w-full h-[500px]">
                                <video controls muted className="w-full h-full">
                                    <source
                                        src="/videos/about_us.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                        <div className="flex flex-col lg:pl-12 lg:col-span-2 gap-8 h-full w-full justify-center">
                            <h2 className="text-3xl font-bold text-center lg:text-start">
                                {' '}
                                Our mission is to make hiring easier for
                                everyone.
                            </h2>
                            <p className="text text-center lg:text-start text-lg leading-[30px] font-medium text-black/60 ">
                                Our overarching objective is to effectively
                                address the pressing issue of cost that
                                confronts both Startups and Large scale
                                companies operating abroad, and we aim to
                                achieve this by meticulously curating and
                                sourcing the most exceptional talents tailored
                                to the specific needs and requirements of our
                                esteemed clients.
                            </p>

                            <div className="w-full flex justify-center lg:justify-start">
                                <Link
                                    className="bg-as w-max text-white text-lg duration-300 hover:-translate-y-1 py-3 px-5 rounded-md"
                                    href="#scroll-target">
                                    Read our story
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* About section one */}
            <section
                className={`bg-gray-100 duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}
                id="scroll-target">
                <div className="container mx-auto py-14 px-3 md:px-9 xl:px-20">
                    <div className="grid lg:flex lg:grid-cols-2 gap-7 items-center">
                        <div className="grid lg:col-span-1 gap-5 h-full w-full">
                            <h2 className="text-3xl font-bold">About us</h2>
                            <p className="text text-lg leading-[30px] font-medium text-black/60 ">
                                AnalogueShifts is a Project Management and
                                Talent Acquisition Company. Our mission is to
                                solve the problem of cost for Startups and Large
                                scale companies abroad by sourcing the best
                                talents for clients. We are equipped with the
                                most talented work force across the globe and we
                                are ready to work 24/7.
                            </p>
                        </div>
                        <div className="grid lg:col-span-1 h-full w-full">
                            <Image
                                className="object-cover h-full w-full rounded-md"
                                src={AboutImage1}
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* About section two */}
            <section
                className={`bg-gray-100 duration-500 ${
                    inView
                        ? 'opacity-1 translate-x-0'
                        : 'opacity-0 translate-x-2'
                }`}
                id="scroll-target">
                <div className="container mx-auto py-14 px-3 md:px-9 xl:px-20">
                    <div className="grid lg:flex lg:flex-row-reverse lg:grid-cols-2 gap-7 items-center">
                        <div className="grid lg:col-span-1 gap-5 h-full w-full">
                            <h2 className="text-3xl font-bold">What we do</h2>
                            <p className="text text-lg leading-[30px] font-medium text-black/60 ">
                                We are a dynamic and motivated team of people
                                who share the same goal to find the right talent
                                for your company. We offer high quality services
                                and will help you with anything we can from the
                                recruitment stage up until you have made a final
                                decision. We are here to understand exactly what
                                kind of person you want, to tailor our service
                                to best fit your needs and deliver results for
                                businesses in all industries.
                            </p>
                        </div>
                        <div className="grid lg:col-span-1 h-full w-full">
                            <Image
                                className="object-cover h-full w-full rounded-md"
                                src={AboutImage2}
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Team members section */}
            <section
                className={`bg-gray-50 duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <div className="container mx-auto py-14 px-3 md:px-9 xl:px-20">
                    <div className="grid gap-3 text-center">
                        <h3 className="flex justify-center text-2xl md:text-7xl text-black font-bold">
                            Our Team
                        </h3>
                        <p className="flex justify-center text-xl font-semibold">
                            Dedicated to quality and your success
                        </p>
                    </div>
                    <div className="grid justify-center py-16">
                        <div className="grid justify-center lg:grid-cols-3 gap-5">
                            {TeamData.map(item => {
                                return (
                                    <div
                                        key={item.name}
                                        className="grid justify-center rounded p-2 cursor-pointer relative">
                                        <Image
                                            width={400}
                                            height={500}
                                            src={item.image}
                                            className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                                            alt="Employee's Image"
                                        />
                                        <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                                            <span className="flex justify-center">
                                                {item.name}
                                            </span>
                                            <span className="flex justify-center text-yellow-500">
                                                {item.role}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
