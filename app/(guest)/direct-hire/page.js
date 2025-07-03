import Hero from './components/hero'
import Form from './components/form'
import HowItWorks from './components/how-it-works'

export default function Page() {
    return (
        <section className="h-max w-full large:px-112 tablet:px-6 px-20">
            <Hero />
            <div className="w-full flex lg:flex-row flex-col-reverse gap-[50px] pt-10 lg:pt-0 lg:gap-[98px] items-start">
                <Form />
                <HowItWorks />
            </div>
        </section>
    )
}
