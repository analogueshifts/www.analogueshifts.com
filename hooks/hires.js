'use client'
import { useToast } from '@/contexts/toast'
import axios from '@/app/lib/axios'
import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'

export const useHire = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const uploadFile = async ({ fileValue, setLoading, setData, fileType }) => {
        const formData = new FormData()
        formData.append('upload', fileValue)
        formData.append('type', fileType || 'image')
        let config = {
            method: 'POST',
            url: process.env.NEXT_PUBLIC_FILE_UPLOAD_URL + '/upload',
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
            if (data.data.success) {
                setData(data.data.data.full_path)
                setLoading(false)
                notifyUser('success', 'File uploaded successfully')
            }
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                error?.message ||
                'Failed To Upload',
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
            notifyUser('success', 'Your Hire Request Has Been Sent')
            localStorage.removeItem('newJob')
            localStorage.removeItem('newJobCompany')
            router.push('/recruiter/hire')
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                'Failed To Post Job',
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
            notifyUser(
                'success',
                'Your Post Has Been Edited Successfully',
                'right',
            )
            router.push('/recruiter/hire')
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                error?.message ||
                'Failed To Post Job',
                'right',
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
            setLoading(true)
            const response = await axios.request(config)
            if (response?.data?.success) {
                setData(response.data.data.hires.data)
                setCurrentPageInfo(response.data.data.hires)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                error?.message ||
                'Error',
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
            notifyUser('success', 'Job Deleted Successfully')
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                error?.response?.data?.data?.message ||
                'Error Deleting Job',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        uploadFile,
        createJob,
        updateJob,
        deleteJob,
        fetchJobs,
    }
}
