'use client'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function JobApplicationCard({
    row,
    applicationUrl,
    jobTitle,
    user,
    setIdiomModal,
}) {
    const pathname = usePathname()
    const router = useRouter()

    // Check If User Is Logged In, Redirect User To Login If not Logged In
    const handleApply = () => {
        if (user) {
            window.open(applicationUrl, 'blank')
            setIdiomModal(true)
        } else {
            Cookies.set('RedirectionLink', pathname)
            router.push('/login')
        }
    }

    return (
        <div
            className={`w-full py-[30px] px-6 rounded-md bg-transparent border flex ${
                row ? 'flex-row' : 'flex-col'
            }`}>
            <div className={`flex-col gap-3 flex ${row ? 'w-6/12' : 'w-full'}`}>
                {/* <h5 className="font-bold text-base text-black">
                    You may be a good fit for this job
                </h5>
                <span className="text-base font-normal mb-6">
                    6 of 10 skills match your profile.{' '}
                </span> */}
            </div>
            <div className={`flex-col gap-8 flex ${row ? 'w-6/12' : 'w-full'}`}>
                <button
                    className="w-full h-[50px] rounded-sm bg-as flex items-center justify-center text-white font-bold text-sm"
                    onClick={handleApply}>
                    Apply for this job
                </button>
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
                                    console.log(error)
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
