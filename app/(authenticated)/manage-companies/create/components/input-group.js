import Tiptap from '@/components/application/utilities/Tiptap'

export default function InputGroup({
    label,
    description,
    required,
    type,
    placeholder,
    value,
    setValue,
}) {
    return (
        <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    {label}
                    {required && (
                        <span className="text-red-600 text-lg">*</span>
                    )}
                </p>
                <p className="font-light text-[13px] text-tremor-brand-boulder900">
                    {description}
                </p>
            </div>
            <div className="w-full md:w-1/2">
                {type !== 'long_text' && (
                    <input
                        required={required}
                        type={type}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={placeholder}
                        className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                    />
                )}
                {type === 'long_text' && (
                    <Tiptap
                        changed={data => setValue(data)}
                        initialData={value}
                    />
                )}
            </div>
        </div>
    )
}
