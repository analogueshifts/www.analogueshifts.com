import Head from 'next/head'
import { NextSeo } from 'next-seo'

function SeoController({ seoData }) {
    return (
        <>
            <Head>
                <meta property="og:image" content={seoData?.ogImage} />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:width" content="1200" />
                <link rel="icon" type="image/x-icon" href="/logo.png" />
            </Head>
            <NextSeo
                title={`${
                    seoData?.title ? ` ${seoData.title}` : ''
                } - AnalogueShifts`}
                description={seoData?.description}
                canonical="https://www.analogueshifts.com"
            />
        </>
    )
}

export default SeoController
