'use client'
import LoadingTwo from '@/components/ui/loading-spinner'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useToast } from '@/contexts/toast'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp'

import { useAuth } from '@/hooks/auth'
import FormInput from '@/components/application/form-input'

export default function ResetPasswordForm() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [timeLeft, setTimeLeft] = useState(120)
    const [isCoutDown, setIsCountDown] = useState(true)

    const { notifyUser } = useToast()
    const { forgotPassword, validateOtp, resetPassword } = useAuth()

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

    useEffect(() => {
        let userEmail = Cookies.get('rest-password-email')
        if (userEmail) {
            setEmail(userEmail)
        } else {
            router.push('/forgot-password')
        }
    }, [])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const resendVerificationCode = async () => {
        await forgotPassword({ email, setLoading })
        setTimeLeft(120)
        setIsCountDown(true)
        notifyUser('success', 'Verification code sent sucessfully!')
    }

    const validateOTP = async () => {
        await validateOtp({
            otp,
            email,
            setLoading,
            resetPassword: passwordReset,
        })
    }

    const passwordReset = async () => {
        await resetPassword({
            email,
            password,
            password_confirmation: confirm_password,
            setLoading,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (password !== confirm_password) {
            notifyUser('error', 'Password must match with Confirm Password')
            return
        }
        try {
            await validateOTP()
        } catch (error) {
            notifyUser(
                'notifyUser',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed to reset password',
            )
        }
    }

    return (
        <>
            {loading && <LoadingTwo />}
            <form
                onSubmit={handleSubmit}
                method="post"
                className="pt-7 w-full flex flex-col">
                <p className="font-bold text-3xl text-[#292929] pb-5">
                    Reset Your Password
                </p>
                <p className="font-medium text-[15px] text-tremor-content-grayText pb-4">
                    Enter the 5 digit verification code sent to your email
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
                        value={otp}
                        onChange={value => setOtp(value)}>
                        <InputOTPGroup className="gap-3">
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <FormInput
                    icon={'fa-solid fa-envelope'}
                    label={'Email'}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={'Enter Email'}
                    type={'email'}
                    value={email}
                />

                <FormInput
                    icon={'fa-solid fa-lock'}
                    label={'New Password'}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={'Enter Password'}
                    type={'password'}
                    value={password}
                />

                <FormInput
                    icon={'fa-solid fa-lock'}
                    label={'Confirm Password'}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder={'Confirm Password'}
                    type={'password'}
                    value={confirm_password}
                />

                <button
                    type="submit"
                    className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                    Reset Password
                </button>
            </form>
        </>
    )
}
