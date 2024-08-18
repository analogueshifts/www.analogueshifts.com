import Link from 'next/link'
import Image from 'next/image'

import PlayStore from '@/public/images/guest-layout/download-app/playstore.svg'
import AppStore from '@/public/images/guest-layout/download-app/appstore.svg'

export default function DownloadAppBtn({ platform }) {
    return (
        <Link href="">
            <Image
                src={platform === 'playstore' ? PlayStore : AppStore}
                alt=""
            />
        </Link>
    )
}
