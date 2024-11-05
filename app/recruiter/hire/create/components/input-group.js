'use client'
export default function InputGroup({
    label,
    type,
    description,
    value,
    setValue,
    required,
    border,
    placeholder,
}) {
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
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                className="col-span-1 h-50 border border-tremor-brand-boulder100 px-6 text-sm large:text-base font-normal placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder900 outline-none rounded-2xl bg-white"
            />
        </div>
    )
}
