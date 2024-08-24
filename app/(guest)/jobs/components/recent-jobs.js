import Link from 'next/link'
import Image from 'next/image'

import { formatNumber, formatUnitText } from '@/configs/jobs/format'

import RightArrow from '@/public/images/guest-layout/right-arrow.svg'
import Briefcase from '@/public/images/guest-layout/hero/filled_briefcase.svg'

export default function RecentJobs({ jobs }) {
    return (
        <section className="w-full large:mb-20 mb-14 large:pl-112 pl-20 tablet:pl-6 flex flex-col large:gap-12 gap-9">
            <div className="w-full flex items-center gap-2">
                <p className="font-semibold tablet:text-[22px] text-[28px] text-black large:text-32">
                    Recent jobs
                </p>
                <div className="large:px-4 px-3 py-1.5 tablet:py-1 large:py-2 tablet:text-xs text-sm large:text-base font-extrabold text-tremor-background-darkYellow bg-tremor-brand-tulip100 rounded-full">
                    {jobs?.length || 0}
                </div>
            </div>
            <div className="w-full scroll-hidden overflow-x-auto">
                <div className="w-max flex gap-6 large:pr-112 pr-20 tablet:pr-6">
                    {jobs?.map(item => {
                        return (
                            <div
                                key={item.slug}
                                className="border h-[262px] gap-4 border-tremor-brand-boulder200 w-max rounded-2xl py-5 px-6 justify-between flex flex-col">
                                <div className="w-max h-10 flex items-center gap-3">
                                    <Image
                                        src={Briefcase}
                                        alt=""
                                        className="min-w-[40px] h-10"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-black tablet:max-w-[200px] max-w-[279px] text-sm font-medium truncate">
                                            {item.title}
                                        </h4>
                                        <Link
                                            href={
                                                item?.hiringOrganization
                                                    ?.sameAs || ''
                                            }
                                            className="text-[11px] truncate text-[#0000005C] font-normal">
                                            {item?.hiringOrganization?.name}
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 w-full">
                                    {item?.employmentType && (
                                        <div className="px-5 py-2.5 rounded-full font-normal text-black bg-[#FDF9EE] text-[11px] tablet:text-[8px]">
                                            {item.employmentType}
                                        </div>
                                    )}
                                    {item?.baseSalary?.value?.value && (
                                        <div className="px-5 py-2.5 rounded-full font-normal text-black bg-[#FDF9EE] text-[11px] tablet:text-[8px]">
                                            {formatNumber(
                                                item.baseSalary.value.value,
                                            )}
                                            {item?.baseSalary?.value
                                                ?.unitText && (
                                                <span>
                                                    /
                                                    {formatUnitText(
                                                        item.baseSalary.value
                                                            .unitText,
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    {item?.jobLocationType && (
                                        <div className="px-5 py-2.5 rounded-full font-normal text-black bg-[#FDF9EE] text-[11px] tablet:text-[8px]">
                                            {item.jobLocationType}
                                        </div>
                                    )}
                                </div>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: item?.description,
                                    }}
                                    className="font-normal h-12 tablet:max-w-[200px] max-w-[279px] text-xs overflow-hidden text-ellipsis line-clamp-2 leading-6 text-[#909090]"></span>
                                <div className="w-full border-b border-[#DBDBDB] mb-1"></div>
                                <Link
                                    href={'/jobs/' + item?.slug}
                                    className="w-full h-6 flex justify-between items-center">
                                    <span className="text-black text-[11px] font-normal">
                                        Actively Hiring
                                    </span>
                                    <Image src={RightArrow} alt="" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
