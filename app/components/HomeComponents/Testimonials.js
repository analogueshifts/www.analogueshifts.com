'use client'
import NewsLetterCard from '../NewsLetterCard'

function Testimonials() {
    return (
        <div>
            {/* Testimonial section */}
            <div className="bg-white">
                <div className="container mx-auto py-20 px-5 md:px-9 xl:px-20">
                    <div className="flex justify-center">
                        <div className="w-[800px]">
                            <div className="text-center">
                                <div className="text-sm text-tremor-brand-boulder950  lg:text-2xl mb-6 italic">
                                    "Your Success in Recruitment and Technical
                                    Support is our Priority. Welcome to Analogue
                                    Shifts, where we blend the expertise of
                                    recruitment with the precision of technical
                                    support to deliver exceptional results for
                                    your business. We understand that finding
                                    top talent and providing reliable technical
                                    assistance are crucial to driving your
                                    company’s growth."
                                </div>
                                <div className="flex items-center justify-center gap-5">
                                    <img
                                        className="object-cover rounded-full h-11 w-11"
                                        src="/images/team/ceo.jpeg"
                                        alt="An Image of CEO"
                                    />
                                    <div className="font-bold text-tremor-brand-boulder950">
                                        Kenneth Malaka
                                        <span className="bold text-as mx-1">
                                            /
                                        </span>
                                        CEO, Nigeria
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to action */}
                    <aside className="flex justify-center py-16">
                        <NewsLetterCard />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
