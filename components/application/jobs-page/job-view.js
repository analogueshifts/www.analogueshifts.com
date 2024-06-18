'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import LoadingTwo from '@/components/ui/loading-spinner'
import { toast } from 'react-toastify'
import Image from 'next/image'
import SearchGlass from '@/public/images/jobs/search-glass.png'
import NewsLetterCard from '../news-letter-card'
import JobGridTile from './grid-tile'
import UserRatingStack from './rating-stack'

import { fetchJobs, searchJob } from '@/utils/fetch-jobs'
import { toastConfig } from '@/utils/toast-config'
import JobsPagination from './jobs-pagination'
import { errorToast } from '@/utils/error-toast'
import Cookies from 'js-cookie'

export default function JobView() {
    const [jobs, setJobs] = useState([])
    const [user, setUser] = useState(null)
    const pageQuery = useSearchParams().getAll('page')
    const keywordQuery = useSearchParams().getAll('keywords')
    const [currentPageInfo, setCurrentPageInfo] = useState({})
    const [searchFilter, setSearchFilter] = useState(
        keywordQuery[0] ? keywordQuery[0] : '',
    )
    const [loading, setLoading] = useState(false)

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px', //triggers when the div is -50px up
    })

    // Handle Search Job
    const handleSearch = e => {
        e.preventDefault()
        if (searchFilter.length >= 255) {
            toast.error('Search keywords must not exceed 255', toastConfig)
            return
        }
        window.location.href = '/jobs?page=1&keywords=' + searchFilter
    }

    useEffect(() => {
        const authSession = Cookies.get('analogueshifts')
        if (authSession) {
            setUser(JSON.parse(authSession))
        }

        if (keywordQuery[0]) {
            setLoading(true)
            searchJob(
                process.env.NEXT_PUBLIC_BACKEND_URL +
                    `/job/search${pageQuery[0] ? '?page=' + pageQuery[0] : ''}`,
                keywordQuery[0],
                response => {
                    setJobs(response.data.data.jobs.data)
                    setCurrentPageInfo(response.data.data.jobs)
                    setLoading(false)
                },
                error => {
                    setLoading(false)
                    errorToast(
                        'An error Occured',
                        error?.response?.data?.message || error.message || '',
                    )
                },
                'POST',
            )
        } else {
            // Fetch job data from your API
            setLoading(true)
            fetchJobs(
                process.env.NEXT_PUBLIC_BACKEND_URL +
                    `/jobs${pageQuery[0] ? '?page=' + pageQuery[0] : ''}`,
                response => {
                    setJobs(response.data.data.jobs.data)
                    setCurrentPageInfo(response.data.data.jobs)
                    setLoading(false)
                },
                error => {
                    setLoading(false)
                    errorToast(
                        'An error Occured',
                        error?.response?.data?.message || error.message || '',
                    )
                },
            )
        }
    }, [])

    return (
        <>
            {loading && <LoadingTwo />}
            <section
                ref={ref}
                className={`duration-500 w-full ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <section className="w-containerWidth max-w-[95%] mx-auto">
                    <div className="w-full flex flex-col items-center pt-16 md:pt-20 pb-8">
                        <div className="w-[59px] h-[28px] rounded-full flex mb-4 md:mb-8 justify-center items-center bg-tremor-background-darkYellow/10">
                            <p className="text-[10px] font-normal text-tremor-background-darkYellow">
                                Jobs
                            </p>{' '}
                        </div>
                        <h3
                            className={`md:font-bold max-w-[95%] text-center w-max md:text-4xl leading-10 text-xl font-bold mb-4 md:mb-8 text-tremor-brand-madras`}>
                            Jobs of your kind are here for you
                        </h3>
                        <p
                            className={`md:font-medium text-center md:leading-8 w-[870px] max-w-full md:text-base text-sm font-medium mb-4 md:mb-8 text-tremor-brand-boulder`}>
                            Clear and concise job listings, The job search page
                            contains detailed descriptions of the available
                            positions, including the job title, location, and
                            required qualifications.
                        </p>
                        <Link
                            className="h-9 w-[221px] flex justify-center items-center rounded-full border border-[#EAB308]/20 text-[#EAB308] mb-7 md:mb-12 text-sm font-normal"
                            href="/contact">
                            Join Us
                        </Link>
                        <UserRatingStack />
                    </div>
                </section>
            </section>
            {/* job preview section */}
            <section className="w-full">
                <div
                    className={`mx-auto w-containerWidth px-3 lg:px-16 max-w-[95%] mt-5 duration-500`}>
                    <form
                        onSubmit={handleSearch}
                        className="flex w-full relative mt-6 mb-12">
                        <button
                            type="submit"
                            className="absolute top-[22px] right-5 outline-none border-none bg-transparent">
                            <Image
                                src={SearchGlass}
                                alt="Search Glass"
                                className=""
                            />
                        </button>
                        <input
                            placeholder="Search..."
                            value={searchFilter}
                            onChange={e => setSearchFilter(e.target.value)}
                            className="w-full h-[60px] bg-transparent outline-none border placeholder:text-[#D1D1D1] border-[#D2D2D2] text-lg text-tremor-brand-boulder rounded-3xl pl-5 pr-[48px] py-2"
                        />
                    </form>
                    <div className="w-full pt-9 flex flex-wrap gap-6">
                        {jobs.length === 0 && (
                            <h3 className='text-xl font-semibold text-black/90" mx-auto mb-10'>
                                No Job Found
                            </h3>
                        )}
                        {jobs.map((job, index) => {
                            return (
                                <JobGridTile
                                    user={user}
                                    job={job}
                                    key={index}
                                />
                            )
                        })}
                    </div>

                    {/* PAGINATION */}
                    <JobsPagination
                        currentPageInfo={currentPageInfo}
                        keywordQuery={keywordQuery}
                    />
                </div>

                {/* Call to action */}
                <aside className="flex mx-auto w-containerWidth max-w-[95%] justify-center pt-9 pb-16">
                    <NewsLetterCard />
                </aside>
            </section>
        </>
    )
}
