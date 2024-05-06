'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/layouts/authenticated-layout'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import DashboardLoader from '@/components/application/dashboard-loader'
import Cookies from 'js-cookie'
import { toastConfig } from '@/utils/toast-config'

export default function Edit({ slug }) {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchJobs = () => {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/edit/' + slug
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
                let jobData = res.data.data.hire
                if (jobData) {
                    Cookies.set(
                        'jobEditIngData',
                        JSON.stringify({
                            jobInformation: {
                                title: jobData.title,
                                description: jobData.description,
                                identifierName: jobData.identifier.name
                                    ? jobData.identifier.name
                                    : '',
                                identifierValue: jobData.identifier.value
                                    ? jobData.identifier.value
                                    : '',
                                validThrough: jobData.validThrough,
                            },
                            organizationInformation: {
                                organizationName:
                                    jobData.hiringOrganization.name,
                                organizationUrl: jobData.hiringOrganization
                                    .sameAs
                                    ? jobData.hiringOrganization.sameAs
                                    : '',
                                organizationLogo: jobData.hiringOrganization
                                    .logo
                                    ? jobData.hiringOrganization.logo
                                    : '',
                            },
                            jobLocation: {
                                ...jobData.jobLocation.address,
                                jobLocationType: jobData.jobLocationType,
                                stateRequirements: [
                                    ...jobData.applicantLocationRequirements.filter(
                                        item => item['@type'] === 'State',
                                    ),
                                ],
                                countryRequirements: [
                                    ...jobData.applicantLocationRequirements.filter(
                                        item => item['@type'] === 'Country',
                                    ),
                                ],
                            },
                            jobDetails: {
                                employmentType: jobData.employmentType,
                                apply: jobData.apply,
                                directApply: jobData.directApply,
                                status: jobData.status,
                                salaryCurrency: jobData.baseSalary.currency,
                                salaryValue: jobData.baseSalary.value.value,
                                salaryUnitText:
                                    jobData.baseSalary.value.unitText,
                            },
                            editId: jobData.id,
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
                toast.error('Error Getting Jobs', toastConfig)
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
