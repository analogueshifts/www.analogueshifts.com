import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import { useUser } from '@/contexts/user'

import Cookies from 'js-cookie'

import { successToast } from '@/utils/success-toast'
import { errorToast } from '@/utils/error-toast'
import { clearUserSession } from '@/utils/clear-user-session'

export const useAuth = () => {
    const router = useRouter()
    const { user, setUser } = useUser()
    const token = Cookies.get('analogueshifts')

    const authConfig = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            secret_key: process.env.NEXT_PUBLIC_SECRET_KEY,
        },
    }

    const register = async ({
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        device_token,
        setLoading,
        user_mode,
    }) => {
        setLoading(true)
        try {
            const response = await axios.post(
                '/register',
                {
                    first_name,
                    last_name,
                    email,
                    password,
                    password_confirmation,
                    device_token,
                    user_mode,
                },
                authConfig,
            )

            Cookies.set('analogueshifts', response?.data[0]?.data?.token)
            setUser(response?.data[0]?.data.user)

            successToast(
                'Account created successfully',
                'Redirecting You to your Dashboard.',
            )
            let redirectionLink = Cookies.get('RedirectionLink')
            Cookies.remove('RedirectionLink')
            router.push(
                redirectionLink?.trim().length ? redirectionLink : '/dashboard',
            )
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Failed To create Account',
                error?.response?.data?.message ||
                    error.message ||
                    'Failed To Create Account',
            )
        }
    }

    const login = async ({ email, password, setLoading }) => {
        setLoading(true)
        try {
            const response = await axios.post(
                '/login',
                { email, password },
                authConfig,
            )

            Cookies.set('analogueshifts', response.data.data.token)
            setUser(response.data.data.user)
            successToast(
                'Login Successful',
                'Redirecting You to your Dashboard.',
            )
            let redirectionLink = Cookies.get('RedirectionLink')
            Cookies.remove('RedirectionLink')
            router.push(
                redirectionLink?.trim().length ? redirectionLink : '/dashboard',
            )
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Failed To Login',
                error?.response?.data?.message ||
                    error.message ||
                    'Failed To Login',
            )
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
            setUser(response.data)
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
                    successToast(
                        'Profile Updated',
                        'Your Profile has been updated.',
                    )
                } else {
                    errorToast('Error', response?.data?.message)
                }
            })
            .catch(error => {
                errorToast(
                    'Error Updating Profile',
                    error?.response?.data?.message ||
                        error.message ||
                        'Failed To Update Your Profile',
                )
                setLoading(false)
                if (error?.response?.status === 401) {
                    clearUserSession()
                }
            })
    }

    const forgotPassword = async ({ email, setLoading }) => {
        setLoading(true)
        try {
            await axios.post('/forgot-password', { email })
            setLoading(false)
            Cookies.set('rest-password-email', email)
            router.push('/reset-password')
        } catch (error) {
            setLoading(false)
            errorToast(
                'An Error Occured, Please try again later',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    const validateOtp = async ({ otp, email, setLoading, resetPassword }) => {
        setLoading(true)
        try {
            const request = await axios.post('/check-otp', { otp, email })
            if (!request.data.success) {
                setLoading(false)
                errorToast('Invalid OTP', '')
            } else {
                await resetPassword()
            }
        } catch (error) {
            setLoading(false)
            errorToast(
                'Invalid OTP',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    const resetPassword = async ({
        email,
        password,
        password_confirmation,
        setLoading,
    }) => {
        try {
            await axios.post(
                '/reset-password',
                {
                    email,
                    password,
                    password_confirmation,
                },
                authConfig,
            )
            successToast(
                'Password Reset Successful',
                'Redirecting You To Login',
            )
            router.push('/login')
        } catch (error) {
            setLoading(false)
            errorToast(
                'Failed to reset password',
                error?.response?.data?.message || error.message || '',
            )
        }
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
            successToast('Profile Mode Updated', '')
            await getUser({ setLoading, layout: 'authenticated' })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorToast(
                'Failed to update mode',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    const resendEmailVerification = async ({ setStatus }) => {
        setStatus({
            success: 'load',
            message: 'Sending request!',
        })
        try {
            const response = await axios.post(
                '/email/verification-notification',
            )
            setStatus(response.data.status)
        } catch (error) {
            setStatus({
                success: false,
                message: 'An error occurred. Please try again.',
            })
        }
    }

    const logout = async ({ setLoading }) => {
        const url = '/logout'

        let config = {
            url: url,
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
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

    return {
        register,
        login,
        forgotPassword,
        validateOtp,
        resetPassword,
        resendEmailVerification,
        logout,
        getUser,
        updateProfile,
        updateProfileMode,
    }
}
