'use client'
import { useState, useEffect } from 'react'
//import { gsap, ScrollTrigger } from 'gsap'
import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LocationIcon from '@/public/icons/location-icon.png'
import Link from 'next/link'
import LoadingTwo from '../Loading'
import ShareJob from '../shareJobModal'

//gsap.registerPlugin(ScrollTrigger)

export default function ViewId({ id }) {
    const router = useRouter()

    const [job, setJob] = useState()
    const [loading, setLoading] = useState(false)
    const [shareJobModal, setShareJobModal] = useState(false)
    const [linkToShare, setLinkToShare] = useState('')

    const display = id
    useEffect(() => {
        if (display) {
            setLoading(true)
            axios
                .get(`/jobs/${display}`)
                .then(res => {
                    const data = res.data
                    setJob(data)
                    setLoading(false)
                })
                .catch(error => {
                    alert(error)
                    setLoading(false)
                })
        }
    }, [display])

    useEffect(() => {
        if (linkToShare.length > 0) {
            setShareJobModal(true)
        }
    }, [linkToShare])

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            {loading && <LoadingTwo />}
            {shareJobModal && (
                <ShareJob
                    cancel={() => {
                        setShareJobModal(false)
                        setLinkToShare('')
                    }}
                    link={linkToShare}
                />
            )}
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <div className="grid gap-5 h-full lg:w-[900px]">
                    <article>
                        {/* Post header */}
                        {job && (
                            <header className="pt-5 max-[500px]:pt-2 mb-20 max-[500px]:mb-14">
                                {/* Post title */}
                                <p className="font-medium text-black/90 text-2xl md:text-4xl fade-in pb-4">
                                    {job.role}
                                </p>
                                <div className="flex gap-6 items-center pl-20 max-[500px]:pl-5 max-[500px]:gap-5 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={LocationIcon}
                                            alt="Location Icon"
                                            className="w-4"
                                        />
                                        <p className="text-sm font-medium text-black/80">
                                            {job.hire_type}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-semibold text-black/80">
                                            Duration:
                                        </p>
                                        <p className="text-sm font-medium text-black/80">
                                            {job.duration}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-black/80">
                                        {job.range}
                                    </p>
                                </div>
                            </header>
                        )}

                        {job && (
                            <section className="w-full border-b px-8 flex gap-6 mb-16 max-[500px]:mb-14 max-[500px]:px-5">
                                <button className="px-2.5 py-2 w-max text-black/90 text-lg font-medium border-b border-black/90">
                                    Job details
                                </button>
                                {job.application === '' ? (
                                    <Link
                                        href={`/job/apply/${job.display}`}
                                        className="bg-as text-white w-max lg:w-fit py-2 px-4 fade-in">
                                        Apply here
                                    </Link>
                                ) : (
                                    <Link
                                        href={job.application}
                                        className="bg-as text-white w-max lg:w-fit py-2 px-4 fade-in">
                                        Apply here
                                    </Link>
                                )}
                            </section>
                        )}

                        {job && (
                            <section className="w-full h-auto px-8 max-[500px]:px-5">
                                <p className="font-normal text-black/90 text-2xl md:text-3xl fade-in pb-5">
                                    Job description
                                </p>
                                <p
                                    className="h-max text-black/90 text-lg font-medium"
                                    dangerouslySetInnerHTML={{
                                        __html: job.description,
                                    }}></p>
                            </section>
                        )}

                        {job && (
                            <section className="w-full px-8 pt-6 h-max flex gap-5 flex-wrap">
                                <a
                                    href={job.application}
                                    className="bg-as text-white rounded lg:w-fit py-2.5 duration-300 hover:-translate-y-1 px-14">
                                    Apply here
                                </a>

                                <button
                                    onClick={() =>
                                        setLinkToShare(job.application)
                                    }
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
