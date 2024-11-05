'use client'
import Link from 'next/link'
import { formatNumber, formatUnitText } from '@/configs/jobs/format'
import { useRouter } from 'next/navigation'

export default function JobGridTile({
    item,
    index,
    total,
    handleApply,
    dashboard,
    details,
    hideActions,
}) {
    const router = useRouter()

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
                        : 'w-[calc(100%-304px)] tablet:w-full large:w-[calc(100%-384px)]'
                }`}>
                <img
                    src={
                        item?.hiringOrganization?.logo ||
                        '/images/guest-layout/hero/filled_briefcase.svg'
                    }
                    alt=""
                    className={`${
                        dashboard
                            ? 'large:w-[49px] large:h-[49px] w-10 h-10 tablet:w-8 tablet:h-8'
                            : 'large:w-16 large:h-16 w-[50px] tablet:w-10 tablet:h-10 h-[50px]'
                    } rounded-full object-cover`}
                />
                <div
                    className={`flex flex-col w-[calc(100%-64px)] ${
                        dashboard ? 'gap-2' : 'gap-1 large:gap-2.5'
                    }`}>
                    <h2
                        className={`text-black truncate font-semibold ${
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
                                • &nbsp;{item.employmentType}
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
