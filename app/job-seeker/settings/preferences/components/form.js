'use client'
import { Switch } from '@/components/ui/switch'
import Dropdown from '../../../profile/edit/components/dropdown'

export default function Form() {
    return (
        <form className="w-full flex  flex-col  tablet:pt-5 pt-10">
            <div className="w-full pb-10 border-b border-tremor-brand-boulder100 justify-between tablet:flex-col tablet:gap-3.5 flex items-start">
                <div className="w-[47%] tablet:max-w-full tablet:w-[calc(100%-70px)] h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Language
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                        Dropdown to select preferred language
                    </p>
                </div>
                <div className="w-[484px] tablet:max-w-full max-w-[53%]  tablet:gap-1.5 flex flex-col gap-2 large:gap-2.5">
                    <p className="text-sm tablet:text-xs large:text-base text-[#575757] font-medium">
                        Selected Language
                    </p>
                    <Dropdown
                        list={['English']}
                        placeholder="Select Language"
                        value={'English'}
                    />
                </div>
            </div>
            <div className="py-10 w-full border-b border-tremor-brand-boulder100 flex flex-col gap-6">
                <div className="w-full   justify-between tablet:gap-3.5 flex items-start">
                    <div className="w-[45%] tablet:w-full h-max flex flex-col">
                        <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                            Theme
                        </h2>
                        <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full leading-8">
                            Light/Dark mode toggle for the interface
                        </p>
                    </div>
                    <Switch />
                </div>
            </div>
            <div className="w-full pt-10 border-tremor-brand-boulder100 tablet:gap-3.5 justify-between tablet:flex-col flex items-start">
                <div className="w-[47%] tablet:max-w-full tablet:w-full h-max flex flex-col">
                    <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                        Time Zone
                    </h2>
                    <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full  leading-8">
                        Set and adjust the time zone
                    </p>
                </div>
                <div className="w-[484px] tablet:max-w-full max-w-[53%]  tablet:gap-1.5 flex flex-col gap-2 large:gap-2.5">
                    <p className="text-sm tablet:text-xs large:text-base text-[#575757] font-medium">
                        Select Timezone
                    </p>
                    <Dropdown
                        list={['WAT']}
                        placeholder="Select Timezone"
                        value={'WAT'}
                    />
                </div>
            </div>
        </form>
    )
}
