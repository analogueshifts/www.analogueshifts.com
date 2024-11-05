import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function Dropdown({
    value,
    placeholder,
    setValue,
    list,
    currency,
}) {
    return (
        <Select
            value={value}
            onValueChange={e => setValue(e)}
            className="w-full">
            <SelectTrigger
                className={`w-full focus:ring-transparent text-[#5D5D5D] tablet:text-xs text-sm large:text-base font-normal rounded-2xl outline-none focus-visible:ring-0 border border-tremor-brand-boulder200 px-6 ${
                    currency ? 'h-11 large:h-50' : 'h-14 large:h-16'
                }`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="form-dropdown p-0 h-max rounded-2xl border-none bg-white">
                <div className="w-full large:py-6 large:px-6 px-5 py-5 flex flex-col large:gap-[30px] gap-6">
                    <h3 className="font-semibold text-black large:text-xl text-base">
                        {placeholder}
                    </h3>
                </div>

                <div className="dropdown-list mb-5 large:mb-6 w-full h-max flex flex-col overflow-y-auto max-h-48 large:max-h-72">
                    {list.map((item, index) => {
                        return (
                            <SelectItem
                                key={index}
                                value={item}
                                className={`large:px-6 rounded-none w-full px-5 py-2 text-[13px] tablet:text-[11px] font-normal leading-[26px] border focus:bg-[#FFBB0A0F] focus:border-[#FFBB0A0D] focus:text-tremor-brand-boulder950   ${
                                    item === value
                                        ? 'border-[#FFBB0A0D] bg-[#FFBB0A0F] text-tremor-brand-boulder950'
                                        : 'bg-transparent  border-transparent  text-tremor-brand-boulder400'
                                }`}>
                                {item}{' '}
                            </SelectItem>
                        )
                    })}
                </div>
            </SelectContent>
        </Select>
    )
}
