'use client'
import { useState, useEffect } from 'react'
import InputGroup from './input-group'
import SelectCompany from './select-company'
import ActionListGroup from './action-list-group'
import SelectGroup from './select-group'
import employmentTypes from '@/app/(guest)/jobs/resources/employment-types.json'
import locationTypes from '../resources/location-types.json'
import { useRouter } from 'next/navigation'

export default function Form() {
    const [newJob, setNewJob] = useState({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
    })
    const router = useRouter()

    const updateStepOne = (newValue, label) => {
        setNewJob(prev => {
            return { ...prev, stepOne: { ...prev.stepOne, [label]: newValue } }
        })
    }

    useEffect(() => {
        let storedData = localStorage.getItem('newJob')
        if (storedData) {
            setNewJob(JSON.parse(storedData))
        }
    }, [])

    const handleFormSubmit = e => {
        e.preventDefault()
        localStorage.setItem('newJob', JSON.stringify(newJob))
        router.push('/recruiter/hire/create/step-two')
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col gap-10 tablet:gap-6">
            <SelectCompany />
            <InputGroup
                border={true}
                required={true}
                label="Job/Position Title"
                description="A Job posting must describe one position only"
                placeholder="e.g “Product designer”"
                type="text"
                value={newJob?.stepOne?.title}
                setValue={value => updateStepOne(value, 'title')}
            />
            <SelectGroup
                label="Employment Type"
                description="Specifies the type of employment offered for the job."
                border={true}
                list={employmentTypes}
                placeholder="Select employment type"
                required={true}
                value={newJob?.stepOne?.employmentType}
                setValue={value => updateStepOne(value, 'employmentType')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Identifier Name"
                description="A label for tracking the job internally"
                placeholder="e.g “Job ID”"
                type="text"
                value={newJob?.stepOne?.identifierName}
                setValue={value => updateStepOne(value, 'identifierName')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Identifier Value"
                description="A corresponding code or value assigned to the identifier name, serving as a unique identifier"
                placeholder="e.g “Job 123456”"
                type="text"
                value={newJob?.stepOne?.identifierValue}
                setValue={value => updateStepOne(value, 'identifierValue')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Valid Through"
                description="The deadline for applying for the job"
                placeholder=""
                type="date"
                value={newJob?.stepOne?.validThrough}
                setValue={value => updateStepOne(value, 'validThrough')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Street Address"
                description="A specific street or building address of the company's location"
                placeholder="e.g “5th Avenue”"
                type="text"
                value={newJob?.stepOne?.streetAddress}
                setValue={value => updateStepOne(value, 'streetAddress')}
            />
            <InputGroup
                border={true}
                required={false}
                label="State"
                description="The region or state/province where the company is located."
                placeholder="e.g “Manhattan”"
                type="text"
                value={newJob?.stepOne?.state}
                setValue={value => updateStepOne(value, 'state')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Region"
                description="The company's address region"
                placeholder="e.g “Midwest”"
                type="text"
                value={newJob?.stepOne?.region}
                setValue={value => updateStepOne(value, 'region')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Country"
                description="The country where the company is located"
                placeholder="e.g “USA”"
                type="text"
                value={newJob?.stepOne?.country}
                setValue={value => updateStepOne(value, 'country')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Postal Code"
                description="The postal code or zip code associated with the company's location."
                placeholder="e.g “000000”"
                type="text"
                value={newJob?.stepOne?.postalCode}
                setValue={value => updateStepOne(value, 'postalCode')}
            />
            <SelectGroup
                label="Job Location Type"
                description="The type of location suitable for the job."
                border={true}
                list={locationTypes}
                placeholder="Select location type"
                required={true}
                value={newJob?.stepOne?.locationType}
                setValue={value => updateStepOne(value, 'locationType')}
            />
            <ActionListGroup
                border={true}
                required={false}
                label="Applicant Location Requirements - Country"
                description="Countries where the applicants must work from."
                placeholder="e.g “USA”"
                type="text"
                value={newJob?.stepOne?.applicantLocationRequirementsCountry}
                setValue={value =>
                    updateStepOne(value, 'applicantLocationRequirementsCountry')
                }
            />
            <ActionListGroup
                border={false}
                required={false}
                label="Applicant Location Requirements - State"
                description="States where the applicants must work from."
                placeholder="e.g “Texas”"
                type="text"
                value={newJob?.stepOne?.applicantLocationRequirementsState}
                setValue={value =>
                    updateStepOne(value, 'applicantLocationRequirementsState')
                }
            />
            <div className="w-full flex justify-end mt-6">
                <button
                    type="submit"
                    className="w-[109px] duration-300 hover:opacity-90 h-[42px] rounded-xl bg-tremor-background-darkYellow flex justify-center items-center text-base font-semibold text-tremor-brand-boulder50">
                    Next
                </button>
            </div>
        </form>
    )
}
