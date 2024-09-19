'use client'
import { useState } from 'react'
import { useToast } from '@/contexts/toast'
import InputGroup from './input-group'
import DropdownGroup from './dropdown-group'
import MultipleDropdown from './multiple-dropdown'

import countries from '../utilities/countries.json'
import niches from '../utilities/niches.json'
import salaryRanges from '../utilities/salary-ranges.json'

import UserImage from '@/public/icons/user.svg'
import PhoneImage from '@/public/icons/phone.svg'
import EnvelopeImage from '@/public/icons/envelope.svg'
import BuildingImage from '@/public/icons/building.svg'
import LocationImage from '@/public/icons/location.svg'
import People from '@/public/icons/people.svg'
import Niche from '@/public/icons/niche.svg'
import Wallet from '@/public/icons/wallet.svg'
import Link from 'next/link'
import Calendar from '@/public/icons/calender.svg'
import Spinner from '@/public/images/rolling-spinner.svg'
import Image from 'next/image'

export default function Form() {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [country, setCountry] = useState('')
    const [numberOfTalents, setNumberOfTalents] = useState('')
    const [niche, setNiche] = useState([])
    const [salaryRange, setSalaryRange] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const { notifyUser } = useToast()

    const allEntered = () => {
        return [
            first_name,
            last_name,
            phone_number,
            email,
            companyName,
            country,
            numberOfTalents,
            jobDescription,
        ].includes('')
    }

    const handleSubmit = async e => {
        e.preventDefault()

        let message = `
      Dear AnalogueShifts,

      I am reaching out to you regarding to help me hire talents. Below are my details:

      Name: ${first_name} ${last_name}
      Phone Number: ${phone_number}
      Business Email: ${email}
      Company Name: ${companyName}
      Country: ${country}
      Number of Talents: ${numberOfTalents}
      Niche: ${niche.join(', ')}
      Salary Range: ${salaryRange}
      Job Description: ${jobDescription}

      I look forward to the possibility of working together.

      Best regards,
      ${first_name} ${last_name}
    `

        const axios = require('axios')
        const data = {
            name: first_name + ' ' + last_name,
            email,
            tel: phone_number,
            subject: 'New Hire Talent Request',
            message,
        }
        const config = {
            method: 'POST',
            url: process.env.NEXT_PUBLIC_BACKEND_URL + '/contact',
            headers: { 'Content-Type': 'application/json' },
            data: data,
        }

        try {
            setLoading(true)
            await axios.request(config)
            setLoading(false)
            notifyUser(
                'success',
                'Hiring request sent successfully, We will get in touch.',
                'right',
            )
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Message sending failed, Try again later',
                'right',
            )
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full h-max items-center grid grid-cols-2 gap-x-[27px] gap-y-6">
            <div className="1186:col-span-1 col-span-2">
                {' '}
                <InputGroup
                    image={UserImage}
                    label="First Name"
                    placeholder="First Name"
                    value={first_name}
                    onChange={setFirstName}
                    type="text"
                    required={true}
                />
            </div>
            <div className="1186:col-span-1 col-span-2">
                {' '}
                <InputGroup
                    image={UserImage}
                    label="Last Name"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={setLastName}
                    type="text"
                    required={true}
                />
            </div>
            <div className="1186:col-span-1 col-span-2">
                {' '}
                <InputGroup
                    image={PhoneImage}
                    label="Phone Number"
                    placeholder="Phone Number"
                    value={phone_number}
                    onChange={setPhoneNumber}
                    type="text"
                    required={true}
                />
            </div>

            <div className="1186:col-span-1 col-span-2">
                <InputGroup
                    image={EnvelopeImage}
                    label="Business Email"
                    placeholder="Business Email"
                    value={email}
                    onChange={setEmail}
                    type="email"
                    required={true}
                />
            </div>

            <div className="1186:col-span-1 col-span-2">
                {' '}
                <InputGroup
                    image={BuildingImage}
                    label="Company Name"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={setCompanyName}
                    type="text"
                    required={true}
                />
            </div>
            <div className="1186:col-span-1 col-span-2">
                {' '}
                <InputGroup
                    image={People}
                    label="Number of Talents You’re Hiring"
                    placeholder="Enter number of talents"
                    value={numberOfTalents}
                    onChange={setNumberOfTalents}
                    type="text"
                    required={true}
                />
            </div>

            <div className="col-span-2">
                <DropdownGroup
                    image={LocationImage}
                    label="Company Location"
                    placeholder="Select country"
                    value={country}
                    onChange={setCountry}
                    required={true}
                    inCludeSearchBar={true}
                    list={countries}
                />
            </div>

            <div className="col-span-2">
                <DropdownGroup
                    image={Wallet}
                    label="Salary Range"
                    placeholder="Select salary range"
                    value={salaryRange}
                    onChange={setSalaryRange}
                    required={false}
                    inCludeSearchBar={false}
                    list={salaryRanges}
                />
            </div>
            <div className="col-span-2">
                <MultipleDropdown
                    setValue={setNiche}
                    image={Niche}
                    label="Niche"
                    placeholder="Select Niche"
                    value={niche}
                    required={true}
                    inCludeSearchBar={true}
                    list={niches}
                />
            </div>
            <div className="col-span-2 mb-4">
                {' '}
                <InputGroup
                    label="Job Description"
                    placeholder="Enter a brief description of the job, including key responsibilities, qualifications, and any specific skills or experience you're looking for."
                    value={jobDescription}
                    onChange={setJobDescription}
                    type="textarea"
                    required={true}
                />
            </div>
            <button
                type="submit"
                disabled={allEntered()}
                className={`col-span-2 h-14 rounded-2xl text-tremor-brand-boulder50 bg-tremor-background-darkYellow flex justify-center items-center text-base font-bold ${
                    allEntered() ? 'opacity-50' : 'opacity-100'
                }`}>
                {loading ? (
                    <Image src={Spinner} alt="" className="w-7 h-max" />
                ) : (
                    'Submit'
                )}
            </button>
            <div className="col-span-2 flex justify-center flex-wrap items-center gap-[13.5px]">
                <p className="font-medium text-base large:text-lg text-[#292929]">
                    Want to speak to us on a call instead?{' '}
                </p>
                <Link
                    href="https://calendly.com/kennethmalaka/30min"
                    className="flex items-center gap-1.5 large:gap-2.5 font-normal text-sm large:text-base text-tremor-background-darkYellow">
                    <Image src={Calendar} alt="" /> Schedule a call
                </Link>
            </div>
        </form>
    )
}
