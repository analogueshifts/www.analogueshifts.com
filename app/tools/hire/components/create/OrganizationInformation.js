'use client'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './layout'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function OrganizationInformation() {
    const router = useRouter()
    const [organizationName, setOrganizationName] = useState('')
    const [organizationUrl, setOrganizationUrl] = useState('')
    const [organizationLogo, setOrganizationLogo] = useState('')
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const submitButtonRef = useRef()

    useEffect(() => {
        let storedData = Cookies.get('jobPostData')
        if (storedData) {
            if (JSON.parse(storedData).organizationInformation) {
                var organizationInformationData = JSON.parse(storedData)
                    .organizationInformation
                setOrganizationName(
                    organizationInformationData.organizationName,
                )
                setOrganizationUrl(organizationInformationData.organizationUrl)
                setOrganizationLogo(
                    organizationInformationData.organizationLogo,
                )
            }
        } else if (!storedData || !JSON.parse(storedData).jobInformation) {
            router.push('/tools/hire/create/job-information')
        }
    }, [])

    // Check if all inputs have been filled
    useEffect(() => {
        var returnValue = false
        ;[organizationName].forEach(item => {
            if (item === '') {
                returnValue = true
            }
        })
        setAllFieldEnter(returnValue)
    }, [organizationName])

    const submit = e => {
        e.preventDefault()
        let storedData = Cookies.get('jobPostData')
        let organizationInfoData = {
            organizationName: organizationName,
            organizationUrl: organizationUrl,
            organizationLogo: organizationLogo,
        }
        if (storedData) {
            let existingItem = JSON.parse(storedData)
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    ...existingItem,
                    organizationInformation: organizationInfoData,
                }),
            )
        }
        router.push('/tools/hire/create/job-location')
    }

    return (
        <CreateJobLayout>
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION NAME
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The official name of the company or organization
                            offering the job
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            required
                            type="text"
                            value={organizationName}
                            onChange={e => setOrganizationName(e.target.value)}
                            placeholder="e.g “AnalogueShifts”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION WEBSITE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            This refers to the web address (URL) of the
                            organization's official website.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="url"
                            value={organizationUrl}
                            onChange={e => setOrganizationUrl(e.target.value)}
                            placeholder="e.g “www.analogueshifts.com”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION LOGO
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            This is the graphical symbol or emblem representing
                            the organization.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="url"
                            value={organizationLogo}
                            onChange={e => setOrganizationLogo(e.target.value)}
                            placeholder="e.g “www.analogueshifts.com/logo.png”"
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
                    href={'/tools/hire/create/job-information'}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    disabled={allFieldEntered}
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    Next <i className="fas fa-arrow-right "></i>
                </button>
            </div>
        </CreateJobLayout>
    )
}
