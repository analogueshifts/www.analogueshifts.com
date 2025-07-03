export default function InputGroup({
    label,
    placeholder,
    required,
    value,
    setValue,
    type,
}) {
    return (
        <div className="w-full flex flex-col tablet:gap-1.5 gap-2.5">
            <p className="text-sm tablet:text-xs large:text-base text-tremor-brand-boulder950 font-medium">
                {label}
            </p>
            <input
                required={required}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
            />
        </div>
    )
}
