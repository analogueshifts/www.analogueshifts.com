'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LoadingTwo from '@/components/ui/loading-spinner'
import JobApplicationCard from './job-application-card'
import Tag from './tag'
import Link from 'next/link'
import { errorToast } from '@/utils/error-toast'
import Cookies from 'js-cookie'

export default function ViewId({ id }) {
    const router = useRouter()
    const [job, setJob] = useState(null)
    const [otherJobs, setOtherJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    const fetchJob = async () => {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/job/' + id
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
        }
        // Fetch job data from your API
        try {
            let response = await axios.request(config)
            let filteredData = response.data.data.job
            setJob(filteredData)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Error Fetching Job',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    const fetchOtherJobs = async () => {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/jobs'
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
        }
        try {
            let response = await axios.request(config)
            setOtherJobs(response.data.data.jobs.data.slice(0, 5))
        } catch (error) {
            setLoading(false)
            errorToast(
                'Error Fetching Related Jobs',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    const getData = async () => {
        setLoading(true)
        try {
            await fetchJob()
            await fetchOtherJobs()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Error Fetching Job',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    useEffect(() => {
        const authSession = Cookies.get('analogueshifts')
        if (authSession) {
            setUser(JSON.parse(authSession))
        }
        getData()
    }, [id])

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            {loading && <LoadingTwo />}
            <section className="w-full pt-7 pb-14 container mx-auto px-3 md:px-9 xl:px-28 flex-col xl:flex-row flex justify-between">
                {/* Job Description Section */}
                <div className="xl:w-jobDescriptionSection">
                    <div className="w-full flex items-start gap-6 mb-5">
                        <Image
                            src={
                                job?.hiringOrganization?.logo &&
                                job.hiringOrganization.logo
                                    ? job.hiringOrganization.logo
                                    : '/images/jobs/company_logo.JPG'
                            }
                            width={48}
                            height={48}
                            className="rounded"
                            alt="LOGO"
                        />
                        <div className="min-h-12 flex flex-col justify-between">
                            <h1 className="md:text-2xl text-lg text-black font-semibold">
                                {job?.title}
                            </h1>
                            <span className="text-tremor-brand-boulder900 text-base font-medium">
                                {job?.hiringOrganization?.name}
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex gap-2 mb-8 flex-wrap">
                        {job?.jobLocationType && (
                            <Tag text={job.jobLocationType} />
                        )}

                        {job?.applicantLocationRequirements && (
                            <>
                                {' '}
                                <p className="text-tremor-brand-boulder900 flex items-center text-sm font-medium gap-2">
                                    Location Requirements{' '}
                                    <i className="fas fa-arrow-right text-xs"></i>
                                </p>
                                {job.applicantLocationRequirements.map(item => {
                                    return (
                                        <p
                                            key={crypto.randomUUID()}
                                            className="text-sm font-medium text-black/80 ">
                                            {item.name} •
                                        </p>
                                    )
                                })}
                            </>
                        )}
                        <p className="text-tremor-brand-boulder900 flex items-center text-sm font-medium gap-2">
                            Salary{' '}
                            <i className="fas fa-arrow-right text-xs"></i>
                        </p>
                        {job?.baseSalary && (
                            <Tag
                                text={
                                    job?.baseSalary.value.value +
                                    ' ' +
                                    `${
                                        job?.baseSalary.currency
                                            ? job.baseSalary.currency + ' '
                                            : ''
                                    }` +
                                    `${
                                        job?.baseSalary.value.unitText
                                            ? 'Per ' +
                                              job.baseSalary.value.unitText
                                            : ''
                                    }`
                                }
                            />
                        )}

                        {job?.validThrough && (
                            <>
                                <p className="text-tremor-brand-boulder900 flex items-center text-sm font-medium gap-2">
                                    Valid Through{' '}
                                    <i className="fas fa-arrow-right text-xs"></i>
                                </p>
                                <Tag text={job.validThrough} />
                            </>
                        )}
                        {job?.employmentType && (
                            <>
                                <p className="text-tremor-brand-boulder900 flex items-center text-sm font-medium gap-2">
                                    Employment Type{' '}
                                    <i className="fas fa-arrow-right text-xs"></i>
                                </p>
                                <Tag text={job.employmentType} />
                            </>
                        )}
                    </div>

                    <h3 className="text-black font-bold text-base leading-8 mb-3 mt-8">
                        {'About the Job'}
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: job?.description,
                        }}></div>

                    <div className="w-full my-8 hidden xl:block">
                        <JobApplicationCard
                            user={user}
                            applicationUrl={job?.apply ? job.apply : ''}
                            row={true}
                            jobTitle={job?.title ? job.title : ''}
                        />
                    </div>
                </div>

                <aside className="xl:w-asideSection xl:py-2.5 py-8">
                    <JobApplicationCard
                        user={user}
                        jobTitle={job?.title ? job.title : ''}
                        applicationUrl={job?.apply ? job.apply : ''}
                    />

                    <h2 className="mt-12 text-xl font-bold text-black mb-4">
                        Other jobs matched with your skills
                    </h2>

                    <div className="w-full flex flex-col gap-2">
                        {otherJobs.map(item => {
                            return (
                                <Link
                                    href="#"
                                    key={crypto.randomUUID()}
                                    className="w-full h-max rounded-sm border py-4 px-6">
                                    <div className="w-full items-start flex gap-4">
                                        <Image
                                            src={
                                                item?.hiringOrganization?.logo
                                                    ? item.hiringOrganization
                                                          .logo
                                                    : '/images/jobs/company_logo.JPG'
                                            }
                                            width={48}
                                            height={48}
                                            className="rounded"
                                            alt="LOGO"
                                        />
                                        <div className="min-h-12 flex flex-col justify-between">
                                            <h3 className="text-base text-black font-semibold">
                                                {item?.title}
                                            </h3>
                                            <span className="text-black/70 text-sm font-normal">
                                                {item?.hiringOrganization?.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full flex gap-2 sm:pl-16 flex-wrap mt-4">
                                        {item?.jobLocationType && (
                                            <Tag text={item.jobLocationType} />
                                        )}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </aside>
            </section>
        </>
    )
}
