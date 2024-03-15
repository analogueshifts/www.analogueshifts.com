'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import DashboardLoader from '@/app/components/DashboardLoader'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'

export default function VettingPage() {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(Cookies.get('analogueshifts')))
        }
    }, [])

    const handleCreateNewVet = () => {
        Cookies.remove('vetCreationData')
        router.push('/tools/vet/create')
    }

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Vetting
                </h2>
            }>
            <div className="bg-[#FEFEFE] mt-2 border border-[#E7E7E7] h-max px-4 lg:px-7 py-5 rounded-3xl">
                <div className="w-full flex-wrap gap-5 flex justify-center md:justify-between items-center">
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
            </div>
        </Authenticated>
    )
}
