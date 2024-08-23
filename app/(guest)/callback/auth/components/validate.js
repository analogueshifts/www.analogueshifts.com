'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/auth'

export default function Validate() {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const router = useRouter()

    const { validateApp } = useAuth()

    useEffect(() => {
        if (token) {
            validateApp({ appToken: token })
        } else {
            router.push('/')
        }
    }, [])

    return (
        <main className="w-full h-max py-20 flex justify-center items-center">
            <h2 className="text-tremor-brand-boulder900 font-medium text-base">
                Validating...
            </h2>
        </main>
    )
}
