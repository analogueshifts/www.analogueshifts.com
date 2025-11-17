'use client'
import { useJobs } from '@/hooks/jobs'
import { useMemo, useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useUser } from '@/contexts/user'
import Image from 'next/image'
import PaginationLine from '@/public/images/user-layout/recruiter/pagination-line.svg'
import PaginationLink from '../../../../recruiter/hire/create/components/pagination-link'
import InputGroup from '../../../contact/components/input-group'
import UploadFile from '../../../../recruiter/hire/edit/[uuid]/step-three/components/upload-file'
import Tiptap from '../../../../job-seeker/profile/edit/components/tiptap'

export default function Apply({ open, close, job, easyApply }) {
    const [loading, setLoading] = useState(false)
    const { user } = useUser()
    const [step, setStep] = useState(1)
    const { apply } = useJobs()
    const [details, setDetails] = useState({
        stepOne: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
        },
        stepTwo: {
            resume: '',
            coverLetter: '',
        },
    })
    const [uuid, setUuid] = useState('')
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if (user) {
            setDetails(p => {
                return {
                    ...p,
                    stepOne: {
                        firstName: user?.user_profile?.first_name || '',
                        lastName: user?.user_profile?.last_name || '',
                        phoneNumber: user?.phone_number || '',
                        email: user?.email || '',
                    },
                }
            })
        }
    }, [user])

    useEffect(() => {
        setUuid(easyApply?.uuid || '')
        if (easyApply?.questions) {
            setQuestions(
                easyApply.questions?.map(item => {
                    return {
                        question: item.question,
                        answer: '',
                        uuid: item.uuid,
                    }
                }),
            )
        }
    }, [easyApply])

    const hasStepTwo = useMemo(() => {
        return !!(job?.easy_apply?.resume || job?.easy_apply?.cover_letter)
    }, [job])

    const isStepTwoCompleted = useMemo(() => {
        return (
            (!job?.easy_apply?.resume ||
                (job?.easy_apply?.resume && details.stepTwo.resume)) &&
            (!job?.easy_apply?.cover_letter ||
                (job?.easy_apply?.cover_letter &&
                    details.stepTwo.coverLetter.length > 10))
        )
    }, [details, job])

    const isStepOneCompleted = useMemo(() => {
        return (
            details.stepOne.email &&
            details.stepOne.firstName &&
            details.stepOne.lastName &&
            details.stepOne.phoneNumber.length >= 11
        )
    }, [details])

    const updateStepOne = (newValue, label) => {
        setDetails(prev => {
            return { ...prev, stepOne: { ...prev.stepOne, [label]: newValue } }
        })
    }

    const updateStepTwo = (newValue, label) => {
        setDetails(prev => {
            return { ...prev, stepTwo: { ...prev.stepTwo, [label]: newValue } }
        })
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(p => p - 1)
        } else {
            close()
        }
    }

    const handleNext = async () => {
        if ((hasStepTwo && step < 3) || (!hasStepTwo && step < 2)) {
            setStep(p => p + 1)
        } else {
            const res = await apply({
                setLoading,
                uuid,
                data: {
                    email: details.stepOne.email || '',
                    contact: details.stepOne.phoneNumber || '',
                    name:
                        details.stepOne.firstName +
                        ' ' +
                        details.stepOne.lastName,
                    cover_letter: details.stepTwo.coverLetter || null,
                    resume: details.stepTwo.resume || null,
                    answers: questions.map(item => {
                        return {
                            question_uuid: item.uuid,
                            answer: item.answer,
                        }
                    }),
                },
            })

            if (res) {
                close()
            }
        }
    }

    const updateQuestions = (index, answer) => {
        setQuestions(prev => {
            const updated = [...prev]
            updated[index].answer = answer
            return updated
        })
    }

    return (
        <Dialog open={open}>
            <DialogContent
                hideCloseBtn={true}
                className="w-[90%] p-0 shadow-none max-w-[923px] h-[704px] max-h-[80%] flex flex-col sm:rounded-3xl">
                <div className="h-max min-h-max w-full px-10 py-6 large:py-10 border-b border-[#DBDBDB]">
                    <h2 className="font-semibold text-base large:text-xl mb-1">
                        Applying to Job
                    </h2>
                    <p className="text-[#7C7C7C] text-[11px] large:text-xs">
                        To apply to job kindly fill in job details below
                    </p>
                </div>
                <div className="w-full h-full py-3 large:py-6 overflow-y-auto px-4 mobile:px-10 flex justify-center">
                    <div className="w-full max-w-[498px] flex flex-col items-center dropdown-list">
                        <div className="w-max large:mb-8 mb-5 h-12 tablet:gap-1.5 flex items-center gap-2.5">
                            <PaginationLink
                                path={'#'}
                                isActive={step === 1}
                                inModal={true}
                                title={'Step 1'}
                                isCompleted={isStepOneCompleted}
                            />
                            <Image
                                src={PaginationLine}
                                className="tablet:w-9 w-10 h-max"
                                alt=""
                            />
                            <PaginationLink
                                path={'#'}
                                isCompleted={
                                    hasStepTwo ? isStepTwoCompleted : false
                                }
                                isActive={hasStepTwo && step === 2}
                                inModal={true}
                                title={'Step 2'}
                            />
                            {hasStepTwo && (
                                <>
                                    <Image
                                        src={PaginationLine}
                                        className="tablet:w-9 w-10 h-max"
                                        alt=""
                                    />
                                    <PaginationLink
                                        isCompleted={false}
                                        path={'#'}
                                        isActive={step === 3}
                                        inModal={true}
                                        title={'Step 3'}
                                    />
                                </>
                            )}
                        </div>
                        {step === 1 && (
                            <div className="w-full grid grid-cols-2 gap-x-3 mobile:gap-x-8 large:gap-y-8 gap-y-5">
                                <div className="col-span-1">
                                    <InputGroup
                                        small={true}
                                        noImage={true}
                                        label="First Name"
                                        placeholder="Enter"
                                        required={true}
                                        setValue={value =>
                                            updateStepOne(value, 'firstName')
                                        }
                                        value={details.stepOne.firstName}
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <InputGroup
                                        small={true}
                                        noImage={true}
                                        label="Last Name"
                                        placeholder="Enter"
                                        required={true}
                                        setValue={value =>
                                            updateStepOne(value, 'lastName')
                                        }
                                        value={details.stepOne.lastName}
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <InputGroup
                                        small={true}
                                        noImage={true}
                                        label="Phone"
                                        placeholder="Enter"
                                        required={true}
                                        setValue={value =>
                                            updateStepOne(value, 'phoneNumber')
                                        }
                                        value={details.stepOne.phoneNumber}
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <InputGroup
                                        small={true}
                                        noImage={true}
                                        label="Email Address"
                                        placeholder="Enter"
                                        required={true}
                                        setValue={value =>
                                            updateStepOne(value, 'email')
                                        }
                                        value={details.stepOne.email}
                                        type="text"
                                    />
                                </div>
                            </div>
                        )}
                        {hasStepTwo && step === 2 && (
                            <div className="w-full flex flex-col gap-5 large:gap-6">
                                {job?.easy_apply?.resume && (
                                    <div className="flex flex-col gap-3">
                                        <label
                                            className={`font-medium text-tremor-brand-boulder950 text-sm large:text-x"`}>
                                            Upload CV/Resume
                                        </label>
                                        <UploadFile
                                            label="Upload Resume"
                                            isPDF={true}
                                            value={details.stepTwo.resume}
                                            setValue={value =>
                                                updateStepTwo(value, 'resume')
                                            }
                                        />
                                    </div>
                                )}
                                {job?.easy_apply?.cover_letter && (
                                    <div className="flex flex-col gap-3">
                                        <label
                                            className={`font-medium text-tremor-brand-boulder950 text-sm large:text-x"`}>
                                            Cover Letter
                                        </label>
                                        <div className="w-full flex flex-col">
                                            <Tiptap
                                                initialData={
                                                    details.stepTwo.coverLetter
                                                }
                                                changed={value => {
                                                    updateStepTwo(
                                                        value,
                                                        'coverLetter',
                                                    )
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {(step === 3 || (!hasStepTwo && step === 2)) && (
                            <div className="w-full flex flex-col gap-5 large:gap-6">
                                {questions.map((item, index) => {
                                    return (
                                        <InputGroup
                                            dangerousHtml={true}
                                            key={item.uuid}
                                            small={true}
                                            noImage={true}
                                            label={item.question}
                                            placeholder="Your answer"
                                            required={true}
                                            setValue={value => {
                                                updateQuestions(index, value)
                                            }}
                                            value={item.answer}
                                            type="text"
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-max flex justify-between min-h-max w-full px-4 gap-3 mobile:px-10 py-6 large:py-10 border-t border-[#DBDBDB]">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="h-10 w-40 flex justify-center items-center rounded-[10px] text-xs font-bold text-[#FFBB0A] border border-[#FFBB0A]">
                        {step === 1 ? 'Cancel' : 'Previous'}
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={
                            (step === 1 && !isStepOneCompleted) ||
                            (hasStepTwo && step === 2 && !isStepTwoCompleted)
                        }
                        className="h-10 w-40 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 flex justify-center bg-[#FFBB0A] items-center rounded-[10px] text-xs font-bold text-white">
                        {loading
                            ? 'Submitting...'
                            : step === 3
                                ? 'Submit'
                                : 'Next'}
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
