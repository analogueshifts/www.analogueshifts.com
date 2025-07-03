import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import Image from 'next/image'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'
import ChevronDownWhite from '@/public/images/chevron-down-white.svg'

export default function SelectPeriod({ color, period, setPeriod }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="[&[data-state=open]>img]:rotate-180 [&[data-state=closed]>img]:rotate-0 duration-200 flex h-max items-center outline-none focus-visible:outline-none ">
                <h3
                    className={` font-semibold text-xs mr-0.5 ${
                        color === 'white'
                            ? 'text-white'
                            : 'text-tremor-brand-boulder950'
                    }`}>
                    {period}
                </h3>

                <Image
                    src={color === 'white' ? ChevronDownWhite : ChevronDown}
                    alt=""
                    className="duration-200 w-max h-4 tablet:h-2"
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="rounded-[18px] px-0 py-3">
                <DropdownMenuItem
                    className="text-xs rounded-none text-tremor-brand-boulder700 py-2 px-5 focus:text-tremor-brand-boulder950 focus:bg-tremor-background-darkYellow/10"
                    onClick={() => setPeriod('This Week')}>
                    This Week
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="text-xs rounded-none text-tremor-brand-boulder700 py-2 px-5 focus:text-tremor-brand-boulder950 focus:bg-tremor-background-darkYellow/10"
                    onClick={() => setPeriod('This Month')}>
                    This Month
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="text-xs rounded-none text-tremor-brand-boulder700 py-2 px-5 focus:text-tremor-brand-boulder950 focus:bg-tremor-background-darkYellow/10"
                    onClick={() => setPeriod('This Year')}>
                    This Year
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
