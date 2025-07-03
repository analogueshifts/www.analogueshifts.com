'use client'
import Head from 'next/head'
import HImage from '@/public/logo.png'
import { NextSeo } from 'next-seo'

function SeoController({ seoData }) {
    return (
        <>
            <Head>
                <meta property="og:image" content={seoData?.ogImage} />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:width" content="1200" />
                <link rel="icon" type="image/x-icon" href={HImage} />
                {/* Google tag (gtag.js) */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-JDYHWF1KQP"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'G-JDYHWF1KQP');
                        `,
                    }}
                />
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
