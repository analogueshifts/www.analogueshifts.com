import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Calendar from '@/public/images/user-layout/jobs/calendar.svg'

import { AnimatePresence, motion } from 'framer-motion'

const DateTimeDropdown = ({ onChange, dateTime, placeholder }) => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const generateTimeOptions = () => {
        const hours = [...Array(24).keys()].map(h => ('0' + h).slice(-2))
        const minutesSeconds = [...Array(60).keys()].map(m =>
            ('0' + m).slice(-2),
        )

        return { hours, minutes: minutesSeconds, seconds: minutesSeconds }
    }

    const handleDateChange = e => {
        setSelectedDate(e.target.value)
        onChange(`${e.target.value} ${selectedTime}`)
    }

    const handleTimeChange = (e, type) => {
        const value = e.target.value
        let newTime = selectedTime.split(':')

        if (newTime.length !== 3) {
            newTime = ['00', '00', '00']
        }

        if (type === 'hours') newTime[0] = value
        if (type === 'minutes') newTime[1] = value
        if (type === 'seconds') newTime[2] = value

        const newTimeString = newTime.join(':')
        setSelectedTime(newTimeString)
        if (selectedDate) {
            onChange(`${selectedDate} ${newTimeString}`)
        }
    }

    const timeOptions = generateTimeOptions()

    // Function to handle clicks outside the dropdown
    const handleClickOutside = event => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setOpen(false)
        }
    }

    // Add and clean up event listener for clicks outside
    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    // Prefill selectedDate and selectedTime on component mount
    useEffect(() => {
        if (dateTime) {
            const [datePart, timePart] = dateTime.split(' ')
            setSelectedDate(datePart || '')
            setSelectedTime(timePart || '')
        }
    }, [dateTime])

    return (
        <div className="w-full relative flex flex-col" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setOpen(p => !p)}
                className="w-full h-[30px] outline-none bg-[#FFFFFF29] flex items-center rounded-[8.8px] border-none px-[13px] text-[8.8px] justify-between font-normal">
                {dateTime.trim().length > 0 ? (
                    <p className="text-tremor-brand-boulder50 font-normal">
                        {dateTime}
                    </p>
                ) : (
                    <p className="text-[#FFFFFF52] font-normal text-tremor-brand-boulder200">
                        {placeholder}
                    </p>
                )}
                <Image src={Calendar} alt="" />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        transition={{ ease: 'backOut', duration: 0.15 }}
                        initial={{ opacity: 0.5, scale: 0.93 }}
                        exit={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            boxShadow: '0px 20px 417px 0px #00000012',
                        }}
                        className="space-y-2 z-40 origin-top px-[13px] py-2 absolute w-full max-w-md top-[35px] rounded-2xl bg-white focus:outline-none">
                        {/* Date Selector */}
                        <div>
                            <label className="block text-tremor-brand-boulder500 font-medium text-[10px] mb-0.5">
                                Select Date
                            </label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                className="w-full p-1 border rounded-lg text-[8px] outline-none text-tremor-brand-boulder300"
                            />
                        </div>

                        {/* Time Selector */}
                        <div>
                            <label className="block text-tremor-brand-boulder500 font-medium text-[10px] mb-0.5">
                                Select Time
                            </label>
                            <div className="grid grid-cols-2 gap-1">
                                {/* Hours */}
                                <select
                                    onChange={e => handleTimeChange(e, 'hours')}
                                    value={selectedTime.split(':')[0]}
                                    className="col-span-2 p-1 border rounded-lg text-[8px] outline-none text-tremor-brand-boulder300">
                                    <option value="" disabled>
                                        Hours
                                    </option>
                                    {timeOptions.hours.map(hour => (
                                        <option key={hour} value={hour}>
                                            {hour}
                                        </option>
                                    ))}
                                </select>

                                {/* Minutes */}
                                <select
                                    onChange={e =>
                                        handleTimeChange(e, 'minutes')
                                    }
                                    value={selectedTime.split(':')[1]}
                                    className="col-span-1 p-1 border rounded-lg text-[8px] outline-none text-tremor-brand-boulder300">
                                    <option value="" disabled>
                                        Minutes
                                    </option>
                                    {timeOptions.minutes.map(minute => (
                                        <option key={minute} value={minute}>
                                            {minute}
                                        </option>
                                    ))}
                                </select>

                                {/* Seconds */}
                                <select
                                    onChange={e =>
                                        handleTimeChange(e, 'seconds')
                                    }
                                    value={selectedTime.split(':')[2]}
                                    className="col-span-1 p-1 border rounded-lg text-[8px] outline-none text-tremor-brand-boulder300">
                                    <option value="" disabled>
                                        Seconds
                                    </option>
                                    {timeOptions.seconds.map(second => (
                                        <option key={second} value={second}>
                                            {second}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DateTimeDropdown
