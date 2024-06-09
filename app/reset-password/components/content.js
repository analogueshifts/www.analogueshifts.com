'use client'
import LoadingTwo from '@/components/ui/loading-spinner'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Group from '@/public/images/login/group.png'
import Avatar from '@/public/images/login/avatar.png'
import Image from 'next/image'
import ApplicationLogo from '@/components/application/application-logo'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp'

export default function ResetPassword() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
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
        let userEmail = Cookies.get('rest-password-email')
        if (userEmail) {
            setEmail(userEmail)
        } else {
            router.push('/forget-password')
        }
    }, [])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const resendVerificationCode = () => {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/forgot-password'
        const axios = require('axios')
        let data = JSON.stringify({
            email: email,
        })

        let config = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        setLoading(true)
        axios
            .request(config)
            .then(response => {
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
                toast.error(
                    'An Error Occured, Please try again later',
                    toastConfig,
                )
                console.log(error)
            })
    }

    const validateOTP = async () => {
        const axios = require('axios')
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/check-otp'
        let config = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: { otp: otp, email: email },
        }
        try {
            const request = await axios.request(config)
            console.log(request)
            if (!request.data.success) {
                setLoading(false)
                toast.error('Invalid OTP', toastConfig)
            } else {
                await resetPassword()
            }
        } catch (error) {
            setLoading(false)
            toast.error('Invalid OTP', toastConfig)
        }
    }

    const resetPassword = async () => {
        const axios = require('axios')
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/reset-password'
        let config = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: email,
                password: password,
                password_confirmation: confirm_password,
            },
        }
        try {
            await axios.request(config)
            toast.success('Password Reset Successful', toastConfig)
            router.push('/login')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error('Failed to reset password', toastConfig)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (password !== confirm_password) {
            toast.error(
                'Password must match with Confirm Password',
                toastConfig,
            )
            return
        }
        try {
            setLoading(true)
            await validateOTP()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
            {loading && <LoadingTwo />}
            <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
                <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
                    <Image src={Group} alt="" className="absolute" />
                    <Image src={Avatar} alt="" />
                </div>
                <div className="lg:w-[450px] md:w-[350px] flex flex-col">
                    <ApplicationLogo />
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        className="pt-7 w-full flex flex-col">
                        <p className="font-bold text-3xl text-[#292929] pb-5">
                            Reset Your Password
                        </p>
                        <p className="font-medium text-[15px] text-tremor-content-grayText pb-4">
                            Enter the 5 digit verification code sent to your
                            email address. Didn't receive a code?{' '}
                            {isCoutDown ? (
                                <>
                                    you can request for a new code after{' '}
                                    <b>
                                        {minutes < 10 ? `0${minutes}` : minutes}
                                        :
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
                        <div className="w-full pb-5 flex flex-col gap-2.5">
                            <p className="text-base font-normal text-tremor-content-grayText">
                                Email
                            </p>
                            <div
                                className={`w-full relative flex items-center h-12`}>
                                <i className="fa-solid absolute left-5 fa-envelope text-base text-tremor-content-grayText w-8"></i>

                                <input
                                    className={`${
                                        errorMessage.length > 0
                                            ? 'border border-[#FF0000]'
                                            : 'border border-black/10'
                                    } w-full rounded-2xl h-full pl-12 pr-4  outline-none text-base font-normal text-gray-400`}
                                    placeholder="Enter Email"
                                    value={email}
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full pb-5 flex flex-col gap-2.5">
                            <p className="text-base font-normal text-tremor-content-grayText">
                                New Password
                            </p>
                            <div
                                className={`w-full relative flex items-center h-12`}>
                                <i className="fa-solid absolute left-5 fa-lock text-base text-tremor-content-grayText w-8"></i>

                                <input
                                    className={`${
                                        errorMessage.length > 0
                                            ? 'border border-[#FF0000]'
                                            : 'border border-black/10'
                                    } w-full rounded-2xl h-full pl-12 pr-4  outline-none text-base font-normal text-gray-400`}
                                    placeholder="Enter Password"
                                    value={password}
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full pb-5 flex flex-col gap-2.5">
                            <p className="text-base font-normal text-tremor-content-grayText">
                                Confirm Password
                            </p>
                            <div
                                className={`w-full relative flex items-center h-12`}>
                                <i className="fa-solid absolute left-5 fa-lock text-base text-tremor-content-grayText w-8"></i>

                                <input
                                    className={`${
                                        errorMessage.length > 0
                                            ? 'border border-[#FF0000]'
                                            : 'border border-black/10'
                                    } w-full rounded-2xl h-full pl-12 pr-4  outline-none text-base font-normal text-gray-400`}
                                    placeholder="Confirm Password"
                                    value={confirm_password}
                                    type="password"
                                    onChange={e =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                            {errorMessage.length > 0 && (
                                <p className="text-base font-normal text-[#ff0000]">
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                            Reset Password
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}
