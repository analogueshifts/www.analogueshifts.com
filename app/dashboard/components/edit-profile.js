import { SquarePen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { clearUserSession } from '@/utils/clear-user-session'
import { successToast } from '@/utils/success-toast'
import { errorToast } from '@/utils/error-toast'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'
import { useHire } from '@/hooks/hires'

export default function EditProfile({ updateLoading }) {
    const { user } = useUser()
    const { uploadFile } = useHire()
    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState(user?.first_name || '')
    const [lastName, setLastName] = useState(user?.last_name || '')
    const [userName, setUserName] = useState(user?.username || '')
    const [profile, setProfile] = useState('')
    const { updateProfile } = useAuth()

    const token = Cookies.get('analogueshifts')

    // Upload File To The Database
    const uploadImage = async value => {
        let fileValue = value.target.files[0]
        await uploadFile({ fileValue, setLoading, setData: setProfile })
    }

    const handleUpdateProfile = () => {
        updateProfile({
            firstName,
            lastName,
            userName,
            profile,
            setLoading: updateLoading,
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="absolute right-1 top-0 md:right-8 md:top-6 bg-transparent hover:bg-black/5 outline-none py-2.5 px-3 rounded-full cursor-pointer">
                    <SquarePen className="" width={18} />
                </button>
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
                    <DialogTitle className="text-tremor-brand-boulder950">
                        Profile Overview
                    </DialogTitle>
                    <DialogDescription className="text-tremor-brand-boulder500">
                        Make changes to your profile here. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="first_name" className="text-sm">
                            First Name
                        </label>
                        <Input
                            id="first_name"
                            defaultValue={firstName}
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="last_name" className="text-sm">
                            Last Name
                        </label>
                        <Input
                            id="last_name"
                            defaultValue={lastName}
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-sm">
                            Username
                        </label>
                        <Input
                            id="username"
                            defaultValue={userName}
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="picture" className="text-sm">
                            Profile
                        </label>
                        <Input
                            onChange={uploadImage}
                            accept="image/jpeg,image/png"
                            id="picture"
                            type="file"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogTrigger>
                        <Button
                            onClick={handleUpdateProfile}
                            type="submit"
                            className="bg-tremor-background-lightYellow hover:bg-tremor-background-lightYellow/80">
                            Save changes
                        </Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
