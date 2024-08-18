'use client'

import { useState, useEffect } from 'react'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import LoadingTwo from '@/components/ui/loading-spinner'
import { useRouter } from 'next/navigation'
import { useToast } from '@/contexts/toast'

export default function EmailVerificationForm() {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [timeLeft, setTimeLeft] = useState(120)
    const [isCoutDown, setIsCountDown] = useState(true)
    const { notifyUser } = useToast()

    const router = useRouter()
    const token = Cookies.get('analogueshifts')

    // Check if the user is in countDown Mode, if so, decrement the counter.
    // If the counter is = 0, remove the user from countDown mode.
    useEffect(() => {
        if (isCoutDown) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime === 0) {
                        clearInterval(timer)
                        setIsCountDown(false)
                        return 0
                    }
                    return prevTime - 1
                })
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [isCoutDown])

    // Check For user SESSION
    useEffect(() => {
        // Redirect To Login if User is not Authenticated

        if (token === null || token === undefined) {
            router.push('/login')
            return null
        }
    }, [])

    // The Timer minutes and seconds left
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    // Handle Resend Verification Code
    const resendVerificationCode = () => {
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
                // Start the timer, so the user wait for 2 minutes before requesting for another code.
                setLoading(false)
                setTimeLeft(120)
                setIsCountDown(true)
                notifyUser('success', 'Verification code sent sucessfully!')
            })
            .catch(error => {
                setLoading(false)
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                        error?.response?.data?.data?.message,
                )
                if (error?.response?.status === 401) {
                    clearUserSession()
                }
            })
    }

    // Handle Form Submit
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
                Authorization: 'Bearer ' + token,
            },
            data: { OTP: value },
        }
        setLoading(true)
        axios
            .request(config)
            .then(res => {
                setLoading(false)
                if (res.data.success) {
                    notifyUser('success', 'Your email has been verified')
                    router.push('/dashboard')
                } else {
                    setValue('')
                    notifyUser('error', 'Invalid OTP')
                }
            })
            .catch(error => {
                setLoading(false)
                setValue('')
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                        error?.response?.data?.data?.message ||
                        'Invalid OTP',
                )
                if (error?.response?.status === 401) {
                    clearUserSession()
                }
            })
    }

    return (
        <form
            onSubmit={handleSubmit}
            method="post"
            className="pt-7 w-full flex flex-col">
            {loading && <LoadingTwo />}
            <p className="font-bold text-2xl text-[#292929] pb-5">
                Email verification
            </p>
            <p className="font-medium text-[15px] text-tremor-content-grayText pb-4">
                Please enter the 5 digit verification code sent to your email
                address. Didn't receive a code?{' '}
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

            <div className="w-full pb-5 flex flex-col gap-2.5">
                <p className="text-base font-normal text-tremor-content-grayText">
                    OTP
                </p>
                <InputOTP
                    maxLength={5}
                    value={value}
                    onChange={value => setValue(value)}>
                    <InputOTPGroup className="gap-3">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <button
                type="submit"
                className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                Submit
            </button>
        </form>
    )
}
