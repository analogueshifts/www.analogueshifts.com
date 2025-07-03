import ContactForm from './components/contact-form'
import ContactUs from './components/contact-us'
import DownloadApp from '@/components/application/home-page/download-app'

export const metadata = {
    title: 'Contact Us | Analogue Shifts',
    description:
        'Looking to hire remote developers, designers, or marketers? Contact us at Analogue Shifts today to find qualified professionals for your team.',
    openGraph: {
        title: 'Contact Us | Analogue Shifts',
        description:
            'Looking to hire remote developers, designers, or marketers? Contact us at Analogue Shifts today to find qualified professionals for your team.',
        url: 'https://www.analogueshifts.com/contact',
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
        canonical: '/contact',
    },
}
export default function Page() {
    return (
        <section className="h-max w-full">
            <ContactForm />
            <ContactUs />
            <DownloadApp dark={true} />
        </section>
    )
}
