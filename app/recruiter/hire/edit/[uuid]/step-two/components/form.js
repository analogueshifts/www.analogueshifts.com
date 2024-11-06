'use client'
import { useState, useEffect } from 'react'
import InputGroup from '../../../../create/components/input-group'
import SelectGroup from '../../../../create/components/select-group'
import SelectForm from './select-form'
import jobStatus from '../../../../create/resources/job-status.json'
import currencies from '../../../../create/resources/currencies.json'
import unitTexts from '../../../../create/resources/unit-texts.json'
import directApply from '../../../../create/resources/direct-apply.json'
import Tiptap from '../../../../../../job-seeker/profile/edit/components/tiptap'
import { usePathname, useRouter } from 'next/navigation'

export default function Form() {
    const [editJob, setEditJob] = useState({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
    })
    const router = useRouter()
    const pathname = usePathname()
    const segments = pathname.split('/')
    const uuid = segments[4]
    const updateStepTwo = (newValue, label) => {
        setEditJob(prev => {
            return { ...prev, stepTwo: { ...prev.stepTwo, [label]: newValue } }
        })
    }

    useEffect(() => {
        let storedData = localStorage.getItem('editJob')
        if (storedData) {
            let parsed = JSON.parse(storedData)
            setEditJob(
                parsed?.stepTwo
                    ? parsed
                    : {
                          ...parsed,
                          stepTwo: {
                              jobStatus: 'Online',
                              salaryCurrency: 'USD',
                              salaryUnitText: 'HOUR',
                              directApply: 'true',
                              jobDescription: ' ',
                          },
                      },
            )
        }
    }, [])

    const handleFormSubmit = e => {
        e.preventDefault()
        localStorage.setItem('editJob', JSON.stringify(editJob))
        router.push('/recruiter/hire/edit/' + uuid + '/step-three')
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col gap-10 tablet:gap-6">
            <SelectGroup
                border={true}
                required={true}
                value={editJob.stepTwo?.jobStatus}
                description="The status of the job post."
                label="Job Status"
                list={jobStatus}
                placeholder="Select Status"
                setValue={value => updateStepTwo(value, 'jobStatus')}
            />
            <SelectGroup
                border={true}
                required={true}
                value={editJob.stepTwo?.salaryCurrency}
                description="The currency in which the salary is denoted, such as USD, NGN, etc."
                label="Salary Currency"
                list={currencies}
                placeholder="Select Salary Currency"
                setValue={value => updateStepTwo(value, 'salaryCurrency')}
            />

            <InputGroup
                border={true}
                required={true}
                description="The numerical value representing the salary amount for the job"
                label="Salary Value"
                placeholder="Enter Salary Value"
                setValue={value => updateStepTwo(value, 'salaryValue')}
                type="number"
                value={editJob.stepTwo?.salaryValue}
            />

            <SelectGroup
                border={true}
                required={true}
                value={editJob.stepTwo?.salaryUnitText}
                description="Indicate the time unit associated with the salary value."
                label="Salary Unit Text"
                list={unitTexts}
                placeholder="Select Salary UnitText"
                setValue={value => updateStepTwo(value, 'salaryUnitText')}
            />

            <SelectGroup
                border={true}
                required={true}
                value={editJob.stepTwo?.directApply}
                description="The job application link type (set this to false if you want to use an internal form URL)"
                label="Direct Apply"
                list={directApply}
                placeholder="Select"
                setValue={value => updateStepTwo(value, 'directApply')}
            />

            <div
                className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 border-b border-tremor-brand-boulder100`}>
                <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                    <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                        Apply
                        <span className="text-[#FF0000]">*</span>
                    </h3>
                    <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                        The job application URL.
                    </p>
                </div>

                <div
                    className={`col-span-1 ${
                        editJob?.stepTwo?.directApply === 'false'
                            ? 'block'
                            : 'hidden'
                    }`}>
                    <SelectForm
                        setValue={value => updateStepTwo(value, 'apply')}
                    />
                </div>

                <input
                    required
                    type="url"
                    placeholder="Enter URL"
                    value={editJob.stepTwo?.apply}
                    onChange={e => updateStepTwo(e.target.value, 'apply')}
                    className={`col-span-1 h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder900 outline-none rounded-2xl bg-white ${
                        editJob?.stepTwo?.directApply !== 'false'
                            ? 'flex'
                            : 'hidden'
                    }`}
                />
            </div>
            <div
                className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 `}>
                <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                    <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                        Job Description
                    </h3>
                    <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                        Provide a description for the job.
                    </p>
                </div>
                <div className="col-span-1">
                    {editJob?.stepTwo?.jobDescription && (
                        <Tiptap
                            placeholder="Enter job description"
                            initialData={editJob.stepTwo.jobDescription}
                            changed={value => {
                                updateStepTwo(value, 'jobDescription')
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="w-full flex justify-between mt-6">
                <button
                    type="button"
                    onClick={() => router.push('/recruiter/hire/edit/' + uuid)}
                    className="w-[109px] border border-tremor-background-darkYellow duration-300 hover:opacity-90 h-[42px] rounded-xl bg-transparent flex justify-center items-center text-base font-semibold text-tremor-background-darkYellow">
                    Previous
                </button>{' '}
                <button
                    type="submit"
                    className="w-[109px] duration-300 hover:opacity-90 h-[42px] rounded-xl bg-tremor-background-darkYellow flex justify-center items-center text-base font-semibold text-tremor-brand-boulder50">
                    Next
                </button>
            </div>
        </form>
    )
}
