'use client'
import { useEffect } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Create() {
    const router = useRouter()

    const clearSavedData = () => {
        Cookies.remove('jobEditIngData')
    }

    useEffect(() => {
        clearSavedData()
        router.push('/tools/hire/create/job-information')
    }, [])

    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire
                </h2>
            }></Authenticated>
    )
}
