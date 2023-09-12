import { useState, useEffect } from 'react'
import gsap from 'gsap'

function Testimonials() {
    return (
        <div>
            {/* Testimonial section */}
            <div className="bg-white">
                <div className="container mx-auto py-20 px-3 md:px-9 xl:px-28">
                    <div className="flex justify-center">
                        <div className="w-[800px]">
                            <div className="text-center">
                                <div className="text-sm lg:text-2xl mb-4 italic">
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
                                        alt="..."
                                    />
                                    <div className="font-bold">
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
                </div>
            </div>
        </div>
    )
}

export default Testimonials
