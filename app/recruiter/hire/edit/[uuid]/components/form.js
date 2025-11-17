'use client'
import { useState, useEffect } from 'react'
import { useToast } from '@/contexts/toast'
import InputGroup from '../../../create/components/input-group'
import SelectCompany from '../../../create/components/select-company'
import ActionListGroup from '../../../create/components/action-list-group'
import SelectGroup from '../../../create/components/select-group'
import employmentTypes from '@/app/(guest)/jobs/resources/employment-types.json'
import locationTypes from '../../../create/resources/location-types.json'
import { useRouter } from 'next/navigation'
import axios from '@/app/lib/axios'
import Cookies from 'js-cookie'
import { prefill } from '../utilities/prefill'

export default function Form({ uuid }) {
    const [editJob, setEditJob] = useState({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
    })
    const { notifyUser } = useToast()
    const router = useRouter()
    const token = Cookies.get('analogueshifts')

    const updateStepOne = (newValue, label) => {
        setEditJob(prev => {
            return { ...prev, stepOne: { ...prev.stepOne, [label]: newValue } }
        })
    }

    useEffect(() => {
        let companyData = localStorage.getItem('newJobCompany')

        if (companyData) {
            updateStepOne(JSON.parse(companyData)?.location, 'streetAddress')
        }
    }, [])

    useEffect(() => {
        if (token) {
            fetchJob()
        }
    }, [token])

    const handleFormSubmit = e => {
        e.preventDefault()
        localStorage.setItem('editJob', JSON.stringify(editJob))
        router.push('/recruiter/hire/edit/' + uuid + '/step-two')
    }

    const fetchJob = () => {
        let config = {
            method: 'GET',
            url: '/hire/edit/' + uuid,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        axios
            .request(config)
            .then(res => {
                let jobData = res.data.data.hire
                if (jobData) {
                    prefill(jobData, setEditJob, res?.data?.data?.easy_apply)
                } else {
                    notifyUser('error', 'Job not found', 'right')
                    router.push('/recruiter/hire')
                }
            })
            .catch(error => {
                router.push('/recruiter/hire')
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error?.message ||
                    'Error Getting Job',
                    'right',
                )
            })
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
                value={editJob?.stepOne?.title}
                setValue={value => updateStepOne(value, 'title')}
            />
            <SelectGroup
                label="Employment Type"
                description="Specifies the type of employment offered for the job."
                border={true}
                list={employmentTypes}
                placeholder="Select employment type"
                required={true}
                value={editJob?.stepOne?.employmentType}
                setValue={value => updateStepOne(value, 'employmentType')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Identifier Name"
                description="A label for tracking the job internally"
                placeholder="e.g “Job ID”"
                type="text"
                value={editJob?.stepOne?.identifierName}
                setValue={value => updateStepOne(value, 'identifierName')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Identifier Value"
                description="A corresponding code or value assigned to the identifier name, serving as a unique identifier"
                placeholder="e.g “Job 123456”"
                type="text"
                value={editJob?.stepOne?.identifierValue}
                setValue={value => updateStepOne(value, 'identifierValue')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Valid Through"
                description="The deadline for applying for the job"
                placeholder=""
                type="date"
                value={editJob?.stepOne?.validThrough}
                setValue={value => updateStepOne(value, 'validThrough')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Street Address"
                description="A specific street or building address of the company's location"
                placeholder="e.g “5th Avenue”"
                type="text"
                value={editJob?.stepOne?.streetAddress}
                setValue={value => updateStepOne(value, 'streetAddress')}
            />
            <InputGroup
                border={true}
                required={false}
                label="State"
                description="The region or state/province where the company is located."
                placeholder="e.g “Manhattan”"
                type="text"
                value={editJob?.stepOne?.state}
                setValue={value => updateStepOne(value, 'state')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Region"
                description="The company's address region"
                placeholder="e.g “Midwest”"
                type="text"
                value={editJob?.stepOne?.region}
                setValue={value => updateStepOne(value, 'region')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Country"
                description="The country where the company is located"
                placeholder="e.g “USA”"
                type="text"
                value={editJob?.stepOne?.country}
                setValue={value => updateStepOne(value, 'country')}
            />
            <InputGroup
                border={true}
                required={false}
                label="Postal Code"
                description="The postal code or zip code associated with the company's location."
                placeholder="e.g “000000”"
                type="text"
                value={editJob?.stepOne?.postalCode}
                setValue={value => updateStepOne(value, 'postalCode')}
            />
            <SelectGroup
                label="Job Location Type"
                description="The type of location suitable for the job."
                border={true}
                list={locationTypes}
                placeholder="Select location type"
                required={true}
                value={editJob?.stepOne?.locationType}
                setValue={value => updateStepOne(value, 'locationType')}
            />
            <ActionListGroup
                border={true}
                required={false}
                label="Applicant Location Requirements - Country"
                description="Countries where the applicants must work from."
                placeholder="e.g “USA”"
                type="text"
                value={editJob?.stepOne?.applicantLocationRequirementsCountry}
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
                value={editJob?.stepOne?.applicantLocationRequirementsState}
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
