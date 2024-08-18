'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import axios from '@/app/lib/axios'

export default function Redirect({ viewId }) {
    const router = useRouter()

    const slug = viewId

    useEffect(() => {
        if (slug) {
            axios
                .get(`/job/${slug}`)
                .then(res => {
                    const data = res.data

                    router.push(`/jobs/${data.display}`)
                })
                .catch(error => {
                    alert(error)
                })
        }
    }, [slug, router])

    // No need for a JSX return, as this page is intended for immediate redirection

    return null
}
