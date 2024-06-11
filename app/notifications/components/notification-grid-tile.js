'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { clearUserSession } from '@/utils/clear-user-session'
import { errorToast } from '@/utils/error-toast'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function NotificationGridTile({ item, user }) {
    const [loading, setLoading] = useState(false)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className={`cursor-pointer w-full flex items-center gap-3 h-20 border-b p-3 hover:bg-black/5 ${
                        item.viewed === '1'
                            ? 'bg-transparent'
                            : 'bg-tremor-background-lightYellow/10'
                    }`}>
                    <Avatar>
                        <AvatarImage src="/author.png" />
                        <AvatarFallback>
                            {user?.user?.email[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex w-full flex-col gap-1.5">
                        <div className="w-full text-sm text-tremor-brand-boulder950 flex justify-between">
                            <p className="truncate">
                                <b>{item.title}</b>
                            </p>

                            <p>
                                <time>
                                    {new Date(item.created_at).toLocaleString()}
                                </time>
                            </p>
                        </div>
                        <p className="text-sm text-tremor-brand-boulder700 font-medium truncate">
                            {item.message}
                        </p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                {loading && (
                    <div className="w-full h-full absolute top-0 left-0  bg-gray-300/30 flex items-center justify-center rounded-md">
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )}
                <DialogHeader>
                    <DialogTitle className="text-tremor-brand-boulder950 truncate">
                        {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-tremor-brand-boulder500">
                        {item.message}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
