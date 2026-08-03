'use client'
import axios from '@/app/lib/axios'
import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useAssistant = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const sendMessage = async ({ messages, setLoading, onSuccess }) => {
        const config = {
            method: 'POST',
            url: '/assistant/reply',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: { messages },
        }

        setLoading(true)
        try {
            const res = await axios.request(config)
            setLoading(false)
            onSuccess?.(res.data.data.reply)
            return res.data.data.reply
        } catch (error) {
            setLoading(false)
            if (error?.response?.status === 429) {
                notifyUser(
                    'error',
                    "You've reached today's message limit. Try again tomorrow.",
                )
            } else {
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                        error?.response?.data?.data?.message ||
                        'Failed To Reach The Assistant',
                )
            }
            if (error?.response?.status === 401) {
                clearUserSession()
            }
            return null
        }
    }

    return { sendMessage }
}
