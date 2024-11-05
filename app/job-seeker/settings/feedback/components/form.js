'use client'
import HelpfulLink from './helpful-link'
import ContactLink from './contact-link'
import Tiptap from '../../../profile/edit/components/tiptap'

export default function Form() {
    return (
        <div className="w-full flex  flex-col  tablet:pt-5 pt-10">
            <div className="w-full pb-10 border-b border-tremor-brand-boulder100 justify-between tablet:flex-col tablet:gap-3.5 flex items-start">
                <div className="w-[47%] tablet:max-w-full tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Help Center
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                        Some helpful links.
                    </p>
                </div>
                <div className="w-[484px] tablet:max-w-full max-w-[53%]  tablet:gap-4 flex flex-col gap-7">
                    <HelpfulLink
                        link=""
                        description="FAQ (Frequently Asked Question)"
                        title="FAQ"
                    />
                    <HelpfulLink
                        link=""
                        description="FAQ (Frequently Asked Question)"
                        title="Tutorials"
                    />
                    <HelpfulLink
                        link=""
                        description="FAQ (Frequently Asked Question)"
                        title="Support articles"
                    />
                </div>
            </div>
            <div className="w-full py-10 border-b border-tremor-brand-boulder100 justify-between tablet:flex-col tablet:gap-3.5 flex items-start">
                <div className="w-[47%] tablet:max-w-full tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Contact Support
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                        Email or live chat with the support team
                    </p>
                </div>
                <div className="w-[484px] tablet:max-w-full max-w-[53%]  tablet:gap-4 flex gap-x-10 flex-wrap gap-y-4">
                    <ContactLink
                        contact="hello@analogueshifts.com"
                        image="/images/user-layout/mail.svg"
                        label="Email Us"
                        link="mailto:hello@analogueshifts.com"
                    />
                    <ContactLink
                        contact="+234 89453244"
                        image="/images/user-layout/phone.svg"
                        label="Call Us"
                        link="tel:+23489453244"
                    />
                </div>
            </div>
            <form className="w-full pt-10 border-tremor-brand-boulder100 tablet:gap-3.5 justify-between tablet:flex-col flex items-start">
                <div className="w-[47%] tablet:max-w-full tablet:w-full h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Feedback
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full  leading-8">
                        Submit feedback or report an issue
                    </p>
                </div>
                <div className="w-[484px] tablet:max-w-full max-w-[53%]   flex flex-col tablet:gap-4 gap-6">
                    <div className="w-full">
                        {' '}
                        <Tiptap placeholder="Tell us what the issue is" />
                    </div>
                    <p className="large:text-base text-sm font-normal text-tremor-brand-boulder600 tablet:mb-2 mb-4">
                        Maximum of 300 words
                    </p>
                    <button
                        type="submit"
                        className="w-full h-14 flex justify-center items-center rounded-[20px] bg-tremor-background-darkYellow text-tremor-brand-boulder50 font-semibold text-base">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
