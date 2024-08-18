'use client'
import Image from 'next/image'
import Briefcase from '@/public/images/guest-layout/hero/filled_briefcase.svg'
import DropdownMenu from './dropdown'

function Hero() {
    return (
        <section className="w-full h-max flex flex-col items-center py-16 large:py-[91px]">
            <div className="w-max max-w-full h-max tablet:mb-3 mb-5 rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10">
                <Image
                    className="large:w-max h-max tablet:w-2.5 w-4"
                    src={Briefcase}
                    alt=""
                />
                <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
                    Jobs
                </p>
            </div>
            <h1 className="large:text-32 tablet:text-xl text-26 font-semibold tablet:mb-3 mb-4 large:mb-5 text-center leading-9 tablet:px-5 px-0 text-black">
                Opportunities Await – Start Your{' '}
                <span className="text-tremor-background-darkYellow">
                    Journey!
                </span>
            </h1>
            <p className="text-center tablet:mb-5 mb-7 large:mb-10 tablet:max-w-full px-5 max-w-[670px] large:max-w-889 tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                Join our team and revolutionize the job search experience for
                countless individuals in emerging markets.
            </p>
            <form className="tablet:w-4/5 w-max max-w-full tablet:mb-5 mb-10 tablet:grid grid-cols-2 flex large:flex items-center large:h-14 h-14 tablet:h-max  gap-3">
                <input
                    className="w-[325px] tablet:h-12 h-full tablet:w-full tablet:col-span-2 outline-none rounded-2xl border border-tremor-brand-boulder200 px-6 tablet:text-sm text-sm large:text-base font-normal text-tremor-brand-boulder700 placeholder:text-tremor-brand-boulder200"
                    placeholder="Search Role"
                />
                <div className="w-52 tablet:w-full tablet:col-span-2 h-max">
                    <DropdownMenu
                        list={['Frontend', 'Backend']}
                        onChange={value => {}}
                        value=""
                        placeholder="Select field"
                    />
                </div>
                <div className="w-52 tablet:w-full tablet:col-span-2 h-max">
                    <DropdownMenu
                        list={['Full-time', 'Part-time']}
                        onChange={value => {}}
                        value=""
                        placeholder="Select job type"
                    />
                </div>

                <button className="rounded-2xl tablet:h-12 tablet:w-full tablet:col-span-2 h-full bg-tremor-background-darkYellow flex justify-center items-center text-tremor-brand-boulder50 tablet:text-sm text-sm large:text-base font-semibold tablet:px-5 px-12">
                    Search
                </button>
            </form>
        </section>
    )
}

export default Hero
