import Group from '@/public/images/login/group.png'
import Avatar from '@/public/images/login/avatar.png'
import Image from 'next/image'
import ApplicationLogo from '@/components/application/application-logo'
import Form from './components/form'

export const metadata = {
    title: 'KYC | AnalogueShifts',
}

export default function Page() {
    return (
        <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
            <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
                <div className="hidden md:flex"></div>
                <div className="w-max h-screen top-0 items-center justify-center fixed hidden md:flex">
                    <div className="lg:w-[450px] md:w-[350px] relative flex  justify-center items-center">
                        <Image src={Group} alt="" className="absolute" />
                        <Image src={Avatar} alt="" />
                    </div>
                </div>
                <div className="lg:w-[450px] md:w-[350px] flex flex-col">
                    <ApplicationLogo />
                    <Form />
                </div>
            </section>
        </main>
    )
}
