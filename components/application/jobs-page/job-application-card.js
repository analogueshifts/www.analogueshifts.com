'use client'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'
import { usePathname } from 'next/navigation'

export default function JobApplicationCard({ row, applicationUrl, jobTitle }) {
    const pathname = usePathname()
    return (
        <div
            className={`w-full py-[30px] px-6 rounded-md bg-transparent border flex ${
                row ? 'flex-row' : 'flex-col'
            }`}>
            <div className={`flex-col gap-3 flex ${row ? 'w-6/12' : 'w-full'}`}>
                <h5 className="font-bold text-base text-black">
                    You may be a good fit for this job
                </h5>
                <span className="text-base font-normal mb-6">
                    6 of 10 skills match your profile.{' '}
                </span>
            </div>
            <div className={`flex-col gap-8 flex ${row ? 'w-6/12' : 'w-full'}`}>
                <Link
                    className="w-full h-[50px] rounded-sm bg-as flex items-center justify-center text-white font-bold text-sm"
                    href={applicationUrl}>
                    Apply for this job
                </Link>
                <div className="w-full flex justify-center items-center gap-4">
                    <span className="text-base font-normal text-black pr-2">
                        Share this job
                    </span>
                    <button
                        onClick={async () => {
                            if (navigator.share) {
                                try {
                                    await navigator.share({
                                        title: jobTitle,
                                        text: '',
                                        url:
                                            'https://www.analogueshifts.com' +
                                            pathname,
                                    })
                                } catch (error) {
                                    toast.error(
                                        'Error sharing content:',
                                        toastConfig,
                                    )
                                }
                            } else {
                                toast.error(
                                    'Sharing not supported on this device.',
                                    toastConfig,
                                )
                            }
                        }}
                        className="w-max outline-none bg-transparent flex gap-3 items-center justify-center text-as font-bold text-sm">
                        <i className="fas fa-share"></i> Share Job
                    </button>
                </div>
            </div>
        </div>
    )
}
