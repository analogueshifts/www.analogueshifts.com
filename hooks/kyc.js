import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { errorToast } from '@/utils/error-toast'
import { clearUserSession } from '@/utils/clear-user-session'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'

export const useKyc = () => {
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
            errorToast(
                'Error Fetching Kyc Information',
                error?.response?.data?.message || error.message || '',
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
                toast.success('KYC Information Updated', toastConfig)
                router.push('/dashboard')
            }
        } catch (error) {
            errorToast(
                'Failed To Update KYC',
                error?.response?.data?.message || error.message || '',
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
