import { Switch } from '@/components/ui/switch'
import Link from 'next/link'

export default function PrivacyForm() {
    return (
        <form className="w-full flex  flex-col  tablet:pt-5 pt-10">
            <div className="w-full pb-10 border-b border-tremor-brand-boulder100 gap-44 tablet:gap-3.5 flex items-start">
                <div className="w-[45%] tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Privacy Controls
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                        Profile visibility (Public/Private toggle) Control who
                        can see your activity (job applications, event
                        attendance, etc.)
                    </p>
                </div>
                <Switch />
            </div>
            <div className="w-full pt-10 border-tremor-brand-boulder100 tablet:gap-3.5 gap-44 flex items-start">
                <div className="w-[45%] tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Security
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full mb-6 leading-8">
                        Enable/Disable 2-Factor Authentication
                    </p>
                    <Link
                        href="/job-seeker/settings"
                        className="text-tremor-background-darkYellow font-semibold text-sm leading-8">
                        Password reset option
                    </Link>
                </div>
                <Switch />
            </div>
        </form>
    )
}
