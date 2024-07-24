'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { toastConfig } from '@/utils/toast-config'
import { toast } from 'react-toastify'

export default function UnverifiedBanner({
    visible,
    setVisible,
    token,
    setLoading,
}) {
    const router = useRouter()
    const [bottom, setBottom] = useState(visible ? 0 : -120)

    useEffect(() => {
        setBottom(visible ? 0 : -120)
    }, [visible])

    // Send Verification Email
    function handleSendVerificationEmail() {
        const axios = require('axios')
        const url =
            process.env.NEXT_PUBLIC_BACKEND_URL +
            '/email/verification-notification'
        let config = {
            url: url,
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }

        setLoading(true)

        axios
            .request(config)
            .then(res => {
                setLoading(false)
                // Take user to Email Verification Page
                router.push('/email-verification')
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, toastConfig)
            })
    }

    return (
        <div
            style={{ bottom: bottom }}
            className="z-[2000] duration-500 fixed w-screen rounded-tr-3xl rounded-tl-3xl right-0 h-28 bg-white shadow-2xl md:px-12 px-4 py-5">
            <div className="w-full flex justify-between items-center">
                <p className="text-base  font-bold text-tremor-brand-boulder950">
                    Unverified Email
                </p>
                <button
                    onClick={() => setVisible(false)}
                    className="bg-transparent md:translate-x-8 md:-translate-y-3 hover:bg-black/5 outline-none w-8 h-8 flex items-center justify-center text-tremor-brand-boulder700 rounded-full">
                    <X width={17} />
                </button>
            </div>
            <div className="w-full flex justify-between items-center">
                <p className="text-sm  font-medium text-tremor-brand-boulder400">
                    Your email address has not been verified.
                </p>
                <Button
                    onClick={() => {
                        setVisible(false)
                        handleSendVerificationEmail()
                    }}
                    className="h-8 bg-tremor-background-lightYellow hover:bg-tremor-background-lightYellow/90 text-xs">
                    Verify Email
                </Button>
            </div>
        </div>
    )
}
