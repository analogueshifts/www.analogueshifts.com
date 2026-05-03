'use client'
import { createContext, useContext, useState } from 'react'
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

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

export const useUser = create(
    combine(
        { user: null, isUserLoading: false, hasResolvedUser: false },
        set => ({
            setUser: user => set({ user }),
            setIsUserLoading: isUserLoading => set({ isUserLoading }),
            setHasResolvedUser: hasResolvedUser => set({ hasResolvedUser }),
        }),
    ),
)

// export const useUser = () => useContext(UserContext)
