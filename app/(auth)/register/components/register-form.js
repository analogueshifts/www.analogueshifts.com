'use client'
import { useState } from 'react'
import Link from 'next/link'
import LoadingTwo from '@/components/ui/loading-spinner'
import FormInput from '@/components/application/form-input'
import DropdownMenu from '@/app/(authenticated)/tools/hire/components/dropdown-menu'
import { useAuth } from '@/hooks/auth'
import { useToast } from '@/contexts/toast'

export default function RegisterForm() {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [user_mode, setUserMode] = useState('job')
    const [loading, setLoading] = useState(false)
    const { register } = useAuth()
    const { notifyUser } = useToast()

    async function submit(e) {
        e.preventDefault()

        // Check for Confirm Password
        if (password !== confirm_password) {
            notifyUser('error', 'Password Must Match with Confirm Password')
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
            user_mode,
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
                <div className="w-full pb-5 flex flex-col gap-2.5">
                    <p className="text-base font-normal text-tremor-content-grayText">
                        Account Type
                    </p>
                    <div className={`w-full h-12`}>
                        <DropdownMenu
                            authForm={true}
                            list={['Job Seeker', 'Recruiter']}
                            value={
                                user_mode === 'job' ? 'Job Seeker' : 'Recruiter'
                            }
                            onChange={value =>
                                setUserMode(
                                    value === 'Job Seeker' ? 'job' : 'hire',
                                )
                            }
                        />
                    </div>
                </div>
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
