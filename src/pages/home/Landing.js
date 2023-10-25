import { useEffect } from 'react'
import gsap from 'gsap'

function Landing() {
    useEffect(() => {
        gsap.from('#intro', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })
    }, [])
    return (
        <div>
            {/* Page Content */}
            <section className="md:py-9">
                <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                    <div
                        id="intro"
                        className="bg-white border-0 shadow rounded-lg overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            <div className="grid lg:col-span-7 py-16 px-3">
                                <div className="grid justify-center lg:justify-start gap-5 lg:w-[500px] p-4">
                                    <span className="text-3xl md:text-5xl font-bold">
                                        The Future of Talent Recruitment
                                    </span>
                                    <p>
                                        Your Success in Recruitment and
                                        Technical Support is our Priority.
                                        Welcome to Analogue Shifts, where we
                                        blend the expertise of recruitment with
                                        the precision of technical support to
                                        deliver exceptional results for your
                                        business. We understand that finding top
                                        talent and providing reliable technical
                                        assistance are crucial to driving your
                                        company’s growth.
                                    </p>
                                </div>
                            </div>
                            <div className="grid lg:col-span-5">
                                <img
                                    className="object-cover h-full w-full"
                                    src="/images/a4.jpg"
                                    alt="landing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
