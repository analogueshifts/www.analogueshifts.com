import Image from 'next/image'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export default function InputGroup({
    label,
    placeholder,
    image,
    value,
    setValue,
    type,
    required,
    noImage,
    small,
    dangerousHtml,
}) {
    const handleTextareaChange = e => {
        if (e.target.value.length <= 300) {
            setValue(e.target.value)
        }
    }

    return (
        <div className="w-full flex flex-col gap-3.5 large:gap-5 items-start">
            {!dangerousHtml ? (
                <label
                    className={`font-medium text-tremor-brand-boulder950 ${small ? 'text-sm' : 'text-base'
                        } large:text-x"`}
                    id={label}>
                    {label}
                </label>
            ) : (
                <p
                    dangerouslySetInnerHTML={{ __html: label }}
                    className={`font-medium text-tremor-brand-boulder950 ${small ? 'text-sm' : 'text-base'
                        } large:text-x"`}></p>
            )}
            {(type === 'text' || type === 'email') && (
                <div
                    className={`w-full border gap-3 overflow-hidden border-tremor-brand-boulder200 rounded-2xl flex items-center ${label !== 'Phone Number' ? 'px-6' : 'pr-6'
                        } ${small ? 'h-12' : 'h-14'}`}>
                    {!noImage && (
                        <>
                            {label !== 'Phone Number' ? (
                                <Image
                                    width={24}
                                    height={24}
                                    alt=""
                                    className="large:w-6 h-max w-4"
                                    src={image}
                                />
                            ) : (
                                <div className="h-full w-[84px] bg-[#F8F8F8] flex justify-center items-center">
                                    <div className="w-6 h-6 rounded-full bg-[#039855]"></div>
                                </div>
                            )}
                        </>
                    )}
                    <input
                        placeholder={placeholder}
                        required={required}
                        type={type}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className={`w-full bg-none border-none outline-none font-normal large:text-base placeholder:text-tremor-brand-boulder200 ${small
                            ? 'text-tremor-brand-boulder950 text-xs'
                            : 'text-tremor-brand-boulder400 text-sm'
                            }`}
                    />
                    {label === 'Phone Number' && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger type="button">
                                    <Image
                                        width={24}
                                        height={24}
                                        alt=""
                                        className="large:w-6 h-max w-4"
                                        src={
                                            '/images/contact-form/question-mark.svg'
                                        }
                                    />
                                </TooltipTrigger>
                                <TooltipContent className="bg-white rounded-2xl py-2.5 px-6 shadow-custom">
                                    <p className="text-black w-56 font-normal large:leading-8 leading-6 text-sm large:text-base">
                                        Choose your country to automatically
                                        fill in the correct phone code, ensuring
                                        your number is properly formatted.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
            )}
            {type === 'textarea' && (
                <div className="flex flex-col w-full py-5 px-6 border border-tremor-brand-boulder200 rounded-2xl">
                    <textarea
                        value={value}
                        onChange={handleTextareaChange}
                        className="border border-none h-32 scroll-hidden resize-none outline-none text-sm large:text-base placeholder:text-tremor-brand-boulder200 text-tremor-brand-boulder400 font-normal"
                        rows={4}
                        maxLength={300}
                        placeholder="Enter your main text in here"
                    />
                    <div className="text-xs text-tremor-brand-boulder200 font-normal">
                        {value.length}/300
                    </div>
                </div>
            )}
        </div>
    )
}
