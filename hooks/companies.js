import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useCompany = () => {
    const { notifyUser } = useToast()
    const token = Cookies.get('analogueshifts')

    const getCompanies = async ({ url, setData, setLoading }) => {
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
                    'Error Fetching Saved Companies',
            )
            console.log(error)

            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const getCompany = async ({ uuid, setData, setLoading }) => {
        const config = {
            url: '/profile/show/company/' + uuid,
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
                    'Error Fetching Company',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const addCompany = async ({ setLoading, setSuccess, data }) => {
        let config = {
            method: 'POST',
            url: '/profile/create/company',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: data,
        }
        setLoading(true)
        try {
            const request = await axios.request(config)
            setLoading(false)
            if (request?.data?.success) {
                setSuccess(true)
            }
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed Add Company',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const updateCompany = async ({ setLoading, setSuccess, data, uuid }) => {
        let config = {
            method: 'PUT',
            url: '/profile/update/company/' + uuid,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: data,
        }
        setLoading(true)
        try {
            const request = await axios.request(config)
            setLoading(false)
            if (request?.status === 200) {
                setSuccess(true)
            }
        } catch (error) {
            notifyUser(
                'error',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed Update Company',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const deleteCompany = async ({ setLoading, uuid, url, setData }) => {
        let config = {
            method: 'DELETE',
            url: '/profile/delete/company/' + uuid,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        }
        setLoading(true)
        try {
            const request = await axios.request(config)
            setLoading(false)
            if (request?.status === 200) {
                notifyUser('success', 'Company Deleted')
                await getCompanies({ setLoading, url, setData })
            }
        } catch (error) {
            notifyUser(
                'success',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    'Failed delete Company',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        getCompanies,
        addCompany,
        getCompany,
        updateCompany,
        deleteCompany,
    }
}
