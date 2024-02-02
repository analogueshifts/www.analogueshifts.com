'use client'
import { axiosDashboardJob } from '@/app/lib/axios'
import React, { useState, Fragment, useRef, useEffect } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import Link from 'next/link'
import { Menu, Transition, Dialog } from '@headlessui/react'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HirePageDetails() {
    const [user, setUser] = useState(null)
    const [open, setOpen] = useState(null)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchJobs = () => {
        setLoading(true)
        axiosDashboardJob
            .get('/hire/dashboard', {
                headers: {
                    Authorization: 'Bearer ' + user.token,
                },
            })
            .then(res => {
                setLoading(false)
                setData(res.data.hires)
            })
            .catch(error => {
                setLoading(false)
                toast.error('Error Getting Jobs', {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }

    const deleteJobPost = async () => {
        const axios = require('axios')
        const url =
            process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/' + idToBeDeleted
        setLoading(true)
        try {
            await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
            })
            await fetchJobs()
            toast.success('Job Deleted Successfully', {
                position: 'top-right',
                autoClose: 3000,
            })
            setIdToBeDeleted(null)
        } catch (error) {
            console.log(error)
            toast.error('Error Deleting Job', {
                position: 'top-right',
                autoClose: 3000,
            })
            setLoading(false)
        }
    }

    const cancelButtonRef = useRef(null)

    useEffect(() => {
        let storedData = JSON.parse(
            window.localStorage.getItem('analogueshifts'),
        )
        if (storedData) {
            setUser(storedData[0])
        }
    }, [])

    useEffect(() => {
        if (user) {
            fetchJobs()
        }
    }, [user])

    useEffect(() => {
        if (idToBeDeleted) {
            deleteJobPost()
        }
    }, [idToBeDeleted])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire Talents
                </h2>
            }>
            {loading && <DashboardLoader />}
            <Transition.Root show={open !== null} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <i
                                                    className=" text-red-600 fas fa-triangle-exclamation"
                                                    aria-hidden="true"></i>
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900">
                                                    Delete Post
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to
                                                        delete this Post? This
                                                        Job Post won't be
                                                        visible to Talents
                                                        anymore. This action
                                                        cannot be undone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => {
                                                setIdToBeDeleted(open)
                                                setOpen(null)
                                            }}>
                                            Delete
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => {
                                                setIdToBeDeleted(null)
                                                setOpen(null)
                                            }}
                                            ref={cancelButtonRef}>
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="w-full min-w-[300px] min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)] pt-5">
                <div className="flex justify-center">
                    <Link
                        href="/tools/hire/create"
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
                                                                            setOpen(
                                                                                item.id,
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
