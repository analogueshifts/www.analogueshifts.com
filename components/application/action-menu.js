'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function ActionMenu({ list }) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <i
                        className="fas fa-ellipsis-vertical w-5 text-gray-400 outline-none"
                        aria-hidden="true"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white py-3 rounded-3xl shadow-lg">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {list.map(item => (
                        <DropdownMenuItem
                            key={item.name}
                            onClick={item.action}
                            className="text-tremor-brand-boulder300 border-transparent text-[13px] border p-2 focus:bg-[#FFBB0A0F] focus:text-tremor-brand-boulder950 focus:border-[#FFBB0A0D]">
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
