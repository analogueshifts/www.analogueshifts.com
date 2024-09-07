'use client'
import React, { useState, useEffect } from 'react'
import GridTile from './grid-tile'
import IdiomProof from '@/components/application/idiom-proof'
import Curve from '@/public/images/curve.png'
import Image from 'next/image'
import { Plus } from 'lucide-react'

import Spinner from '@/public/images/jobs/spinner.svg'

import { useUser } from '@/contexts/user'
import { useCompany } from '@/hooks/companies'
import { useRouter, useSearchParams } from 'next/navigation'

export default function CompaniesOverview() {
    const pageQuery = useSearchParams().getAll('page')
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    let allCompaniesURL = `/profile/companies${
        pageQuery.length ? `?page=${pageQuery[0]}` : ''
    }`

    const { user } = useUser()
    const { getCompanies, deleteCompany } = useCompany()

    useEffect(() => {
        if (user) {
            getCompanies({
                url: allCompaniesURL,
                setData: res => {
                    setCurrentPageInfo(res.companies)
                    setData(res.companies.data)
                },
                setLoading: setLoading,
            })
        }
    }, [user])

    const handleDelete = async () => {
        try {
            await deleteCompany({
                setLoading,
                setData: res => {
                    setCurrentPageInfo(res.companies)
                    setData(res.companies.data)
                },
                url: allCompaniesURL,
                uuid: idToBeDeleted,
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleFetchMore = async () => {
        try {
            await getCompanies({
                url: currentPageInfo.next_page_url.slice(34),
                setData: res => {
                    setCurrentPageInfo(res.companies)
                    setData(prev => [...prev, ...res.companies.data])
                },
                setLoading: setLoading,
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <IdiomProof
                title={'Delete Company'}
                action={async () => {
                    await handleDelete()
                    setIdToBeDeleted(null)
                    setIdiomModal(false)
                }}
                close={() => {
                    setIdToBeDeleted(null)
                    setIdiomModal(false)
                }}
                description={
                    'Are you sure you want to delete this Company? This action cannot be undone.'
                }
                loading={loading}
                buttonLabel="Delete"
                open={idiomModal}
            />

            <div className="w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="sticky top-0 z-20">
                    <div className="w-full relative h-24 md:h-max overflow-hidden pb-6 md:rounded-2xl bg-tremor-background-brown flex justify-end">
                        <Image src={Curve} alt="" className="absolute z-10" />
                        <div className="w-full flex-wrap gap-y-4 items-center flex justify-center  pt-8 px-5">
                            {/* Hire Button */}
                            <div className="z-20 w-max max-w-full ">
                                <button
                                    onClick={() =>
                                        router.push('/manage-companies/create')
                                    }
                                    type="button"
                                    className="h-10 bg-none outline-none rounded-full px-8 flex justify-center items-center gap-3 bg-white font-normal md:text-base text-sm bg-transparent text-tremor-background-brown">
                                    Add Company
                                    <Plus height={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {data && (
                    <div className="bg-white z-50 md:mt-6 border border-[#e7e7e7] min-h-[calc(100vh-192px)] md:min-h-[200px] tablet:p-5 h-max w-full  p-10 md:rounded-xl flex flex-col">
                        <div className="w-full h-max min-h-full items-center flex flex-col gap-7 large:gap-10">
                            {Array.isArray(data) &&
                                data.map((item, index) => {
                                    return (
                                        <GridTile
                                            index={index}
                                            item={item}
                                            total={data.length}
                                            key={item?.uuid}
                                            handleDelete={() => {
                                                setIdToBeDeleted(item.uuid)
                                                setIdiomModal(true)
                                            }}
                                        />
                                    )
                                })}
                            {currentPageInfo && data.length === 0 && (
                                <div className="w-full mt-10 flex px-5 items-center justify-center">
                                    <h3 className="text-tremor-brand-boulder950">
                                        No Company Added
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
