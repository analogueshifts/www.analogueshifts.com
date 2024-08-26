'use client'
import { useState, useEffect } from 'react'
import { useCompany } from '@/hooks/companies'
import { useUser } from '@/contexts/user'
import { useRouter } from 'next/navigation'

import InputGroup from '../../../create/components/input-group'
import UploadFile from '../../../create/components/upload-file'

import { useToast } from '@/contexts/toast'

import Image from 'next/image'
import Spinner from '@/public/images/spinner-white.svg'

export default function EditCompanyForm({ uuid }) {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [industry, setIndustry] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState(null)
    const [logo, setLogo] = useState(null)

    const { notifyUser } = useToast()
    const { user } = useUser()
    const { updateCompany, getCompany } = useCompany()

    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault()
        if (logo.trim().length === 0) {
            notifyUser('error', 'Company Logo Is Required')
            return
        }

        updateCompany({
            uuid,
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

    useEffect(() => {
        if (user) {
            getCompany({
                uuid,
                setLoading,
                setData: res => {
                    let company = res.companies
                    if (company) {
                        setName(company?.name)
                        setIndustry(company?.industry)
                        setLocation(company?.location)
                        setEmail(company?.email)
                        setContact(company?.contact)
                        setWebsite(company?.website)
                        setDescription(company?.description || '')
                        setLogo(company?.logo || '')
                    }
                },
            })
        }
    }, [user])

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#FEFEFE] flex flex-col gap-6 mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl">
            <h4 className="text-tremor-brand-boulder900 text-base font-medium mb-2">
                Edit Company
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
            {description && (
                <InputGroup
                    description="About The Company"
                    label="DESCRIPTION"
                    placeholder=""
                    required={false}
                    setValue={setDescription}
                    type="long_text"
                    value={description}
                />
            )}

            {logo && (
                <UploadFile
                    description="This is the graphical symbol or emblem representing the organization."
                    title="COMPANY LOGO"
                    setFileUrl={setLogo}
                    fileUrl={logo}
                />
            )}
            <div className="flex w-full justify-end">
                <button
                    type="submit"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none`}>
                    {loading ? (
                        <>
                            Updating{' '}
                            <Image src={Spinner} alt="" className="w-8" />
                        </>
                    ) : (
                        <>Update Company</>
                    )}
                </button>
            </div>
        </form>
    )
}
