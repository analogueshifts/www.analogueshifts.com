import Link from 'next/link'

export default function JobGridTile({ job }) {
    return (
        <div className="w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between md:flex-col items-center gap-y-2">
            <div className="flex gap-5 flex-wrap md:flex-col items-start md:items-center">
                <img
                    src={
                        job?.hiringOrganization?.logo
                            ? job.hiringOrganization.logo
                            : '/images/jobs/company_logo.JPG'
                    }
                    alt="LOGO"
                    className={`md:w-max md:h-[185px] object-contain w-[206px] h-[150px]`}
                />
                <div className="flex flex-col gap-1.5 md:items-center">
                    <p className="text-sm font-normal text-[#B0B0B0]">
                        {job?.hiringOrganization?.name}
                    </p>
                    <p className="text-xl font-semibold text-black/90">
                        {job?.title}
                    </p>
                    <p
                        className="text-[15px] font-normal text-[#7B7B7B] md:text-center"
                        dangerouslySetInnerHTML={{
                            __html:
                                job?.description.length > 219
                                    ? job.description
                                          .slice(0, 216)
                                          .concat('...')
                                    : job.description,
                        }}></p>
                    <div className="flex gap-1.5 flex-wrap">
                        {job?.baseSalary && (
                            <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                {job?.baseSalary.value.value +
                                    ' ' +
                                    `${
                                        job?.baseSalary.currency
                                            ? job.baseSalary.currency + ' '
                                            : ''
                                    }` +
                                    `${
                                        job?.baseSalary.value.unitText
                                            ? 'Per ' +
                                              job.baseSalary.value.unitText
                                            : ''
                                    }`}
                            </div>
                        )}
                        {job?.locationType && (
                            <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                {job?.jobLocationType}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center md:mt-2 md:mx-auto">
                <Link
                    href={job?.apply}
                    className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                    Apply
                </Link>
                <Link
                    href={`/jobs/${job?.slug}`}
                    as={`/jobs/${job?.slug}`}
                    className="text-xs font-normal text-black/60">
                    Read More
                </Link>
            </div>
        </div>
    )
}
