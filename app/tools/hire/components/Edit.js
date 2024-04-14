'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import DashboardLoader from '@/app/components/DashboardLoader'
import Cookies from 'js-cookie'

export default function Edit({ slug }) {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchJobs = () => {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/dashboard/'
        setLoading(true)
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        axios
            .request(config)
            .then(res => {
                let filteredData = res.data.hires.filter(
                    item => item.slug === slug,
                )[0]
                if (filteredData) {
                    Cookies.set(
                        'jobEditIngData',
                        JSON.stringify({
                            jobInformation: {
                                title: filteredData.title,
                                description: filteredData.description,
                                identifierName: filteredData.identifier.name,
                                identifierValue: filteredData.identifier.value,
                                datePosted: filteredData.datePosted,
                                validThrough: filteredData.validThrough,
                            },
                            organizationInformation: {
                                organizationName:
                                    filteredData.hiringOrganization.name,
                                organizationUrl:
                                    filteredData.hiringOrganization.sameAs,
                                organizationLogo:
                                    filteredData.hiringOrganization.logo,
                            },
                            jobLocation: {
                                ...filteredData.jobLocation.address,
                                jobLocationType: filteredData.jobLocationType,
                                stateRequirements: [
                                    ...filteredData.applicantLocationRequirements.filter(
                                        item => item['@type'] === 'State',
                                    ),
                                ],
                                countryRequirements: [
                                    ...filteredData.applicantLocationRequirements.filter(
                                        item => item['@type'] === 'Country',
                                    ),
                                ],
                            },
                            jobDetails: {
                                employmentType: filteredData.employmentType,
                                apply: filteredData.apply,
                                salaryCurrency:
                                    filteredData.baseSalary.currency,
                                salaryValue:
                                    filteredData.baseSalary.value.value,
                                salaryUnitText:
                                    filteredData.baseSalary.value.unitText,
                            },
                            editId: filteredData.id,
                        }),
                    )
                    router.push(`/tools/hire/edit/${slug}/job-information`)
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
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }
    }, [])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Hire
                </h2>
            }>
            {' '}
            {loading && <DashboardLoader />}
        </Authenticated>
    )
}
