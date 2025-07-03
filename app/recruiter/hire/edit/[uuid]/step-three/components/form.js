'use client'
import { useState, useEffect } from 'react'
import InputGroup from '../../../../create/components/input-group'
import UploadFile from './upload-file'
import { usePathname, useRouter } from 'next/navigation'
import { handleUpload } from '../handle-upload'
import { useHire } from '@/hooks/hires'
import { Switch } from '@/components/ui/switch'
import Spinner from '@/public/images/spinner-white.svg'
import Image from 'next/image'

export default function Form() {
    const [editJob, setEditJob] = useState({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
    })
    const [isUrlType, setIsUrlType] = useState(false)
    const [loading, setLoading] = useState(false)
    const { updateJob } = useHire()
    const router = useRouter()
    const pathname = usePathname()
    const segments = pathname.split('/')
    const uuid = segments[4]

    const updateStepThree = (newValue, label) => {
        setEditJob(prev => {
            return {
                ...prev,
                stepThree: { ...prev.stepThree, [label]: newValue },
            }
        })
    }

    useEffect(() => {
        let storedData = localStorage.getItem('editJob')
        if (storedData) {
            setEditJob(JSON.parse(storedData))
        } else {
            router.push('/recruiter/hire')
        }

        let companyData = localStorage.getItem('newJobCompany')
        if (companyData) {
            let parseed = JSON.parse(companyData)
            updateStepThree(parseed?.name, 'companyName')
            updateStepThree(parseed?.website, 'companyWebsite')
            updateStepThree(parseed?.logo, 'companyLogo')
            setIsUrlType(true)
        }
    }, [])

    const handleFormSubmit = e => {
        e.preventDefault()
        handleUpload(setLoading, router, updateJob, editJob, editJob?.id)
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col gap-10 tablet:gap-6">
            <InputGroup
                border={true}
                required={true}
                description="The name of the company offering the job"
                label="Company Name"
                placeholder="Enter Company Name"
                setValue={value => updateStepThree(value, 'companyName')}
                type="text"
                value={editJob.stepThree?.companyName}
            />
            <InputGroup
                border={true}
                required={false}
                description="The website of the company offering the job"
                label="Company Website"
                placeholder="Enter Company Website URL"
                setValue={value => updateStepThree(value, 'companyWebsite')}
                type="url"
                value={editJob.stepThree?.companyWebsite}
            />

            <div
                className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 `}>
                <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                    <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                        Company Logo
                    </h3>
                    <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                        This is the graphical symbol representing the company.
                    </p>
                    <div className="w-full flex items-center flex-wrap gap-2.5">
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            Use URL format
                        </p>
                        <Switch
                            checked={isUrlType}
                            onCheckedChange={checked => setIsUrlType(checked)}
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    {isUrlType ? (
                        <input
                            type="url"
                            placeholder="Enter Logo URL"
                            value={editJob.stepThree?.companyLogo}
                            onChange={e =>
                                updateStepThree(e.target.value, 'companyLogo')
                            }
                            className="col-span-1 w-full h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder900 outline-none rounded-2xl bg-white"
                        />
                    ) : (
                        <UploadFile
                            value={editJob.stepThree?.companyLogo}
                            setValue={value =>
                                updateStepThree(value, 'companyLogo')
                            }
                        />
                    )}
                </div>
            </div>

            <div className="w-full flex justify-between mt-6">
                <button
                    type="button"
                    onClick={() =>
                        router.push(
                            '/recruiter/hire/edit/' + uuid + '/step-two',
                        )
                    }
                    className="w-[109px] border border-tremor-background-darkYellow duration-300 hover:opacity-90 h-[42px] rounded-xl bg-transparent flex justify-center items-center text-base font-semibold text-tremor-background-darkYellow">
                    Previous
                </button>{' '}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-[109px] duration-300 hover:opacity-90 h-[42px] rounded-xl bg-tremor-background-darkYellow flex justify-center items-center text-base font-semibold text-tremor-brand-boulder50">
                    {loading ? (
                        <Image className="w-max h-7" src={Spinner} alt="" />
                    ) : (
                        'Submit'
                    )}
                </button>
            </div>
        </form>
    )
}
