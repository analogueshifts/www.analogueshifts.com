import { Bell } from 'lucide-react'
import Link from 'next/link'

export default function NotificationSection({ notificationCount, sidebar }) {
    return (
        <>
            {sidebar ? (
                <p className="w-max">({notificationCount})</p>
            ) : (
                <Link
                    href={'/notifications'}
                    className="relative cursor-pointer hidden w-9 h-9 rounded-full sm:flex items-center justify-center bg-transparent hover:bg-tremor-brand-boulder400/10">
                    <Bell width={18} className="text-tremor-brand-boulder500" />
                    <p className="w-max px-1 flex items-center justify-center h-max absolute top-0 left-5 bg-red-600 rounded-full text-white text-center text-xs">
                        {notificationCount}
                    </p>
                </Link>
            )}
        </>
    )
}
