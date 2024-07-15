'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { ChevronDown, Plus, LogOut, LayoutDashboard, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function LoggedInProfileDropdown({ user, handleLogout }) {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none outline-transparent lg:block hidden">
                <div className="flex gap-2 items-center cursor-pointer p-1 rounded-full bg-gray-700/5 hover:bg-gray-700/10">
                    <Avatar className="w-8 h-8">
                        <AvatarImage
                            className="object-cover"
                            src={user?.profile}
                            alt="Profile"
                        />
                        <AvatarFallback className="bg-background-darkYellow text-white text-sm font-bold">
                            {user?.email.slice(0, 1)?.toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <h4 className="text-xs  font-bold">
                        {user?.first_name}{' '}
                        {user?.last_name && ' ' + user.last_name}
                    </h4>
                    <div className="mr-2.5 ml-1">
                        <ChevronDown width={15} />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 max-w-full bg-[#F3F4F6]">
                <DropdownMenuItem
                    onClick={() => router.push('/dashboard')}
                    className="px-5 py-4 focus:bg-gray-700/5 cursor-pointer text-sm font-semibold text-primary-boulder950">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => router.push('/tools/hire')}
                    className="px-5 py-4 focus:bg-gray-700/5 cursor-pointer text-sm font-semibold text-primary-boulder950">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>Hire Talents</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => router.push('/notifications')}
                    className="px-5 py-4 focus:bg-gray-700/5 cursor-pointer text-sm font-semibold text-primary-boulder950">
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="px-5 py-4 focus:bg-gray-700/5 cursor-pointer text-sm font-semibold text-primary-boulder950">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>
                        Log out <br />{' '}
                        <small className="truncate">{user?.email}</small>
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
