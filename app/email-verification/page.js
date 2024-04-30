'use client'

import { useState, useEffect } from 'react'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp'
import { Button } from '@/components/ui/button'

import LoadingTwo from '@/components/ui/loading-spinner'
import Navigation from '@/components/application/navigation'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'

export default function Page() {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [timeLeft, setTimeLeft] = useState(120)
    const [isCoutDown, setIsCountDown] = useState(true)

    useEffect(() => {
        if (isCoutDown) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime === 0) {
                        clearInterval(timer)

                        // Logic
                        setIsCountDown(false)
                        return 0
                    }
                    return prevTime - 1
                })
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [isCoutDown])

    useEffect(() => {
        // Redirect To Login if User is not Authenticated
        const auth = Cookies.get('analogueshifts')
        if (auth === null || auth === undefined) {
            Cookies.set('RedirectionLink', pathname)
            window.location.href = '/login'
            return null
        } else {
            setUser(JSON.parse(auth))
        }
    }, [])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const resendVerificationCode = () => {
        const axios = require('axios')
        const url =
            process.env.NEXT_PUBLIC_BACKEND_URL +
            '/email/verification-notification'
        let config = {
            url: url,
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + user?.token,
            },
        }

        setLoading(true)

        axios
            .request(config)
            .then(res => {
                setLoading(false)
                setTimeLeft(120)
                setIsCountDown(true)
                toast.success(
                    'Verification code sent sucessfully!',
                    toastConfig,
                )
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, toastConfig)
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const axios = require('axios')
        const url =
            process.env.NEXT_PUBLIC_BACKEND_URL + '/email/verification-otp'
        let config = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + user?.token,
            },
            data: { OTP: value },
        }
        setLoading(true)
        axios
            .request(config)
            .then(res => {
                setLoading(false)
                if (res.data.success) {
                    toast.success('Your email has been verified', toastConfig)
                    window.location.href = '/dashboard'
                } else {
                    setValue('')
                    toast.error('Invalid OTP', toastConfig)
                }
            })
            .catch(error => {
                setLoading(false)
                setValue('')
                toast.error('Invalid OTP', toastConfig)
            })
    }

    return (
        <section className="w-full">
            {loading && <LoadingTwo />}
            <Navigation />
            <div className="w-full flex justify-center mt-20">
                <form
                    onSubmit={handleSubmit}
                    className="w-max max-w-[400px] flex flex-col gap-4 items-start">
                    <h3 className="font-semibold text-tremor-brand-boulder950">
                        Email Verification
                    </h3>
                    <InputOTP
                        maxLength={5}
                        value={value}
                        onChange={value => setValue(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                        </InputOTPGroup>
                    </InputOTP>
                    <p className="text-[13px] font-medium text-tremor-brand-boulder400 mb-3">
                        Please enter the 5 digit verification code sent to your
                        email address. Didn't receive a code?{' '}
                        {isCoutDown ? (
                            <>
                                you can request for a new code after{' '}
                                <b>
                                    {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </b>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={resendVerificationCode}
                                    type="button"
                                    className="outline-none bg-none border-none font-bold">
                                    Request new code
                                </button>
                            </>
                        )}
                    </p>
                    <Button className="bg-as hover:bg-as/70" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    )
}
