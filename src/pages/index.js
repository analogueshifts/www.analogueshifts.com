import * as React from "react"
import AppLayout from '../components/Layouts/AppLayout'
import BuildTeam from './home/BuildTeam'
import Landing from './home/Landing'
import Services from './home/Services'
import Testimonials from './home/Testimonials'
import SeoController from "../lib/SeoController"

export const Head = () => <SeoController seoData={seoData} />
const seoData = {
    title: 'Tech Talent Recruitment and Acquisition',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    canonical: 'https://analogueshifts.com',
    ogImage: '/images/a4.jpg',
}

export default function Home() {


    return (
        <AppLayout>

            <Landing />

            <Services />

            <BuildTeam />

            <Testimonials />
        </AppLayout>
    )
}
