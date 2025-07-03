'use client'
import { useState, useEffect } from 'react'
import employmentTypes from '@/app/(guest)/jobs/resources/employment-types.json'
import Image from 'next/image'
import Check from '@/public/icons/check.svg'
import Dropdown from '../../components/dropdown'
import ActionList from '../../components/action-list'
import { useToast } from '@/contexts/toast'
import Spinner from '@/public/images/spinner-white.svg'
import { currencySymbols, countries } from '../constants/contants'

export default function PreferenceForm() {
    const [jobTypes, setJobTypes] = useState([])
    const [currency, setCurrency] = useState('USD')
    const [salaryValue, setSalaryValue] = useState('')
    const [locations, setLocations] = useState([])
    const [locationTracker, setLocationTracker] = useState('')
    const [loading, setLoading] = useState(false)
    const { notifyUser } = useToast()

    const toggleJobType = value => {
        if (jobTypes.includes(value)) {
            setJobTypes(prev => prev.filter(item => item !== value))
        } else {
            setJobTypes(prev => [...prev, value])
        }
    }

    useEffect(() => {
        if (locationTracker !== '' && !locations?.includes(locationTracker)) {
            if (locations?.length >= 4) {
                notifyUser(
                    'error',
                    'You can select a maximum of 4 locations',
                    'right',
                )
            } else {
                setLocations(prev => [...prev, locationTracker])
            }
        }
    }, [locationTracker])

    return (
        <form className="w-full flex flex-col items-center">
            <h1 className="text-center tablet:text-base text-lg mb-3 large:mb-4 large:text-xl text-black font-medium">
                Set your job search preferences
            </h1>
            <p className="text-tremor-brand-boulder600 tablet:text-xs tablet:leading-4 text-center text-sm font-normal leading-7 mb-11">
                Your answers determine which jobs we recommend for you and which
                recruiter see your profile.
            </p>
            <div className="w-full mb-5 flex flex-col gap-2.5">
                <p className="text-tremor-brand-boulder950 large:text-base text-sm font-medium tablet:text-xs">
                    What type of job are you interested in?
                </p>
                <div className="w-full flex flex-wrap tablet:gap-2 gap-4">
                    {employmentTypes.map(item => {
                        return (
                            <div
                                key={item.value}
                                onClick={() => toggleJobType(item.value)}
                                className={`large:h-50 duration-300 cursor-pointer tablet:px-2.5 large:pl-6 pl-5 large:pr-5 pr-4 h-11 flex justify-between items-center w-max large:gap-2.5 gap-2 rounded-2xl ${
                                    jobTypes.includes(item.value)
                                        ? 'bg-[#FEC84B] text-white border border-transparent'
                                        : 'text-tremor-brand-boulder950 bg-white border border-tremor-brand-boulder100'
                                }`}>
                                <span className="large:text-base tablet:text-xs text-sm font-normal ">
                                    {item.label}
                                </span>
                                <div
                                    className={`large:w-6 large:h-6 tablet:w-3.5 tablet:h-3.5 w-5 h-5 rounded-full ${
                                        jobTypes.includes(item.value)
                                            ? ''
                                            : 'border border-tremor-brand-boulder100'
                                    }`}>
                                    {jobTypes.includes(item.value) && (
                                        <Image
                                            src={Check}
                                            alt=""
                                            className="w-full h-full"
                                        />
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full mb-5 flex flex-col">
                <p className="text-tremor-brand-boulder950 tablet:mb-1.5 tablet:text-xs mb-3 large:text-base text-sm font-medium">
                    What is your desired salary?
                </p>
                <span className="text-tremor-brand-boulder500 tablet:text-[10px] font-normal text-xs mb-5">
                    This information will never be shown on your public profile
                </span>
                <div className="w-max max-w-full flex gap-4">
                    <div className="large:h-50 px-6 flex items-center gap-3 h-11 w-40 overflow-hidden rounded-2xl border border-tremor-brand-boulder100">
                        <p className="w-max text-tremor-brand-boulder950 font-normal large:text-base text-sm">
                            {currencySymbols[currency] || '$'}
                        </p>
                        <input
                            type="text"
                            placeholder="2000"
                            value={salaryValue}
                            onChange={e => setSalaryValue(e.target.value)}
                            className="w-full placeholder:text-tremor-brand-boulder500 outline-none bg-transparent text-tremor-brand-boulder950 large:text-base text-sm font-normal h-full  border-none"
                        />
                    </div>
                    <div className="h-11 large:h-50 w-72">
                        <Dropdown
                            currency={true}
                            placeholder="Select Currency"
                            value={currency}
                            setValue={setCurrency}
                            list={['USD', 'EUR', 'GBP', 'NGN']}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <p className="text-tremor-brand-boulder950 tablet:mb-1.5 tablet:text-xs mb-3 large:text-base text-sm font-medium">
                    What locations do you want to work in?
                </p>
                <span className="text-tremor-brand-boulder500 tablet:text-[10px] font-normal text-xs mb-3.5">
                    You can select max of 4
                </span>
                <ActionList
                    list={locations}
                    setList={list => setLocations(list)}
                />
                <div className="w-full mt-4">
                    <Dropdown
                        currency={true}
                        placeholder="Select Country"
                        value={locationTracker}
                        setValue={setLocationTracker}
                        list={countries}
                    />
                </div>
            </div>
            <div className="w-full flex justify-end mt-8">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-tremor-background-darkYellow h-10 rounded-xl text-xs font-semibold text-tremor-brand-boulder50 px-9">
                    {loading ? (
                        <Image className="w-max h-7" src={Spinner} alt="" />
                    ) : (
                        'Save'
                    )}
                </button>
            </div>
        </form>
    )
}
