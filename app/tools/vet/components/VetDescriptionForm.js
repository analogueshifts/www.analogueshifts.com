'use client'
import Tiptap from '@/app/components/utilities/Tiptap'
import { useState } from 'react'

export default function VetDescriptionForm({ data, setData, saveData }) {
    const handleSubmit = e => {
        e.preventDefault()
        saveData()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-wrap gap-x-5 gap-y-5">
            <div className="w-full flex flex-col gap-3">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    TITLE
                </p>
                <input
                    required
                    type="text"
                    value={data.title}
                    onChange={e =>
                        setData(previous => {
                            return { ...previous, title: e.target.value }
                        })
                    }
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
                    value={data.timeout}
                    onChange={e =>
                        setData(previous => {
                            return { ...previous, timeout: e.target.value }
                        })
                    }
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
                    value={data.deadline}
                    onChange={e =>
                        setData(previous => {
                            return { ...previous, deadline: e.target.value }
                        })
                    }
                    className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                />
            </div>
            <div className="w-full flex flex-col gap-3">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    DESCRIPTION
                </p>
                <div className="w-full">
                    <Tiptap
                        changed={value =>
                            setData(previous => {
                                return { ...previous, description: value }
                            })
                        }
                        initialData={data.description}
                    />
                </div>
            </div>

            {/* <div className=" flex w-full">
                <input
                    value="Save and continue"
                    type="submit"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none cursor-pointer`}
                />
            </div> */}
        </form>
    )
}
