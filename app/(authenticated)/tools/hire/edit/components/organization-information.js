'use client'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './form-layout'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useHire } from '@/hooks/hires'
import InputGroup from '@/app/(authenticated)/manage-companies/create/components/input-group'
import UploadFile from '@/app/(authenticated)/manage-companies/create/components/upload-file'

import Image from 'next/image'
import Spinner from '@/public/images/spinner-white.svg'

export default function OrganizationInformation() {
    const pathname = usePathname()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [organizationName, setOrganizationName] = useState('')
    const [organizationUrl, setOrganizationUrl] = useState('')
    const [logoUrl, setLogoUrl] = useState(null)
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const [editID, setEditId] = useState(0)
    const { updateJob } = useHire()
    const submitButtonRef = useRef()
    let slug = pathname.slice(17, pathname.length).split('/')[0]

    // Prefill The form with the data stored in the Cookies and at the same time, set the user session
    useEffect(() => {
        let storedData = Cookies.get('jobEditingData')
        if (storedData) {
            var organizationInformationData = JSON.parse(storedData)
                .organizationInformation
            if (organizationInformationData) {
                setLogoUrl(organizationInformationData?.organizationLogo || ' ')
                setOrganizationName(
                    organizationInformationData?.organizationName,
                )
                setOrganizationUrl(organizationInformationData?.organizationUrl)
            }
            setEditId(JSON.parse(storedData).editId)
        } else if (
            !storedData ||
            !JSON.parse(storedData).jobInformation ||
            !JSON.parse(storedData).jobDetails ||
            !JSON.parse(storedData).jobLocation
        ) {
            // Take the user to the Job Information for they have not filled the previous pages
            router.push(`/tools/hire/edit/${slug}/job-information`)
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

    // Handle Form Submit
    const submit = e => {
        e.preventDefault()
        let storedData = Cookies.get('jobEditingData')
        let existingItem = JSON.parse(storedData)

        // Arrange The Data Structure
        let data = {
            title: existingItem.jobInformation.title,
            description: existingItem.jobInformation.description,
            identifier: {
                '@type': 'PropertyValue',
                name: existingItem.jobInformation.identifierName,
                value: existingItem.jobInformation.identifierValue,
            },
            validThrough: existingItem.jobInformation.validThrough,
            employmentType: existingItem.jobDetails.employmentType,
            hiringOrganization: {
                '@type': 'Organization',
                name: organizationName,
                sameAs: organizationUrl,
                logo: logoUrl,
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
            jobLocationType: existingItem.jobLocation.jobLocationType,
            applicantLocationRequirements: [
                ...existingItem.jobLocation.stateRequirements,
                ...existingItem.jobLocation.countryRequirements,
            ],
            baseSalary: {
                '@type': 'MonetaryAmount',
                currency: existingItem.jobDetails.salaryCurrency,
                value: {
                    '@type': 'QuantitativeValue',
                    value: existingItem.jobDetails.salaryValue,
                    unitText: existingItem.jobDetails.salaryUnitText,
                },
            },
            apply: existingItem.jobDetails.apply,
            directApply: existingItem.jobDetails.directApply,
            status: existingItem.jobDetails.status,
        }

        // Call the Edit Function with the data as Parameter
        updateJob({ data, editId: editID, router, setLoading })
    }

    return (
        <CreateJobLayout>
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <InputGroup
                    label="ORGANIZATION NAME"
                    placeholder="e.g “AnalogueShifts”"
                    required={true}
                    type={'text'}
                    value={organizationName}
                    setValue={setOrganizationName}
                    description="The official name of the company or organization offering the job"
                />

                <InputGroup
                    label="ORGANIZATION WEBSITE"
                    placeholder="e.g “www.analogueshifts.com”"
                    required={false}
                    type={'url'}
                    value={organizationUrl}
                    setValue={setOrganizationUrl}
                    description="This refers to the web address (URL) of the organization's official website."
                />
                {logoUrl && (
                    <UploadFile
                        fileUrl={logoUrl}
                        setFileUrl={setLogoUrl}
                        title="ORGANIZATION LOGO"
                        description="This is the graphical symbol or emblem representing  the organization."
                    />
                )}

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
                    disabled={allFieldEntered || loading}
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    {loading ? (
                        <>
                            Editing{' '}
                            <Image src={Spinner} alt="" className="w-8" />
                        </>
                    ) : (
                        'Edit Job'
                    )}
                </button>
            </div>
        </CreateJobLayout>
    )
}
