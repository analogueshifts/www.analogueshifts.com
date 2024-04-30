'use client'
import React, { useState, useEffect } from 'react'
import Authenticated from '@/app/layouts/authenticated-layout'
import Link from 'next/link'
import DashboardLoader from '@/components/application/dashboard-loader'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import IdiomProof from '@/components/application/idiom-proof'
import { useRouter, useSearchParams } from 'next/navigation'
import { fetchJobPosts } from '@/utils/fetch-job-posts'
import { deletePost } from '@/utils/delete-post'
import { toastConfig } from '@/utils/toast-config'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function HirePageDetails() {
    const [user, setUser] = useState(null)
    const pageQuery = useSearchParams().getAll('page')
    const [currentPageInfo, setCurrentPageInfo] = useState({})
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    let allJobsURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/hire/dashboard${
        pageQuery.length ? `?page=${pageQuery[0]}` : ''
    }`

    //Fetch Jobs
    const fetchJobs = () => {
        setLoading(true)

        // Fetch Jobs
        fetchJobPosts(
            allJobsURL,
            user.token,
            response => {
                setData(response.data.data.hires.data)
                setCurrentPageInfo(response.data.data.hires)
                console.log(response)
                setLoading(false)
            },
            error => {
                setLoading(false)
                toast.error(error.message, toastConfig)
            },
        )
    }

    // Delete A Job Post by using the Job Id
    const deleteJobPost = async () => {
        const url =
            process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/' + idToBeDeleted
        setLoading(true)
        deletePost(
            url,
            user.token,
            () => {
                fetchJobs()
                toast.success('Job Deleted Successfully', toastConfig)
                setIdToBeDeleted(null)
                setLoading(false)
            },
            err => {
                toast.error('Error Deleting Job', toastConfig)
                setLoading(false)
            },
        )
    }

    const handleCreatePost = () => {
        Cookies.remove('jobPostData')
        router.push('/tools/hire/create/job-information')
    }

    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }
    }, [])

    useEffect(() => {
        if (user) {
            fetchJobs()
        }
    }, [user])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Hire
                </h2>
            }>
            {loading && <DashboardLoader />}
            <IdiomProof
                title={'Delete Post'}
                action={() => {
                    deleteJobPost()
                    setIdiomModal(false)
                }}
                close={() => {
                    setIdToBeDeleted(null)
                    setIdiomModal(false)
                }}
                description={
                    'Are you sure you want to delete this Post? This  Job Post will not be  visible to Talents anymore. This action cannot be undone.'
                }
                open={idiomModal}
            />

            <button
                onClick={handleCreatePost}
                type="button"
                className="h-10 bg-none mx-auto outline-none rounded-full px-8 flex justify-center items-center gap-3 border border-tremor-background-darkYellow font-normal md:text-base text-sm bg-transparent text-tremor-background-darkYellow">
                Hire Talents
                <i className="fas fa-plus"></i>
            </button>

            <div className="w-full pt-9 flex flex-wrap gap-6 ">
                {data &&
                    data.map(item => {
                        return (
                            <div
                                key={item.id}
                                className="w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between  md:flex-col items-center gap-y-2">
                                <div className="flex gap-5 flex-wrap md:flex-col items-center justify-center md:items-center">
                                    <img
                                        src={
                                            item.hiringOrganization.logo &&
                                            item.hiringOrganization.logo[0]
                                                ? item.hiringOrganization
                                                      .logo[0]
                                                : '/images/jobs/company_logo.JPG'
                                        }
                                        alt="LOGO"
                                        className={`md:w-max md:h-[100px] object-contain w-[156px] h-[100px]`}
                                    />
                                    <div className="flex flex-col gap-1.5 items-center md:items-center">
                                        <p className="text-sm font-normal text-[#B0B0B0]">
                                            {item.hiringOrganization.name}
                                        </p>
                                        <p className="text-xl font-semibold text-black/90">
                                            {item.title}
                                        </p>
                                        <p
                                            className="text-[15px] font-normal text-[#7B7B7B] md:text-center"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    item.description.length >
                                                    100
                                                        ? item.description
                                                              .slice(0, 100)
                                                              .concat('...')
                                                        : item.description,
                                            }}></p>
                                        <div className="flex gap-1.5 flex-wrap">
                                            <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                {item.baseSalary.value.value +
                                                    ' ' +
                                                    item.baseSalary.currency +
                                                    ' ' +
                                                    'Per' +
                                                    ' ' +
                                                    item.baseSalary.value
                                                        .unitText}
                                            </div>
                                            <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                {item.jobLocationType}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mx-auto items-center md:mt-2 md:mx-auto">
                                    <Link
                                        href={`/tools/hire/edit/${item.slug}`}
                                        className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                                        Edit
                                    </Link>
                                    <Link
                                        href={item.apply}
                                        as={item.apply}
                                        className="text-xs font-normal text-black/60">
                                        View
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setIdToBeDeleted(item.id)
                                            setIdiomModal(true)
                                        }}
                                        className="text-xs font-normal text-red-500">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className="w-max mx-auto overflow-x-hidden h-max rounded-full scrollbar-hidden">
                <Pagination className=" w-max">
                    <PaginationContent className="bg-transparent h-full">
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
        </Authenticated>
    )
}
