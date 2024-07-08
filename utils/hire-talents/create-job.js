import { errorToast } from '../error-toast'
import { toastConfig } from '../toast-config'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { clearUserSession } from '../clear-user-session'

export const createJob = (data, user, setLoading, router) => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/store'
    const axios = require('axios')
    let config = {
        method: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user.token,
        },
        data: data,
    }
    setLoading(true)
    axios
        .request(config)
        .then(response => {
            setLoading(false)
            toast.success('Your Hire Request Has Been Sent', toastConfig)
            Cookies.remove('jobPostData')
            router.push('/tools/hire')
        })
        .catch(error => {
            errorToast(
                'Failed To Post Job',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        })
}
