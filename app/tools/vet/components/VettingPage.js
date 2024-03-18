'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import ActionMenu from './ActionMenu'
import IdiomProof from '@/app/Layouts/IdiomProof'

export default function VettingPage() {
    const [idiomModal, setIdiomModal] = useState(false)
    const [idToBeDeleted, setIdToBeDeleted] = useState(null)
    const [user, setUser] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    let getVetsUrl = process.env.NEXT_PUBLIC_BACKEND_URL + '/tools/vetting'

    //Fetch Vets
    const fetchVets = () => {
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: getVetsUrl,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        // Fetch vet data from your API
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setData(response.data.vetting)
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

    // Clear the existing vetCreationData and navigate to the new Vet Page
    const handleCreateNewVet = () => {
        Cookies.remove('vetCreationData')
        router.push('/tools/vet/create')
    }

    // Delete A Vet by using the Vet Id
    const deleteVet = async () => {
        const axios = require('axios')
        let config = {
            method: 'DELETE',
            url: getVetsUrl + `/${idToBeDeleted}`,
            headers: {
                Authorization: 'Bearer ' + user.token,
            },
        }
        setLoading(true)
        axios
            .request(config)
            .then(res => {
                fetchVets()
                toast.success('Vet Deleted Successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setIdToBeDeleted(null)

                setLoading(false)
            })
            .catch(err => {
                toast.error('Error Deleting Vet', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    // Check for user session
    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }
    }, [])

    // If the user session is active, fetch the users vets
    useEffect(() => {
        if (user) {
            fetchVets()
        }
    }, [user])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Vetting
                </h2>
            }>
            {loading && <DashboardLoader />}
            <IdiomProof
                title={'Delete Vet'}
                action={() => {
                    deleteVet()
                    setIdiomModal(false)
                }}
                close={() => {
                    setIdToBeDeleted(null)
                    setIdiomModal(false)
                }}
                description={
                    'Are you sure you want to delete this Vet? This action cannot be undone.'
                }
                open={idiomModal}
            />
            <div className="bg-[#FEFEFE] min-w-[800px] w-full  mt-2 border border-[#E7E7E7] h-max  py-5 rounded-3xl">
                <div className="w-full px-4 lg:px-10 my-5  gap-5 flex justify-between  items-center">
                    <span className="font-medium md:text-lg text-base text-tremor-brand-boulder950">
                        Your Vetting Forms
                    </span>
                    <button
                        onClick={handleCreateNewVet}
                        type="button"
                        className="h-10 bg-none outline-none rounded-full px-8 flex justify-center items-center gap-3 border border-tremor-background-darkYellow font-normal md:text-base text-sm bg-transparent text-tremor-background-darkYellow">
                        Create New
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <table className="w-full">
                    <thead className="h-[72px] w-full bg-[#56669F]/5">
                        <tr className="w-full">
                            <th className="pl-4 lg:pl-10 max-w-[30%]  font-light text-lg text-tremor-brand-activeLink text-start">
                                Name
                            </th>
                            <th className="font-light text-lg max-w-1/5  text-tremor-brand-activeLink text-center">
                                Deadline
                            </th>
                            <th className="font-light text-lg max-w-1/5 text-tremor-brand-activeLink text-center">
                                Duration
                            </th>
                            <th className="pr-4 lg:pr-10 max-w-[30%] font-light text-lg text-tremor-brand-activeLink text-end">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-full bg-transparent">
                        {data[0] &&
                            data.map(item => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="w-full h-[72px]">
                                        <td className="pl-4 lg:pl-10 max-w-[30%]  font-normal text-tremor-brand-boulder950 text-base text-start">
                                            {item.title}
                                        </td>
                                        <td className="font-normal text-tremor-brand-boulder950 text-base max-w-1/5 text-center">
                                            {item.deadline}
                                        </td>
                                        <td className="font-normal text-tremor-brand-boulder950 text-base max-w-1/5 text-center">
                                            {item.timeout}mins
                                        </td>
                                        <td className="pr-4 lg:pr-10 max-w-[30%] font-normal text-tremor-brand-boulder950 text-base text-end">
                                            <ActionMenu
                                                handleEdit={() => {
                                                    Cookies.remove(
                                                        'vetEditingData',
                                                    )
                                                    router.push(
                                                        `/tools/vet/edit/${item.slug}`,
                                                    )
                                                }}
                                                handleDelete={() => {
                                                    setIdToBeDeleted(item.id)
                                                    setIdiomModal(true)
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    )
}
