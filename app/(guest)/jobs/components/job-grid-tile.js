'use client'
import Link from 'next/link'
import { formatNumber, formatUnitText } from '@/configs/jobs/format'

export default function JobGridTile({ item, index, total, handleApply }) {
    return (
        <div
            className={`w-full flex pb-7  large:pb-10 items-start tablet:gap-7 gap-12 large:gap-16 justify-between flex-row tablet:flex-col ${
                total - 1 !== index ? 'border-b border-[#DBDBDB]' : ''
            }`}>
            <div className="flex w-[calc(100%-304px)] tablet:w-full large:w-[calc(100%-384px)] gap-5 items-center">
                <img
                    src={
                        item?.hiringOrganization?.logo ||
                        '/images/guest-layout/hero/filled_briefcase.svg'
                    }
                    alt=""
                    className="large:w-16 large:h-16 w-[50px] tablet:w-10 tablet:h-10 h-[50px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-1 large:gap-2.5 w-[calc(100%-64px)]">
                    <h2 className="text-black truncate tablet:text-sm text-base large:text-xl font-semibold">
                        {item?.title}
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap">
                        <Link
                            href={item?.hiringOrganization?.sameAs || ''}
                            className="truncate text-black tablet:text-xs text-sm large:text-base font-normal">
                            {item?.hiringOrganization?.name}
                        </Link>
                        {item?.employmentType && (
                            <p className="text-tremor-brand-boulder400 tablet:text-xs text-sm large:text-base font-normal">
                                • &nbsp;{item.employmentType}
                            </p>
                        )}
                        {item?.baseSalary?.value?.value && (
                            <div className="text-tremor-brand-boulder400 tablet:text-xs text-sm large:text-base font-normal">
                                • &nbsp;
                                {formatNumber(item.baseSalary.value.value)}
                                {item?.baseSalary?.value?.unitText && (
                                    <span>
                                        /
                                        {formatUnitText(
                                            item.baseSalary.value.unitText,
                                        )}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="rounded-2xl tablet:h-10  h-14 text-tremor-background-darkYellow flex justify-center items-center bg-white border border-tremor-background-darkYellow text-sm large:text-base font-semibold large:w-[163px] w-32">
                    Save Job
                </button>
                <button
                    onClick={() => {
                        if (handleApply) {
                            handleApply()
                        } else {
                            console.log('Apply')
                        }
                    }}
                    className="rounded-2xl tablet:h-10  h-14 bg-tremor-background-darkYellow flex justify-center items-center text-tremor-brand-boulder50  text-sm large:text-base font-semibold large:w-[141px] w-28">
                    Apply
                </button>
            </div>
        </div>
    )
}
