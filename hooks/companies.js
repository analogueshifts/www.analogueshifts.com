import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { errorToast } from '@/utils/error-toast'
import { clearUserSession } from '@/utils/clear-user-session'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'

export const useCompany = () => {
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
            errorToast(
                'Error Fetching Saved Companies',
                error?.response?.data?.message || error.message || '',
            )
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
            errorToast(
                'Error Fetching Company',
                error?.response?.data?.message || error.message || '',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const addCompany = async ({ setLoading, router, data }) => {
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
                toast.success('Company Added', toastConfig)
                router.push('/manage-companies')
            }
        } catch (error) {
            errorToast(
                'Failed Add Company',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    const updateCompany = async ({ setLoading, router, data, uuid }) => {
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
                toast.success('Company Updated', toastConfig)
                router.push('/manage-companies')
            }
        } catch (error) {
            errorToast(
                'Failed Update Company',
                error?.response?.data?.message || error.message || '',
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
                toast.success('Company Deleted', toastConfig)
                await getCompanies({ setLoading, url, setData })
            }
        } catch (error) {
            errorToast(
                'Failed delete Company',
                error?.response?.data?.message || error.message || '',
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
