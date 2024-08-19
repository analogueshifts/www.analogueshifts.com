import SectionMessage from './section-message'

import Image from 'next/image'
import RightArrow from '@/public/images/guest-layout/products/right-arrow.svg'

import Hero from '@/public/images/guest-layout/contact-us/hero.svg'
import HeroTwo from '@/public/images/guest-layout/contact-us/hero-two.svg'
import HeroThree from '@/public/images/guest-layout/contact-us/hero-three.svg'

export default function ContactUs() {
    return (
        <section className="w-full large:pl-112 large:pr-[185px] tablet:px-6 pl-20 pr-[153px] gap-20 large:gap-[118px] sticky z-20 h-max bg-white items-center overflow-hidden large:pb-[130px] large:pt-168 tablet:py-14 py-24 tablet:flex flex-col tablet:gap-10 grid grid-cols-2">
            <div className="col-span-1  tablet:w-full">
                <div className="w-full max-w-[450px] tablet:max-w-full large:max-w-[538px]">
                    <SectionMessage
                        title="Contact"
                        highlighted="Us"
                        titleStyle="mb-[20px] md:text-32 md:leading-[60px] text-[28px] leading-[45px]"
                        buttonChildren={
                            <>
                                Send us a message{' '}
                                <Image src={RightArrow} alt="" />
                            </>
                        }
                        buttonStyle="flex gap-1 items-center"
                        description="We’d love to hear from you. Leave us a message and we will get back to you as soon as possible"
                    />
                </div>
            </div>
            <div className="col-span-1 tablet:w-max tablet:max-w-full tablet:ml-auto relative flex justify-end">
                <Image src={Hero} alt="" />
                <Image
                    src={HeroTwo}
                    alt=""
                    className="absolute tablet:right-[50px] right-[-147px] tablet:bottom-[-50px] bottom-[-130px]"
                />
                <Image
                    src={HeroThree}
                    alt=""
                    className="absolute tablet:-left-10 left-[-230px] tablet:top-0 top-[-70px]"
                />
            </div>
        </section>
    )
}
