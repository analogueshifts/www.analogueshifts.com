'use client'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './layout'
import Cookies from 'js-cookie'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import DropdownMenu from '../DropdownMenu'

// Datas
import {
    employmentTypesData,
    salaryCurrencyData,
    salaryUnitTextData,
} from '../data'
import { toast } from 'react-toastify'
import DashboardLoader from '@/app/components/DashboardLoader'

export default function JobDetails() {
    const pathname = usePathname()
    const [user, setUser] = useState(null)
    const [employmentType, setEmploymentType] = useState(employmentTypesData[0])
    const [salaryCurrency, setSalaryCurrency] = useState(salaryCurrencyData[0])
    const [salaryValue, setSalaryValue] = useState('')
    const [salaryUnitText, setSalaryUnitText] = useState(salaryUnitTextData[0])
    const [loading, setLoading] = useState(false)
    const [apply, setApply] = useState('')
    const router = useRouter()
    const submitButtonRef = useRef()
    let slug = pathname.slice(17, pathname.length).split('/')[0]
    const [editID, setEditId] = useState(0)

    useEffect(() => {
        let storedData = Cookies.get('jobEditIngData')
        let authData = JSON.parse(Cookies.get('analogueshifts'))
        if (storedData) {
            if (JSON.parse(storedData).jobDetails) {
                var jobDetailsData = JSON.parse(storedData).jobDetails
                setApply(jobDetailsData.apply)
                setEmploymentType(
                    employmentTypesData.filter(
                        item => item.name === jobDetailsData.employmentType,
                    )[0],
                )
                setSalaryCurrency(
                    salaryCurrencyData.filter(
                        item => item.name === jobDetailsData.salaryCurrency,
                    )[0],
                )
                setSalaryValue(jobDetailsData.salaryValue)
                setSalaryUnitText(
                    salaryUnitTextData.filter(
                        item => item.name === jobDetailsData.salaryUnitText,
                    )[0],
                )
                setEditId(JSON.parse(storedData).editId)
            }
        } else if (
            !storedData ||
            !JSON.parse(storedData).jobInformation ||
            !JSON.parse(storedData).organizationInformation ||
            !JSON.parse(storedData).jobLocation
        ) {
            router.push('/tools/hire/create/job-information')
        }

        if (authData) {
            setUser(authData)
        }
    }, [])

    // Make request
    const editJob = data => {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/' + editID
        const axios = require('axios')
        let config = {
            method: 'PUT',
            url: url,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
            data: data,
        }

        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setLoading(false)
                toast.success('Your Post Has Been Edited Successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                router.push('/tools/hire')
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    const submit = e => {
        e.preventDefault()
        let storedData = Cookies.get('jobEditIngData')
        let jobDetailsData = {
            employmentType: employmentType,
            apply: apply,
            salaryCurrency: salaryCurrency,
            salaryValue: salaryValue,
            salaryUnitText: salaryUnitText,
        }

        let existingItem = JSON.parse(storedData)
        let data = {
            title: existingItem.jobInformation.title,
            description: existingItem.jobInformation.description,
            identifier: {
                '@type': 'PropertyValue',
                name: existingItem.jobInformation.identifierName,
                value: existingItem.jobInformation.identifierValue,
            },
            datePosted: existingItem.jobInformation.datePosted,
            validThrough: existingItem.jobInformation.validThrough,
            employmentType: jobDetailsData.employmentType.name,
            hiringOrganization: {
                '@type': 'Organization',
                name: existingItem.organizationInformation.organizationName,
                sameAs: existingItem.organizationInformation.organizationUrl,
                logo: existingItem.organizationInformation.organizationLogo,
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: existingItem.jobLocation.streetAddress,
                    addressLocality: existingItem.jobLocation.addressLocality,
                    addressRegion: existingItem.jobLocation.addressRegion,
                    postalCode: existingItem.jobLocation.postalCode,
                    addressCountry: existingItem.jobLocation.addressCountry,
                },
            },
            jobLocationType: existingItem.jobLocation.jobLocationType.name,
            applicantLocationRequirements: [
                ...existingItem.jobLocation.stateRequirements,
                ...existingItem.jobLocation.countryRequirements,
            ],
            baseSalary: {
                '@type': 'MonetaryAmount',
                currency: jobDetailsData.salaryCurrency.name,
                value: {
                    '@type': 'QuantitativeValue',
                    value: jobDetailsData.salaryValue,
                    unitText: jobDetailsData.salaryUnitText.name,
                },
            },
            apply: jobDetailsData.apply,
        }
        editJob(data)
    }

    return (
        <CreateJobLayout>
            {loading && <DashboardLoader />}
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            EMPLOYMENT TYPE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            Specifies the type of employment offered for the
                            job.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <DropdownMenu
                            value={employmentType}
                            onChange={setEmploymentType}
                            list={employmentTypesData}
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            SALARY CURRENCY
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The currency in which the salary is denoted, such as
                            USD, EUR, or GBP.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <DropdownMenu
                            value={salaryCurrency}
                            onChange={setSalaryCurrency}
                            list={salaryCurrencyData}
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            SALARY VALUE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The numerical value representing the salary amount
                            offered for the job.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            required
                            type="text"
                            value={salaryValue}
                            onChange={e => setSalaryValue(e.target.value)}
                            placeholder="e.g “2000”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            SALARY UNIT TEXT
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            Indicates the time unit associated with the salary
                            value.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <DropdownMenu
                            value={salaryUnitText}
                            onChange={setSalaryUnitText}
                            list={salaryUnitTextData}
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            APPLY
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The Job Application URL
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            required
                            type="text"
                            value={apply}
                            onChange={e => setApply(e.target.value)}
                            placeholder="e.g “https://www.analogueshifts.com”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>

                <input
                    ref={submitButtonRef}
                    type="submit"
                    className="-z-10 opacity-0"
                />
            </form>
            <div className="flex w-full justify-between">
                <Link
                    href={`/tools/hire/edit/${slug}/job-location`}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none`}>
                    Edit Job
                </button>
            </div>
        </CreateJobLayout>
    )
}
