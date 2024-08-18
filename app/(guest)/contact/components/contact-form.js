'use client'
import { useState } from 'react'
import { useToast } from '@/contexts/toast'
import BackgroundImages from './bg-images'

import Link from 'next/link'
import Image from 'next/image'
import InputGroup from './input-group'
import CustomCheckBox from './custom-checkbox'
import Spinner from '@/public/images/contact-form/spinner.svg'
import RightArrow from '@/public/images/guest-layout/products/right-arrow.svg'
import Briefcase from '@/public/images/guest-layout/hero/filled_briefcase.svg'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [tel, setTel] = useState('')
    const [acceptPrivacy, setAcceptPrivacy] = useState(false)

    const { notifyUser } = useToast()

    const sendMail = async e => {
        e.preventDefault()
        const axios = require('axios')
        const data = { name, email, tel, subject, message }
        const config = {
            method: 'POST',
            url: process.env.NEXT_PUBLIC_BACKEND_URL + '/contact',
            headers: { 'Content-Type': 'application/json' },
            data: data,
        }
        if (!acceptPrivacy) {
            notifyUser('error', 'Must accept our Privacy Policy')
            return
        }

        try {
            setLoading(true)
            await axios.request(config)
            setLoading(false)
            notifyUser(
                'success',
                'Message sent successfully, We will get in touch.',
            )
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
            setTel('')
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Message sending failed, Try again later',
            )
        }
    }

    return (
        <form onSubmit={sendMail} className="w-full relative h-max">
            <BackgroundImages />
            <div className="w-full z-20 sticky bg-transparent h-max flex justify-center">
                <div className="w-[599px] max-w-[90%] flex flex-col large:pt-[91px] pt-16 items-center">
                    <div className="w-max max-w-full h-max tablet:mb-3 mb-5 rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10">
                        <Image
                            className="large:w-max h-max tablet:w-2.5 w-4"
                            src={Briefcase}
                            alt=""
                        />
                        <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
                            Contact Us
                        </p>
                    </div>
                    <h1 className="large:text-32 tablet:text-xl text-26 font-semibold tablet:mb-3 mb-4 large:mb-5 text-center leading-9 tablet:px-5 px-0 text-black">
                        Let’s Get In{' '}
                        <span className="text-tremor-background-darkYellow">
                            Touch
                        </span>
                    </h1>
                    <p className="text-center tablet:mb-5 mb-7 large:mb-10 px-5  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        Or just reach out manually to{' '}
                        <Link
                            href="mailto:hello@analogueshifts.com"
                            className="font-medium">
                            hello@analogueshifts.com
                        </Link>
                    </p>
                    <div className="w-full flex flex-col mb-4 large:mb-7 large:gap-8 gap-5">
                        <InputGroup
                            label="Full Name"
                            placeholder="Enter your full name"
                            required={true}
                            setValue={setName}
                            value={name}
                            type="text"
                            image="/images/contact-form/user.svg"
                        />
                        <InputGroup
                            label="Email Address"
                            placeholder="Enter your email address"
                            required={true}
                            setValue={setEmail}
                            value={email}
                            type="email"
                            image="/images/contact-form/envelope.svg"
                        />
                        <InputGroup
                            label="Subject"
                            placeholder="Enter your subject"
                            required={true}
                            setValue={setSubject}
                            value={subject}
                            type="text"
                            image="/images/contact-form/envelope.svg"
                        />
                        <InputGroup
                            label="Phone Number"
                            placeholder="+234 (000) 000 - 000"
                            required={true}
                            setValue={setTel}
                            value={tel}
                            type="text"
                            image="/images/contact-form/user.svg"
                        />
                        <InputGroup
                            label="Message"
                            placeholder="Enter your main text in here"
                            required={true}
                            setValue={setMessage}
                            value={message}
                            type="textarea"
                        />
                    </div>
                    <div className="w-full large:mb-10 mb-7">
                        <div
                            onClick={() => setAcceptPrivacy(prev => !prev)}
                            className="flex w-max max-w-full items-center large:gap-4 gap-3">
                            <CustomCheckBox checked={acceptPrivacy} />
                            <p className="font-normal text-base large:text-xl text-tremor-brand-boulder400">
                                I hereby agree to our &nbsp;
                                <Link
                                    href="/docs/privacy-policy"
                                    className="text-tremor-background-darkYellow font-semibold">
                                    Privacy Policy
                                </Link>
                                &nbsp; terms
                            </p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-tremor-background-darkYellow h-14 gap-1 rounded-2xl text-tremor-brand-boulder50 large:text-base text-sm">
                        Submit Form{' '}
                        <Image
                            src={loading ? Spinner : RightArrow}
                            className={`${loading ? 'animate-spin' : ''}`}
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </form>
    )
}
