import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'

import { successToast } from '@/utils/success-toast'
import { errorToast } from '@/utils/error-toast'
import { clearUserSession } from '@/utils/clear-user-session'
import { processChartData } from '@/app/(authenticated)/dashboard/utilities/process-chart-data'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'

export const useHire = () => {
    const token = Cookies.get('analogueshifts')

    const getStats = async ({ url, setData }) => {
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
            if (request?.data) {
                setData(processChartData(request.data.data.dashboard))
            }
        } catch (error) {
            errorToast(
                'Error Fetching Data',
                error?.response?.data?.message ||
                    error.message ||
                    'Failed To Fetch Statistics Data',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const uploadFile = async ({ fileValue, setLoading, setData }) => {
        const formData = new FormData()
        formData.append('upload', fileValue)
        formData.append('type', 'image')
        let config = {
            method: 'POST',
            url: '/upload',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + token,
            },
            data: formData,
        }

        setLoading(true)
        try {
            const data = await axios.request(config)
            setData(data.data.data.full_path)
            setLoading(false)
            successToast('File Uploaded', 'File uploaded successfully')
        } catch (error) {
            setLoading(false)
            errorToast(
                'Error Uploading Logo',
                error?.response?.data?.message ||
                    error.message ||
                    'Failed To Upload Logo',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const createJob = async ({ setLoading, data, router }) => {
        let config = {
            method: 'POST',
            url: '/hire/store',
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
            toast.success('Your Hire Request Has Been Sent', toastConfig)
            Cookies.remove('jobPostData')
            router.push('/tools/hire')
        } catch (error) {
            errorToast(
                'Failed To Post Job',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const updateJob = async ({ setLoading, data, router, editId }) => {
        let config = {
            method: 'PUT',
            url: '/hire/' + editId,
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
            toast.success('Your Post Has Been Edited Successfully', toastConfig)
            router.push('/tools/hire')
        } catch (error) {
            errorToast(
                'Failed To Post Job',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const fetchJobs = async ({
        setLoading,
        url,
        setData,
        setCurrentPageInfo,
    }) => {
        let config = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        try {
            const response = await axios.request(config)
            if (response?.data?.success) {
                setData(response.data.data.hires.data)
                setCurrentPageInfo(response.data.data.hires)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                error.message,
                error?.response?.data?.message || error.message || '',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const deleteJob = async ({
        setLoading,
        id,
        getJobsUrl,
        setData,
        setCurrentPageInfo,
    }) => {
        let config = {
            method: 'DELETE',
            url: '/hire/' + id,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
        setLoading(true)
        try {
            await axios.request(config)
            await fetchJobs({
                setLoading,
                url: getJobsUrl,
                setData,
                setCurrentPageInfo,
            })
            toast.success('Job Deleted Successfully', toastConfig)
        } catch (error) {
            errorToast(
                'Error Deleting Job',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        getStats,
        uploadFile,
        createJob,
        updateJob,
        deleteJob,
        fetchJobs,
    }
}
