import Image from 'next/image'

import BackgroundImages from './bg-images'

import Briefcase from '@/public/images/guest-layout/hero/filled_briefcase.svg'

function Hero() {
    return (
        <section className="w-full overflow-hidden large:h-hero h-mobileHero relative">
            <BackgroundImages />
            <div className="w-full h-full absolute z-20 top-0 left-0 bg-transparent flex flex-col items-center justify-center">
                <div className="w-max max-w-full h-max tablet:mb-3 mb-5 rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10">
                    <Image
                        className="large:w-max h-max tablet:w-2.5 w-4"
                        src={Briefcase}
                        alt=""
                    />
                    <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
                        Your top talent acquisition platform
                    </p>
                </div>
                <h1 className=" large:text-32 tablet:text-xl text-26 font-semibold tablet:mb-3 mb-4 large:mb-5 text-center large:leading-48 leading-9 tablet:px-5 px-0 text-black">
                    Connecting Top Tech Talents with Leading{' '}
                    <span className="text-tremor-background-darkYellow">
                        Companies
                    </span>
                </h1>
                <p className="text-center tablet:mb-5 mb-7 large:mb-10 tablet:max-w-full px-5 max-w-[670px] large:max-w-889 tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                    Find your dream remote tech job or post a job to find the
                    perfect candidate. Our platform brings together talented
                    tech professionals and top recruiters to create successful
                    career opportunities.
                </p>
                <div className="tablet:w-4/5 w-max max-w-full tablet:mb-5 mb-10 tablet:grid grid-cols-2 flex large:flex items-center large:h-14 h-14 tablet:h-max  gap-3">
                    <input
                        className="w-415 tablet:w-full tablet:col-span-2 tablet:h-12 h-full outline-none rounded-2xl border border-tremor-brand-boulder200 px-6 tablet:text-sm text-sm large:text-base font-normal text-tremor-brand-boulder700 placeholder:text-tremor-brand-boulder200"
                        placeholder="Search for jobs by title, skill, or company"
                    />
                    <button className="rounded-2xl tablet:h-12  h-full bg-tremor-background-darkYellow flex justify-center items-center text-tremor-brand-boulder50 tablet:text-sm text-sm large:text-base font-semibold tablet:px-5 px-12">
                        Search
                    </button>
                    <button className="rounded-2xl tablet:h-12  h-full bg-transparent flex justify-center items-center text-tremor-background-darkYellow tablet:text-sm text-sm large:text-base font-semibold tablet:px-5 px-12 border border-tremor-background-darkYellow">
                        Post a Job
                    </button>
                </div>
                <p className="text-base tablet:text-xs tablet:px-5 px-0 text-center font-medium text-tremor-brand-boulder400">
                    You can quickly search for remote tech jobs or post a job
                </p>
            </div>
        </section>
    )
}

export default Hero