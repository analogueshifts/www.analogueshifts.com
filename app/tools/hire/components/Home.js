'use client'
import React, { useState, Fragment, useEffect } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import IdiomProof from '@/app/Layouts/IdiomProof'
import { useRouter } from 'next/navigation'
import JobColumn from './jobColumn'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HirePageDetails() {
    const [user, setUser] = useState(null)
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/dashboard'

    //Fetch Jobs
    const fetchJobs = () => {
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        // Fetch job data from your API
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setData(response.data.hires)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }

    // Delete A Job Post by using the Job Id
    const deleteJobPost = async () => {
        const url =
            process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/' + idToBeDeleted
        const axios = require('axios')
        let config = {
            method: 'DELETE',
            url: url,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        setLoading(true)
        axios
            .request(config)
            .then(res => {
                fetchJobs()
                toast.success('Job Deleted Successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setIdToBeDeleted(null)

                setLoading(false)
            })
            .catch(err => {
                toast.error('Error Deleting Job', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
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
            user={user}
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
        </Authenticated>
    )
}
