'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function CreateJobLayout({ children }) {
    const pathname = usePathname()
    const [fieldForms, setFieldForms] = useState(['job-information'])

    useEffect(() => {
        if (pathname.slice(19, pathname.length) === 'job-information') {
            setFieldForms(['job-information'])
        } else if (pathname.slice(19, pathname.length) === 'job-details') {
            setFieldForms(['job-information', 'job-details'])
        } else if (pathname.slice(19, pathname.length) === 'job-location') {
            setFieldForms(['job-information', 'job-details', 'job-location'])
        } else if (
            pathname.slice(19, pathname.length) === 'organization-information'
        ) {
            setFieldForms([
                'job-information',
                'job-details',
                'job-location',
                'organization-information',
            ])
        }
    }, [pathname])

    return (
        <>
            <section className="bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-10 rounded-3xl">
                <div className="w-full mb-12 flex gap-y-2 gap-x-3 flex-wrap items-center">
                    <button
                        className={`text-sm font-medium ${
                            fieldForms.includes('job-information')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}>
                        Job Information
                    </button>
                    <i
                        className={`fas fa-angle-right text-sm font-medium ${
                            fieldForms.includes('job-details')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}></i>
                    <button
                        className={`text-sm font-medium ${
                            fieldForms.includes('job-details')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}>
                        Job Details
                    </button>

                    <i
                        className={`fas fa-angle-right text-sm font-medium ${
                            fieldForms.includes('job-location')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}></i>
                    <button
                        className={`text-sm font-medium ${
                            fieldForms.includes('job-location')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}>
                        Job Location
                    </button>

                    <i
                        className={`fas fa-angle-right text-sm font-medium ${
                            fieldForms.includes('organization-information')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}></i>

                    <button
                        className={`text-sm font-medium ${
                            fieldForms.includes('organization-information')
                                ? 'text-tremor-brand-boulder950'
                                : 'text-tremor-brand-boulder200'
                        }`}>
                        Organization Information
                    </button>
                </div>
                {children}
            </section>
        </>
    )
}
