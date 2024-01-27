'use client'
import Group from '@/public/images/login/group.png'
import Avatar from '@/public/images/login/avatar.png'
import Image from 'next/image'
import ApplicationLogo from '@/app/components/ApplicationLogo'
import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
            <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
                <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
                    <Image src={Group} alt="" className="absolute" />
                    <Image src={Avatar} alt="" />
                </div>
                <div className="lg:w-[450px] md:w-[350px] flex flex-col">
                    <ApplicationLogo />
                    <form method="post" className="pt-11 w-full flex flex-col">
                        <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                            Forgot your Password?
                        </p>
                        <p className="font-bold text-3xl text-[#292929] pb-5">
                            Enter your email address
                        </p>
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
                </div>
            </section>
        </main>
    )
}
