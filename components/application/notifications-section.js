'use client'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Bell } from 'lucide-react'
import { useEffect } from 'react'

export default function NotificationSection({ user }) {
    const getNotificationCount = async () => {
        const axios = require('axios')
        const config = {
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BACKEND_URL + 'notification/count',
            headers: {
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            let response = await axios.request(config)
            console.log(response.json())
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
        <Sheet>
            <SheetTrigger>
                <Bell width={23} height={23} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
