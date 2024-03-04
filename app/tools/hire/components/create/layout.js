'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'

export default function CreateJobLayout({ children }) {
    const pathname = usePathname()
    const [user, setUser] = useState(null)
    const [fieldForms, setFieldForms] = useState(['job-information'])

    useEffect(() => {
        let storedData = JSON.parse(Cookies.get('analogueshifts'))
        if (storedData) {
            setUser(storedData)
        }
    }, [])

    useEffect(() => {
        if (pathname.slice(19, pathname.length) === 'job-information') {
            setFieldForms(['job-information'])
        } else if (
            pathname.slice(19, pathname.length) === 'organization-information'
        ) {
            setFieldForms(['job-information', 'organization-information'])
        } else if (pathname.slice(19, pathname.length) === 'job-location') {
            setFieldForms([
                'job-information',
                'organization-information',
                'job-location',
            ])
        } else if (pathname.slice(19, pathname.length) === 'job-details') {
            setFieldForms([
                'job-information',
                'organization-information',
                'job-location',
                'job-details',
            ])
        }
    }, [pathname])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire Talents
                </h2>
            }>
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
                </div>
                {children}
            </section>
        </Authenticated>
    )
}

// Cookies.set(
//     "userData",
//     JSON.stringify({
//       ...JSON.parse(storedData),
//       contactData: data,
//     }),
//     { expires: 7 }
//   );
