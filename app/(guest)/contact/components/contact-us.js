import Image from 'next/image'

import Hero from '@/public/images/guest-layout/contact-us/hero.svg'
import HeroTwo from '@/public/images/guest-layout/contact-us/hero-two.svg'
import HeroThree from '@/public/images/guest-layout/contact-us/hero-three.svg'
import Link from 'next/link'

export default function ContactUs() {
    return (
        <section className="w-full large:px-112 tablet:px-6 px-20 sticky z-20 h-max bg-white items-center overflow-hidden large:pb-[130px] large:pt-168 tablet:py-14 py-24 tablet:flex flex-col tablet:gap-10 grid grid-cols-2">
            <div className="col-span-1 tablet:w-full flex flex-col">
                <h3
                    className={`large:text-32 tablet:text-xl text-2xl tablet:leading-8 leading-48 mb-3 font-semibold large:leading-64 text-tremor-brand-vulcan950 `}>
                    Contact Us
                </h3>
                <p
                    className={`text-tremor-brand-boulder400 large:mb-[60px] mb-11 large:text-xl text-base leading-9 large:leading-48 font-normal `}>
                    Have questions or need support? We're here to help.
                </p>
                <div className="w-full large:mb-12 mb-9 grid grid-cols-2 tablet:grid-cols-1 tablet:gap-9 large:gap-[100px] gap-20">
                    <div className="col-span-1 flex flex-col gap-[1px]">
                        <p className="text-tremor-brand-vulcan950 large:text-xl text-base font-semibold large:leading-10 leading-7">
                            Email
                        </p>
                        <p className="text-tremor-brand-vulcan950 large:text-xl text-base font-normal large:leading-10 leading-7">
                            Send us an email
                        </p>
                        <Link
                            href="mailto:hello@analogueshifts.com"
                            className="text-tremor-brand-vulcan950 large:text-xl text-base font-normal large:leading-10 leading-7">
                            hello@analogueshifts.com
                        </Link>
                    </div>
                    <div className="col-span-1 flex flex-col gap-[1px]">
                        <p className="text-tremor-brand-vulcan950 large:text-xl text-base font-semibold large:leading-10 leading-7">
                            Phone
                        </p>
                        <p className="text-tremor-brand-vulcan950 large:text-xl text-base font-normal large:leading-10 leading-7">
                            Give us a call
                        </p>
                        <Link
                            href="tel:+2348066708343"
                            className="text-tremor-brand-vulcan950 large:text-xl text-base font-normal large:leading-10 leading-7">
                            NG +2348066708343
                        </Link>
                        <Link
                            href="tel:+12524042733"
                            className="text-tremor-brand-vulcan950 large:text-xl text-base font-normal large:leading-10 leading-7">
                            US +12524042733
                        </Link>
                    </div>
                </div>
                <div className="w-[356px] max-w-full flex flex-col gap-[1px]">
                    <p className="text-tremor-brand-vulcan950 large:text-xl text-base font-semibold large:leading-10 leading-7">
                        Address
                    </p>
                    <p className="text-tremor-brand-vulcan950 large:text-xl text-base font-normal large:leading-8 leading-6">
                        {/* 5 Chief Sunday Olaiya Close Salawe Avenue, Off Love All
                        Street Ikosi, Lagos-Nigeria */}{' '}
                        Remote Tech Company
                    </p>
                </div>
            </div>
            <div className="col-span-1 tablet:w-max tablet:max-w-full tablet:ml-auto relative flex justify-end">
                <Image src={Hero} alt="" />
                <Image
                    src={HeroTwo}
                    alt=""
                    className="absolute tablet:right-[50px] right-[-147px] tablet:bottom-[-50px] bottom-[-130px]"
                />
                <Image
                    src={HeroThree}
                    alt=""
                    className="absolute tablet:-left-10 left-[-170px] tablet:top-0 top-[-70px]"
                />
            </div>
        </section>
    )
}
