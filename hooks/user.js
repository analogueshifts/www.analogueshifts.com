'use client'
import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useUser = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const searchUsers = async ({ setUser, setLoading, url }) => {
        const config = {
            url: url,
            method: 'Get',
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
                setUser(request.data.data.users.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error.message ||
                    'Error Fetching users',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const getUsers = async ({ setUser, setLoading, url }) => {
        const config = {
            url: url,
            method: 'Get',
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
                setUser(request.data.data.users.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error.message ||
                    'Error Fetching users',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const getUser = async ({ setUser, setLoading, url }) => {
        const config = {
            url: url,
            method: 'Get',
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
                setUser(request.data.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error.message ||
                    'Error Fetching user',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        searchUsers,
        getUsers,
        getUser,
    }
}
