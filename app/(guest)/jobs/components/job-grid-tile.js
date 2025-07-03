'use client'
import Link from 'next/link'
import { formatNumber, formatUnitText } from '@/configs/jobs/format'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import employmentTypes from '../resources/employment-types.json'

export default function JobGridTile({
    item,
    index,
    total,
    handleApply,
    dashboard,
    details,
    hideActions,
    notruncate,
}) {
    const router = useRouter()
    const [imgSrc, setImgSrc] = useState(
        item?.hiringOrganization?.logo ||
            '/images/guest-layout/hero/filled_briefcase.svg',
    )

    return (
        <div
            className={`w-full flex pb-7  large:pb-10 items-start tablet:gap-7 gap-12 large:gap-16 justify-between flex-row tablet:flex-col ${
                total - 1 !== index ? 'border-b border-[#DBDBDB]' : ''
            }`}>
            <div
                className={`flex gap-5 items-center ${
                    dashboard
                        ? hideActions
                            ? 'w-full'
                            : 'w-[50%] tablet:w-full'
                        : 'w-[calc(100%-350px)] tablet:w-full large:w-[calc(100%-384px)]'
                }`}>
                <img
                    src={imgSrc}
                    alt=""
                    className={`${
                        dashboard
                            ? 'large:w-[49px] large:h-[49px] w-10 h-10 tablet:w-8 tablet:h-8'
                            : 'large:w-16 large:h-16 w-[50px] tablet:w-10 tablet:h-10 h-[50px]'
                    } rounded-full object-cover`}
                    onError={() =>
                        setImgSrc(
                            '/images/guest-layout/hero/filled_briefcase.svg',
                        )
                    }
                />
                <div
                    className={`flex flex-col w-[calc(100%-64px)] ${
                        dashboard ? 'gap-2' : 'gap-1 large:gap-2.5'
                    }`}>
                    <h2
                        className={`text-black font-semibold ${
                            notruncate ? '' : 'truncate'
                        } ${
                            dashboard
                                ? 'large:text-[15px] text-sm'
                                : 'tablet:text-sm text-base large:text-xl'
                        }`}>
                        {item?.title}
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap">
                        <Link
                            href={item?.hiringOrganization?.sameAs || ''}
                            className={`truncate text-black font-normal ${
                                dashboard
                                    ? 'large:text-[15px] text-[13px]'
                                    : 'tablet:text-xs text-sm large:text-base'
                            }`}>
                            {item?.hiringOrganization?.name}
                        </Link>
                        {item?.employmentType && (
                            <p
                                className={`text-tremor-brand-boulder400  font-normal ${
                                    dashboard
                                        ? 'large:text-[15px] text-[13px]'
                                        : 'tablet:text-xs text-sm large:text-base'
                                }`}>
                                • &nbsp;
                                {employmentTypes.find(
                                    e => e.value === item.employmentType,
                                )?.label || item.employmentType}{' '}
                                &nbsp; • &nbsp; Date Posted:{' '}
                                {new Date(
                                    item?.created_at || '',
                                ).toLocaleDateString()}
                            </p>
                        )}
                        {item?.baseSalary?.value?.value && (
                            <div
                                className={`text-tremor-brand-boulder400 font-normal ${
                                    dashboard
                                        ? 'large:text-[15px] text-[13px]'
                                        : 'tablet:text-xs text-sm large:text-base'
                                }`}>
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
                        {item?.jobLocationType && details && (
                            <p
                                className={`text-tremor-brand-boulder400  font-normal ${
                                    dashboard
                                        ? 'large:text-[15px] text-[13px]'
                                        : 'tablet:text-xs text-sm large:text-base'
                                }`}>
                                • &nbsp;{item.jobLocationType}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {!hideActions && (
                <div
                    className={`flex items-center ${
                        dashboard ? 'gap-3' : 'gap-4'
                    }`}>
                    <button
                        className={`rounded-2xl text-tremor-background-darkYellow flex justify-center items-center bg-white border border-tremor-background-darkYellow  font-semibold  ${
                            dashboard
                                ? 'h-[42px] text-xs w-max px-[26px] large:px-[36px]'
                                : 'tablet:h-10  h-14 text-sm large:text-base large:w-[163px] w-32'
                        }`}>
                        Save Job
                    </button>
                    <button
                        onClick={() => {
                            if (handleApply) {
                                handleApply()
                            } else {
                                router.push('/jobs/' + item?.slug)
                            }
                        }}
                        className={`rounded-2xl bg-tremor-background-darkYellow flex justify-center items-center text-tremor-brand-boulder50 font-semibold ${
                            dashboard
                                ? 'h-[42px] text-xs w-max px-[26px] large:px-[36px]'
                                : 'tablet:h-10  h-14 text-sm large:text-base large:w-[163px] w-32'
                        }`}>
                        {details ? 'Apply' : 'View Job'}
                    </button>
                </div>
            )}
        </div>
    )
}
