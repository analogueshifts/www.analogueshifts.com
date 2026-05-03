'use client'
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

// Pass-through wrapper kept so providers.tsx import remains stable
export const UserProvider = ({ children }) => children

// Single source of truth for auth state across the entire app
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
