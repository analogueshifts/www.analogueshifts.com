import BuildTeam from './components/HomeComponents/BuildTeam'
import Landing from './components/HomeComponents/Landing'
import Services from './components/HomeComponents/Services'
import Testimonials from './components/HomeComponents/Testimonials'

export const metadata = {
    title: 'Tech Talent Recruitment and Acquisition | AnalogueShifts',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
}

export default function Page() {
    return (
        <>
            <Landing />
            <Services />
            <BuildTeam />
            <Testimonials />
        </>
    )
}
