'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import Cookies from 'js-cookie'
import { useCompany } from '@/hooks/companies'
import Link from 'next/link'
import Image from 'next/image'
import EmptyBox from '@/public/images/empty-box.png'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function SelectCompany() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const companiesUrl = '/profile/companies'
    const router = useRouter()

    const { getCompanies } = useCompany()

    const getData = async url => {
        Cookies.remove('jobPostData')
        await getCompanies({
            url,
            setData: res => {
                setCurrentPageInfo(res.companies)
                setData(res.companies.data)
            },
            setLoading,
        })
    }

    const handlePrefill = item => {
        Cookies.set(
            'jobPostData',
            JSON.stringify({
                jobLocation: {
                    streetAddress: item?.location || '',
                    addressLocality: '',
                    addressRegion: '',
                    postalCode: '',
                    addressCountry: '',
                    jobLocationType: 'TELECOMMUTE',
                    stateRequirements: [],
                    countryRequirements: [],
                },
                organizationInformation: {
                    organizationLogo: item?.logo || '',
                    organizationName: item?.name || '',
                    organizationUrl: item?.website || '',
                },
            }),
            { expires: 7 },
        )

        router.push('/tools/hire/create/job-information')
    }

    return (
        <Dialog className="">
            <div className="w-full flex gap-3 items-center">
                <DialogTrigger className="">
                    {' '}
                    <div
                        onClick={() => getData(companiesUrl)}
                        className="h-10 bg-none outline-none rounded-full px-8 flex justify-center items-center gap-3 bg-white font-normal md:text-base text-sm bg-transparent text-tremor-background-brown">
                        Hire Talents
                        <i className="fas fa-plus"></i>
                    </div>
                </DialogTrigger>
            </div>
            <DialogContent className="md:w-[70%] w-[90%] duration-300 max-w-[1000px] h-[80dvh] max-h-[80dvh] overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="text-tremor-brand-boulder950">
                        Select Hiring Company
                    </DialogTitle>

                    <div className="w-full flex-wrap gap-5 flex justify-between items-center pt-2">
                        <DialogDescription className="text-tremor-brand-boulder700">
                            Which company are you hiring for? Let us help you
                            prefill the organization details to make your Job
                            Posting Faster. Haven't added a company yet?{' '}
                            <Link href="/manage-companies/create">
                                <b>Click here</b>
                            </Link>{' '}
                            to add one. Or{' '}
                            <Link href="/tools/hire/create/job-information">
                                <b>Click here to create from scratch</b>
                            </Link>
                        </DialogDescription>
                    </div>
                </DialogHeader>

                {/* Content */}
                {loading && (
                    <div className="w-full h-screen absolute top-[-50px] bg-gray-300/30 flex items-center justify-center rounded-md">
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
                <div className="w-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-5">
                    {currentPageInfo && data.length === 0 && (
                        <div className="sm:col-span-2 col-span-1 md:col-span-4 flex items-center flex-col">
                            <Image
                                src={EmptyBox}
                                alt=""
                                className="w-[30%] h-max"
                            />
                        </div>
                    )}
                    {data.map(item => {
                        return (
                            <motion.div
                                key={item.uuid}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => handlePrefill(item)}
                                className="w-full cursor-pointer col-span-1 h-max  sm:min-h-[200px] border-none duration-200 flex flex-wrap pb-5 justify-between  md:flex-col items-center gap-y-2">
                                <div className="flex gap-5 flex-wrap md:flex-col items-center justify-center md:items-center">
                                    <img
                                        src={
                                            item?.logo &&
                                            item?.logo?.trim().length
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
                            </motion.div>
                        )
                    })}
                </div>

                {/* Footer */}
                <DialogFooter className="w-full h-max">
                    {currentPageInfo && (
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem className="cursor-pointer">
                                    <PaginationPrevious
                                        onClick={() => {
                                            if (
                                                currentPageInfo?.prev_page_url
                                            ) {
                                                getData(
                                                    currentPageInfo.prev_page_url,
                                                )
                                            }
                                        }}
                                    />
                                </PaginationItem>

                                {currentPageInfo?.links &&
                                    currentPageInfo.links
                                        .slice(
                                            1,
                                            currentPageInfo.links.length - 1,
                                        )
                                        .map(item => {
                                            return (
                                                <PaginationItem
                                                    className="cursor-pointer"
                                                    key={crypto.randomUUID()}>
                                                    <PaginationLink
                                                        isActive={item.active}
                                                        onClick={() =>
                                                            getData(item.url)
                                                        }>
                                                        {item.label}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            )
                                        })}

                                <PaginationItem className="cursor-pointer">
                                    <PaginationNext
                                        onClick={() => {
                                            if (
                                                currentPageInfo?.next_page_url
                                            ) {
                                                getData(
                                                    currentPageInfo.next_page_url,
                                                )
                                            }
                                        }}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
