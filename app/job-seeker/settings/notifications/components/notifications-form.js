'use client'
import { Switch } from '@/components/ui/switch'
import Dropdown from '../../../profile/edit/components/dropdown'

export default function NotificationsForm() {
    return (
        <form className="w-full flex  flex-col  tablet:pt-5 pt-10">
            <div className="w-full pb-10 border-b border-tremor-brand-boulder100 justify-between tablet:gap-3.5 flex items-start">
                <div className="w-[45%] tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Email Notifications
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                        Job alerts, event reminders, updates from the platform
                    </p>
                </div>
                <Switch />
            </div>
            <div className="py-10 w-full border-b border-tremor-brand-boulder100 flex flex-col gap-6">
                <div className="w-full   justify-between tablet:gap-3.5 flex items-start">
                    <div className="w-[45%] tablet:w-[calc(100%-70px)] h-max flex flex-col">
                        <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                            Push Notifications
                        </h2>
                        <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                            Device notifications for jobs, events, and offers
                        </p>
                    </div>
                    <Switch />
                </div>
                <div className="w-full flex tablet:flex-col tablet:gap-3.5 justify-between items-center">
                    <p className="w-max tablet:max-w-full max-w-[47%] tablet:text-xs text-tremor-brand-boulder600 text-sm font-normal">
                        Choose notification frequency (real-time, daily, weekly
                    </p>
                    <div className="w-[484px] tablet:max-w-full max-w-[53%]  tablet:gap-1.5 flex flex-col gap-2 large:gap-2.5">
                        <p className="text-sm tablet:text-xs large:text-base text-[#575757] font-medium">
                            Frequency
                        </p>

                        <Dropdown
                            list={[]}
                            placeholder="Frequency"
                            value={''}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full pt-10 border-tremor-brand-boulder100 tablet:gap-3.5 justify-between flex items-start">
                <div className="w-[45%] tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        SMS Notifications
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full  leading-8">
                        Toggle on/off for text message alerts
                    </p>
                </div>
                <Switch />
            </div>
        </form>
    )
}
