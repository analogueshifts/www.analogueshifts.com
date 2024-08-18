import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function DropdownMenu({ value, onChange, list, placeholder }) {
    return (
        <div className="relative">
            <Select value={value} onValueChange={e => onChange(e)}>
                <SelectTrigger className="w-full tablet:h-12 h-14 focus:ring-transparent outline-none rounded-2xl border border-tremor-brand-boulder200 px-6 tablet:text-sm text-sm large:text-base font-normal text-tremor-brand-boulder700 placeholder:text-tremor-brand-boulder200">
                    {value.trim().length > 0 ? (
                        <SelectValue placeholder={value} />
                    ) : (
                        <p className="tablet:text-sm text-sm large:text-base font-normal text-tremor-brand-boulder200">
                            {placeholder}
                        </p>
                    )}
                </SelectTrigger>
                <SelectContent
                    className="rounded-3xl bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3"
                    style={{
                        boxShadow: '0px 20px 417px 0px #00000012',
                    }}>
                    {list.map(item => {
                        return (
                            <SelectItem
                                className="text-tremor-brand-boulder300 cursor-pointer border-transparent relative h-[42px] text-[13px] border select-none py-2 pl-3 pr-9 focus:bg-[#FFBB0A0F] focus:text-tremor-brand-boulder950 focus:border-[#FFBB0A0D]"
                                key={item}
                                value={item}>
                                {item}
                            </SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}
