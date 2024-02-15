'use client'
import { useEffect, useState } from 'react'
import axios from '@/app/lib/axios'
import Link from 'next/link'
//import { gsap, ScrollTrigger } from 'gsap'
import Image from 'next/image'
import Job3 from '@/public/images/jobs/3.jpg'
import { useInView } from 'react-intersection-observer'
import LoadingTwo from '../Loading'
import { toast } from 'react-toastify'

export default function JobView() {
    const [jobs, setJobs] = useState([])
    const [searchFilter, setSearchFilter] = useState('')
    const [loading, setLoading] = useState(false)

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px', //triggers when the div is -50px up
    })

    useEffect(() => {
        setLoading(true)
        // Fetch job data from your API
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/jobs', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            credentials: 'same-origin',
        })
            .then(res => {
                // const data = res.data.jobs
                // setJobs(data)
                setLoading(false)
                console.log(res.json())
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })

        // Initialize GSAP and ScrollTrigger
        // gsap.registerPlugin(ScrollTrigger)

        // Add GSAP animation to the "Head" card
        /*gsap.from('.animate-fade-in-head', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.animate-fade-in-head',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
        })*/

        // Animation for the job description section
        /*gsap.from('#intro', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })*/

        // Add GSAP animation to the job cards as they enter the viewport
        /* gsap.from('.animate-fade-in-job', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.animate-fade-in-job',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
        })*/
    }, [])

    return (
        <>
            {loading && <LoadingTwo />}
            <section
                ref={ref}
                className={`duration-500 ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <section className="">
                    <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                        {/* <h1 id="title" className="font-bold text-2xl mb-9">
                            AnalogueShifts Jobs
                        </h1> */}
                        <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                            <div className="grid lg:grid-cols-12">
                                <div className="grid lg:col-span-6 p-7 lg:p-14">
                                    <div id="intro" className="grid gap-5">
                                        <div className="flex justify-start mb-2">
                                            <span className="bg-yellow-500 text-white text-xs font-bold rounded-full py-2 px-5">
                                                Jobs
                                            </span>
                                        </div>
                                        <h1
                                            id="title"
                                            className="text-3xl md:text-4xl font-bold lg:leading-[50px] tracking-normal">
                                            Jobs of your kind are here for you
                                        </h1>
                                        <h2 className="">
                                            Clear and concise job listings, The
                                            job search page contains detailed
                                            descriptions of the available
                                            positions, including the job title,
                                            location, and required
                                            qualifications.
                                        </h2>
                                    </div>
                                </div>
                                <div className="grid lg:col-span-6">
                                    <Image
                                        className="object-cover h-full w-full"
                                        src={Job3}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* job preview section */}
            <section className="">
                <div
                    className={`container mx-auto py-5 px-3 md:px-9 xl:px-20 duration-500`}>
                    <div className="flex w-full py-5">
                        <input
                            placeholder="Search Jobs"
                            value={searchFilter}
                            onChange={e => setSearchFilter(e.target.value)}
                            className="w-full outline-none border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>

                    {jobs[0] && (
                        <div className="w-full pt-9 flex flex-col gap-6">
                            {jobs
                                .filter(job =>
                                    job.title
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase()),
                                )
                                .map((job, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="w-full border-b flex flex-wrap pb-5 justify-between items-center gap-y-2">
                                            <div className="flex gap-2 flex-wrap items-center">
                                                <img
                                                    src={
                                                        job.hiringOrganization
                                                            .logo
                                                            ? job
                                                                  .hiringOrganization
                                                                  .logo
                                                            : 'https://via.placeholder.com/80'
                                                    }
                                                    alt="LOGO"
                                                    className="w-20 h-20"
                                                />
                                                <div className="flex flex-col gap-1.5">
                                                    <p className="text-xs font-normal text-black/40">
                                                        {
                                                            job
                                                                .hiringOrganization
                                                                .name
                                                        }
                                                    </p>
                                                    <p className="text-sm font-semibold text-black/80">
                                                        {job.title}
                                                    </p>
                                                    <div className="flex gap-1.5 flex-wrap">
                                                        <div className="px-5 bg-[#f2f2f2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                            {job.baseSalary
                                                                .value.value +
                                                                ' ' +
                                                                job.baseSalary
                                                                    .currency +
                                                                ' ' +
                                                                'Per' +
                                                                ' ' +
                                                                job.baseSalary
                                                                    .value
                                                                    .unitText}
                                                        </div>
                                                        <div className="px-5 bg-[#f2f2f2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                            {
                                                                job.jobLocationType
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <Link
                                                    href={job.apply}
                                                    className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                                                    Apply
                                                </Link>
                                                <Link
                                                    href={`/jobs/${job.slug}`}
                                                    as={`/jobs/${job.slug}`}
                                                    className="text-xs font-normal text-black/60">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    )}

                    {/* Call to action */}
                    <aside className="flex justify-center py-16">
                        <div className="bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg">
                            <div className="grid gap-5 text-center lg:text-start">
                                <div className="text-2xl font-bold text-white">
                                    New products, delivered to you.
                                </div>
                                <div className="text-gray-100 text-sm">
                                    Sign up for our Jobsletter for the latest
                                    updates.
                                </div>
                            </div>
                            <div className="grid gap-5 text-center lg:text-start">
                                <form className="flex mb-2 min-w-full">
                                    <input
                                        className="text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md"
                                        type="email"
                                        placeholder="Email address..."
                                        aria-label="Email address..."
                                        aria-describedby="button-Jobsletter"
                                    />
                                    <button
                                        className="bg-transparent text-sm border outline-none w-full py-2 px-5 rounded-r-md"
                                        type="button">
                                        Sign up
                                    </button>
                                </form>
                                <div className="text-gray-100 text-sm">
                                    We care about privacy, and will never share
                                    your data.
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}
