'use client'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog'
import Spinner from '@/public/images/spinner-white.svg'
import { useHire } from '@/hooks/hires'

import Image from 'next/image'
import BiggerTrash from '@/public/images/user-layout/bigger-trash.svg'
import { useState } from 'react'

export default function DeleteHire({ id, setData, setCurrentPageInfo }) {
    const { deleteJob } = useHire()
    const [loading, setLoading] = useState(false)

    const deleteJobPost = async () => {
        try {
            await deleteJob({
                setLoading,
                id,
                getJobsUrl: '/hire/dashboard',
                setData,
                setCurrentPageInfo,
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog>
            <DialogTrigger className="h-8 col-span-1 tablet:px-6 flex justify-center items-center rounded-xl bg-white border border-tremor-background-darkYellow text-tremor-background-darkYellow duration-300 hover:bg-tremor-background-darkYellow hover:text-tremor-brand-boulder50 text-xs font-semibold">
                Delete
            </DialogTrigger>
            <DialogContent className="w-max h-max px-[62px] py-12 flex flex-col items-center bg-white sm:rounded-3xl">
                <Image src={BiggerTrash} alt="" className="mb-4" />
                <p className="text-tremor-brand-boulder400 font-normal text-sm text-center leading-6 mb-6">
                    Are you sure you want to delete this <br />
                    job?
                </p>
                <div className="flex items-center gap-4">
                    <DialogClose className="h-10 w-40 flex justify-center items-center rounded-[10px] text-xs font-bold text-[#FF0000] border border-[#FF0000]">
                        Go Back
                    </DialogClose>
                    <button
                        type="button"
                        onClick={deleteJobPost}
                        disabled={loading}
                        className="h-10 w-40 flex justify-center bg-[#FF0000] items-center rounded-[10px] text-xs font-bold text-white">
                        {loading ? (
                            <Image className="w-max h-7" src={Spinner} alt="" />
                        ) : (
                            'Delete'
                        )}
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
