'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from '@/contexts/user'
import { ToastProvider } from '@/contexts/toast'

const queryClient = new QueryClient()

export const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
          <ToastProvider>{children}</ToastProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}
