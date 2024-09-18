import Image from 'next/image'
import Quote from '@/public/icons/quote.svg'
import CEO from '@/public/images/ceo.png'

import steps from '../utilities/steps.json'

export default function HowItWorks() {
    return (
        <div className="lg:min-w-[519px] min-w-full border border[#FFBB0A57] flex flex-col items-center bg-[#FFF4D85E] rounded-2xl h-max relative pt-[60px] pb-[34px] px-[30px]">
            <Image
                src={Quote}
                alt=""
                className="w-max h-max absolute left-[50%] top-0 -translate-x-[50%] -translate-y-[50%]"
            />
            <Image
                src={CEO}
                alt=""
                className="mb-10 w-max tablet:mb-5 h-max tablet:h-[80px]"
            />
            <p className="font-normal text-center tablet:mb-7 mb-[43px] text-tremor-brand-boulder700 tablet:text-base tablet:leading-8 text-lg leading-8 large:leading-[42px]">
                Welcome to Analogue Shifts, where we're not just matchmakers for
                jobs – we're talent whisperers and client mind-readers!{' '}
            </p>
            <h3 className="text-center font-semibold text-tremor-brand-boulder950 text-lg mb-[19px]">
                How it works:
            </h3>
            <div className="w-full flex flex-col tablet:mb-5 mb-10">
                {steps.map(item => {
                    return (
                        <div
                            key={item.index}
                            className="w-full flex tablet:mb-4 items-start gap-[13px]">
                            <div className="min-w-[27px] translate-y-2.5 h-[27px] rounded-full border border-[#FFBB0A80] bg-[#FFF6E0] flex justify-center items-center font-bold text-[13.9px] text-tremor-background-darkYellow">
                                {item.index}
                            </div>
                            <p className="w-full text-tremor-brand-boulder700 leading-[42px] tablet:leading-6 tablet:text-sm text-base font-normal">
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
            <p className="font-normal text-center tablet:mb-5 mb-10 text-tremor-brand-boulder700 text-lg tablet:text-base tablet:leading-8 leading-8 large:leading-[42px]">
                At Analogue Shifts, they aim to fulfill potential, not just fill
                positions.
            </p>
            <p className="font-semibold text-center tablet:text-base tablet:mb-0 mb-[5px] text-tremor-brand-vulcan950 text-[19.46px] leading-10 large:leading-[66px]">
                Kenneth Malaka
            </p>
            <p className="font-normal text-center tablet:text-base text-[#8C8C93] text-[19.46px] leading-10 large:leading-[66px]">
                CEO
            </p>
        </div>
    )
}
