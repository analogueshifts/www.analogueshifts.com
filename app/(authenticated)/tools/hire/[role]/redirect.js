'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { saveData } from './save-data'

export default function Redirect({ role }) {
    const router = useRouter()

    useEffect(() => {
        // Save the data that will be used to prefill the form on the Cookies
        saveData(role, router)
    }, [])

    return <></>
}
