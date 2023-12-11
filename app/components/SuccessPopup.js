'use client'
import React, { useState, useEffect } from 'react'

const SuccessPopup = ({ successMessage }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (successMessage) {
            setIsVisible(true)
            const timeoutId = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
            return () => clearTimeout(timeoutId)
        }
    }, [successMessage])

    return (
        <>
            {isVisible && (
                <div className="success-popup">
                    <p>{successMessage}</p>
                </div>
            )}
        </>
    )
}

export default SuccessPopup
