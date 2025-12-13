'use client'

import { useEffect, useRef } from 'react'

export default function DownloadBrochure() {
    const hasDownloaded = useRef(false)

    useEffect(() => {
        if (hasDownloaded.current) return
        hasDownloaded.current = true

        const link = document.createElement('a')
        link.href = '/pdf/brochure.pdf'
        link.download = 'brochure.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }, [])

    return (
        <main className="w-full h-max py-20 flex justify-center items-center">
            <h2 className="text-tremor-brand-boulder900 font-medium text-base">
                Downloading brochure...
            </h2>
        </main>
    )
}
