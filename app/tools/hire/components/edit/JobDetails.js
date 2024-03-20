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

export default function JobDetails() {
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const pathname = usePathname()
    const [employmentType, setEmploymentType] = useState(employmentTypesData[0])
    const [salaryCurrency, setSalaryCurrency] = useState(salaryCurrencyData[0])
    const [salaryValue, setSalaryValue] = useState('')
    const [salaryUnitText, setSalaryUnitText] = useState(salaryUnitTextData[0])
    const [apply, setApply] = useState('')
    const router = useRouter()
    const submitButtonRef = useRef()
    let slug = pathname.slice(17, pathname.length).split('/')[0]

    // Check if all inputs have been filled
    useEffect(() => {
        var returnValue = false
        ;[salaryValue, apply].forEach(item => {
            if (item === '') {
                returnValue = true
            }
        })
        setAllFieldEnter(returnValue)
    }, [salaryValue, apply])

    useEffect(() => {
        let storedData = Cookies.get('jobEditingData')
        if (storedData) {
            if (JSON.parse(storedData).jobDetails) {
                var jobDetailsData = JSON.parse(storedData).jobDetails
                setApply(jobDetailsData.apply)
                setEmploymentType(jobDetailsData.employmentType)
                setSalaryCurrency(jobDetailsData.salaryCurrency)
                setSalaryValue(jobDetailsData.salaryValue)
                setSalaryUnitText(jobDetailsData.salaryUnitText)
            }
        } else if (!storedData || !JSON.parse(storedData).jobInformation) {
            router.push('/tools/hire/create/job-information')
        }
    }, [])

    const submit = e => {
        e.preventDefault()
        if (isNaN(salaryValue)) {
            toast.error('Error! Salary value must be a valid number', {
                position: 'top-right',
                autoClose: 3000,
            })
            return
        }
        let storedData = Cookies.get('jobEditIngData')

        if (storedData) {
            let existingItem = JSON.parse(storedData)
            Cookies.set(
                'jobEditingData',
                JSON.stringify({
                    ...existingItem,
                    jobDetails: {
                        employmentType: employmentType,
                        apply: apply,
                        salaryCurrency: salaryCurrency,
                        salaryValue: salaryValue,
                        salaryUnitText: salaryUnitText,
                    },
                }),
            )
        }
        router.push(`/tools/hire/edit/${slug}/job-location`)
    }

    return (
        <CreateJobLayout>
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
                    href={`/tools/hire/edit/${slug}/job-information`}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    disabled={allFieldEntered}
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    Next <i className="fas fa-arrow-right "></i>
                </button>
            </div>
        </CreateJobLayout>
    )
}
