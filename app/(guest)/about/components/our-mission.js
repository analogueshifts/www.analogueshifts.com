'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OurMission() {
    const videoRef = useRef(null)
    const scrollTriggerRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: video,
            start: 'top 80%',
            onEnter: () => {
                video.play()
            },
            onLeave: () => {
                video.pause()
            },
            onEnterBack: () => {
                video.play()
            },
            onLeaveBack: () => {
                video.pause()
            },
        })

        return () => {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill()
            }
        }
    }, [])

    return (
        <section className="w-full large:pl-[140px] lg:pl-24 large:pr-[108px] px-6 lg:pr-16 flex flex-col-reverse lg:flex-row items-center gap-[50px] xl:gap-[107px]">
            <div className="xl:w-[501px] w-screen border-none max-h-[650px] lg:w-[calc(50%-50px)] h-max rounded-none  lg:h-[430px] large:h-[489px] lg:border overflow-hidden border-tremor-background-darkYellow bg-tremor-brand-tulip50 lg:rounded-2xl">
                <video
                    ref={videoRef}
                    src="/videos/about_us.mp4"
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-none lg:rounded-2xl"
                />
            </div>
            <div className="xl:w-[calc(100%-608px)] w-full lg:w-6/12  h-max flex flex-col gap-5">
                <h3
                    className={`large:text-32 large:max-w-[435px] lg:max-w-[380px] max-w-full  tablet:text-xl text-2xl tablet:leading-8 leading-10 font-semibold large:leading-64 text-black `}>
                    Our mission is to make hiring easy for &nbsp;
                    <span className="text-tremor-background-darkYellow">
                        everyone
                    </span>
                </h3>
                <p className="font-normal text-tremor-brand-boulder400 leading-10 large:leading-48 text-base large:text-xl">
                    Our overarching objective is to effectively address the
                    pressing issue of cost that confronts both Startups and
                    Large scale companies operating abroad, and we aim to
                    achieve this by meticulously curating and sourcing the most
                    exceptional talents tailored to the specific needs and
                    requirements of our esteemed clients.
                </p>
            </div>
        </section>
    )
}
