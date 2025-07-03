import JobGridTile from '@/app/(guest)/jobs/components/job-grid-tile'
import { useRouter } from 'next/navigation'

export default function RenderJobs({
    selectedCategory,
    generalLoading,
    allJobs,
    recommendedJobs,
    appliedJobs,
    searched,
    handleClearSearch,
}) {
    const router = useRouter()

    return (
        <>
            {' '}
            {selectedCategory === 'Saved Jobs' ? (
                <div className="w-full h-max py-8 flex justify-center items-center">
                    <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        Coming Soon
                    </p>
                </div>
            ) : (
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between items-center mb-6">
                        <h2 className="large:text-lg text-base font-semibold text-black ">
                            {selectedCategory === 'All'
                                ? 'All jobs'
                                : selectedCategory}
                        </h2>
                        {searched && (
                            <button
                                type="button"
                                onClick={handleClearSearch}
                                className="text-[13px] font-medium text-tremor-brand-boulder500">
                                Clear search
                            </button>
                        )}
                    </div>
                    <div className="w-full flex flex-col large:gap-[30px] gap-[25px]">
                        {generalLoading ? (
                            <div className="w-full h-max py-5 flex justify-center items-center">
                                <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                                    Fetching...
                                </p>
                            </div>
                        ) : (
                            <>
                                {selectedCategory === 'All' &&
                                    allJobs?.map((item, index) => {
                                        return (
                                            <JobGridTile
                                                key={index}
                                                index={index}
                                                item={item}
                                                total={allJobs?.length}
                                                dashboard={true}
                                                handleApply={() =>
                                                    router.push(
                                                        '/job-seeker/jobs/' +
                                                            item?.slug,
                                                    )
                                                }
                                            />
                                        )
                                    })}
                                {selectedCategory === 'Recommended jobs' &&
                                    recommendedJobs?.map((item, index) => {
                                        return (
                                            <JobGridTile
                                                key={index}
                                                index={index}
                                                item={item}
                                                total={recommendedJobs?.length}
                                                dashboard={true}
                                                handleApply={() =>
                                                    router.push(
                                                        '/job-seeker/jobs/' +
                                                            item?.slug,
                                                    )
                                                }
                                            />
                                        )
                                    })}
                                {selectedCategory === 'Applied jobs' &&
                                    appliedJobs?.map((item, index) => {
                                        return (
                                            <JobGridTile
                                                key={index}
                                                index={index}
                                                item={item?.job}
                                                total={appliedJobs?.length}
                                                dashboard={true}
                                                handleApply={() =>
                                                    router.push(
                                                        '/job-seeker/jobs/' +
                                                            item?.slug,
                                                    )
                                                }
                                                hideActions={true}
                                            />
                                        )
                                    })}
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
