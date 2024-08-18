import ParallaxSection from './parallax'

export default function Organizations() {
    return (
        <section className="organizations w-full flex flex-col pt-10 h-lg:pt-20 pb-9 h-lg:pb-72 items-center gap-8">
            <p className=" text-tremor-background-darkYellow px-5 mobile:px-0 tablet:text-xs text-base font-medium text-center">
                TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
            </p>
            <div className="relative w-full overflow-hidden">
                <ParallaxSection />
            </div>
        </section>
    )
}
