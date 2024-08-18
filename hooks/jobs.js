'use client'
import axios from '@/app/lib/axios'
import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useJobs = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const getJobs = async ({ url, setLoading, setInfo, setData }) => {
        const config = {
            url: url,
            method: 'GET',
        }

        try {
            setLoading(true)
            const res = await axios.request(config)
            setInfo(res.data.data.jobs)
            setData(res.data.data.jobs.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Error',
            )
        }
    }

    const getRecommendedJobs = async ({ url, setData, setLoading }) => {
        const config = {
            url: url,
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
                    error?.response?.data?.message ||
                    'Error Fetching Jobs',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const storeAppliedJob = async ({ slug, setLoading }) => {
        const config = {
            url: '/job/apply/' + slug,
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        try {
            setLoading(true)
            const request = await axios.request(config)
            if (request?.data?.success) {
                notifyUser('success', 'Applied Job Stored')
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.message ||
                    'Error Storing Job',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        getRecommendedJobs,
        storeAppliedJob,
        notifyUser,
        getJobs,
    }
}
