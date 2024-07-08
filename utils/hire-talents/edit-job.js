import { errorToast } from '../error-toast'
import { toastConfig } from '../toast-config'
import { toast } from 'react-toastify'
import { clearUserSession } from '../clear-user-session'

export // Make the request to the API
const editJob = (data, user, setLoading, router) => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/' + editID
    const axios = require('axios')
    let config = {
        method: 'PUT',
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
            toast.success('Your Post Has Been Edited Successfully', toastConfig)
            router.push('/tools/hire')
        })
        .catch(error => {
            errorToast(
                'Error Editing Job',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        })
}
