'use client'
import React, { useState, Fragment, useRef, useEffect } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import IdiomProof from '@/app/Layouts/IdiomProof'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HirePageDetails() {
    const [user, setUser] = useState(null)
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
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
                console.log(res)
                fetchJobs()
                toast.success('Job Deleted Successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setIdToBeDeleted(null)

                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                toast.error('Error Deleting Job', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    useEffect(() => {
        let storedData = JSON.parse(Cookies.get('analogueshifts'))
        if (storedData) {
            setUser(storedData)
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
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire Talents
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
                    'Are you sure you want to delete this Post? This  Job Post will not be  visible to Talents anymore. This actio cannot be undone.'
                }
                open={idiomModal}
            />

            <div className="w-full min-w-[300px] min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)] pt-5">
                <div className="flex justify-center">
                    <Link
                        href="/tools/hire/create/job-information"
                        className="py-3 w-52 text-white/80 font-semibold text-base bg-tremor-background-lightYellow rounded-xl flex items-center justify-center gap-2">
                        <i className="fas fa-plus"></i> Hire Talents
                    </Link>
                </div>

                <div>
                    <div className="mt-6 border-gray-100">
                        {data &&
                            data.map(item => {
                                return (
                                    <div
                                        key={crypto.randomUUID()}
                                        className="px-4 py-6 flex border-b justify-between items-start">
                                        <div className="w-6/12 justify-between flex flex-wrap gap-x-3 gap-y-1.5">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                                {item.title}
                                            </p>
                                            <p className=" text-sm font-medium leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                                                {item.employmentType}
                                            </p>
                                        </div>
                                        <div className="w-6/12 pr-5 flex justify-end">
                                            <Menu
                                                as="div"
                                                className="relative inline-block text-left">
                                                <div>
                                                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                        <i
                                                            className="fas fa-bars-staggered -mr-1 h-5 w-5 text-gray-400"
                                                            aria-hidden="true"></i>
                                                    </Menu.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95">
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <Link
                                                                        href={`/tools/hire/edit/${item.slug}`}
                                                                        className={classNames(
                                                                            active
                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                : 'text-gray-700',
                                                                            'flex items-center gap-2 px-4 py-2.5 text-sm ',
                                                                        )}>
                                                                        Edit
                                                                        Post{' '}
                                                                        <i className="fas fa-marker text-xs"></i>
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <Link
                                                                        href={`/apply/${item.slug}`}
                                                                        className={classNames(
                                                                            active
                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                : 'text-gray-700',
                                                                            'flex items-center gap-2 px-4 py-2.5 text-sm ',
                                                                        )}>
                                                                        Apply
                                                                        <i className="fas fa-file-signature text-xs"></i>
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <button
                                                                        onClick={() => {
                                                                            setIdToBeDeleted(
                                                                                item.id,
                                                                            )
                                                                            setIdiomModal(
                                                                                true,
                                                                            )
                                                                        }}
                                                                        className={classNames(
                                                                            active
                                                                                ? 'bg-gray-100 text-red-600'
                                                                                : 'text-red-600',
                                                                            'flex items-center w-full gap-2 px-4 py-2.5 text-sm ',
                                                                        )}>
                                                                        Delete
                                                                        Post{' '}
                                                                        <i className="fas fa-trash text-xs"></i>
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
