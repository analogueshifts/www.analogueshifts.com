'use client'
import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useChat = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const createChat = async ({
        setSelectedTab,
        setMessage,
        setLoading,
        url,
        data,
    }) => {
        const config = {
            url: url,
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            data: data,
        }
        try {
            setLoading(true)
            const request = await axios.request(config)
            if (request?.data?.success) {
                setSelectedTab('chats')
                setMessage('')
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error.message ||
                    'Error Creating Chat',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const allChats = async ({ setChats, setLoading, url }) => {
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
                setChats(request.data.data[0].data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error.message ||
                    'Error Fetching Chats',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const getChat = async ({ setChat, setMessages, setLoading, url }) => {
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
                setChat(request.data.data.members.members[0])
                setMessages(request.data.data.messages.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    error.message ||
                    'Error Fetching Chat',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        createChat,
        allChats,
        getChat,
    }
}
