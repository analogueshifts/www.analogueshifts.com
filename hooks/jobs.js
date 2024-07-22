import axios from '@/app/lib/axios'

import Cookies from 'js-cookie'
import { errorToast } from '@/utils/error-toast'
import { clearUserSession } from '@/utils/clear-user-session'
import { successToast } from '@/utils/success-toast'

export const useJobs = () => {
    const token = Cookies.get('analogueshifts')

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
            errorToast(
                'Error Fetching Jobs',
                error?.response?.data?.message || error.message || '',
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
                successToast('Applied Job Stored', '')
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Error Storing Job',
                error?.response?.data?.message || error.message || '',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return {
        getRecommendedJobs,
        storeAppliedJob,
    }
}
