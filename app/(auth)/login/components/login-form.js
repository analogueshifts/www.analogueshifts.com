'use client'
import LoadingTwo from '@/components/ui/loading-spinner'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

import FormInput from '@/components/application/form-input'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()

    async function submit(e) {
        e.preventDefault()

        login({ email, password, setLoading })
    }

    return (
        <>
            {loading && <LoadingTwo />}
            <form onSubmit={submit} className="pt-11 w-full flex flex-col">
                <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                    Welcome!
                </p>
                <p className="font-bold text-3xl text-[#292929] pb-5">
                    Sign Into Your Account
                </p>

                <FormInput
                    icon="fa-solid fa-envelope"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    placeholder="Enter Email"
                    value={email}
                />

                <FormInput
                    icon="fa-solid fa-lock"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    placeholder="Enter Password"
                    value={password}
                />
                <button
                    type="submit"
                    className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                    Login
                </button>
                <div className="w-full pt-4 flex justify-center items-center gap-1">
                    <Link
                        href="/forgot-password"
                        className="font-normal cursor-pointer text-sm text-black/90">
                        Forgotten Password?
                    </Link>
                </div>
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
