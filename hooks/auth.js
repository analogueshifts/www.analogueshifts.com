import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/user'

import Cookies from 'js-cookie'
import { clearUserSession } from '@/configs/clear-user-session'
import { useToast } from '@/contexts/toast'

export const useAuth = () => {
    const router = useRouter()
    const { setUser } = useUser()
    const { notifyUser } = useToast()

    const token = Cookies.get('analogueshifts')

    const validateApp = async ({ appToken }) => {
        let RedirectionLink = Cookies.get('RedirectionLink')
        try {
            const response = await axios.request({
                url: '/app/callback/' + appToken,
                method: 'GET',
            })
            if (response.data?.success) {
                Cookies.set('analogueshifts', response.data?.data.token)
                notifyUser('success', 'success')
                window.location.href = RedirectionLink || '/'
            }
        } catch (error) {
            notifyUser('error', error.messsage || 'Invalid Request')
            router.push(RedirectionLink || '/')
            console.log(error)
        }
    }

    const getNotificationCount = async ({ token, setCount }) => {
        const config = {
            method: 'GET',
            url: '/notification/count',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            let response = await axios.request(config)
            if (response.data?.success) {
                setCount(response.data.data.notifications)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async ({ setLoading, layout }) => {
        setLoading(true)
        try {
            const response = await axios.request({
                url: '/user',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            })
            setUser(response.data?.user)
            console.log(response.data.user)

            setLoading(false)
        } catch (error) {
            setLoading(false)
            if (error?.response?.status === 401 && layout !== 'guest') {
                clearUserSession()
            }
        }
    }

    const updateProfile = ({
        setLoading,
        firstName,
        lastName,
        userName,
        profile,
    }) => {
        const url = '/update/profile'
        let config = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            data: {
                first_name: firstName,
                last_name: lastName,
                username: userName,
                profile: profile,
            },
        }
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setLoading(false)
                if (response.data.success) {
                    setUser(response.data.data.user)
                    notifyUser('success', 'Your Profile has been updated.')
                } else {
                    notifyUser('error', response?.data?.message)
                }
            })
            .catch(error => {
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                        error?.response?.data?.data.data?.message ||
                        'Failed To Update Your Profile',
                )
                setLoading(false)
                if (error?.response?.status === 401) {
                    clearUserSession()
                }
            })
    }

    const updateProfileMode = async ({ setLoading }) => {
        try {
            setLoading(true)
            const config = {
                url: '/profile/mode',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            }

            await axios.request(config)
            notifyUser('Profile Mode Updated', '')
            await getUser({ setLoading, layout: 'authenticated' })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notifyUser(
                'Failed to update mode',
                error?.response?.data?.message ||
                    error?.response?.data?.data?.message ||
                    '',
            )
        }
    }

    const logout = async ({ setLoading }) => {
        Cookies.remove('analogueshifts')
        window.location.href = '/'
    }

    return {
        validateApp,
        logout,
        getUser,
        updateProfile,
        updateProfileMode,
        getNotificationCount,
    }
}
