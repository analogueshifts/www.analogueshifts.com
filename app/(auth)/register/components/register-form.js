'use client'
import { useState } from 'react'
import Link from 'next/link'
import LoadingTwo from '@/components/ui/loading-spinner'
import { errorToast } from '@/utils/error-toast'
import FormInput from '@/components/application/form-input'
import { useAuth } from '@/hooks/auth'

export default function RegisterForm() {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { register } = useAuth()

    async function submit(e) {
        e.preventDefault()

        // Check for Confirm Password
        if (password !== confirm_password) {
            errorToast('Bad Input', 'Password Must Match with Confirm Password')
            return
        }

        let device_token = crypto.randomUUID()
        let password_confirmation = confirm_password

        register({
            first_name,
            last_name,
            email,
            password,
            password_confirmation,
            device_token,
            setLoading,
        })
    }

    return (
        <>
            {' '}
            {loading && <LoadingTwo />}
            <form onSubmit={submit} className="pt-11 w-full flex flex-col">
                <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                    Welcome!
                </p>
                <p className="font-bold text-3xl text-[#292929] pb-5">
                    Join our Community
                </p>
                <FormInput
                    icon="fa-solid fa-signature"
                    type="text"
                    onChange={e => setFirstName(e.target.value)}
                    label="First Name"
                    placeholder="First Name"
                    value={first_name}
                />
                <FormInput
                    icon="fa-solid fa-signature"
                    type="text"
                    onChange={e => setLastName(e.target.value)}
                    label="Last Name"
                    placeholder="Last Name"
                    value={last_name}
                />
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
                <FormInput
                    icon="fa-solid fa-lock"
                    type="password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    label="Confirm Password"
                    placeholder="Enter Password"
                    value={confirm_password}
                />
                <button
                    type="submit"
                    className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                    Sign Up
                </button>
                <div className="w-full pt-4 flex justify-center items-center gap-1">
                    <p className="font-normal text-sm text-black/90">
                        Already have an account?
                    </p>
                    <Link
                        href="/login"
                        className="font-normal text-sm text-tremor-background-darkYellow">
                        Sign In
                    </Link>
                </div>
            </form>
        </>
    )
}
