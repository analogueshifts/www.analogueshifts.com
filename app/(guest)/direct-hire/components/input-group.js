'use client'
import { useState } from 'react'
import Image from 'next/image'

const InputGroup = ({
    label,
    image,
    value,
    type,
    placeholder,
    onChange,
    required,
}) => {
    const [focus, setFocus] = useState(false)

    const handleTextAreaChange = e => {
        onChange(e.target.value.slice(0, 3000))
    }

    return (
        <div className="w-full flex flex-col gap-3 large:gap-5">
            <p className="text-base large:text-xl font-medium text-tremor-brand-boulder950">
                {label} {required && <span className="text-[#FF0000]">*</span>}
            </p>
            {type !== 'textarea' ? (
                <div
                    className={`w-full relative flex items-center h-14 rounded-2xl border gap-2.5 px-6 py-2.5 ${
                        focus ? 'border-[#FFBB0A]' : 'border-[#E7E7E7]'
                    }`}>
                    <Image src={image} alt="" className="w-max h-5 large:h-6" />
                    <input
                        className={`large:text-base text-sm font-normal text-tremor-brand-boulder950 placeholder:text-[#B0B0B0] w-full bg-transparent border-none outline-none `}
                        placeholder={placeholder}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        value={value}
                        type={type}
                        onChange={e => onChange(e.target.value)}
                        required={required}
                    />
                </div>
            ) : (
                <div className="w-full flex justify-between flex-col h-[197px] rounded-2xl border border-[#E7E7E7] py-5 px-6">
                    <textarea
                        placeholder={placeholder}
                        value={value}
                        onChange={handleTextAreaChange}
                        className="outline-none large:leading-[32px] leading-[28px] large:text-base text-sm font-normal text-tremor-brand-boulder950 placeholder:text-[#B0B0B0] bg-transparent border-none w-full h-[85%]"
                    />
                    <p className="text-xs text-[#B0B0B0] font-normal">
                        {value?.length}/600
                    </p>
                </div>
            )}
        </div>
    )
}

export default InputGroup
