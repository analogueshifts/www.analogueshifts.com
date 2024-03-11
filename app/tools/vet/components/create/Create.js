'use client'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { useEffect, useState } from 'react'
import VetDescriptionForm from '../VetDescriptionForm'
import Question from './Question'

export default function CreateVet() {
    let currentDate = new Date()
    const [user, setUser] = useState(null)
    const [newVetData, setNewVetData] = useState({
        title: '',
        description: '',
        deadline: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${currentDate
            .getDate()
            .toString()
            .padStart(2, '0')}`,
        timeout: 1000,
        vet_questions: [
            {
                id: 'e85488be-05a4-4e89-8679-12fe63f80d9e',
                question: '',
                type: 'Short Text',
                answer: '',
            },
        ],
    })

    // Save Data to Cookies
    const saveData = () => {
        Cookies.set('vetCreationData', JSON.stringify(newVetData))
    }

    useEffect(() => {
        saveData()
    }, [newVetData])

    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }
    }, [])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Vetting
                </h2>
            }>
            <div className="bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-10 py-5 rounded-3xl">
                <div className="w-full mb-7 flex justify-between items-center h-14">
                    <Link
                        href={'/tools/vet/create'}
                        className="w-1/2 h-full relative before:absolute before:h-[5px] before:w-full before:bottom-0 before:left-0 before:bg-tremor-background-darkYellow flex justify-center before:rounded-2xl items-center text-tremor-brand-activeLink font-medium text-sm md:text-base">
                        Create Form
                    </Link>
                    <Link
                        href={'/tools/vet/create/preview'}
                        className="w-1/2 h-full  flex justify-center items-center text-tremor-brand-inActiveLink font-medium text-sm md:text-base">
                        Preview
                    </Link>
                </div>

                {/* The Vet Description Section */}
                <VetDescriptionForm data={newVetData} setData={setNewVetData} />

                <div className="w-full mt-12  flex-wrap gap-5 flex justify-center md:justify-between items-center">
                    <span className="font-medium md:text-lg text-base text-tremor-brand-boulder950">
                        Vetting Form
                    </span>
                    <button className="h-10 cursor-pointer rounded-full px-8 flex justify-center items-center gap-3 border border-tremor-background-darkYellow font-normal md:text-base text-sm bg-transparent text-tremor-background-darkYellow">
                        Add question
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

                <div className="w-full mt-5 flex flex-col gap-6">
                    {newVetData.vet_questions.map(item => (
                        <Question
                            data={item}
                            setNewVetData={setNewVetData}
                            key={crypto.randomUUID}
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    )
}
