'use client'
import BackgroundImages from './bg-images'

import Image from 'next/image'

import Briefcase from '@/public/images/guest-layout/hero/filled_briefcase.svg'

export default function Hero() {
    return (
        <div className="w-full relative h-max">
            <BackgroundImages />
            <div className="w-full z-20 large:pb-[216px] tablet:pb-[120px] pb-[170px] sticky bg-transparent h-max flex justify-center">
                <div className="large:w-[889px] w-[690px] max-w-[90%] flex flex-col large:pt-[91px] pt-16 items-center">
                    <div className="w-max max-w-full h-max tablet:mb-3 mb-5 rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10">
                        <Image
                            className="large:w-max h-max tablet:w-2.5 w-4"
                            src={Briefcase}
                            alt=""
                        />
                        <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
                            About Us
                        </p>
                    </div>
                    <h1 className="large:text-32 tablet:text-xl text-26 font-semibold tablet:mb-3 mb-4 large:mb-5 text-center leading-9 tablet:px-5 px-0 text-black">
                        Learn about{' '}
                        <span className="text-tremor-background-darkYellow">
                            AnalogueShifts
                        </span>
                    </h1>
                    <p className="text-center tablet:mb-5 mb-7 large:mb-10 px-5  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        AnalogueShifts is a Project Management and Talent
                        Acquisition Company. Our mission is to solve the problem
                        of cost for startups and Large scale companies abroad by
                        sourcing the best talents for clients.
                    </p>
                </div>
            </div>
        </div>
    )
}
