'use client'
import { useEffect, useState } from 'react'
import { useToast } from '@/contexts/toast'
import Cookies from 'js-cookie'
import LoadingTwo from '@/components/ui/loading-spinner'
import FormInput from '@/components/application/form-input'

import { motion, AnimatePresence } from 'framer-motion'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/auth'
import { useKyc } from '@/hooks/kyc'
import { useUser } from '@/contexts/user'

import { Plus, X } from 'lucide-react'

export default function Form() {
    const [loading, setLoading] = useState(false)
    const [role, setRole] = useState('')
    const [newPreferenceValue, setNewPreferenceValue] = useState('')
    const [preferences, setPreferences] = useState([])

    const { user } = useUser()
    const { getUser } = useAuth()
    const { getKyc, updateKyc } = useKyc()
    const { notifyUser } = useToast()
    const router = useRouter()

    const token = Cookies.get('analogueshifts')

    useEffect(() => {
        // Redirect To Login if User is not Authenticated
        if (!user && !token) {
            window.location.href = '/login'
            return null
        } else if (!user && token) {
            //    Fetch User
            getUser({ setLoading, layout: 'authenticated' })
        }
    }, [])

    useEffect(() => {
        if (user) {
            getKyc({
                setData: data => {
                    setPreferences(data.preferences)
                },
                setLoading,
            })
        }
    }, [user])

    const handleAddPreference = e => {
        e.preventDefault()
        if (preferences.includes(newPreferenceValue)) {
            notifyUser('error', `${newPreferenceValue} already exists.`)
            return
        } else {
            setPreferences(prev => [...prev, newPreferenceValue])
            setNewPreferenceValue('')
        }
    }

    const handleRemovePreference = item => {
        setPreferences(prev => prev.filter(prevItem => prevItem !== item))
    }

    const handleFormSubmit = async () => {
        if (role === '') {
            notifyUser('error', 'Role Is Required')
            return
        }

        updateKyc({
            role,
            preference: preferences.join(', '),
            setLoading,
            router,
        })
    }

    return (
        <section className="pt-11 w-full flex flex-col">
            {loading && <LoadingTwo />}
            <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                Welcome!
            </p>
            <p className="font-bold text-3xl text-[#292929] pb-5">
                Update KYC Information
            </p>
            <FormInput
                icon="fa-solid fa-signature"
                type="text"
                onChange={e => setRole(e.target.value)}
                label="Your Role"
                placeholder="Enter Role"
                value={role}
            />
            <div className=" w-full flex flex-col gap-4 mb-5">
                {preferences.length > 0 && (
                    <div className="w-full flex flex-wrap gap-1.5">
                        <AnimatePresence initial={false} mode="popLayout">
                            {preferences.map(item => {
                                return (
                                    <motion.div
                                        key={item}
                                        layout
                                        initial={{ scale: 0.7, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ type: 'spring' }}
                                        className="px-3 py-1.5 rounded-lg text-tremor-brand-boulder900 bg-tremor-brand-boulder200/80 flex items-center gap-2">
                                        <p className="text-sm font-normal ">
                                            {item}
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleRemovePreference(item)
                                            }>
                                            <X width={14} />
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                )}
                <form onSubmit={handleAddPreference} className="w-full ">
                    <div className="relative h-12">
                        <input
                            className={`w-full rounded-2xl bg-white border  border-black/10 outline-1 outline-tremor-background-darkYellow h-full pl-5 pr-20  text-sm font-normal text-gray-400`}
                            placeholder={'Enter Preference E.g HTML'}
                            value={newPreferenceValue}
                            type={'text'}
                            onChange={e =>
                                setNewPreferenceValue(e.target.value)
                            }
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 h-full bg-transparent gap-2 w-20 flex items-center justify-center text-sm text-gray-400 font-normal">
                            Add <Plus width={14} />
                        </button>
                    </div>
                </form>
            </div>
            <button
                onClick={handleFormSubmit}
                type="button"
                className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                Update
            </button>
        </section>
    )
}
