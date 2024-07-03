'use client'
import { useState } from 'react'
import Link from 'next/link'
import LoadingTwo from '@/components/ui/loading-spinner'
import FormInput from '@/components/application/form-input'
import { useAuth } from '@/hooks/auth'

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const { forgotPassword } = useAuth()

    // Handle Form Submit
    function submit(e) {
        e.preventDefault()

        forgotPassword({ email, setLoading })
    }

    return (
        <>
            {loading && <LoadingTwo />}
            <form
                onSubmit={submit}
                method="post"
                className="pt-11 w-full flex flex-col">
                <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                    Forgot your Password?
                </p>
                <p className="font-bold text-3xl text-[#292929] pb-5">
                    Enter your email address
                </p>
                <FormInput
                    icon="fa-solid fa-envelope"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                />

                <button
                    type="submit"
                    className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                    Submit
                </button>

                <div className="w-full pt-2 flex justify-center items-center gap-1">
                    <p className="font-normal text-sm text-black/90">
                        Don't have an account?
                    </p>
                    <Link
                        href="/register"
                        className="font-normal text-sm text-tremor-background-darkYellow">
                        Sign Up
                    </Link>
                </div>
            </form>
        </>
    )
}
