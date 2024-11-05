'use client'
import { Plus } from 'lucide-react'
import ActionList from '../../../../job-seeker/profile/edit/components/action-list'
import { useState } from 'react'
export default function ActionListGroup({
    label,
    type,
    description,
    value,
    setValue,
    required,
    border,
    placeholder,
}) {
    const [tracker, setTracker] = useState('')

    const handleAddRequirement = () => {
        if (tracker.trim().length > 0 && !value?.includes(tracker)) {
            setValue(value?.length > 0 ? [...value, tracker] : [tracker])
        }
    }

    return (
        <div
            className={`w-full grid grid-cols-2 tablet:gap-5 tablet:grid-cols-1 tablet:pb-6 items-start pb-10 ${
                border ? 'border-b border-tremor-brand-boulder100' : ''
            }`}>
            <div className="col-span-1 flex flex-col tablet:gap-2.5 gap-5">
                <h3 className="large:text-base text-sm font-semibold text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                    {label}
                    {required && <span className="text-[#FF0000]">*</span>}
                </h3>
                <p className="max-w-[80%] tablet:text-xs tablet:max-w-full w-max text-sm font-normal text-tremor-brand-boulder900">
                    {description}
                </p>
                <ActionList list={value} setList={setValue} />
            </div>
            <div className="col-span-1 flex flex-col gap-3">
                <input
                    type={type}
                    value={tracker}
                    onChange={e => setTracker(e.target.value)}
                    placeholder={placeholder}
                    className="w-full h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder900 outline-none rounded-2xl bg-white"
                />
                <button
                    type="button"
                    onClick={handleAddRequirement}
                    className="w-full flex justify-center items-center gap-2.5 rounded-2xl border border-tremor-background-darkYellow text-tremor-background-darkYellow text-sm font-medium h-12">
                    Add Requirement <Plus className="w-3 h-3" />
                </button>
            </div>
        </div>
    )
}
