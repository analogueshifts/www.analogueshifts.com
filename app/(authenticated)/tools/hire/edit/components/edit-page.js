'use client'
import { useUser } from '@/contexts/user'
import { useToast } from '@/contexts/toast'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Edit({ slug }) {
    const router = useRouter()
    const { user } = useUser()
    const { notifyUser } = useToast()

    const [loading, setLoading] = useState(false)
    const token = Cookies.get('analogueshifts')

    // We fetch the Job to be editted, and store the data in the Cookie, so we can access the Cookies from the other sub pages without having to fetch the Job over again
    const fetchJobs = () => {
        let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/edit/' + slug
        setLoading(true)
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        axios
            .request(config)
            .then(res => {
                let jobData = res.data.data.hire
                if (jobData) {
                    Cookies.set(
                        'jobEditingData',
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
                    // If The Job Wasn't found
                    notifyUser('error', 'Error Getting Jobs')
                    router.push('/404')
                }

                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                router.push('/404')
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                        error?.response?.data?.data?.message ||
                        'Error Getting Jobs',
                )
            })
    }

    useEffect(() => {
        if (user) {
            fetchJobs()
        }
    }, [user])

    return <></>
}
