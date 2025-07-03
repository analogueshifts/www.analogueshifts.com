'use client'
import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useNotifications = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const getNotifications = async ({ setData, setLoading, url }) => {
        const config = {
            url: url,
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
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
                    error.message ||
                    'Error Fetching Notifications',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        getNotifications,
    }
}
