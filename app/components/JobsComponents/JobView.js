'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import LoadingTwo from '../Loading'
import { toast } from 'react-toastify'
import Image from 'next/image'
import SearchGlass from '@/public/images/jobs/search-glass.png'
import NewsLetterCard from '../NewsLetterCard'
import JobGridTile from './jobGridTile'
import UserRatingStack from './ratingStack'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function JobView() {
    const [jobs, setJobs] = useState([])
    const pageQuery = useSearchParams().getAll('page')
    const [currentPageInfo, setCurrentPageInfo] = useState({})
    const [searchFilter, setSearchFilter] = useState('')
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs${
            pageQuery.length ? `?page=${pageQuery[0]}` : ''
        }`,
    )

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px', //triggers when the div is -50px up
    })

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
                if (response.status === 200) {
                    setJobs(response.data.data.jobs.data)
                    setCurrentPageInfo(response.data.data.jobs)
                    setLoading(false)
                }
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
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
                    <div className="flex w-full relative mt-6 mb-12">
                        <Image
                            src={SearchGlass}
                            alt="Search Glass"
                            className="absolute top-[22px] left-5"
                        />
                        <input
                            placeholder="Search..."
                            value={searchFilter}
                            onChange={e => setSearchFilter(e.target.value)}
                            className="w-full h-[60px] bg-transparent outline-none border placeholder:text-[#D1D1D1] border-[#D2D2D2] text-lg text-tremor-brand-boulder rounded-3xl pr-5 pl-[48px] py-2"
                        />
                    </div>
                    <div className="w-full pt-9 flex flex-wrap gap-6">
                        {jobs.filter(job =>
                            job.title
                                .toLowerCase()
                                .includes(searchFilter.toLowerCase()),
                        ).length === 0 && (
                            <h3 className='text-xl font-semibold text-black/90" mx-auto'>
                                No Job Found
                            </h3>
                        )}
                        {jobs
                            .filter(job =>
                                job.title
                                    .toLowerCase()
                                    .includes(searchFilter.toLowerCase()),
                            )
                            .map((job, index) => {
                                return <JobGridTile job={job} key={index} />
                            })}
                    </div>

                    {/* PAGINATION */}
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={
                                        currentPageInfo?.prev_page_url
                                            ? currentPageInfo.prev_page_url.slice(
                                                  34,
                                              )
                                            : ''
                                    }
                                />
                            </PaginationItem>
                            {currentPageInfo?.links &&
                                currentPageInfo.links
                                    .slice(1, currentPageInfo.links.length - 1)
                                    .map(item => {
                                        return (
                                            <PaginationItem
                                                key={crypto.randomUUID()}>
                                                <PaginationLink
                                                    isActive={item.active}
                                                    href={
                                                        item.url
                                                            ? item.url.slice(34)
                                                            : ''
                                                    }>
                                                    {item.label}
                                                </PaginationLink>
                                            </PaginationItem>
                                        )
                                    })}

                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext
                                    href={
                                        currentPageInfo?.next_page_url
                                            ? currentPageInfo.next_page_url.slice(
                                                  34,
                                              )
                                            : ''
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                {/* Call to action */}
                <aside className="flex mx-auto w-containerWidth max-w-[95%] justify-center pt-9 pb-16">
                    <NewsLetterCard />
                </aside>
            </section>
        </>
    )
}
