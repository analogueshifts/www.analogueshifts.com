'use client'
import { useState, useEffect } from 'react'
//import { gsap, ScrollTrigger } from 'gsap'
import axios from '@/app/lib/axios'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import LocationIcon from '@/public/icons/location-icon.png'
import Link from 'next/link'
import LoadingTwo from '../Loading'
import ShareJob from '../shareJobModal'
import { toast } from 'react-toastify'

//gsap.registerPlugin(ScrollTrigger)

export default function ViewId({ id }) {
    const router = useRouter()
    const pathname = usePathname()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/job/' + id
    useEffect(() => {
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
        }
        // Fetch job data from your API
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                let filteredData = response.data
                setJob(filteredData)
                console.log(filteredData)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }, [id])

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            {loading && <LoadingTwo />}

            <div className="container mx-auto pt-5 pb-14 px-3 md:px-9 xl:px-28">
                <div className="grid gap-5 h-full lg:w-[900px]">
                    <article>
                        {/* Post header */}
                        {job && (
                            <header className="pt-5 max-[500px]:pt-2 mb-12 max-[500px]:mb-8">
                                {/* Company */}

                                <div className="w-full flex items-start mb-7 gap-3">
                                    <a href={job.hiringOrganization.sameAs}>
                                        <img
                                            src={
                                                job.hiringOrganization.logo &&
                                                job.hiringOrganization.logo[0]
                                                    ? job.hiringOrganization
                                                          .logo[0]
                                                    : '/images/jobs/company_logo.JPG'
                                            }
                                            alt="LOGO"
                                            className="w-28 h-28 object-contain"
                                        />
                                    </a>
                                </div>

                                {/* Post title */}
                                <h1 className="font-medium text-tremor-brand-boulder950 text-xl md:text-2xl fade-in pb-4">
                                    {job.title} -{' '}
                                    <span className="md:text-xl text-lg text-tremor-brand-boulder500">
                                        {job.hiringOrganization.name}
                                    </span>
                                </h1>
                                <div className="flex gap-6 items-center pl-5 max-[500px]:gap-5 flex-wrap">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Image
                                            src={LocationIcon}
                                            alt="Location Icon"
                                            className="w-4"
                                        />
                                        <p className="text-sm font-medium text-black/80">
                                            {job.jobLocationType}
                                        </p>
                                        {job.applicantLocationRequirements[0] &&
                                            job.applicantLocationRequirements.map(
                                                item => {
                                                    return (
                                                        <p
                                                            key={crypto.randomUUID()}
                                                            className="text-sm font-medium text-black/80 ml-2">
                                                            • {item.name}
                                                        </p>
                                                    )
                                                },
                                            )}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-semibold text-black/80">
                                            Valid Through:
                                        </p>
                                        <p className="text-sm font-medium text-black/80">
                                            {job.validThrough}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-semibold text-black/80">
                                            Employment Type:
                                        </p>
                                        <p className="text-sm font-medium text-black/80">
                                            {job.employmentType}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-black/80">
                                        {job.baseSalary.value.value +
                                            ' ' +
                                            job.baseSalary.currency +
                                            ' ' +
                                            'Per' +
                                            ' ' +
                                            job.baseSalary.value.unitText}
                                    </p>
                                </div>
                            </header>
                        )}

                        {job && (
                            <section className="w-full border-b px-8 flex gap-6 mb-16 max-[500px]:mb-14 max-[500px]:px-5">
                                <button className="px-2.5 py-2 w-max text-black/90 text-lg font-medium border-b border-black/90">
                                    Job details
                                </button>
                                {job.apply === '' ? (
                                    <Link
                                        href={`/job/apply/${job.slug}`}
                                        className="bg-as text-white w-max lg:w-fit py-2 px-4 fade-in">
                                        Apply here
                                    </Link>
                                ) : (
                                    <Link
                                        href={job.apply}
                                        className="bg-as text-white w-max lg:w-fit py-2 px-4 fade-in">
                                        Apply here
                                    </Link>
                                )}
                            </section>
                        )}

                        {job && (
                            <section className="w-full h-auto ">
                                <p className="font-medium text-tremor-brand-boulder950 text-xl md:text-2xl fade-in pb-5">
                                    Job description
                                </p>
                                <div className="pl-5">
                                    <span
                                        className="h-max text-tremor-brand-boulder900 text-base font-normal"
                                        dangerouslySetInnerHTML={{
                                            __html: job.description,
                                        }}
                                    />
                                </div>
                            </section>
                        )}

                        {job && (
                            <section className="w-full pt-6 h-max flex gap-5 flex-wrap">
                                <a
                                    href={job.apply}
                                    className="bg-as text-white rounded lg:w-fit py-2.5 duration-300 hover:-translate-y-1 px-14">
                                    Apply here
                                </a>

                                <button
                                    onClick={async () => {
                                        if (navigator.share) {
                                            try {
                                                await navigator.share({
                                                    title: job.title,
                                                    text: '',
                                                    url:
                                                        'https://www.analogueshifts.com' +
                                                        pathname,
                                                })
                                            } catch (error) {
                                                toast.error(
                                                    'Error sharing content:',
                                                    {
                                                        position: 'top-right',
                                                        autoClose: 3000,
                                                    },
                                                )
                                            }
                                        } else {
                                            toast.error(
                                                'Sharing not supported on this device.',
                                                {
                                                    position: 'top-right',
                                                    autoClose: 3000,
                                                },
                                            )
                                        }
                                    }}
                                    className="border-as border text-as duration-300 hover:-translate-y-1 rounded lg:w-fit py-2.5 px-14">
                                    Share Job
                                </button>
                            </section>
                        )}
                    </article>
                </div>
            </div>
        </>
    )
}
