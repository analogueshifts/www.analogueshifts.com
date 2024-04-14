'use client'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { useEffect, useState } from 'react'

export default function PreviewVet() {
    const [user, setUser] = useState(null)
    const [newVetData, setNewVetData] = useState(null)

    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        let vetCreationData = Cookies.get('vetCreationData')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }

        if (vetCreationData) {
            let existingData = JSON.parse(vetCreationData)
            setNewVetData(existingData)
        }
    }, [])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Vetting
                </h2>
            }>
            <div className="bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-10 py-5 rounded-3xl">
                <div className="w-full mb-7 flex justify-between items-center h-14">
                    <Link
                        href={'/tools/vet/create'}
                        className="w-1/2 h-full  flex justify-center items-center text-tremor-brand-inActiveLink font-medium text-sm md:text-base">
                        Create Form
                    </Link>
                    <Link
                        href={'/tools/vet/create/preview'}
                        className="w-1/2 h-full relative before:absolute before:h-[5px] before:w-full before:bottom-0 before:left-0 before:bg-tremor-background-darkYellow flex justify-center before:rounded-2xl items-center text-tremor-brand-activeLink font-medium text-sm md:text-base">
                        Preview
                    </Link>
                </div>
                {newVetData && (
                    <div className="w-full flex flex-col gap-6">
                        <span className="font-medium flex flex-col items-center gap-4 md:text-xl pt-5 text-lg text-tremor-brand-boulder950 text-center">
                            {newVetData.title}
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: newVetData.description,
                                }}
                                className="text-base font-normal text-tremor-brand-boulder500 text-center"></span>
                        </span>
                        {newVetData.vet_questions.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                                            {item.question}{' '}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        {item.type === 'Short Text' && (
                                            <input
                                                required={item.required}
                                                type="text"
                                                placeholder="Enter answer"
                                                className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                                            />
                                        )}
                                        {item.type === 'Long Text' && (
                                            <textarea
                                                required={item.required}
                                                type="text"
                                                placeholder="Enter answer"
                                                className="max-w-full py-3 w-full h-28 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"></textarea>
                                        )}
                                        {item.type === 'Radio' && (
                                            <div className="w-full flex flex-col gap-2 pl-3">
                                                {item.options.map(option => {
                                                    return (
                                                        <label
                                                            key={option.id}
                                                            className="flex items-center gap-3">
                                                            <input
                                                                name={
                                                                    item.question
                                                                }
                                                                type="radio"
                                                            />
                                                            <span className="text-sm font-normal text-tremor-brand-boulder400">
                                                                {option.value}
                                                            </span>
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        )}
                                        {item.type === 'Checkbox' && (
                                            <div className="w-full flex flex-col gap-2 pl-3">
                                                {item.options.map(option => {
                                                    return (
                                                        <label
                                                            key={option.id}
                                                            className="flex items-center gap-3">
                                                            <input type="checkbox" />
                                                            <span className="text-sm font-normal text-tremor-brand-boulder400">
                                                                {option.value}
                                                            </span>
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </Authenticated>
    )
}
