import Image from 'next/image'
import Image1 from '@/public/images/contactHero.jpg'
import ContactForm from '@/components/application/contact-form'
import GuestLayout from '@/app/layouts/guest'

export const metadata = {
    title: 'Contact us | Analogue Shifts',
    description:
        'Looking to hire remote developers, designers, or marketers? Contact us at Analogue Shifts today to find qualified professionals for your team.',
    openGraph: {
        title: 'Contact us | Analogue Shifts',
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
        <GuestLayout>
            {/* <SeoController seoData={seoData} /> */}
            {/* Page Content */}
            <section className="">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    {/* <h1 className="font-bold text-2xl mb-9 animate-fade-in-head">
                        AnalogueShifts Contact
                    </h1> */}
                    <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-6 p-7 lg:p-14">
                                <div className="grid justify-center lg:justify-start gap-5 lg:col-span-6">
                                    <h1 className="text-3xl md:text-4xl font-bold lg:leading-[50px] tracking-normal">
                                        AnalogueShifts featured Contacts.
                                    </h1>
                                    <h2 className="">
                                        Thank you for your interest in Analogue
                                        Shifts! We are committed to providing
                                        exceptional talent recruitment and
                                        technical support services to help your
                                        business thrive. Whether you have
                                        inquiries, require assistance, or want
                                        to discuss potential collaboration, our
                                        team is here to assist you.
                                    </h2>
                                </div>
                            </div>
                            <div className="grid lg:col-span-6">
                                <Image
                                    className="object-cover w-full"
                                    src={Image1}
                                    alt="landing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page content */}
            <section className="">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-20">
                    {/* Contact form */}
                    <ContactForm />
                    {/* Contact cards */}
                    <div className="grid lg:grid-cols-4 gap-5 py-20 px-5">
                        <div
                            id="card"
                            className="bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded">
                            <div className="flex justify-start items-start pb-2">
                                <span className="bg-as text-white rounded p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex items-start text-lg font-bold">
                                Chat with us
                            </div>
                            <p className="flex items-start text-gray-500">
                                Chat live with one of our support specialists.
                            </p>
                        </div>
                        <div
                            id="card"
                            className="bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded">
                            <div className="flex justify-start items-start pb-2">
                                <span className="bg-as text-white rounded p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex items-start text-lg font-bold">
                                Ask the community
                            </div>
                            <p className="flex items-start text-gray-500">
                                Explore our community forums and communicate
                                with users.
                            </p>
                        </div>
                        <div
                            id="card"
                            className="bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded">
                            <div className="flex justify-start items-start pb-2">
                                <span className="bg-as text-white rounded p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex items-start text-lg font-bold">
                                Support center
                            </div>
                            <p className="flex items-start text-gray-500">
                                Browse FAQ's and support articles to find
                                solutions.
                            </p>
                        </div>
                        <div
                            id="card"
                            className="bg-white grid lg:col-span-1 p-5 gap-2 items-start h-full w-full shadow rounded">
                            <div className="flex justify-start items-start pb-2">
                                <span className="bg-as text-white rounded p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex items-start text-lg font-bold">
                                Call us
                            </div>
                            <p className="grid items-start text-gray-500">
                                Call us during normal business hours at
                                <a href="tel:+2348066708343">+2348066708343</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    )
}
