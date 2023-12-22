'use client'
import { useState, useEffect } from 'react'
import { axiosBlog } from '../../lib/axios'
import LoadingTwo from '../../components/Loading'

export default function page() {
    const [dataRes, setDataRes] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Fetch job data from your API
        setLoading(true)
        axiosBlog
            .get('/pages?slug=terms-and-conditions/')
            .then(res => {
                const data = res.data[0]
                setDataRes(data)
                setLoading(false)
            })
            .catch(error => {
                alert(error)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading && <LoadingTwo />}
            <div className="container mx-auto py-5 md:py-20 px-5 md:px-24 lg:px-56 xl:px-72">
                <div>
                    {dataRes && (
                        <div>
                            <h1 id="title" className="font-bold text-2xl mb-9">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: dataRes.title.rendered,
                                    }}
                                />
                            </h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: dataRes.content.rendered,
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
