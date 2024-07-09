'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Authenticated from '@/app/layouts/authenticated'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/user'

export default function EditJobLayout({ children }) {
    const pathname = usePathname()
    const { user, setUser } = useUser()
    const [fieldForms, setFieldForms] = useState(['job-information'])
    const [initialData, setInitialData] = useState(null)
    const router = useRouter()

    useEffect(() => {
        let jobEditIngData = Cookies.get('jobEditingData')
        if (!jobEditIngData) {
            router.push('/tools/hire')
        } else {
            setInitialData(JSON.parse(jobEditIngData))
        }
    }, [])

    useEffect(() => {
        if (pathname.endsWith('job-information')) {
            setFieldForms(['job-information'])
        } else if (pathname.endsWith('job-details')) {
            setFieldForms(['job-information', 'job-details'])
        } else if (pathname.endsWith('job-location')) {
            setFieldForms(['job-information', 'job-details', 'job-location'])
        } else if (pathname.endsWith('organization-information')) {
            setFieldForms([
                'job-information',
                'job-details',
                'job-location',
                'organization-information',
            ])
        }
    }, [pathname])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Hire
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
                {initialData && children}
            </section>
        </Authenticated>
    )
}
