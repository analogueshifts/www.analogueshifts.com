'use client'
import Group from '@/public/images/login/group.png'
import Avatar from '@/public/images/login/avatar.png'
import LoadingTwo from '@/components/ui/loading-spinner'
import Image from 'next/image'
import ApplicationLogo from '@/components/application/application-logo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { toastConfig } from '@/utils/toast-config'
import FormInput from '@/components/application/form-input'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/login'

    async function submit(e) {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    secret_key: process.env.NEXT_PUBLIC_SECRET_KEY,
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    device_token: crypto.randomUUID(),
                }),
            })
            const data = await res.json()
            if (data.success) {
                Cookies.set('analogueshifts', JSON.stringify(data.data))
                toast.success('Login Successful', toastConfig)
                let redirectionLink = Cookies.get('RedirectionLink')
                window.location.href = redirectionLink?.trim().length
                    ? redirectionLink
                    : '/dashboard'
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(error.message, toastConfig)
        }
    }

    useEffect(() => {
        const auth = Cookies.get('analogueshifts')
        if (auth) {
            window.location.href = '/dashboard'
            return null
        }
    }, [])

    return (
        <>
            {loading && <LoadingTwo />}
            <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
                <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
                    <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
                        <Image src={Group} alt="" className="absolute" />
                        <Image src={Avatar} alt="" />
                    </div>
                    <div className="lg:w-[450px] md:w-[350px] flex flex-col">
                        <ApplicationLogo />
                        <form
                            onSubmit={submit}
                            className="pt-11 w-full flex flex-col">
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
                    </div>
                </section>
            </main>
        </>
    )
}
