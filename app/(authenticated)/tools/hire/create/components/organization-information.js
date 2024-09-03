'use client'
import { useHire } from '@/hooks/hires'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './form-layout'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { handleSubmit } from '../utilities/organization-information'
import InputGroup from '@/app/(authenticated)/manage-companies/create/components/input-group'
import UploadFile from '@/app/(authenticated)/manage-companies/create/components/upload-file'

import Image from 'next/image'
import Spinner from '@/public/images/spinner-white.svg'

export default function OrganizationInformation() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [organizationName, setOrganizationName] = useState('')
    const [organizationUrl, setOrganizationUrl] = useState('')
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const [logoUrl, setLogoUrl] = useState(null)

    const submitButtonRef = useRef()
    const { createJob } = useHire()

    useEffect(() => {
        let storedData = Cookies.get('jobPostData')
        if (storedData) {
            var organizationInformationData = JSON.parse(storedData)
                .organizationInformation
            if (organizationInformationData) {
                setLogoUrl(organizationInformationData?.organizationLogo || '')
                setOrganizationName(
                    organizationInformationData?.organizationName || '',
                )
                setOrganizationUrl(
                    organizationInformationData?.organizationUrl || ' ',
                )
            } else {
                setLogoUrl(' ')
            }
        }
        if (
            !storedData ||
            !JSON.parse(storedData).jobInformation ||
            !JSON.parse(storedData).jobDetails ||
            !JSON.parse(storedData).jobLocation
        ) {
            // Take the user to the Job Information for they have not filled the previous pages
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
        handleSubmit(
            setLoading,
            organizationName,
            organizationUrl,
            logoUrl,
            router,
            createJob,
        )
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
                        description="This is the graphical symbol or emblem representing the organization."
                        fileUrl={logoUrl}
                        setFileUrl={setLogoUrl}
                        title="ORGANIZATION LOGO"
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
                    href={'/tools/hire/create/job-location'}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    disabled={allFieldEntered || loading}
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    {loading ? (
                        <>
                            Creating{' '}
                            <Image src={Spinner} alt="" className="w-8" />
                        </>
                    ) : (
                        'Create Job'
                    )}
                </button>
            </div>
        </CreateJobLayout>
    )
}
