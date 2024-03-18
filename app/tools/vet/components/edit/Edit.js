'use client'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import { useEffect, useState } from 'react'
import VetDescriptionForm from '../VetDescriptionForm'
import Question from '../create/Question'
import { Reorder } from 'framer-motion'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function EditVet({ slug }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [vetQuestions, setVetQuestions] = useState(null)
    const [newVetData, setNewVetData] = useState(null)
    const router = useRouter()
    const getVetUrl = process.env.NEXT_PUBLIC_BACKEND_URL + '/tools/vetting'
    const url =
        process.env.NEXT_PUBLIC_BACKEND_URL + `/tools/vetting/edit/${slug}`

    useEffect(() => {
        if (vetQuestions) {
            setNewVetData(prev => {
                return { ...prev, vet_questions: vetQuestions }
            })
        }
    }, [vetQuestions])

    // Check for user's session
    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }
    }, [])

    // Call the fetch function if the user session is still active
    useEffect(() => {
        if (user) {
            fetchVets()
        }
    }, [user])

    // Fetch all vets from api and filter with slug
    const fetchVets = () => {
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: getVetUrl,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        // Fetch vet data from your API
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                let filteredData = response.data.vetting.filter(
                    item => item.slug === slug,
                )[0]
                let existingData = Cookies.get('vetEditingData')
                if (existingData) {
                    let storedData = JSON.parse(existingData)
                    setNewVetData(storedData)
                    setVetQuestions(storedData.vet_questions)
                } else {
                    if (filteredData) {
                        Cookies.set(
                            'vetEditingData',
                            JSON.stringify(filteredData),
                        )
                        setNewVetData(filteredData)
                        setVetQuestions(filteredData.vet_questions)
                    }
                }
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }

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

    const makeUpdateRequest = () => {
        const axios = require('axios')
        let config = {
            method: 'PUT',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
            data: newVetData,
        }
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setLoading(false)
                toast.success('Your Vet has been edited successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                Cookies.remove('vetEditingData')
                router.push('/tools/vet')
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    // Edit a vet
    const editVet = () => {
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
        makeUpdateRequest()
    }

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
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
                        href={`/tools/vet/edit/${slug}/preview`}
                        className="w-1/2 h-full  flex justify-center items-center text-tremor-brand-inActiveLink font-medium text-sm md:text-base">
                        Preview
                    </Link>
                </div>

                {/* The Vet Description Section */}
                {newVetData && (
                    <VetDescriptionForm
                        type={'edit'}
                        data={newVetData}
                        setData={setNewVetData}
                        newVetData={newVetData}
                    />
                )}
            </div>

            {vetQuestions && (
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
            )}

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
                                updateType={'edit'}
                            />
                        ))}
                    </Reorder.Group>
                </div>
            )}
            {newVetData && (
                <button
                    onClick={editVet}
                    className={`px-6 text-[#FEFEFE] mt-5 ml-auto text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none cursor-pointer`}>
                    Edit vet
                </button>
            )}
        </Authenticated>
    )
}
