import Link from 'next/link'
import Image from 'next/image'

import PlayStore from '@/public/images/guest-layout/download-app/playstore.svg'
import AppStore from '@/public/images/guest-layout/download-app/appstore.svg'

export default function DownloadAppBtn({ platform }) {
    return (
        <Link
            href={
                platform === 'playstore'
                    ? 'https://play.google.com/store/apps/details?id=com.analogueShifts.app'
                    : ''
            }>
            <Image
                src={platform === 'playstore' ? PlayStore : AppStore}
                alt=""
            />
        </Link>
    )
}
