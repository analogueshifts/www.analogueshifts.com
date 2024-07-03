'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/layouts/authenticated'
import { saveData } from './save-data'

export default function Redirect({ role }) {
    const router = useRouter()

    useEffect(() => {
        // Save the data that will be used to prefill the form on the Cookies
        saveData(role, router)
    }, [])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Hire Talents
                </h2>
            }></Authenticated>
    )
}
