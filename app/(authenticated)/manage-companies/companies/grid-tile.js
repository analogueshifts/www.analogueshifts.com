'use client'
import Link from 'next/link'

export default function GridTile({ item, index, total, handleDelete }) {
    return (
        <div
            className={`w-full flex pb-7  large:pb-10 items-start tablet:gap-7 gap-12 large:gap-16 justify-between flex-row tablet:flex-col ${
                total - 1 !== index ? 'border-b border-[#DBDBDB]' : ''
            }`}>
            <div className="flex w-[calc(100%-304px)] tablet:w-full large:w-[calc(100%-384px)] gap-5 items-center">
                <img
                    src={
                        item?.logo ||
                        '/images/guest-layout/hero/filled_briefcase.svg'
                    }
                    alt=""
                    className="large:w-16 large:h-16 w-[50px] tablet:w-10 tablet:h-10 h-[50px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-1 large:gap-2.5 w-[calc(100%-64px)]">
                    <Link href={item?.website || ''} className="w-max">
                        <h2 className="text-black truncate tablet:text-sm text-base large:text-xl font-semibold">
                            {item?.name}
                        </h2>
                    </Link>
                    <div className="flex items-center gap-2 flex-wrap">
                        <p className="truncate text-black tablet:text-xs text-sm large:text-base font-normal">
                            {item?.industry}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleDelete}
                    className="rounded-2xl tablet:h-10  h-14 text-tremor-background-darkYellow flex justify-center items-center bg-white border border-tremor-background-darkYellow text-sm large:text-base font-semibold w-max tablet:px-5 px-8">
                    Delete Company
                </button>
                <Link
                    href={`/manage-companies/edit/${item?.uuid}`}
                    className="rounded-2xl tablet:h-10  h-14 bg-tremor-background-darkYellow flex justify-center items-center text-tremor-brand-boulder50  text-sm large:text-base font-semibold w-max tablet:px-5 px-8">
                    Edit Company
                </Link>
            </div>
        </div>
    )
}
