'use client'
import axios from '@/app/lib/axios'
import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useResumeOptimizer = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const analyzeResume = async ({ resumeUrl, setLoading, onSuccess }) => {
        const config = {
            method: 'POST',
            url: '/resume-optimizer/analyze',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: { resume_url: resumeUrl },
        }

        setLoading(true)
        try {
            const res = await axios.request(config)
            setLoading(false)
            onSuccess?.(res.data.data)
            return res.data.data
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed To Analyze Resume',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
            return null
        }
    }

    const getResumeOptimizerHistory = async ({ setLoading, setData }) => {
        const config = {
            method: 'GET',
            url: '/resume-optimizer/history',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }

        setLoading(true)
        try {
            const res = await axios.request(config)
            setData(res.data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed To Fetch History',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return { analyzeResume, getResumeOptimizerHistory }
}
