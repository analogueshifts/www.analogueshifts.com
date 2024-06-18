'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker({ label, date, setDate }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-full md:w-[280px] rounded-none h-12 justify-start text-left font-normal text-tremor-brand-boulder900',
                        !date && 'text-muted-foreground',
                    )}>
                    <CalendarIcon className="mr-2 h-4 w-4 text-tremor-brand-boulder500" />
                    {date ? (
                        format(date, 'PPP')
                    ) : (
                        <span className="text-tremor-brand-boulder500">
                            {label}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
