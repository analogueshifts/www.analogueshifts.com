'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function NotificationGridTile({ item, user }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className={`cursor-pointer w-full flex items-center gap-3 h-20 border-b border-tremor-background-darkYellow/10 p-3 hover:bg-tremor-background-darkYellow/5 ${
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
