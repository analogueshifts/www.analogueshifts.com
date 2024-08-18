'use client'
import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useKyc = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const getKyc = async ({ setData, setLoading }) => {
        const config = {
            url: '/profile/kyc',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        try {
            setLoading(true)
            const request = await axios.request(config)
            if (request?.data?.success) {
                setData(request.data.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Error Fetching Kyc Information',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const updateKyc = async ({ setLoading, role, preference, router }) => {
        let config = {
            method: 'POST',
            url: '/update/kyc',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: { role, preference },
        }
        setLoading(true)
        try {
            const request = await axios.request(config)
            setLoading(false)
            if (request?.data?.success) {
                notifyUser('success', 'KYC Information Updated')
                router.push('/dashboard')
            }
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed To Update KYC',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        getKyc,
        updateKyc,
    }
}
