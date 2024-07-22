import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'
import { useRouter } from 'next/navigation'

export default function JobGridTile({ job, user }) {
    const router = useRouter()

    // Check If User Is Logged In, Redirect User To Login If not Logged In
    const handleApply = () => {
        router.push(`/jobs/${job?.slug}`)
    }

    return (
        <div className="w-full h-max md:w-[calc(50%-12px)] min-h-[205px] max-h-[500px] border-b md:border-none flex flex-wrap pb-5 justify-between md:flex-col items-center gap-y-2">
            <div className="flex gap-5 flex-wrap md:flex-col items-start md:items-center">
                <img
                    src={
                        job?.hiringOrganization?.logo
                            ? job.hiringOrganization.logo
                            : '/images/jobs/company_logo.JPG'
                    }
                    alt="LOGO"
                    className={` max-w-[150px] max-h-[150px] object-contain w-max h-max`}
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
                                job?.description.length > 200
                                    ? job.description
                                          .slice(0, 197)
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
                <button
                    onClick={handleApply}
                    className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                    View
                </button>

                <button
                    onClick={async () => {
                        if (navigator.share) {
                            try {
                                await navigator.share({
                                    title: job?.title || '',
                                    text: '',
                                    url: `https://www.analogueshifts.com/jobs/${job?.slug}`,
                                })
                            } catch (error) {
                                console.log(error)
                            }
                        } else {
                            toast.error(
                                'Sharing not supported on this device.',
                                toastConfig,
                            )
                        }
                    }}
                    className="text-xs font-normal text-black/60">
                    Share
                </button>
            </div>
        </div>
    )
}
