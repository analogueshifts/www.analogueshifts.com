'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function EditJobLayout({ children }) {
    const pathname = usePathname()
    const [user, setUser] = useState(null)
    const [fieldForms, setFieldForms] = useState(['job-information'])
    const [initialData, setInitialData] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    let slug = pathname.slice(17, pathname.length).split('/')[0]

    const fetchJobs = () => {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/dashboard'
        setLoading(true)
        const axios = require('axios')
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
        }
        axios
            .request(config)
            .then(res => {
                let filteredData = res.data.hires.filter(
                    item => item.slug === slug,
                )[0]
                if (filteredData) {
                    setInitialData(filteredData)
                    console.log(filteredData)
                } else {
                    toast.error('Error Getting Jobs', {
                        position: 'top-right',
                        autoClose: 3000,
                    })
                    router.push('/404')
                }

                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                router.push('/404')
                toast.error('Error Getting Jobs', {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }

    useEffect(() => {
        if (user) {
            fetchJobs()
        }
    }, [user])

    useEffect(() => {
        let storedData = JSON.parse(Cookies.get('analogueshifts'))
        if (storedData) {
            setUser(storedData)
        }
    }, [])

    useEffect(() => {
        if (initialData) {
            Cookies.set(
                'jobEditIngData',
                JSON.stringify({
                    jobInformation: {
                        title: initialData.title,
                        description: initialData.description,
                        identifierName: initialData.identifier.name,
                        identifierValue: initialData.identifier.value,
                        datePosted: initialData.datePosted,
                        validThrough: initialData.validThrough,
                    },
                    organizationInformation: {
                        organizationName: initialData.hiringOrganization.name,
                        organizationUrl: initialData.hiringOrganization.sameAs,
                        organizationLogo: initialData.hiringOrganization.logo,
                    },
                    jobLocation: {
                        ...initialData.jobLocation.address,
                        jobLocationType: initialData.jobLocationType,
                        stateRequirements: [
                            ...initialData.applicantLocationRequirements.filter(
                                item => item['@type'] === 'State',
                            ),
                        ],
                        countryRequirements: [
                            ...initialData.applicantLocationRequirements.filter(
                                item => item['@type'] === 'Country',
                            ),
                        ],
                    },
                    jobDetails: {
                        employmentType: initialData.employmentType,
                        apply: initialData.apply,
                        salaryCurrency: initialData.baseSalary.currency,
                        salaryValue: initialData.baseSalary.value.value,
                        salaryUnitText: initialData.baseSalary.value.unitText,
                    },
                    editId: initialData.id,
                }),
            )
        }
    }, [initialData])

    useEffect(() => {
        if (pathname.endsWith('job-information')) {
            setFieldForms(['job-information'])
        } else if (pathname.endsWith('organization-information')) {
            setFieldForms(['job-information', 'organization-information'])
        } else if (pathname.endsWith('job-location')) {
            setFieldForms([
                'job-information',
                'organization-information',
                'job-location',
            ])
        } else if (pathname.endsWith('job-details')) {
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
            {loading && <DashboardLoader />}
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
                {initialData && children}
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
