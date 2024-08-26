'use client'
import React, { useState, useEffect } from 'react'
import JobGridTile from './job-grid-tile'
import IdiomProof from '@/components/application/idiom-proof'
import Image from 'next/image'
import { useUser } from '@/contexts/user'
import { useHire } from '@/hooks/hires'
import SelectCompany from './select-company'

import Spinner from '@/public/images/jobs/spinner.svg'
import Curve from '@/public/images/curve.png'

export default function HirePageDetails() {
    const { user } = useUser()
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const { deleteJob, fetchJobs } = useHire()

    const deleteJobPost = async () => {
        try {
            await deleteJob({
                setLoading,
                id: idToBeDeleted,
                getJobsUrl: '/hire/dashboard',
                setData,
                setCurrentPageInfo,
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleFetchMore = async () => {
        try {
            await fetchJobs({
                setLoading,
                setCurrentPageInfo,
                setData: data => {
                    setData(prev => [...prev, ...data])
                },
                url: currentPageInfo.next_page_url.slice(34),
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            setLoading(true)
            fetchJobs({
                setLoading,
                setCurrentPageInfo,
                setData,
                url: '/hire/dashboard',
            })
        }
    }, [user])

    return (
        <>
            <IdiomProof
                title={'Delete Post'}
                action={async () => {
                    await deleteJobPost()
                    setIdiomModal(false)
                    setIdToBeDeleted(null)
                }}
                close={() => {
                    setIdToBeDeleted(null)
                    setIdiomModal(false)
                }}
                description={
                    'Are you sure you want to delete this Post? This  Job Post will not be  visible to Talents anymore. This action cannot be undone.'
                }
                open={idiomModal}
                loading={loading}
                buttonLabel="Delete"
            />

            <div className="w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="sticky top-0 z-20">
                    <div className="w-full relative overflow-hidden h-60 md:h-max pb-6 md:rounded-2xl bg-tremor-background-brown flex justify-end">
                        <Image src={Curve} alt="" className="absolute z-10" />
                        <div className="w-full flex-wrap gap-y-4 items-center flex justify-center  pt-8 px-5">
                            {/* Hire Button */}
                            <div className="z-20 w-max max-w-full">
                                <SelectCompany />
                            </div>
                        </div>
                    </div>
                </div>
                {data && (
                    <div className="bg-white z-50 md:mt-6 border border-[#e7e7e7] min-h-[calc(100vh-192px)] md:min-h-[200px] p-10 tablet:p-5 h-max w-full md:rounded-xl flex flex-col">
                        <div className="w-full h-max min-h-full items-center flex flex-col gap-7 large:gap-10">
                            {data &&
                                data.map((item, index) => {
                                    return (
                                        <JobGridTile
                                            index={index}
                                            item={item}
                                            total={data.length}
                                            key={item.uuid}
                                            handleDelete={() => {
                                                setIdToBeDeleted(item.id)
                                                setIdiomModal(true)
                                            }}
                                        />
                                    )
                                })}
                            {currentPageInfo && data.length === 0 && (
                                <div className="w-full mt-10 flex px-5 items-center justify-center">
                                    <h3 className="text-tremor-brand-boulder950">
                                        No Job Found
                                    </h3>
                                </div>
                            )}
                            {currentPageInfo?.next_page_url && (
                                <button
                                    onClick={handleFetchMore}
                                    disabled={loading}
                                    className={`outline-none mx-auto bg-transparent text-tremor-background-darkYellow text-base large:text-xl font-medium pb-0.5 large:pb-2 border-b mt-3 ${
                                        loading
                                            ? 'border-transparent'
                                            : 'border-b-tremor-background-darkYellow'
                                    }`}>
                                    {loading ? (
                                        <Image
                                            src={Spinner}
                                            alt=""
                                            className="h-max w-10"
                                        />
                                    ) : (
                                        'View More'
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
