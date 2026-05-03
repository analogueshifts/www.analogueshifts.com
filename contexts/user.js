'use client'
import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [hasResolvedUser, setHasResolvedUser] = useState(false)

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isUserLoading,
                setIsUserLoading,
                hasResolvedUser,
                setHasResolvedUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
