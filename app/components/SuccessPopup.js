'use client'
import React, { useEffect } from 'react'

const SuccessPopup = ({ successMessage, isVisible, setIsVisible }) => {
    useEffect(() => {
        if (successMessage) {
            setIsVisible(true)
            const timeoutId = setTimeout(() => {
                setIsVisible(false)
            }, 5000)
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
                    <p>
                        {successMessage.message}
                        {successMessage.status === false &&
                            ', Try again later.'}
                    </p>
                </div>
            )}
        </>
    )
}

export default SuccessPopup
