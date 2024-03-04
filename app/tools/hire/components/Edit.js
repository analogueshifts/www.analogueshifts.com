'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function Edit({ slug }) {
    const router = useRouter()

    useEffect(() => {
        router.push(`/tools/hire/edit/${slug}/job-information`)
    }, [])

    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire Talents
                </h2>
            }></Authenticated>
    )
}
