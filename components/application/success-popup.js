'use client'
import React, { useEffect } from 'react'

const SuccessPopup = ({ successMessage, isVisible, setIsVisible }) => {
    useEffect(() => {
        if (successMessage) {
            setIsVisible(true)
            const timeoutId = setTimeout(() => {
                setIsVisible(false)
            }, 9000)
            return () => clearTimeout(timeoutId)
        }
    }, [successMessage])

    return (
        <>
            {isVisible && (
                <div
                    className={
                        successMessage.status ? 'success-popup' : 'error-popup'
                    }>
                    <p>{successMessage.message}</p>
                </div>
            )}
        </>
    )
}

export default SuccessPopup
