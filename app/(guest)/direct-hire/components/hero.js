'use client'

import Image from 'next/image'

import Briefcase from '@/public/images/guest-layout/hero/filled_briefcase.svg'
import Link from 'next/link'
import BackgroundImages from './bg-images'
import CursorRight from '@/public/icons/cursor-right.svg'
import CursorLeft from '@/public/icons/cursor-left.svg'

export default function Hero() {
    return (
        <div className="w-full relative h-max">
            <BackgroundImages />
            <div className="w-full z-20 large:pb-[72px] tablet:pb-[50px] pb-[60px] sticky bg-transparent h-max flex justify-center">
                <div className="w-max relative max-w-[90%] flex flex-col large:pt-[91px] pt-16 items-center">
                    <div className="absolute tablet:left-2.5 left-[-83px] large:top-[129px] tablet:top-[20px] top-[92px]">
                        <div className="relative flex">
                            <div className="w-max h-max py-[4.8px] tablet:px-4 tablet:py-[3px] tablet:text-[4.5px] px-[23px] text-[7.76px] font-medium text-tremor-brand-boulder950 rounded-[3.3px] border border-[#FFE49D]">
                                Developer
                            </div>
                            <Image
                                src={CursorRight}
                                alt=""
                                className="absolute right-0 translate-x-[100%] top-[19px] tablet:top-[15px] w-max h-max tablet:w-3"
                            />
                        </div>
                    </div>

                    <div className="absolute right-[-78px] large:top-[152px]  tablet:right-0 tablet:top-[20px] top-[112px]">
                        <div className="relative flex">
                            <Image
                                src={CursorLeft}
                                alt=""
                                className="absolute left-0 tablet:top-[15px] translate-x-[-100%] top-[19px] w-max h-max tablet:w-3"
                            />
                            <div className="w-max h-max tablet:px-4 tablet:py-[3px] tablet:text-[4.5px] py-[4.8px] px-[23px] text-[7.76px] font-medium text-tremor-brand-boulder950 rounded-[3.3px] border border-[#FFE49D]">
                                Product Designer
                            </div>
                        </div>
                    </div>

                    <div className="w-max max-w-full h-max tablet:mb-3 mb-5 rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10">
                        <Image
                            className="large:w-max h-max tablet:w-2.5 w-4"
                            src={Briefcase}
                            alt=""
                        />
                        <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
                            Direct Hire
                        </p>
                    </div>
                    <h1 className="large:text-32 tablet:text-xl text-26 font-semibold tablet:mb-3 mb-4 large:mb-5 text-center leading-9 tablet:px-5 px-0 text-black">
                        Let Us Find Your{' '}
                        <span className="text-tremor-background-darkYellow">
                            Ideal Talent
                        </span>
                    </h1>
                    <p className="text-center tablet:mb-5 mb-7 large:mb-10 px-5  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        To get started, submit the direct hire form, and we'll
                        handle the rest <br /> — or{' '}
                        <Link
                            href="https://calendly.com/kennethmalaka/analogue-shifts-bookings"
                            className="text-tremor-background-darkYellow underline ">
                            schedule a call!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
