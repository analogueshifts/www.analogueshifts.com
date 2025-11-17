'use client'
import axios from '@/app/lib/axios'
import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { extractJobsData } from '../configs/extract-chart-data'
import { useToast } from '@/contexts/toast'

export const useJobs = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const getStats = async ({ url, setData, mode }) => {
        const config = {
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + token,
            },
        }
        try {
            const request = await axios.request(config)
            if (request?.data?.success) {
                setData(
                    mode === 'job'
                        ? extractJobsData(request.data.data.dashboard.chart)
                        : request.data.data.dashboard.chart,
                )
            }
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                error.message ||
                'Failed To Fetch Statistics Data',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

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
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                error.message ||
                'Error',
            )
        }
    }

    const getJob = async ({ setLoading, slug, setJob }) => {
        const config = {
            url: '/job/' + slug,
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        try {
            setLoading(true)
            const request = await axios.request(config)
            if (request?.data?.success) {
                setJob(request.data?.data?.job)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                'Error Fetching Jobs',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
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
                error?.response?.data?.data?.message ||
                'Error Fetching Jobs',
            )

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const apply = async ({ setLoading, data, uuid }) => {
        let config = {
            method: 'POST',
            url: `/job/easy-apply/${uuid}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: data,
        }
        setLoading(true)
        try {
            await axios.request(config)
            setLoading(false)
            notifyUser('success', 'Your Application Has Been Sent')
            return true
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                'Failed To Apply',
            )
            console.log(error?.response?.data?.message ||
                error?.response?.data?.data?.message);
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
            return false
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
        getStats,
        getJob,
        apply
    }
}
