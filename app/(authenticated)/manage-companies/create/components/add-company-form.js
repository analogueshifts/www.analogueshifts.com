'use client'
import { useState } from 'react'
import { useCompany } from '@/hooks/companies'
import { useRouter } from 'next/navigation'

import InputGroup from './input-group'
import DashboardLoader from '@/components/application/dashboard-loader'

import { Plus } from 'lucide-react'
import { errorToast } from '@/utils/error-toast'
import UploadFile from './upload-file'

export default function AddCompanyForm() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [industry, setIndustry] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [logo, setLogo] = useState('')

    const { addCompany } = useCompany()

    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault()
        if (logo.trim().length === 0) {
            errorToast('Something went wrong!', 'Company Logo Is Required')
            return
        }

        addCompany({
            setLoading,
            router,
            data: {
                name,
                industry,
                location,
                email,
                contact,
                website,
                description,
                logo,
                metadata: null,
            },
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#FEFEFE] flex flex-col gap-6 mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl">
            {loading && <DashboardLoader />}
            <h4 className="text-tremor-brand-boulder900 text-base font-medium mb-2">
                Add Company
            </h4>
            <InputGroup
                description="The name of the company to be added."
                label="COMPANY NAME"
                placeholder="e.g AnalogueShifts"
                required={true}
                setValue={setName}
                type="text"
                value={name}
            />
            <InputGroup
                description="The company's Industry."
                label="INDUSTRY"
                placeholder="e.g Software"
                required={true}
                setValue={setIndustry}
                type="text"
                value={industry}
            />
            <InputGroup
                description="The company's physical location."
                label="LOCATION"
                placeholder="Enter Location"
                required={true}
                setValue={setLocation}
                type="text"
                value={location}
            />
            <InputGroup
                description="The company's email address."
                label="EMAIL"
                placeholder="e.g hello@analogueshifts.com"
                required={true}
                setValue={setEmail}
                type="email"
                value={email}
            />
            <InputGroup
                description="The company's contact."
                label="CONTACT"
                placeholder="Enter Contact"
                required={false}
                setValue={setContact}
                type="text"
                value={contact}
            />
            <InputGroup
                description="The company's website URL."
                label="WEBSITE"
                placeholder="e.g https://www.analogueshifts.com"
                required={false}
                setValue={setWebsite}
                type="url"
                value={website}
            />
            <InputGroup
                description="About The Company"
                label="DESCRIPTION"
                placeholder=""
                required={false}
                setValue={setDescription}
                type="long_text"
                value={description}
            />

            <UploadFile
                description="This is the graphical symbol or emblem representing the organization."
                title="COMPANY LOGO"
                setFileUrl={setLogo}
                fileUrl={logo}
            />

            <div className="flex w-full justify-end">
                <button
                    type="submit"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none`}>
                    Add Company
                    <Plus width={15} />
                </button>
            </div>
        </form>
    )
}
