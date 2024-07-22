'use client'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './form-layout'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import DropdownMenu from '../../components/dropdown-menu'
import {
    removeLocationRequirement,
    addLocationRequirement,
} from '../../utilities/location-requirements'
import InputGroup from '@/app/(authenticated)/manage-companies/create/components/input-group'

import { jobLocationTypes } from '../../utilities/data'
import { toast } from 'react-toastify'

export default function JobLocation() {
    const router = useRouter()
    const [stateRequirementValue, setStateRequirementValue] = useState('')
    const [countryRequirementValue, setCountryRequirementValue] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [addressLocality, setAddressLocality] = useState('')
    const [addressRegion, setAddressRegion] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [addressCountry, setAddressCountry] = useState('')
    const [jobLocationType, setJobLocationType] = useState(jobLocationTypes[0])
    const [stateRequirements, setStateRequirements] = useState([])
    const [countryRequirements, setCountryRequirements] = useState([])
    const submitButtonRef = useRef()

    // Prefill The form with the data stored in the Cookies
    useEffect(() => {
        let storedData = Cookies.get('jobPostData')
        if (storedData) {
            if (JSON.parse(storedData).jobLocation) {
                var jobLocationData = JSON.parse(storedData).jobLocation
                setStreetAddress(jobLocationData.streetAddress)
                setAddressLocality(jobLocationData.addressLocality)
                setAddressRegion(jobLocationData.addressRegion)
                setPostalCode(jobLocationData.postalCode)
                setAddressCountry(jobLocationData.addressCountry)
                setJobLocationType(jobLocationData.jobLocationType)
                setStateRequirements(jobLocationData.stateRequirements)
                setCountryRequirements(jobLocationData.countryRequirements)
            }
        } else if (
            !storedData ||
            !JSON.parse(storedData).jobInformation ||
            !JSON.parse(storedData).jobDetails
        ) {
            // Take the user to the Job Information for they have not filled the previous pages
            router.push('/tools/hire/create/job-information')
        }
    }, [])

    // Add a State Requirement to the list
    const addStateRequirements = () => {
        addLocationRequirement(
            'State',
            stateRequirements,
            setStateRequirements,
            stateRequirementValue,
            toast,
            setStateRequirementValue,
        )
    }

    // Add a country Requirement
    const addCountryRequirements = () => {
        addLocationRequirement(
            'Country',
            countryRequirements,
            setCountryRequirements,
            countryRequirementValue,
            toast,
            setCountryRequirementValue,
        )
    }

    // Remove a State Requirement
    const deleteStateRequirement = stateName => {
        removeLocationRequirement(stateName, setStateRequirements, toast)
    }

    // Remove a country Requirement
    const deleteCountryRequirement = countryName => {
        removeLocationRequirement(countryName, setCountryRequirements, toast)
    }

    // Handle Form Submit
    const submit = e => {
        e.preventDefault()
        let storedData = Cookies.get('jobPostData')
        let jobLocationData = {
            streetAddress: streetAddress,
            addressLocality: addressLocality,
            addressRegion: addressRegion,
            postalCode: postalCode,
            addressCountry: addressCountry,
            jobLocationType: jobLocationType,
            stateRequirements: stateRequirements,
            countryRequirements: countryRequirements,
        }

        // store the Form data in Cookies and navigate to the next page
        if (storedData) {
            let existingItem = JSON.parse(storedData)
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    ...existingItem,
                    jobLocation: jobLocationData,
                }),
            )
        }
        router.push('/tools/hire/create/organization-information')
    }

    return (
        <CreateJobLayout>
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <InputGroup
                    label="STREET ADDRESS (Optional)"
                    placeholder="e.g “5th Avenue”"
                    required={false}
                    type={'text'}
                    value={streetAddress}
                    setValue={setStreetAddress}
                    description=" The specific street or building address of the company's location."
                />

                <InputGroup
                    label="STATE (Optional)"
                    placeholder="e.g “Manhattan”"
                    required={false}
                    type={'text'}
                    value={addressLocality}
                    setValue={setAddressLocality}
                    description="The region or state/province where the company is located."
                />

                <InputGroup
                    label="REGION (Optional)"
                    placeholder="e.g “Midwest”"
                    required={false}
                    type={'text'}
                    value={addressRegion}
                    setValue={setAddressRegion}
                    description="The company's address Region."
                />

                <InputGroup
                    label="COUNTRY (Optional)"
                    placeholder="e.g “USA”"
                    required={false}
                    type={'text'}
                    value={addressCountry}
                    setValue={setAddressCountry}
                    description="The country where the company is located."
                />

                <InputGroup
                    label="POSTAL CODE (Optional)"
                    placeholder="e.g “000000”"
                    required={false}
                    type={'text'}
                    value={postalCode}
                    setValue={setPostalCode}
                    description="The postal code or ZIP code associated with the company's location."
                />
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            JOB LOCATION TYPE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The type of location suitable for the job.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <DropdownMenu
                            value={jobLocationType}
                            onChange={setJobLocationType}
                            list={jobLocationTypes}
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            APPLICANT LOCATION REQUIREMENT - STATE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900 ">
                            States where the applicants must work from.
                        </p>
                        <div className="w-full border-t border-tremor-brand-boulder200/30 flex flex-col">
                            {stateRequirements?.map(item => (
                                <div
                                    key={crypto.randomUUID()}
                                    className="w-full flex justify-between px-2 items-center py-2.5 border-b border-tremor-brand-boulder200/30">
                                    <p className="font-light text-[13px] text-tremor-brand-boulder900">
                                        {item.name}
                                    </p>
                                    <button
                                        onClick={() =>
                                            deleteStateRequirement(item.name)
                                        }
                                        type="button"
                                        className="px-5 h-6 rounded-md  text-red-600 flex justify-center items-center">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <input
                            value={stateRequirementValue}
                            onChange={e =>
                                setStateRequirementValue(e.target.value)
                            }
                            type="text"
                            placeholder="e.g “Texas”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                        <button
                            onClick={addStateRequirements}
                            type="button"
                            className="w-full flex justify-center items-center gap-2.5 rounded-2xl border border-tremor-background-darkYellow text-tremor-background-darkYellow text-sm font-medium h-12">
                            Add Requirement <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            APPLICANT LOCATION REQUIREMENT - COUNTRY
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900 ">
                            Countries where the applicants must work from.
                        </p>
                        <div className="w-full border-t border-tremor-brand-boulder200/30 flex flex-col">
                            {countryRequirements?.map(item => (
                                <div
                                    key={crypto.randomUUID()}
                                    className="w-full flex justify-between px-2 items-center py-2.5 border-b border-tremor-brand-boulder200/30">
                                    <p className="font-light text-[13px] text-tremor-brand-boulder900">
                                        {item.name}
                                    </p>
                                    <button
                                        onClick={() =>
                                            deleteCountryRequirement(item.name)
                                        }
                                        type="button"
                                        className="px-5 h-6 rounded-md  text-red-600 flex justify-center items-center">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <input
                            value={countryRequirementValue}
                            onChange={e =>
                                setCountryRequirementValue(e.target.value)
                            }
                            type="text"
                            placeholder="e.g “USA”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                        <button
                            onClick={addCountryRequirements}
                            type="button"
                            className="w-full flex justify-center items-center gap-2.5 rounded-2xl border border-tremor-background-darkYellow text-tremor-background-darkYellow text-sm font-medium h-12">
                            Add Requirement <i className="fas fa-plus"></i>
                        </button>
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
                    href={'/tools/hire/create/job-details'}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none`}>
                    Next <i className="fas fa-arrow-right "></i>
                </button>
            </div>
        </CreateJobLayout>
    )
}
