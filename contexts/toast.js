'use client'
import { createContext, useContext, useState } from 'react'

const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState('')
    const [position, setPosition] = useState('right')
    const [message, setMessage] = useState('')

    const notifyUser = (toast, message, position) => {
        setToast(toast)
        setMessage(message)
        setPosition(position)

        setTimeout(() => {
            setMessage('')
            setToast('')
            setPosition('right')
        }, 4000)
    }

    return (
        <ToastContext.Provider
            value={{
                toast,
                position,
                message,
                notifyUser,
            }}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)
