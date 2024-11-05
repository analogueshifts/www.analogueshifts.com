import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Image from 'next/image'
import ChevronDown from '@/public/images/guest-layout/chevron-down.svg'

export default function ProfileDropdown({ user, logout }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="[&[data-state=open]>img]:rotate-180 [&[data-state=closed]>img]:rotate-0 duration-200 flex h-10 items-center outline-none focus-visible:outline-none ">
                <div className="w-10 mr-2 relative overflow-hidden h-10 rounded-full bg-gainsBoro flex items-center justify-center">
                    <img
                        className="w-10 h-10 object-cover"
                        src={
                            user?.user_profile?.avatar ||
                            '/images/user-layout/profile.svg'
                        }
                        alt=""
                    />
                </div>

                <Image
                    src={ChevronDown}
                    alt=""
                    width={24}
                    height={24}
                    className="duration-200"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="hidden"></DropdownMenuContent>
        </DropdownMenu>
    )
}
