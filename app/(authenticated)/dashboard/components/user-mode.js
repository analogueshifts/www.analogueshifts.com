'use client'

import { useState } from 'react'
import IdiomProof from '@/components/application/idiom-proof'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'
import { ChevronDown, Check } from 'lucide-react'

export default function UserModeSwitch({ setLoading }) {
    const { user } = useUser()
    const { updateProfileMode } = useAuth()
    const [modalOpen, setModalOpen] = useState(false)

    const handleUpdateProfileMode = () => {
        setModalOpen(false)

        updateProfileMode({
            setLoading,
        })
    }

    return (
        <>
            <IdiomProof
                action={handleUpdateProfileMode}
                close={() => setModalOpen(false)}
                description={`Are you sure you want to switch to ${
                    user?.user_mode === 'hire'
                        ? 'Job seeker mode?'
                        : 'Recruiter mode?'
                }`}
                open={modalOpen}
                title="Switch Mode"
            />

            <DropdownMenu>
                <DropdownMenuTrigger className="outline-none absolute top-5 right-5 outline-transparent">
                    <div className="flex gap-2 py-2 items-center cursor-pointer p-1 rounded-full bg-[#eee] hover:bg-[#eee]/80">
                        <h4 className="text-xs  font-bold pl-3">
                            Switch Account Mode
                        </h4>
                        <div className="mr-2.5 ml-1">
                            <ChevronDown width={15} />
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 max-w-full bg-[#eee]">
                    <DropdownMenuItem
                        onClick={() => {
                            if (user?.user_mode === 'hire') {
                                setModalOpen(true)
                            }
                        }}
                        className="focus:bg-white/50 flex justify-between items-center">
                        Job Seeker{' '}
                        <Check
                            width={13}
                            className={`${
                                user?.user_mode === 'job' ? 'block' : 'hidden'
                            }`}
                        />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            if (user?.user_mode === 'job') {
                                setModalOpen(true)
                            }
                        }}
                        className="focus:bg-white/50 flex justify-between items-center">
                        Recruiter{' '}
                        <Check
                            width={13}
                            className={`${
                                user?.user_mode === 'hire' ? 'block' : 'hidden'
                            }`}
                        />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
