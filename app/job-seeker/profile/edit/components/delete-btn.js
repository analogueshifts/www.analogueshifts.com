import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog'

import Image from 'next/image'
import TrashCan from '@/public/images/user-layout/trash-can.svg'
import BiggerTrash from '@/public/images/user-layout/bigger-trash.svg'

export default function DeleteButton({ label, action }) {
    return (
        <Dialog>
            <DialogTrigger className="w-max flex ml-auto items-center gap-1.5 large:gap-2.5 font-medium text-sm large:text-base text-[#FF0000] px-0 py-0">
                {' '}
                <Image
                    src={TrashCan}
                    className="h-max large:w-max w-5"
                    alt=""
                />{' '}
                Delete
            </DialogTrigger>
            <DialogContent className="w-max h-max px-[62px] py-12 flex flex-col items-center bg-white sm:rounded-3xl">
                <Image src={BiggerTrash} alt="" className="mb-4" />
                <p className="text-tremor-brand-boulder400 font-normal text-sm text-center leading-6 mb-6">
                    Are you sure you want to delete this <br />
                    {label}?
                </p>
                <div className="flex items-center gap-4">
                    <DialogClose className="h-10 w-40 flex justify-center items-center rounded-[10px] text-xs font-bold text-[#FF0000] border border-[#FF0000]">
                        Go Back
                    </DialogClose>
                    <DialogTrigger
                        onClick={action}
                        className="h-10 w-40 flex justify-center bg-[#FF0000] items-center rounded-[10px] text-xs font-bold text-white">
                        Delete
                    </DialogTrigger>
                </div>
            </DialogContent>
        </Dialog>
    )
}
