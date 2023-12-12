import PageContent from '../components/AboutComponents/PageContent'
// import SeoController from '../lib/SeoController'

export const metadata = {
    title: 'About Us | AnalogueShifts',
    description:
        "At Analogueshifts, we're passionate about connecting employers with top tech talent from around the world. Our team of experts brings years of experience and industry knowledge to every recruitment search. Learn more about us and our mission today.",
    openGraph: {
        title: 'About Us | AnalogueShifts',
        description:
            "At Analogueshifts, we're passionate about connecting employers with top tech talent from around the world. Our team of experts brings years of experience and industry knowledge to every recruitment search. Learn more about us and our mission today.",
        url: 'https://www.analogueshifts.com/about',
        siteName: 'AnalogueShifts',
        images: [
            {
                url: '/images/a4.jpg',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/about',
    },
}
export default function Page() {
    /*useEffect(() => {
        // Animation for the main heading
        gsap.from('#title', {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.5,
        })

        // Animation for the job description section
        gsap.from('#intro', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })

        // Animation for the contact form section
        gsap.from('#form', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
        })

        // Animation for the contact cards
        gsap.from('#card', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })
    }, [])*/

    return (
        <>
            {/* <SeoController seoData={seoData} /> */}
            <PageContent />
        </>
    )
}
