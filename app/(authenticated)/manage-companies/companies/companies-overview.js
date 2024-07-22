'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import IdiomProof from '@/components/application/idiom-proof'
import Curve from '@/public/images/curve.png'
import Image from 'next/image'
import SkeletonCard from '@/components/application/skeleton-card'
import DashboardLoader from '@/components/application/dashboard-loader'
import CompaniesPagination from './pagination'

import { useUser } from '@/contexts/user'
import { useCompany } from '@/hooks/companies'
import { useRouter, useSearchParams } from 'next/navigation'

export default function CompaniesOverview() {
    const pageQuery = useSearchParams().getAll('page')
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [data, setData] = useState([])
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
                setLoading: setDeleteLoading,
                setData: res => {
                    setCurrentPageInfo(res.companies)
                    setData(res.companies.data)
                },
                url: allCompaniesURL,
                uuid: idToBeDeleted,
            })
            setIdToBeDeleted(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <IdiomProof
                title={'Delete Company'}
                action={() => {
                    handleDelete()
                    setIdiomModal(false)
                }}
                close={() => {
                    setIdToBeDeleted(null)
                    setIdiomModal(false)
                }}
                description={
                    'Are you sure you want to delete this Company? This action cannot be undone.'
                }
                open={idiomModal}
            />
            {deleteLoading && <DashboardLoader />}
            <div className="w-full md:px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="sticky top-0 z-20">
                    <div className="w-full relative h-60 md:h-max overflow-hidden pb-6 md:rounded-2xl bg-tremor-background-brown flex justify-end">
                        <Image src={Curve} alt="" className="absolute z-10" />
                        <div className="w-full flex-wrap gap-y-4 items-center flex justify-center  pt-8 px-5">
                            {/* Hire Button */}
                            <div className="z-20 w-max max-w-full min-w-[50%]">
                                <button
                                    onClick={() =>
                                        router.push('/manage-companies/create')
                                    }
                                    type="button"
                                    className="h-10 bg-none outline-none rounded-full px-8 flex justify-center items-center gap-3 bg-white font-normal md:text-base text-sm bg-transparent text-tremor-background-brown">
                                    Add Company
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>

                            {/* Pagination */}
                            <div className="z-20 w-max flex justify-end max-w-full min-w-[50%]">
                                <CompaniesPagination
                                    currentPageInfo={currentPageInfo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white z-50 md:mt-6 border border-[#e7e7e7] min-h-[calc(100vh-192px)] md:min-h-[200px] py-5 h-max w-full px-5 pb-5 md:rounded-xl flex flex-col">
                    {loading ? (
                        <div className="w-full h-max min-h-[200px] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
                        </div>
                    ) : (
                        <div className="w-full h-max min-h-full flex flex-wrap gap-6">
                            {data &&
                                Array.isArray(data) &&
                                data.map(item => {
                                    return (
                                        <div
                                            key={item.uuid}
                                            className="w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between  md:flex-col items-center gap-y-2">
                                            <div className="flex gap-5 flex-wrap md:flex-col items-center justify-center md:items-center">
                                                <img
                                                    src={
                                                        item?.logo &&
                                                        item?.logo?.trim()
                                                            .length
                                                            ? item.logo
                                                            : '/images/jobs/company_logo.JPG'
                                                    }
                                                    alt="LOGO"
                                                    className={`md:w-max md:h-[100px] object-contain w-[156px] h-[100px]`}
                                                />
                                                <div className="flex flex-col gap-1.5 items-center md:items-center">
                                                    <p className="text-sm font-normal text-[#B0B0B0]">
                                                        {item?.name}
                                                    </p>
                                                    <p className="text-xl font-semibold text-black/90">
                                                        {item?.industry}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mx-auto items-center md:mt-2 md:mx-auto">
                                                <Link
                                                    href={`/manage-companies/edit/${item?.uuid}`}
                                                    className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                                                    Edit
                                                </Link>
                                                <a
                                                    href={item?.website || ''}
                                                    className="text-xs font-normal text-black/60">
                                                    Visit Website
                                                </a>
                                                <button
                                                    onClick={() => {
                                                        setIdToBeDeleted(
                                                            item.uuid,
                                                        )
                                                        setIdiomModal(true)
                                                    }}
                                                    className="text-xs font-normal text-red-500">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            {currentPageInfo && data.length === 0 && (
                                <div className="w-full mt-10 flex px-5 items-center justify-center">
                                    <h3 className="text-tremor-brand-boulder950">
                                        No Company Added
                                    </h3>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </>
    )
}
