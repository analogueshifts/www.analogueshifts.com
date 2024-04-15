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

            <div className="w-full h-max pb-3 border border-[#E7E7E7]  bg-white rounded-3xl">
                <div className="bg-[#FEFEFE]   w-full   h-max  py-5 rounded-3xl">
                    <div className="w-full px-4 lg:px-10 mb-5 mt-3 flex-wrap  gap-5 flex justify-between  items-center">
                        <span className="font-semibold md:text-lg text-base text-tremor-brand-boulder950">
                            Your Hires
                        </span>
                        <button
                            onClick={handleCreatePost}
                            type="button"
                            className="h-10 bg-none outline-none rounded-full px-8 flex justify-center items-center gap-3 border border-tremor-background-darkYellow font-normal md:text-base text-sm bg-transparent text-tremor-background-darkYellow">
                            Hire Talents
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead className="h-[72px] w-full bg-[#56669F]/5">
                                <tr className="w-full">
                                    <th className="pl-4 lg:pl-10  max-w-[45%]  font-light text-base text-tremor-brand-activeLink text-start">
                                        Job Title
                                    </th>
                                    <th className="font-light text-base max-w-[35%]  text-tremor-brand-activeLink text-center">
                                        Organization Name
                                    </th>

                                    <th className="pr-4 lg:pr-10 max-w-1/5 font-light text-base text-tremor-brand-activeLink text-end">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="w-full bg-transparent">
                                {data &&
                                    data.map(item => {
                                        return (
                                            <JobColumn
                                                item={item}
                                                key={item.id}
                                                handleDelete={() => {
                                                    setIdToBeDeleted(item.id)
                                                    setIdiomModal(true)
                                                }}
                                            />
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
