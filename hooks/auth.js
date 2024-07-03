import axios from '@/app/lib/axios'
import { useRouter } from 'next/navigation'

import Cookies from 'js-cookie'

import { successToast } from '@/utils/success-toast'
import { errorToast } from '@/utils/error-toast'

export const useAuth = () => {
    const router = useRouter()

    const register = async ({
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
        device_token,
        setLoading,
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
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        secret_key: process.env.NEXT_PUBLIC_SECRET_KEY,
                    },
                },
            )
            Cookies.set('analogueshifts', JSON.stringify(response.data[0].data))

            successToast(
                'Account created successfully',
                'Redirecting You to your Dashboard.',
            )
            let redirectionLink = Cookies.get('RedirectionLink')
            Cookies.remove('RedirectionLink')
            window.location.href = redirectionLink?.trim().length
                ? redirectionLink
                : '/dashboard'
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
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        secret_key: process.env.NEXT_PUBLIC_SECRET_KEY,
                    },
                },
            )
            Cookies.set('analogueshifts', JSON.stringify(response.data.data))
            successToast(
                'Login Successful',
                'Redirecting You to your Dashboard.',
            )
            let redirectionLink = Cookies.get('RedirectionLink')
            Cookies.remove('RedirectionLink')
            window.location.href = redirectionLink?.trim().length
                ? redirectionLink
                : '/dashboard'
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
                {
                    headers: {
                        'Content-Type': 'application/json',
                        secret_key: process.env.NEXT_PUBLIC_SECRET_KEY,
                    },
                },
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

    const logout = async ({ setStatus }) => {
        const token = localStorage.getItem('token')
        setStatus({
            success: 'load',
            message: 'Sending request!',
        })
        try {
            const response = await axios.post(
                '/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            if (response.data.success) {
                localStorage.removeItem('token')
                setUser(null)
                router.push('/login')
            }
        } catch (error) {
            localStorage.removeItem('token')
            setUser(null)
            router.push('/login')
        }
    }

    return {
        register,
        login,
        forgotPassword,
        validateOtp,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
