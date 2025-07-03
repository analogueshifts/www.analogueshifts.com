import GoBack from '../../jobs/[slug]/components/go-back'

export default async function page() {
    const dataRes = await getPolicy()

    return (
        <section className="w-full h-max flex justify-center large:pt-[91px] pt-16 tablet:pt-10">
            {dataRes && (
                <div className="w-[801px] max-w-[calc(100%-48px)] flex flex-col">
                    <GoBack />
                    <h1
                        id="title"
                        className="large:text-32 tablet:text-2xl text-[28px] text-black font-semibold mb-9">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: dataRes[0]?.title?.rendered,
                            }}
                        />
                    </h1>
                    <div
                        className="prose text-black large:text-xl text-base leading-10 large:leading-48 font-normal"
                        dangerouslySetInnerHTML={{
                            __html: dataRes[0]?.content.rendered,
                        }}
                    />
                </div>
            )}
        </section>
    )
}

const getPolicy = async () => {
    try {
        const url =
            process.env.NEXT_PUBLIC_WORDPRESS_URL +
            '/pages?slug=privacy-policy/'

        const res = await fetch(url, {
            next: {
                revalidate: 60,
            },
        })

        // Check if the response content type is JSON
        const contentType = res.headers.get('Content-Type') || ''
        if (!contentType.includes('application/json')) {
            throw new Error('Invalid response type')
        }

        if (res.ok) {
            return await res.json()
        } else {
            throw new Error(
                `Failed to fetch Policy: ${res.status} ${res.statusText}`,
            )
        }
    } catch (error) {
        console.error('Error fetching policy:', error)
        return null
    }
}
