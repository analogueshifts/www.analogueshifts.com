'use client'
import { useEffect } from 'react'
import Authenticated from '@/app/layouts/authenticated'
import { useRouter } from 'next/navigation'

export default function Create() {
    const router = useRouter()

    useEffect(() => {
        router.push('/tools/hire/create/job-information')
    }, [])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Hire
                </h2>
            }></Authenticated>
    )
}
