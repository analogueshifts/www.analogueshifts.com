'use client'

import ActionMenu from '@/app/components/action-menu'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { toastConfig } from '@/utils/toast-config'

export default function VetColumn({ item, handleDelete }) {
    const router = useRouter()

    const handleEdit = () => {
        Cookies.remove('vetEditingData')
        router.push(`/tools/vet/edit/${item.slug}`)
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: item.title,
                    text: '',
                    url: 'https://www.analogueshifts.com/vet/show/' + item.slug,
                })
            } catch (error) {
                toast.error('Error sharing content:', toastConfig)
            }
        } else {
            toast.error('Sharing not supported on this device.', {
                position: 'top-right',
                autoClose: 3000,
            })
        }
    }

    const handlePreview = () => {}
    const handleVetResponse = () => {}

    let list = [
        { name: 'Preview Vet', action: handlePreview },
        { name: 'Edit Vet', action: handleEdit },
        { name: 'Share Vet', action: handleShare },
        { name: 'Vet Response', action: handleVetResponse },
        { name: 'Delete Vet', action: handleDelete },
    ]

    return (
        <tr className="w-full h-[72px]">
            <td className="pl-4 lg:pl-10 max-w-[30%]  font-normal text-tremor-brand-boulder950 text-base text-start">
                {item.title}
            </td>
            <td className="font-normal text-tremor-brand-boulder950 text-base max-w-1/5 text-center">
                {item.deadline}
            </td>
            <td className="font-normal text-tremor-brand-boulder950 text-base max-w-1/5 text-center">
                {item.timeout}mins
            </td>
            <td className="pr-4 lg:pr-10 max-w-[30%] font-normal text-tremor-brand-boulder950 text-base text-end">
                <ActionMenu list={list} />
            </td>
        </tr>
    )
}
