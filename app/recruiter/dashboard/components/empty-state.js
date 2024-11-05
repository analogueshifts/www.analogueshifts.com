import Link from 'next/link'
import Image from 'next/image'
import JobListImage from '@/public/images/user-layout/recruiter/job-list.svg'

export default function EmptyState({ label }) {
    return (
        <div className="w-full pt-5 flex flex-col items-center">
            <Image src={JobListImage} alt="" className="max-w-[90%] mb-4" />
            <h4 className="text-tremor-brand-boulder950 text-lg font-medium text-center mb-2">
                No {label} posted yet
            </h4>
            <p className="text-center text-sm font-normal text-[#666666] leading-[26px] mb-5">
                Click the button at the bottom to <br /> post a {label}.
            </p>
            <div className="w-[322px] max-w-full grid grid-cols-2 gap-2.5">
                <Link
                    href="/recruiter/hire/create"
                    className="col-span-1 h-[47px] rounded-[10px] border border-[#FFBB0A59] flex justify-center items-center text-sm font-semibold text-tremor-background-darkYellow duration-300 hover:bg-tremor-background-darkYellow hover:text-tremor-brand-boulder50">
                    Post a job
                </Link>
                <Link
                    href="/recruiter/companies/create"
                    className="col-span-1 h-[47px] rounded-[10px] border border-[#FFBB0A59] flex justify-center items-center text-sm font-semibold text-tremor-brand-boulder50 bg-tremor-background-darkYellow duration-300 hover:bg-white hover:text-tremor-background-darkYellow">
                    Add company
                </Link>
            </div>
        </div>
    )
}
