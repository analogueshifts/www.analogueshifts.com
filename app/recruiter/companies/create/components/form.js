'use client'
import { useCompany } from '@/hooks/companies'
import { useToast } from '@/contexts/toast'
import { useState } from 'react'
import GoBack from '../../../../(guest)/jobs/[slug]/components/go-back'
import InputGroup from '../../../hire/create/components/input-group'
import SelectGroup from '../../../hire/create/components/select-group'
import industries from './industries.json'
import { Switch } from '@/components/ui/switch'
import UploadFile from '../../../hire/create/step-three/components/upload-file'
import Image from 'next/image'
import Spinner from '@/public/images/spinner-white.svg'
import SuccessModal from './success-modal'
import Tiptap from '../../../../job-seeker/profile/edit/components/tiptap'

export default function Form() {
    const [newCompany, setNewCompany] = useState({ logo: '' })
    const [isUrlType, setIsUrlType] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { notifyUser } = useToast()
    const { addCompany } = useCompany()

    const updateValue = (newValue, label) => {
        setNewCompany(prev => {
            return { ...prev, [label]: newValue }
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (newCompany?.logo.trim()?.length === 0) {
            notifyUser('error', 'Company Logo Is Required', 'right')
            return
        }
        addCompany({
            setLoading,
            setSuccess,
            data: {
                ...newCompany,
                metadata: null,
            },
        })
    }

    return (
        <div className="w-full relative h-max rounded-[32px] flex flex-col items-center bg-white px-8 py-10">
            <SuccessModal open={success} setOpen={setSuccess} />
            <div className="w-max absolute tablet:top-5 left-8 top-10 h-max">
                <GoBack />
            </div>
            <h2 className="text-lg tablet:text-base tablet:mb-2.5 text-black text-center font-semibold mb-3">
                Add Company
            </h2>
            <p className="text-tremor-brand-boulder500 tablet:text-sm text-[15px] tablet:mb-9 mb-12 text-center large:text-base font-normal large:mb-16">
                Quickly add the company’s information
            </p>
            <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col gap-10 tablet:gap-6">
                <InputGroup
                    border={true}
                    required={true}
                    label="Company Name"
                    description="Type something here"
                    placeholder="Company name"
                    type="text"
                    value={newCompany?.name}
                    setValue={value => updateValue(value, 'name')}
                />
                <SelectGroup
                    label="Company Industry"
                    description="The industry your company belongs to."
                    border={true}
                    list={industries}
                    placeholder="Company industry"
                    required={true}
                    value={newCompany?.industry}
                    setValue={value => updateValue(value, 'industry')}
                />
                <InputGroup
                    border={true}
                    required={true}
                    label="Location"
                    description="Company’s Location"
                    placeholder="Location"
                    type="text"
                    value={newCompany?.location}
                    setValue={value => updateValue(value, 'location')}
                />
                <InputGroup
                    border={true}
                    required={true}
                    label="Company Email address"
                    description="Add the company’s email address"
                    placeholder="Email address"
                    type="email"
                    value={newCompany?.email}
                    setValue={value => updateValue(value, 'email')}
                />
                <InputGroup
                    border={true}
                    required={true}
                    label="Company Phone Number"
                    description="Add the company’s phone number"
                    placeholder="Phone number"
                    type="text"
                    value={newCompany?.contact}
                    setValue={value => updateValue(value, 'contact')}
                />
                <InputGroup
                    border={true}
                    required={false}
                    label="Website (optional)"
                    description="Add the company’s website"
                    placeholder="Choose expected qualification"
                    type="url"
                    value={newCompany?.website}
                    setValue={value => updateValue(value, 'website')}
                />
                <div
                    className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 `}>
                    <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                        <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                            About Company
                        </h3>
                        <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                            Provide a description for the company.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <Tiptap
                            placeholder="Enter description"
                            initialData={newCompany?.description}
                            changed={value => {
                                updateValue(value, 'description')
                            }}
                        />
                    </div>
                </div>
                <div
                    className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 `}>
                    <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                        <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                            Company Logo{' '}
                            <span className="text-[#FF0000]">*</span>
                        </h3>
                        <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                            This is the graphical symbol representing the
                            company.
                        </p>
                        <div className="w-full flex items-center flex-wrap gap-2.5">
                            <p className="font-light text-[13px] text-tremor-brand-boulder900">
                                Use URL format
                            </p>
                            <Switch
                                checked={isUrlType}
                                onCheckedChange={checked =>
                                    setIsUrlType(checked)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        {isUrlType ? (
                            <input
                                type="url"
                                placeholder="Enter Logo URL"
                                value={newCompany?.logo}
                                onChange={e =>
                                    updateValue(e.target.value, 'logo')
                                }
                                required={true}
                                className="col-span-1 w-full h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder900 outline-none rounded-2xl bg-white"
                            />
                        ) : (
                            <UploadFile
                                value={newCompany?.logo}
                                setValue={value => updateValue(value, 'logo')}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full flex justify-end mt-6">
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
        </div>
    )
}
