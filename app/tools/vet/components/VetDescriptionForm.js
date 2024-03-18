'use client'
import Tiptap from '@/app/components/utilities/Tiptap'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

export default function VetDescriptionForm({
    data,
    setData,
    newVetData,
    type,
}) {
    const [title, setTitle] = useState(data.title)
    const [description, setDescription] = useState(data.description)
    const [multiResponseSwitch, setMultiResponseSwitch] = useState(
        data.multi_response,
    )
    const [timeout, setTimeout] = useState(data.timeout)
    const [deadline, setDeadline] = useState(data.deadline)

    // Set The Vetting Description Data
    const handleSubmit = e => {
        e.preventDefault()

        Cookies.set(
            `${type === 'edit' ? 'vetEditingData' : 'vetCreationData'}`,
            JSON.stringify({
                ...newVetData,
                multi_response: multiResponseSwitch,
                title: title,
                description: description,
                timeout: timeout,
                deadline: deadline,
            }),
        )
        setData(previous => {
            return {
                ...previous,
                multi_response: multiResponseSwitch,
                title: title,
                description: description,
                timeout: timeout,
                deadline: deadline,
            }
        })
        toast.success(
            'Info saved successfully! You can proceed to adding questions to your vet.',
            {
                position: 'top-right',
                autoClose: 3000,
            },
        )
    }

    const toggleSwitch = () => {
        setMultiResponseSwitch(prev => !prev)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-wrap gap-x-5 gap-y-5">
            {' '}
            <div className="w-full md:w-[calc(20%-10px)] flex flex-col gap-4">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    MULTI RESPONSE
                </p>
                <div className="w-full">
                    <div
                        className="switch"
                        data-isOn={multiResponseSwitch}
                        onClick={toggleSwitch}>
                        <motion.div
                            className="handle"
                            layout
                            transition={{
                                opacity: { ease: 'linear' },
                                layout: { duration: 0.3 },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[calc(80%-10px)] flex flex-col gap-3">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    TITLE
                </p>
                <input
                    required
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="e.g “Getting to know you”"
                    className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                />
            </div>
            <div className="w-full md:w-[calc(50%-10px)] flex flex-col gap-3">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    TIME OUT
                </p>
                <input
                    required
                    type="number"
                    value={timeout}
                    onChange={e => setTimeout(e.target.value)}
                    className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                />
            </div>
            <div className="w-full md:w-[calc(50%-10px)] flex flex-col gap-3">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    DEADLINE
                </p>
                <input
                    required
                    type="date"
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                    className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                />
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    DESCRIPTION
                </p>
                <div className="w-full">
                    <Tiptap
                        changed={value => setDescription(value)}
                        initialData={description}
                    />
                </div>
            </div>
            <div className=" flex w-full">
                <input
                    value="Save"
                    type="submit"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none cursor-pointer`}
                />
            </div>
        </form>
    )
}
