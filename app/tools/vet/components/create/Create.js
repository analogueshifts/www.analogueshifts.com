'use client'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { useEffect, useState } from 'react'
import VetDescriptionForm from '../VetDescriptionForm'
import Question from './Question'
import { Reorder } from 'framer-motion'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function CreateVet() {
    let currentDate = new Date()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [vetQuestions, setVetQuestions] = useState(null)
    const [newVetData, setNewVetData] = useState(null)
    const router = useRouter()
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/tools/vetting/store_vet'

    useEffect(() => {
        setNewVetData(prev => {
            return { ...prev, vet_questions: vetQuestions }
        })
    }, [vetQuestions])

    // Check for user's session and existing vetCreationData
    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        let vetCreationData = Cookies.get('vetCreationData')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }

        if (vetCreationData) {
            let existingData = JSON.parse(vetCreationData)
            setNewVetData(existingData)
            setVetQuestions(existingData.vet_questions)
        } else {
            let questions = [
                {
                    id: '7931fb9f-7593-4ec1-8102-c64fe87fe414',
                    question: '',
                    type: 'Short Text',
                    answer: '',
                    required: false,
                },
            ]
            setNewVetData({
                title: '',
                description: '',
                multi_response: false,
                deadline: `${currentDate.getFullYear()}-${(
                    currentDate.getMonth() + 1
                )
                    .toString()
                    .padStart(
                        2,
                        '0',
                    )}-${currentDate.getDate().toString().padStart(2, '0')}`,
                timeout: 1000,
                vet_questions: questions,
            })
            setVetQuestions(questions)
        }
    }, [])

    // Add a new vet question
    const addVetQuestion = () => {
        setVetQuestions(prev => {
            return [
                {
                    id: crypto.randomUUID(),
                    question: '',
                    type: 'Short Text',
                    answer: '',
                    required: false,
                },
                ...prev,
            ]
        })
    }

    // Create a vet
    const createVet = () => {
        if (newVetData.title === '') {
            toast.error(
                'Each vet must have a title! kindly fill out the description form above.',
                {
                    position: 'top-right',
                    autoClose: 3000,
                },
            )
            return
        }
        for (let question of newVetData.vet_questions) {
            if (question.question.trim() === '') {
                toast.error(
                    'Each Question must have a question value. Kindly review all questions',
                    {
                        position: 'top-right',
                        autoClose: 3000,
                    },
                )
                return
            }
        }

        //   Make Request to Api
        const axios = require('axios')
        let config = {
            method: 'POST',
            url: url,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
            data: newVetData,
        }
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setLoading(false)
                toast.success('Your Vet Request Has Been Sent', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                Cookies.remove('vetCreationData')
                router.push('/tools/vet')
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Vetting
                </h2>
            }>
            {loading && <DashboardLoader />}
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
                {newVetData && (
                    <VetDescriptionForm
                        data={newVetData}
                        setData={setNewVetData}
                        newVetData={newVetData}
                    />
                )}
            </div>

            <div className="w-full mt-6   flex-wrap gap-5 flex justify-center md:justify-between items-center bg-[#FEFEFE] border border-[#E7E7E7] h-max px-4 lg:px-10 py-5 rounded-3xl">
                <span className="font-medium md:text-lg text-base text-tremor-brand-boulder950">
                    Vet Questions
                </span>
                <button
                    onClick={addVetQuestion}
                    className="h-10 cursor-pointer rounded-full px-8 flex justify-center items-center gap-3 border border-tremor-background-darkYellow font-normal md:text-base text-sm bg-transparent text-tremor-background-darkYellow">
                    Add question
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            {vetQuestions && (
                <div className="w-full mt-5">
                    <Reorder.Group
                        onReorder={setVetQuestions}
                        values={vetQuestions}>
                        {vetQuestions.map(item => (
                            <Question
                                key={item.id}
                                data={item}
                                vetQuestions={vetQuestions}
                                setVetQuestions={setVetQuestions}
                                newVetData={newVetData}
                            />
                        ))}
                    </Reorder.Group>
                </div>
            )}
            <button
                onClick={createVet}
                className={`px-6 text-[#FEFEFE] mt-5 ml-auto text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none cursor-pointer`}>
                Create vet <i className="fas fa-plus"></i>
            </button>
        </Authenticated>
    )
}
