import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { toastConfig } from './toast-config'
import { clearUserSession } from './clear-user-session'

export async function logout(user, setLoading) {
    const axios = require('axios')
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/logout'
    let config = {
        url: url,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + user?.token,
        },
    }

    setLoading(true)

    axios
        .request(config)
        .then(res => {
            Cookies.remove('analogueshifts')
            window.location.href = '/login'
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message, toastConfig)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        })
}
