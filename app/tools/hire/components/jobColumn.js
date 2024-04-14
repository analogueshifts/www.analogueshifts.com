import ActionMenu from '@/app/components/ActionMenu'
import { useRouter } from 'next/navigation'

export default function JobColumn({ item, handleDelete }) {
    const router = useRouter()

    const handleEditPost = () => {
        router.push(`/tools/hire/edit/${item.slug}`)
    }

    const handleApply = () => {
        router.push(item.apply)
    }

    let list = [
        { name: 'Edit Post', action: handleEditPost },
        { name: 'Apply', action: handleApply },
        { name: 'Delete Post', action: handleDelete },
    ]
    return (
        <tr className="w-full h-[72px]">
            <td className="pl-4 lg:pl-10 max-w-[45%]  font-normal text-tremor-brand-boulder950 text-base text-start">
                {item.title}
            </td>
            <td className="font-normal text-tremor-brand-boulder950 text-base max-w-[35%] text-center">
                {item.hiringOrganization.name}
            </td>

            <td className="pr-4 lg:pr-10 max-w-1/5 font-normal text-tremor-brand-boulder950 text-base text-end">
                <ActionMenu list={list} />
            </td>
        </tr>
    )
}
