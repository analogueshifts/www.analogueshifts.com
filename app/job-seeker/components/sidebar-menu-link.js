import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBarMenuLink({ item }) {
    const pathname = usePathname()

    // This function will be used to determine if the menu is active
    const active = () => {
        return pathname.startsWith(item.path)
    }

    return (
        <Link
            href={item.path}
            className={`w-full tablet:px-5 px-8 large:h-16 h-12 large:rounded-3xl rounded-2xl flex items-center gap-3 large:gap-[21px] ${
                active() ? 'bg-[#FFBB0A1F]' : 'bg-transparent'
            }`}>
            <div className="h-4 w-4 large:h-6 large:w-6">
                <item.icon
                    size={'100%'}
                    color={active() ? '#FFB800' : '#3D3D3D'}
                />
            </div>
            <p
                className={`large:text-lg text-sm font-normal ${
                    active()
                        ? 'text-amber'
                        : 'text-tremor-brand-boulder900 truncate'
                }`}>
                {item.title}
            </p>
        </Link>
    )
}
