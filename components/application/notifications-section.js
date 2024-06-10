'use client'
import { User } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Bell } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function NotificationSection({ user }) {
    const [notificationCount, setNotificationCount] = useState(0)
    const [notifications, setNotifications] = useState([])

    const getNotificationCount = async () => {
        const axios = require('axios')
        const config = {
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BACKEND_URL + '/notification/count',
            headers: {
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            let response = await axios.request(config)
            setNotificationCount(response.data.data.notifications)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            getNotificationCount()
        }
    }, [user])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="relative cursor-pointer w-9 h-9 rounded-full flex items-center justify-center bg-transparent hover:bg-tremor-brand-boulder400/10">
                    <Bell width={18} className="text-tremor-brand-boulder500" />
                    <p className="w-max px-1 flex items-center justify-center h-max absolute top-0 left-5 bg-red-600 rounded-full text-white text-center text-xs">
                        {notificationCount}
                    </p>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-[90%] w-80 rounded-3xl p-4">
                <DropdownMenuLabel className="text-tremor-brand-boulder950">
                    Notifications
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="overflow-y-auto max-h-[40vh]">
                    {/* <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem> */}
                    {notifications.length === 0 && (
                        <DropdownMenuItem>
                            <span className="text-tremor-brand-boulder700">
                                No Notification
                            </span>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
